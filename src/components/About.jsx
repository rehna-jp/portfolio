import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col gap-4 my-12 bg-[#121212]  items-center px-52  py-25 w-full shadow-2xl mt-25'>
        <h1 className='text-4xl font-bold mt-5'>About Me</h1>
        <div className='border-gray border rounded-xl p-10 mb-2.5 gap-4 hover:shadow-[#7B61FF] hover:shadow-lg motion-safe:animate-pulse'>
            <p className='text-base/7 mb-7'>
                Hey! I’m Precious — a passionate technologist who loves building things that matter. My journey into tech started with a curious question: “How are digital products built?” That question pulled me into the world of web development, and eventually, blockchain technology.

               Now, I focus on creating applications that feel good to use and are powered by the magic of decentralization. I’m especially drawn to projects that solve real-world problems and make a lasting impact.
            </p>
            <p className='text-base/7 mb-7'>
              Lately, I’ve also been leveraging AI to boost my creativity and productivity from speeding up development to exploring new ideas faster. I believe that when you combine tech, creativity, and curiosity, you can build some really powerful stuff.

              Right now, I’m diving deeper into smart contract development and finding new ways to blend Web3 into everyday life. To me, tech isn’t just about writing code it’s about creating tools that inspire, connect, and do good in the world
            </p>
            <p className='text-base/7'>
            But beyond all the code, I’m someone who values balance. When I’m not coding, you’ll catch me spending time with friends and family, watching movies, playing video games, or enjoying a bit of sports.
            </p>
        </div>
      
    </div>
  )
}

export default About
