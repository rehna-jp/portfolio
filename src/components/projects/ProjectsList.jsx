import React, { useState } from 'react';
import { ExternalLink, Github, Filter, ArrowLeft, Terminal } from 'lucide-react';
import { Link } from 'react-router-dom';

// Static fallback screenshots — used ONLY if the live thum.io screenshot fails
// to load (project goes offline, API hiccup, etc). Take one screenshot per
// project, drop it in src/assets with these filenames (or update the paths).
import flarerouteFallback from '../../assets/flareroute.png';
import commitFallback from '../../assets/commit.png';
import sigilFallback from '../../assets/sigil.png';
import pulseaidFallback from '../../assets/pulseaid.png';
import gmsFallback from '../../assets/gms.png';

// Generates a live screenshot of a URL via thum.io (no API key needed).
// Swap this helper if you later move to Microlink/urlbox — every project
// image just calls this function, so it's a one-place change.
const getScreenshot = (url) => `https://image.thum.io/get/width/800/crop/600/${url}`;

export const projects = [
  {
    id: 1,
    title: "FlareRoute",
    description: "Non-custodial yield router for FXRP on Flare Network — compares TVL, share prices, and yield across venues in real time using FTSOv2 oracles, then routes deposits in a single transaction.",
    tags: ["React", "Solidity", "Wagmi", "DeFi"],
    category: "Web3",
    demo: "https://flare-router.vercel.app/",
    get image() { return getScreenshot(this.demo); },
    fallbackImage: flarerouteFallback,
    github: "https://github.com/rehna-jp/FlareRouter",
    featured: true
  },
  {
    id: 2,
    title: "Commit",
    description: "Habit-accountability protocol on Solana — stake USDC on daily habits, get verified by AI, and earn from the pool of everyone who misses a day. Disputes and photo-reuse are handled entirely on-chain.",
    tags: ["Solana", "Anchor", "Next.js", "AI"],
    category: "Web3",
    demo: "https://commit-gamma-two.vercel.app/",
    get image() { return getScreenshot(this.demo); },
    fallbackImage: commitFallback,
    github: "https://github.com/rehna-jp/commit",
    featured: true
  },
  {
    id: 3,
    title: "Sigil",
    description: "Persistent intent engine on Arbitrum — turns a plain-language financial goal into on-chain watchers that autonomously monitor conditions and re-trigger execution, closing the loop without a centralized bot.",
    tags: ["Solidity", "Foundry", "AI", "Arbitrum"],
    category: "Web3",
    demo: "https://sigil-tau.vercel.app/",
    get image() { return getScreenshot(this.demo); },
    fallbackImage: sigilFallback,
    github: "https://github.com/rehna-jp/Sigil",
    featured: true
  },
  {
    id: 4,
    title: "PulseAid",
    description: "Decentralized charitable giving platform using Zero-Knowledge Proofs — donations sit in escrow and only release once an institution submits cryptographic proof of impact, with automatic refunds on failure.",
    tags: ["Next.js", "Solidity", "ZK Proofs", "DAO"],
    category: "Web3",
    demo: "https://pulse-aid-five.vercel.app/",
    get image() { return getScreenshot(this.demo); },
    fallbackImage: pulseaidFallback,
    github: "https://github.com/rehna-jp/PulseAid",
    featured: false
  },
  {
    id: 5,
    title: "GMS — Government Project Monitoring System",
    description: "GPS-verified infrastructure monitoring platform for Ghana — contractors submit geo-tagged photos, officials verify authenticity via Haversine distance checks, and citizens track spending on a public map.",
    tags: ["Next.js", "TypeScript", "Supabase", "PWA"],
    category: "Frontend",
    demo: "https://gms-tau.vercel.app/",
    get image() { return getScreenshot(this.demo); },
    fallbackImage: gmsFallback,
    github: "https://github.com/rehna-jp/GMS",
    featured: false
  }
];

const ProjectsList = () => {
  const [activeFilter, setActiveFilter] = useState('All');

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
                  loading="lazy"
                  onError={(e) => {
                    // Live screenshot failed to load — fall back to the static image.
                    // Guard against an infinite loop if the fallback itself 404s.
                    if (e.target.src !== project.fallbackImage) {
                      e.target.src = project.fallbackImage;
                    }
                  }}
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