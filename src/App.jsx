import React from 'react'
import Home from './pages/Home'
import Navbar from '../src/components/Navbar'
import Footer from './components/Footer'
import Project from './pages/Project'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    
    
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Project/>}/>
      </Routes>
      
      <Footer/>
      </Router>
    </div>
    
  )
}

export default App
