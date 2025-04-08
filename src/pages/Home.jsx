import React from 'react'
import Navbar from '../components/Navbar'
import Bio from '../components/Bio'
import About from '../components/About'
import Skills from '../components/Skills'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Bio/>
      <About/>
      <Skills/>
    </div>
  )
}

export default Home
