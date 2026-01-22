import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github className="w-4 h-4" />, url: 'https://github.com/rehna-jp', label: 'GitHub' },
    { icon: <Linkedin className="w-4 h-4" />, url: 'https://www.linkedin.com/in/precious-jeremy-o-b195292ab', label: 'LinkedIn' },
    { icon: <Twitter className="w-4 h-4" />, url: 'https://x.com/chiinaza0x5', label: 'Twitter' },
    { icon: <Mail className="w-4 h-4" />, url: 'mailto:jeremyrehna05@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10 py-8">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Single row layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Brand & Copyright */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-sm text-gray-400 text-center md:text-left">
            <span> Precious Jeremy</span>
            <div className="flex items-center gap-2">
              <span className="text-[#7B61FF]">©</span>
              <span>{new Date().getFullYear()} All Rights Reserved</span>
            </div>
          </div>

          {/* Right - Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-8 h-8 rounded-lg bg-white/5 hover:bg-[#7B61FF]/20 border border-white/10 hover:border-[#7B61FF]/50 flex items-center justify-center transition-all duration-300 group"
              >
                <span className="text-gray-400 group-hover:text-[#7B61FF] transition-colors">
                  {social.icon}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;