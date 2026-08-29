import React from 'react';
import { Link } from 'react-router-dom';
import { Terminal, ExternalLink, Github, ArrowRight } from 'lucide-react';
import FadeIn from './FadeIn';
import { projects } from './projects/ProjectsList';// adjust path to match your actual structure

const Works = () => {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="works" className="relative overflow-hidden py-20 ">
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
            <span className="text-[#7B61FF] font-mono text-sm">~/projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
          </div>
        </FadeIn>

        {/* Title */}
        <FadeIn delay={0.3}>
          <h2 className="text-4xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            A showcase of my recent work in Web2 and blockchain development
          </p>
        </FadeIn>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProjects.map((project, index) => (
            <FadeIn key={project.id} delay={0.4 + index * 0.1}>
              <div className="group bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#7B61FF]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7B61FF]/20">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48 bg-gradient-to-br from-[#7B61FF]/20 to-transparent">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#7B61FF] to-[#6366f1] opacity-20 group-hover:opacity-30 transition-opacity" />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#7B61FF] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs rounded-full bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-white/10">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group/link"
                    >
                      <Github className="w-4 h-4" />
                      <span className="group-hover/link:underline">Code</span>
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#7B61FF] transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="group-hover/link:underline">Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View More Button */}
        <FadeIn delay={0.8}>
          <div className="flex justify-center">
            <Link 
              to="/projects-page"
              className="group px-8 py-3 rounded-xl bg-gradient-to-r from-[#7B61FF] to-[#6366f1] hover:from-[#6b51ef] hover:to-[#5356e1] font-medium transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-[#7B61FF]/30"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </FadeIn>

        {/* Additional Info */}
        <FadeIn delay={0.9}>
          <div className="mt-16 text-center">
            <p className="text-gray-500 text-sm">
              More projects available on my{' '}
              <a 
                href="https://github.com/rehna-jp" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#7B61FF] hover:underline"
              >
                GitHub profile
              </a>
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Works;