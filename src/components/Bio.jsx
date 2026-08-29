import React from 'react';
import { Github, Linkedin, Twitter, ArrowRight, Sparkles } from 'lucide-react';
import precious from '../assets/precious.png';
import SlideIn from './SlideIn';
import { Link } from 'react-scroll';

const Bio = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 px-6">
      {/* Animated background blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#7B61FF]/20 rounded-full filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute top-60 -left-20 w-80 h-80 bg-[#6366f1]/15 rounded-full filter blur-3xl opacity-25" style={{ animation: 'pulse 4s ease-in-out infinite' }} />
      <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[#7B61FF]/10 rounded-full filter blur-3xl opacity-20" style={{ animation: 'pulse 6s ease-in-out infinite' }} />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-5">
          <SlideIn delay={0.3}>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#7B61FF]" />
              <h3 className="text-lg text-[#7B61FF] font-medium">Hi, I'm Precious Jeremy 👋</h3>
            </div>
          </SlideIn>
          
          <SlideIn delay={0.5}>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Frontend <span className="text-[#7B61FF]">Engineer</span> & <span className="text-[#7B61FF]">Blockchain</span> Developer
            </h1>
          </SlideIn>
          
          <SlideIn delay={0.7}>
            <p className="text-[#bbb2b2] text-base md:text-lg leading-relaxed max-w-2xl">
              Building real-world impact with tech. Focused on creating innovative solutions 
              at the intersection of web development and blockchain technology.
            </p>
          </SlideIn>
          
          <SlideIn delay={0.9}>
            <div className="flex flex-wrap gap-3 items-center pt-2">
              <Link 
                to="works" 
                smooth={true}
                duration={500}
                offset={-80}
                className="bg-[#7B61FF] hover:bg-[#6b51ef] px-3 py-2.5 rounded-xl font-medium cursor-pointer transition-all duration-300 flex items-center gap-2 group hover:shadow-lg hover:shadow-[#7B61FF]/25"
              >
                View Projects 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link 
                to="contact" 
                smooth={true}
                duration={500}
                offset={-80}
                className="border-2 border-[#7B61FF] text-[#7B61FF] hover:bg-[#7B61FF]/10 px-5 py-2.5 rounded-xl font-medium cursor-pointer transition-all duration-300"
              >
                Contact Me
              </Link>
            </div>
          </SlideIn>

          {/* Social Links */}
          <SlideIn delay={1.1}>
            <div className="flex gap-3 pt-2">
              <a 
                href="https://github.com/rehna-jp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#7B61FF]/20 border border-white/10 hover:border-[#7B61FF]/50 flex items-center justify-center transition-all duration-300 group"
              >
                <Github className="w-4 h-4 text-gray-400 group-hover:text-[#7B61FF]" />
              </a>
              <a 
                href="https://www.linkedin.com/in/precious-jeremy-o-b195292ab" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#7B61FF]/20 border border-white/10 hover:border-[#7B61FF]/50 flex items-center justify-center transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-gray-400 group-hover:text-[#7B61FF]" />
              </a>
              <a 
                href="https://x.com/chiinaza0x5" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/5 hover:bg-[#7B61FF]/20 border border-white/10 hover:border-[#7B61FF]/50 flex items-center justify-center transition-all duration-300 group"
              >
                <Twitter className="w-4 h-4 text-gray-400 group-hover:text-[#7B61FF]" />
              </a>
            </div>
          </SlideIn>
        </div>
        
        {/* Right Content - Image/Avatar */}
        <SlideIn delay={1.0}>
          <div className="hidden lg:flex justify-center lg:justify-end">
            <div className="relative" style={{ width: '440px', height: '440px' }}>
              {/* Animated gradient rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#7B61FF]/30 to-[#6366f1]/30 blur-2xl animate-pulse" />
              <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#7B61FF]/20 to-transparent" style={{ animation: 'pulse 3s ease-in-out infinite' }} />
              
              {/* Avatar Container */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="overflow-hidden rounded-full border-4 border-[#7B61FF]/30 shadow-2xl shadow-[#7B61FF]/20 relative group" style={{ width: '360px', height: '360px' }}>
                  <img 
                    src={precious} 
                    alt="Precious Jeremy" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7B61FF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              
              {/* Orbiting decorative elements */}
              <div className="absolute inset-0" style={{ animation: 'spin 20s linear infinite' }}>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#7B61FF] shadow-lg shadow-[#7B61FF]/50" />
              </div>
              <div className="absolute inset-0" style={{ animation: 'spin 15s linear infinite reverse' }}>
                <div className="absolute bottom-6 right-6 w-2.5 h-2.5 rounded-full bg-[#6366f1] shadow-lg shadow-[#6366f1]/50" />
              </div>
              <div className="absolute inset-0" style={{ animation: 'spin 25s linear infinite' }}>
                <div className="absolute top-1/4 right-0 w-2 h-2 rounded-full bg-white/60" />
              </div>
            </div>
          </div>
        </SlideIn>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center opacity-60 hover:opacity-100 transition-opacity">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-[#7B61FF]/50 to-[#7B61FF]/20" />
        <span className="mt-2 text-sm text-white/40">Scroll to explore</span>
      </div>

      <style>{`
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default Bio;