import React from 'react'
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className='mt-10 p-17 flex flex-col items-center gap-5 w-full' id='contact'>
        <h1 className='text-4xl font-bold'>Let's Connect</h1>
        <h3 >Open to work, collaborations, internships or just vibing in tech. Feel free to reach out</h3>
        <div className='flex gap-8 mt-4 '>

            <div className='border border-[#3d3b3b] p-7 rounded-xl hover:shadow-sm hover:shadow-[#7B61FF] transition-shadow duration-400 ease-in-out'>
                 <h2 className='mb-4 font-medium'>Send me a message</h2>
                 <form>
                   <label>Name</label><br />
                   <input
                     className='border border-[#3d3b3b] bg-[#121212] w-full max-w-[600px] px-4 py-2  rounded-md mb-3 mt-1 active:border-[#7B61FF] text-left placeholder:text-left'
                     type='text'
                     placeholder='Your name'
                   /><br />
    
                   <label>Email</label><br />
                   <input
                     className='border border-[#3d3b3b] bg-[#121212] w-full px-4 py-2  rounded-md mb-3 mt-1 text-left'
                     type='email'
                     placeholder='youremail@example.com'
                   /><br />
    
                   <label>Message</label><br />
                   <textarea
                     className='border border-[#3d3b3b] bg-[#121212] w-full px-4 py-2  rounded-md mb-4 mt-1 text-left resize-none'
                     placeholder='Your message here...'
                     rows="4" 
                   ></textarea><br />
    
                   <button className='bg-[#7B61FF] px-20 py-1 w-full rounded-md hover:cursor-pointer'>Send Message</button>
                 </form>
            </div>


            <div className='border border-[#3d3b3b] rounded-xl p-7 hover:shadow-sm hover:shadow-[#7B61FF] transition-shadow duration-400 ease-in-out'>
                <h2 className='font-medium'>Connect with me</h2>
                <div className='grid grid-cols-2 gap-6 mt-6'>
                    <a href='https://github.com/rehna-jp' target="_blank" rel="noopener noreferrer">
                      <div className='flex items-center justify-start bg-[#121212] rounded-md pt-3 pl-4 pb-3 pr-4 hover:cursor-pointer hover:bg-[#7b61ff2c]'>
                         <FiGithub className='text-[#7B61FF] text-md mr-3'/>
                         <p >Github</p>
                      </div>
                    </a>
                    <a href='https://www.linkedin.com/in/precious-jeremy-b195292ab' target="_blank" rel="noopener noreferrer">
                       <div className='flex items-center justify-start bg-[#121212] rounded-md pt-3 pl-4 pb-3 pr-4 hover:cursor-pointer hover:bg-[#7b61ff2c]'>
                         <SlSocialLinkedin className='text-[#7B61FF] text-md mr-3'/>
                         <p>LinkedIn</p>
                       </div>
                    </a>

                    <a href='https://x.com/JeremiePre92479?t=Kz__gPgOVny0fk_zGM8W1A&s=09' target="_blank" rel="noopener noreferrer">
                       <div className='flex items-center justify-start bg-[#121212] rounded-md pt-3 pl-4 pb-3 pr-4 hover:cursor-pointer hover:bg-[#7b61ff2c]'>
                         <BsTwitterX className='text-[#7B61FF] text-md mr-3'/>
                         <p>Twitter(X)</p>
                       </div>
                    </a>
                    <a href='mailto:jeremyrehna05@gmail.com' target="_blank" rel="noopener noreferrer">
                       <div className='flex items-center justify-start bg-[#121212] rounded-md pt-3 pl-4 pb-3 pr-4 hover:cursor-pointer hover:bg-[#7b61ff2c]'>
                         <MdOutlineEmail className='text-[#7B61FF] text-xl mr-3'/>
                         <p>Email</p>
                       </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
