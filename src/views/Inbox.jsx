import React, { useEffect, useRef, useState } from 'react';
import { db, firebase } from '../firebase/firebaseConfig';
import { collection, getDocs, orderBy, query, serverTimestamp } from "firebase/firestore";
import { AuthContext, useAuth } from '../context/AuthProvider'
import { useData } from '../context/DataProvider';
import moment from 'moment'


export const Inbox = () => {
  const [ messageList, setMessageList ] = useState([]);
  const [ orderedMessages, setOrderedMessages ] = useState([]);
  const messageBody = useRef('');

  const { currentUser } = useAuth()
  const{ messages } = useData()

  const handleSubmit = ( e ) => {
    e.preventDefault();

    let dataToSend = {
      body: messageBody.current.value,
      dateCreated: serverTimestamp()
    };
    messages( dataToSend )

    messageBody.current.value = ''
  }

  useEffect( () => {
    // retrieveMessages();
    setMessageList(messages)
  }, [ messages ] )

  return (
    <div className="row">
      <div className="col-md-12">
        <h1>Hello, {currentUser.name} </h1>
        <hr />
        <ul className="list-group">
          {messageList.length !== 0 ? (
            messageList.map((messages) => (
              <li key={messages.id} className="list-group-item">
                <p>{messages.body}</p>
                <div>
                  <small>
                    &mdash; {`${messages.user.name}`}
                    <span className="float-right">
                      { moment(messages.dateCreated.toDate()).fromNow()}
                    </span>
                  </small>
                </div>
              </li>
            ))
          ) : (
            <div className="spinner-border text-info mx-auto" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
};

