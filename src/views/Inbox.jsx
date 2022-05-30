import React, { useRef, useState } from 'react';
import { db, firebase } from '../firebase/firebaseConfig';
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { AuthContext, useAuth } from '../context/AuthProvider'

const querySnapshot = await getDocs(collection(db, 'messages'));
querySnapshot.forEach( doc => {
  console.log(doc.id),
  console.log(doc.data())
})

export const Inbox = () => {
  const [ messageList, setMessageList ] = useState([]);
  const [ orderedMessages, setOrderedMessages ] = useState([]);
  const messageBody = useRef('');

  const { currentUser } = useAuth()

  const retreivePosts = async () => 
  {
    const querySnapshot = await getDocs(collection( db, 'messages'))
    let filteredMessages = []
    querySnapshot.forEach( doc => {
      filteredMessages.push( {...doc.data(), id: doc.id})
      setMessageList(filteredMessages);

      let sortedMessages = filteredMessages.sort( (a, b) => b.dateCreated - a.dateCreated )
      setOrderedMessages(sortedMessages);
    })
  }



  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Hello, { currentUser.name} </h1>
      </div>
    </div>
  )
};

