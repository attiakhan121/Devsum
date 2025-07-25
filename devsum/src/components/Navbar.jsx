import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User } from 'lucide-react'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const isDropdownRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); //after certain point navbar becomes more dark
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

//this one closes the dropdown by random clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownRef.current && !isDropdownRef.current.contains(event.target)) {
        setisDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // scrolling up and down in sections
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); 
    setisDropdownOpen(false); 
  };

  const navLinks = [
    { name: 'Courses', id: 'courses' },
    { name: 'Projects', id: 'projects' },
    { name: 'About Us', id: 'about' },
    { name: 'Team', id: 'team' },
    { name: 'Testimonials', id: 'testimonials' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => scrollToSection('hero')} //this is logo button 
            className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
          >
            DEVSUM
          </button>

          {/* navlinks for big screens */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}

            <div className="relative" ref={isDropdownRef}>
              <button
                onClick={() => setisDropdownOpen(!isDropdownOpen)}
                className="text-white hover:text-orange-400 transition-colors p-2 rounded-full hover:bg-slate-800"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                <User size={24} />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <button className="block px-4 py-2 text-sm text-white hover:bg-orange-500 w-full text-left transition-colors">
                    Sign In
                  </button>
                  <button className="block px-4 py-2 text-sm text-white hover:bg-orange-500 w-full text-left transition-colors">
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button (Hamburger/X icon) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-orange-400 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu (conditionally rendered) */}
        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 text-white hover:text-orange-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
              {/* Sign In/Sign Up buttons for mobile still direct, or you could add a mobile-specific user icon too */}
              <div className="pt-2 space-y-2">
                <button className="w-full px-3 py-2 text-white border border-orange-400 rounded-lg hover:bg-orange-400 transition-colors">
                  Sign In
                </button>
                <button className="w-full px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;