import React from 'react';
import { Code, Rocket, Heart, Terminal, Cpu, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 ">
      {/* Grid pattern background */}
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
        {/* Section header */}
        <FadeIn delay={0.2}>
          <div className="flex items-center gap-3 mb-12 justify-center lg:justify-start">
            <Terminal className="w-5 h-5 text-[#7B61FF]" />
            <span className="text-[#7B61FF] font-mono text-sm">~/about-me</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
        </FadeIn>
        
        {/* Main Content - Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Left Column - Main Story */}
          <FadeIn delay={0.4}>
            <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-8 hover:border-[#7B61FF]/30 transition-all duration-500 h-full">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-gray-500 font-mono">story.jsx</span>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hey! I'm Precious — a passionate technologist who loves building things that matter. 
                  My journey into tech started with a curious question: <span className="text-[#7B61FF]">"How are digital products built?"</span> That question pulled me into the world of web development, and eventually, blockchain technology.
                </p>
                
                <p>
                  Now, I focus on creating applications that feel good to use and are powered by the magic 
                  of decentralization. I'm especially drawn to projects that solve real-world problems and 
                  make a lasting impact.
                </p>
                
                <p>
                  Lately, I've also been leveraging AI to boost my creativity and productivity — from speeding 
                  up development to exploring new ideas faster. I believe that when you combine tech, creativity, 
                  and curiosity, you can build some really powerful stuff.
                </p>
              </div>
            </div>
          </FadeIn>
          
          {/* Right Column - More Info */}
          <FadeIn delay={0.5}>
            <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-8 hover:border-[#7B61FF]/30 transition-all duration-500 h-full">
              {/* Terminal header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-4 text-xs text-gray-500 font-mono">passion.jsx</span>
              </div>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Right now, I'm diving deeper into <span className="text-[#7B61FF]">smart contract development</span> and finding new ways to blend 
                  Web3 into everyday life. To me, tech isn't just about writing code — it's about creating 
                  tools that inspire, connect, and do good in the world.
                </p>
                
                <p>
                  But beyond all the code, I'm someone who values balance. When I'm not coding, you'll catch 
                  me spending time with friends and family, watching movies, playing video games, or enjoying 
                  a bit of sports.
                </p>

                {/* Stats */}
                <div className="pt-4 space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-[#7B61FF]" />
                        Passion Level
                      </span>
                      <span className="text-[#7B61FF] font-mono">100%</span>
                    </div>
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-[#7B61FF] to-[#6366f1] rounded-full" />
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-green-400" />
                        Learning Mode
                      </span>
                      <span className="text-green-400 font-mono">ACTIVE</span>
                    </div>
                    <div className="h-2 bg-black/50 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-gradient-to-r from-green-500 to-green-400 rounded-full animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        
        {/* Bottom row - 3 interest cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FadeIn delay={0.6}>
            <div className="backdrop-blur-xl bg-gradient-to-br from-[#7B61FF]/20 to-transparent border border-[#7B61FF]/30 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-500 group text-center">
              <div className="w-14 h-14 rounded-xl bg-[#7B61FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#7B61FF]/30 transition-colors mx-auto">
                <Code className="w-7 h-7 text-[#7B61FF]" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Learning</h4>
              <p className="text-sm text-gray-400">
                Exploring new technologies, frameworks and paradigms daily
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.7}>
            <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-6 hover:border-[#6366f1]/30 hover:scale-[1.03] transition-all duration-500 group text-center">
              <div className="w-14 h-14 rounded-xl bg-[#6366f1]/20 flex items-center justify-center mb-4 group-hover:bg-[#6366f1]/30 transition-colors mx-auto">
                <Rocket className="w-7 h-7 text-[#6366f1]" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Building</h4>
              <p className="text-sm text-gray-400">
                Creating side projects and contributing to open source
              </p>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.8}>
            <div className="backdrop-blur-xl bg-[#121212]/80 border border-white/10 rounded-2xl p-6 hover:border-[#7B61FF]/30 hover:scale-[1.03] transition-all duration-500 group text-center">
              <div className="w-14 h-14 rounded-xl bg-[#7B61FF]/20 flex items-center justify-center mb-4 group-hover:bg-[#7B61FF]/30 transition-colors mx-auto">
                <Heart className="w-7 h-7 text-[#7B61FF]" />
              </div>
              <h4 className="font-semibold text-lg mb-2">Life Balance</h4>
              <p className="text-sm text-gray-400">
                Family, movies, gaming and sports when not coding
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default About;