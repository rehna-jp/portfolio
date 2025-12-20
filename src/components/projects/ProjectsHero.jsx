import React from 'react';
import { Terminal, Code2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsHero = () => {
  return (
    <section className="relative overflow-hidden py-20 pt-32">
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
        {/* Back button */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#7B61FF] transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm">Back to Home</span>
        </Link>

        {/* Terminal header */}
        <div className="flex items-center gap-3 mb-8">
          <Terminal className="w-6 h-6 text-[#7B61FF]" />
          <span className="text-[#7B61FF] font-mono text-sm">~/all-projects</span>
          <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
        </div>

        {/* Title and description */}
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            All Projects
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            A comprehensive collection of my work in web development, blockchain, and decentralized applications. 
            Each project represents a unique challenge and learning experience.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#7B61FF]/10 border border-[#7B61FF]/30 flex items-center justify-center">
                <Code2 className="w-6 h-6 text-[#7B61FF]" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">12+</p>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/30 flex items-center justify-center">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">8+</p>
                <p className="text-sm text-gray-500">Live Demos</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-[#8b5cf6]/10 border border-[#8b5cf6]/30 flex items-center justify-center">
                <span className="text-xl">⭐</span>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Open</p>
                <p className="text-sm text-gray-500">Source</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero;