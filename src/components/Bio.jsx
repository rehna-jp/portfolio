import React from 'react'
import megan from '../assets/megan.png'
import SlideIn from './SlideIn'
import {Link} from 'react-scroll'

const Bio = () => {
  return (
    <div className='mt-40 flex  font-medium mx-15 '>
       <div className='flex flex-col gap-8 w-1/2'>
       <SlideIn delay={0.3}>
         <h3 className='text-xl text-[#7B61FF]'>Hi, I'm Precious Jeremy👋</h3>
         </SlideIn>
       <SlideIn delay={0.5}>  
         <h1 className='text-6xl font-bold'>Frontend <span className='text-[#7B61FF]'>Engineer</span> & <span className='text-[#7B61FF]'>Blockchain</span> Developer </h1>
         </SlideIn>
         <SlideIn delay={0.7}>
         <p className='text-[#bbb2b2] font-medium text-xl'>Building real-world impact with tech. Focused on creating 
           innovative solutions at the intersection of web development and blockchain technology.
         </p>
         </SlideIn>
         <SlideIn delay={0.9}>
         <div className='flex gap-4 '>
           <buttton className='bg-[#7B61FF]  px-4 py-2 rounded-xl hover:cursor-pointer'><Link to='works'>View Projects</Link> </buttton>
           <buttton className='border border-[#7B61FF] text-[#7B61FF] px-5 py-2 rounded-xl hover:cursor-pointer'><Link to='contact'>Contact Me</Link></buttton>
         </div>
         </SlideIn>
        
         </div>
         
         <div className='w-1/2 flex justify-end'>
          {/* <img className='rounded-full ' src={} alt="megan"/> */}
          </div>
       
    </div>
  )
}

export default Bio
