import { createContext, useContext, useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, signInWithPopup, setPersistence, browserLocalPersistence, onAuthStateChanged } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const AuthContext = createContext();

export function useAuth() {
    return useContext( AuthContext )
}

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState({ loggedIn: false});

    const auth = getAuth();
    const provider = new GoogleAuthProvider()

    const signIn = () => {

        return setPersistence( auth, browserLocalPersistence )
            .then ( () => {
                signInWithPopup( auth, provider )
                    .then( result => {
                        console.log('User logged in successfully')
                    })
            })
            .catch( err => console.log( err ) )
    }

    useEffect(() => {
        onAuthStateChanged( auth, user => {
            if ( user ) {

                const userRef = doc( db, 'users', user.uid )

                setDoc ( userRef, {email: user.email, name: user.displayName }, { merge: true } )

                setCurrentUser({
                    id: user.uid,
                    name: user.displayName,
                    image: user.photoURL,
                    email: user.email,
                    loggedIn: true
                })
            }
        })
    }, [ auth ])

    const context = {
        currentUser, signIn
    }

    return (
        <AuthContext.Provider value={ context }>
            { children }
        </AuthContext.Provider>
    )
}



