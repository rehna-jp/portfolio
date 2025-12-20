import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    {id: 'experience', label: 'Experience'},
    { id: 'works', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
            className="cursor-pointer"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#7B61FF] to-[#6366f1] rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300" />
              <h1 className="relative text-4xl font-bold text-[#7B61FF] group-hover:text-white transition-colors duration-300">
                PJ
              </h1>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={link.id}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onSetActive={() => setActiveLink(link.id)}
                  className={`px-5 py-2 rounded-lg cursor-pointer transition-all duration-300 relative group ${
                    activeLink === link.id
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.label}
                  {/* Active indicator */}
                  <span 
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-accent-purple to-accent-indigo transition-all duration-300 ${
                      activeLink === link.id ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                  {/* Hover background */}
                  <span className={`absolute inset-0 rounded-lg bg-accent-purple/10 -z-10 transition-opacity duration-300 ${
                    activeLink === link.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container mx-auto px-6 py-6 space-y-2">
          {navLinks.map((link, index) => (
            <li 
              key={link.id}
              style={{ 
                animation: mobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: 0
              }}
            >
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setMobileMenuOpen(false)}
                onSetActive={() => setActiveLink(link.id)}
                className={`block px-6 py-3 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeLink === link.id
                    ? 'text-white bg-accent-purple/20 border-l-4 border-accent-purple'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;