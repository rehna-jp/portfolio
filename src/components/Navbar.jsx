import React from 'react'


const Navbar = () => {
  return (
    <div>
      <header className=' bg-black/10 backdrop-blur-md  w-full h-18  top-0 flex fixed justify-between items-center px-10 text-white font-medium '>
        <h1 className='text-4xl text-[#7B61FF] font-bold'>PJ</h1>
        <ul className='flex gap-5 text-base' >
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Skills</li>
            <li>Contact</li>
        </ul>
      </header>
    </div>
  )
}

export default Navbar
