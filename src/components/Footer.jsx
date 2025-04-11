import React from 'react'
import { FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#121212] flex items-center p-5 pl-10 justify-between'>
        <div className='w-1/2'>
            <h3 className='text-[#7B61FF]' >Precious Jeremy</h3>
            <p className='text-[#bbb2b2] text-sm'>Frontend Developer & Blockchain Developer</p>
        </div>
        <div className=' w-1/2 flex justify-end'>
            <p className='text-[#bbb2b2] text-sm'>Designed & Built by Precious <span  className='text-[#7B61FF]'>©</span> 2025</p>
        </div>
      
    </div>
  )
}

export default Footer
