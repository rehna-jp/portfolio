import React from 'react';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoReact, IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss, SiSolidity, SiWagmi } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaHardHat, FaGithub } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { Terminal, Code2, Blocks, Wrench } from 'lucide-react';
import FadeIn from './FadeIn';

const Skills = () => {
  const frontendSkills = [
    { icon: <IoLogoHtml5 className="text-[#E34F26] text-5xl" />, name: 'HTML' },
    { icon: <IoLogoCss3 className="text-[#1572B6] text-5xl" />, name: 'CSS' },
    { icon: <IoLogoJavascript className="text-[#F7DF1E] text-5xl" />, name: 'JavaScript' },
    { icon: <IoLogoReact className="text-[#61DBFB] text-5xl" />, name: 'React' },
    { icon: <SiTailwindcss className="text-[#38BDF8] text-5xl" />, name: 'Tailwind' },
    { icon: <TbBrandNextjs className="text-white text-5xl" />, name: 'Next.js' },
  ];

  const blockchainSkills = [
    { icon: <SiSolidity className="text-[#363636] text-5xl" />, name: 'Solidity' },
    { icon: <SiWagmi className="text-[#7f7fff] text-5xl" />, name: 'Wagmi' },
    { icon: <FaHardHat className="text-[#f7df1e] text-5xl" />, name: 'Hardhat' },
  ];

  const otherSkills = [
    { icon: <IoLogoNodejs className="text-[#68A063] text-5xl" />, name: 'Node.js' },
    { icon: <GrMysql className="text-[#00758F] text-5xl" />, name: 'MySQL' },
    { icon: <FaGithub className="text-white text-5xl" />, name: 'Git' },
  ];

  return (
    <section id="skills" className="relative overflow-hidden py-20 ">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `linear-gradient(rgba(123, 97, 255, 0.3) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(123, 97, 255, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      <div className="container mx-auto relative z-10 px-6 max-w-6xl">
        {/* Header */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
            <Terminal className="w-5 h-5 text-[#7B61FF]" />
            <span className="text-[#7B61FF] font-mono text-sm">~/tech-stack</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            My Tech Stack
          </h2>
        </FadeIn>

        {/* Frontend Skills */}
        <div className="mb-16">
          <FadeIn delay={0.4}>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Code2 className="w-5 h-5 text-[#7B61FF]" />
              <h3 className="text-2xl font-semibold text-[#7B61FF]">Frontend Development</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {frontendSkills.map((skill, index) => (
              <FadeIn key={skill.name} delay={0.5 + index * 0.1}>
                <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:border-[#7B61FF]/50 hover:scale-105 hover:shadow-lg hover:shadow-[#7B61FF]/20 transition-all duration-300 group">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-white text-sm font-medium">{skill.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Blockchain Skills */}
        <div className="mb-16">
          <FadeIn delay={0.8}>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Blocks className="w-5 h-5 text-[#7B61FF]" />
              <h3 className="text-2xl font-semibold text-[#7B61FF]">Blockchain Development</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {blockchainSkills.map((skill, index) => (
              <FadeIn key={skill.name} delay={0.9 + index * 0.1}>
                <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:border-[#7B61FF]/50 hover:scale-105 hover:shadow-lg hover:shadow-[#7B61FF]/20 transition-all duration-300 group">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-white text-sm font-medium">{skill.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        {/* Other Skills */}
        <div>
          <FadeIn delay={1.1}>
            <div className="flex items-center gap-3 mb-8 justify-center">
              <Wrench className="w-5 h-5 text-[#7B61FF]" />
              <h3 className="text-2xl font-semibold text-[#7B61FF]">Other Tools</h3>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {otherSkills.map((skill, index) => (
              <FadeIn key={skill.name} delay={1.2 + index * 0.1}>
                <div className="bg-[#121212]/80 backdrop-blur-xl border border-white/10 p-6 rounded-xl text-center hover:border-[#7B61FF]/50 hover:scale-105 hover:shadow-lg hover:shadow-[#7B61FF]/20 transition-all duration-300 group">
                  <div className="flex justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {skill.icon}
                  </div>
                  <h4 className="text-white text-sm font-medium">{skill.name}</h4>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;