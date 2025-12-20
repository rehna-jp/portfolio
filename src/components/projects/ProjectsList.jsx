import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ArrowLeft, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsList = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  // Mock projects data - replace with your real projects
  const projects = [
    {
      id: 1,
      title: "DeFi Dashboard",
      description: "A comprehensive Web3 dashboard for tracking DeFi portfolios across multiple chains with real-time analytics and transaction history.",
      tags: ["React", "Wagmi", "Tailwind", "Web3"],
      category: "Web3",
      image: "https://via.placeholder.com/600x400/7B61FF/ffffff?text=DeFi+Dashboard",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 2,
      title: "NFT Marketplace",
      description: "Modern NFT marketplace built with Next.js featuring minting, trading, and auction functionality with IPFS storage.",
      tags: ["Next.js", "Solidity", "Hardhat", "IPFS"],
      category: "Web3",
      image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=NFT+Marketplace",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 3,
      title: "DAO Governance Platform",
      description: "Decentralized autonomous organization platform with proposal creation, voting mechanisms, and treasury management.",
      tags: ["React", "Solidity", "Web3", "Ethers.js"],
      category: "Web3",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=DAO+Platform",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: true
    },
    {
      id: 4,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce platform with payment integration, inventory management, and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      category: "Frontend",
      image: "https://via.placeholder.com/600x400/7B61FF/ffffff?text=E-Commerce",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 5,
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, team workspaces, and project tracking.",
      tags: ["React", "Firebase", "Tailwind"],
      category: "Frontend",
      image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=Task+Manager",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Modern portfolio website with smooth animations, dark mode, and responsive design.",
      tags: ["React", "Tailwind", "Framer Motion"],
      category: "Frontend",
      image: "https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Portfolio",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 7,
      title: "Token Staking Platform",
      description: "DeFi staking platform allowing users to stake tokens and earn rewards with flexible APY rates.",
      tags: ["Solidity", "React", "Hardhat", "Web3"],
      category: "Web3",
      image: "https://via.placeholder.com/600x400/7B61FF/ffffff?text=Staking+Platform",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    },
    {
      id: 8,
      title: "Weather Dashboard",
      description: "Real-time weather application with location search, 7-day forecast, and weather alerts.",
      tags: ["React", "API", "Chart.js"],
      category: "Frontend",
      image: "https://via.placeholder.com/600x400/6366f1/ffffff?text=Weather+App",
      github: "https://github.com",
      demo: "https://demo.com",
      featured: false
    }
  ];

  const categories = ['All', 'Web3', 'Frontend'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative overflow-hidden py-20 pt-32 min-h-screen">
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

        {/* Simple header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Terminal className="w-6 h-6 text-[#7B61FF]" />
            <span className="text-[#7B61FF] font-mono text-sm">~/all-projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-[#7B61FF]/50 to-transparent max-w-xs" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            All Projects
          </h1>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-4 mb-12 flex-wrap">
          <div className="flex items-center gap-2 text-gray-400">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filter:</span>
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#7B61FF] text-white shadow-lg shadow-[#7B61FF]/30'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
          <span className="text-sm text-gray-500">
            ({filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'})
          </span>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-[#121212]/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden hover:border-[#7B61FF]/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#7B61FF]/20"
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-[#7B61FF]/20 to-transparent">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#7B61FF] text-white text-xs font-medium rounded-full">
                    Featured
                  </div>
                )}
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-60" />
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
                      className="px-2 py-1 text-xs rounded-md bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20"
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
                    <span className="group-hover/link:underline">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsList;