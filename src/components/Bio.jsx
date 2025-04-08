import React from 'react'
import megan from '../assets/megan.png'

const Bio = () => {
  return (
    <div className='mt-25 flex  font-medium mx-15 '>
       <div className='flex flex-col gap-4 w-1/2'>
         <h3 className='text-xl text-[#7B61FF]'>Hi, I'm Precious 👋</h3>
         <h1 className='text-6xl font-bold'>Creative <span className='text-[#7B61FF]'>Technologist</span> & <span className='text-[#7B61FF]'>Blockchain</span> Developer </h1>
         <p>Building real-world impact with tech. Focused on creating 
           innovative solutions at the intersection of web development and blockchain technology.
         </p>
         <div className='flex gap-4'>
           <buttton className='bg-[#7B61FF] text-white px-5 py-2 rounded-xl'>View Projects </buttton>
           <buttton className='border border-[#7B61FF] text-[#7B61FF] px-5 py-2 rounded-xl'>Contact Me</buttton>
         </div>
       </div>
       <div className='w-1/2 flex justify-end'>
          {/* <img className='rounded-full ' src={} alt="megan"/> */}
       </div>
    </div>
  )
}

export default Bio
