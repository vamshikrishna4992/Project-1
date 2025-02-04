import { useState } from 'react'


import './App.css'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import Home from './Pages/Home.jsx'
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Services from './Pages/Services/Services.jsx';
import Project1 from './Pages/Projects/Project1.jsx';




function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/Projects' element={<Project1/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
