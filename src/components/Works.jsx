import React from 'react'
import {Link} from 'react-router-dom'

const Works = () => {
  return (
    <div className='bg-[#121212] mt-20 p-20 flex flex-col items-center gap-5' id='works'>
        <h1 className='text-4xl font-bold '>Projects</h1>
        <div className='flex'>
            <div className='border-[#3d3b3b] w-8 h-10 '>

            </div>
            <div className='border-[#3d3b3b] w-8 h-10'>

            </div>
            <div className='border-[#3d3b3b] w-8 h-10'>

            </div>
        </div>
        <button className='px-4 py-2 rounded-xl bg-black border border-[#7B61FF] hover:cursor-pointer hover:bg-[#7b61ff2c]'><Link to='projects-page'>View more Projects</Link></button>
    </div>
  )
} 

export default Works
