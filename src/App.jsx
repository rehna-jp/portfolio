import React from 'react'
import Home from './pages/Home'
import Footer from './components/Footer'
import Project from './pages/Project'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    
    
    <div >
      <Router>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects-page' element={<Project/>}/>
      </Routes>
      
      <Footer/>
      </Router>
    </div>
    
  )
}

export default App
