import { collectionGroup, getDoc, getDocs, query } from "firebase/firestore";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "./AuthProvider";

export const DataContext = createContext()

export function useData() {
    return useContext( DataContext )
}

export const DataProvider = ( { children } ) => {

    const [messages, setMessages] = useState( [] )
    const { currentUser } = useAuth(); 

    const getMessages = useCallback(
      async() => {

        const q = query( 
            collectionGroup( db, 'messages' )
        )
        const querySnapshot = await getDocs( q )
        let retrievedMessages = []
            querySnapshot.forEach( async (message) => {
                const userRef = await getDoc( message.ref.parent.parent )

                retrievedMessages.push({
                    id: message.id,
                    ...message.data(), 
                    user: {
                        id: userRef.id,
                        ...userRef.data()
                    }
                }) 

                setMessages( messages.concat( retrievedMessages ))

            } )
            return querySnapshot

      },
      [ db ],
    )
    

    useEffect(() => {
        getMessages()
    }, [ getMessages ])
    
    const context = {
        messages
    }

    return (
        <DataContext.Provider value={ context }>
            {children}
        </DataContext.Provider>
    )
}