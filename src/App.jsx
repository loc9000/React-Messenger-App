import React, { useEffect } from 'react'
import { Navbar } from './components/Navbar';
import { Inbox } from './views/Inbox';
import { Trash } from './views/Trash';
import { Routes, Route } from 'react-router-dom';
import { Sent } from './views/Sent';
import { SignIn } from './views/SignIn';
import { Profile } from './views/Profile';

export const App = () => {


// === THIS IS AN API CALL FROM A FLASK SERVER TO RETRIEVE A LIST OF MESSAGES ===
//   const [messageList, setMessageList] = useState([]);
//   const retrieveMessages = async() => {
//     fetch('api location')
//       .then(res => res.json())
//       .then(data => console.log(data))
//   } 
//   useEffect(() =>{
//     retrieveMessages()
//   }, [])


  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='container mt-4'>
      <Routes>
          <Route exact path='/' element={ < Inbox /> }  />
          <Route exact path='/users/profile' element={ < Profile /> }  />
          <Route exact path='/sent' element={ < Sent /> }  />
          <Route exact path='/trash' element={< Trash /> }  />
          <Route exact path='/users/signin' element={< SignIn /> }  />
      </Routes>
    </main>
    <footer>

    </footer>
    </>
  )
}
