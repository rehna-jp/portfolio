import StarryBackground from '../components/StarryBackground';
import Navbar from '../components/Navbar'
import Bio from '../components/Bio';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Contact from '../components/Contact';


const Home = () => {
  return (
    
    <div className="relative min-h-screen bg-black text-white">
      {/* Starry Background - Fixed behind everything */}
      <StarryBackground />
      
      {/* All your content */}
      <div className="relative z-10">
        <Navbar/>
        <Bio />
        <About />
        <Skills />
        <Experience />
        <Works />
        <Contact />
        
      </div>
    </div>
   
  )
}

export default Home
