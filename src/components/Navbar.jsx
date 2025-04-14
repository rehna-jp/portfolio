import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');


  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'works', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div>
      <nav className='bg-black/10 backdrop-blur-md w-full h-19 top-0 flex fixed justify-between items-center px-10 text-white font-medium z-50'>
        <h1 className='text-4xl text-[#7B61FF] font-bold hover:cursor-pointer'>PJ</h1>
        <ul className='flex gap-5 text-md-base text-[#bbb2b2] hover:cursor-pointer *:hover:text-white'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                to={link.id}
                spy={true}
                smooth={true}
                duration={300}
                offset={0}
                onClick={() => setActiveLink(link.id)}
                onSetActive={() => setActiveLink(link.id)}
                className={activeLink === link.id ? 'active-link' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
