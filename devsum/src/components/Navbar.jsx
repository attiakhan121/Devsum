import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, User } from 'lucide-react'; 
import { Link, useNavigate, useLocation } from 'react-router-dom'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const isDropdownRef = useRef(null); 
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); // Navbar becomes darker after scrolling down 50px
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Closes the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDropdownRef.current && !isDropdownRef.current.contains(event.target)) {
        setisDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // to navigate for section links on the home page
  const handleNavLinkClick = (sectionId) => {
    if (sectionId === '/team') {
      navigate('/team');
      setIsOpen(false);
      setisDropdownOpen(false);
      return;
    }
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // goes to specific section
      navigate('/', { state: { scrollToId: sectionId } });
    }
    setIsOpen(false); 
    setisDropdownOpen(false); 
  };


  const handleDirectLinkClick = () => {
    console.log("Clicked");
    setIsOpen(false); 
    setisDropdownOpen(false); 
  };

  

  // Define navigation links for sections on the home page
  const navLinks = [
    { name: 'Courses', id: 'courses' },
    { name: 'Projects', id: 'projects' },
    { name: 'About Us', id: 'about' },
    { name: 'Team', id: '/team' },
    { name: 'Testimonials', id: 'testimonials' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            onClick={() => handleNavLinkClick('hero')}
            className="text-2xl font-bold text-white hover:text-orange-400 transition-colors"
          >
            DEVSUM
          </button>

          {/* Navigation links for larger screens */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavLinkClick(link.id)} //section scrolling
                className="text-white hover:text-orange-400 transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}

            {/* Contact Page Link */}
            <Link
              to="/contact"
              onClick={handleDirectLinkClick} //page navigation
              className="text-white hover:text-orange-400 transition-colors font-medium"
            >
              Contact
            </Link>

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
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1">
                  <Link
                    to="/auth" // Navigates to the Auth page
                    onClick={handleDirectLinkClick}
                    className="block px-4 py-2 text-sm text-white hover:bg-orange-500 w-full text-left transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/auth" //same
                    onClick={handleDirectLinkClick}
                    className="block px-4 py-2 text-sm text-white hover:bg-orange-500 w-full text-left transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile navbar */}
          <div className="md:hidden flex items-center space-x-4">
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
                <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-md shadow-lg py-1">
                  <Link
                    to="/auth"
                    onClick={handleDirectLinkClick}
                    className="block px-4 py-2 text-sm text-white hover:bg-orange-500 w-full text-left transition-colors"
                  >
                    Sign In
                  </Link>
                  <Link
                    to="/auth"
                    onClick={handleDirectLinkClick}
                    className="block px-4 py-2 text-sm text-white hover:bg-orange-500 w-full text-left transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-orange-400 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-sm border-t border-slate-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavLinkClick(link.id)} //section scrolling
                  className={`block w-full text-left px-3 py-2 text-white hover:text-orange-400 transition-colors`}
                >
                  {link.name}
                </button>
              ))}

              {/* Contact page*/}
              <Link
                to="/contact"
                onClick={handleDirectLinkClick} 
                className="block w-full text-left px-3 py-2 text-white hover:text-orange-400 transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
