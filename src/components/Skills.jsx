import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiSolidity } from "react-icons/si";
import { SiWagmi } from "react-icons/si";
import { FaHardHat } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { GrMysql } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";

const Skills = () => {
  return (
    <div className='flex flex-col gap-4 items-center mt-30'>
      <h1 className='text-4xl  font-bold'>My Stack</h1>
      <h3 className='text-2xl text-[#7B61FF]'>Frontend</h3>
      <div className='flex gap-5'>
        <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
            <IoLogoHtml5 className="text-[#E34F26] text-5xl mx-auto" />
            <h4 className='text-white text-sm mt-2'>HTML</h4>
        </div>
        <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
            <IoLogoCss3 className="text-[#1572B6] text-5xl mx-auto"/>
            <h4 className='text-white text-sm mt-2'>CSS</h4>
        </div>
        <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
            <IoLogoJavascript className="text-[#F7DF1E] text-5xl mx-auto"/>
            <h4 className='text-white text-sm mt-2'>JavaScript</h4>
        </div>
        <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
            <IoLogoReact className="text-[#61DBFB] text-5xl mx-auto"/>
            <h4 className='text-white text-sm mt-2'>React</h4>
        </div>
        <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
            <SiTailwindcss className="text-[#38BDF8] text-5xl mx-auto"/>
            <h4 className='text-white text-sm mt-2'>Tailwind</h4>
        </div>
        <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
            <TbBrandNextjs className="text-white text-5xl mx-auto"/>
            <h4 className='text-white text-sm mt-2'>Next.js</h4>
        </div>
      </div>
      <h3 className='text-2xl text-[#7B61FF]'>Blockchain</h3>
      <div className='flex gap-5'>
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
        <SiSolidity className="text-[#363636] text-5xl mx-auto" />
        <h4 className='text-white text-sm mt-2'>Solidity</h4>
      </div>
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
        <SiWagmi className="text-[#7f7fff] text-5xl mx-auto"/>
        <h4 className='text-white text-sm mt-2'>Wagmi</h4>
      </div>
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
        <FaHardHat className="text-[#f7df1e] text-5xl mx-auto"/>
        <h4 className='text-white text-sm mt-2'>Hardhat</h4>
      </div>
      </div>
      <h3 className='text-2xl text-[#7B61FF]'>Other Skills</h3>
      <div className='flex gap-5'>
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
        <IoLogoNodejs className="text-[#68A063] text-5xl mx-auto"/>
        <h4 className='text-white text-sm mt-2'>Node.js</h4>
      </div>
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
        <GrMysql className="text-[#00758F] text-5xl mx-auto"/>
        <h4>MySQL</h4>
      </div>
      <div className="bg-[#121212] p-8 rounded-xl text-center shadow-md hover:scale-105 transition-transform duration-300 w-32">
        <FaGithub className="text-white text-5xl mx-auto"/>
        <h4 className='text-white text-sm mt-2'>Git</h4>
      </div>
      </div>
    </div>
  )
}

export default Skills
