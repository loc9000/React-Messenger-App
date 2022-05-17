import React from 'react'
import { Navbar } from './components/Navbar';
import { Home } from './views/home';
import { Profile } from './views/Profile';
import { Routes, Route } from 'react-router-dom';
import { Explore } from './views/Explore';

export const App = () => {
  return (
    <>
    <header>
      <Navbar />
    </header>
    <main className='container mt-4'>
      <Routes>
          <Route exact path='/' element={ <Home /> }  />
          <Route exact path='/explore' element={ <Explore /> }  />
          <Route exact path='/users/profile' element={<Profile /> }  />
      </Routes>
    </main>
    <footer>

    </footer>
    </>
  )
}
