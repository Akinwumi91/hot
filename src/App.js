import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import Home from './Home'
import { Routes, Route } from 'react-router-dom'
import Signin from './Signin'

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes >
       <Route path='/' element={<Home />} />
       <Route path='/signin' element={<Signin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
