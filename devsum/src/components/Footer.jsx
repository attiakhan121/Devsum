import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();

  const quickLinks = [
    { name: 'Courses', href: '#courses', type: 'scroll' },
    { name: 'Projects', href: '#projects', type: 'scroll' },
    { name: 'About', href: '#about', type: 'scroll' },
    { name: 'Team', href: '#team', type: 'scroll' },
    { name: 'Contact', href: '/contact', type: 'page' }
  ];

  const courses = [
    { name: 'Frontend Development', path: '/courses' },
    { name: 'Backend Development', path: '/courses' },
    { name: 'Full Stack Development', path: '/courses' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/profile.php?id=61576985506065', name: 'Facebook' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/devsum_/', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/company/dev-sum/', name: 'LinkedIn' },
  ];

  const handleQuickLinkClick = (link) => {
    if (link.type === 'scroll') {
      if (window.location.pathname !== '/') {
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(link.href.replace('#', ''));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        const element = document.getElementById(link.href.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else if (link.type === 'page') {
      navigate(link.href);
    }
  };

  const handleCourseClick = (path) => {
    navigate(path);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1 flex flex-col items-center text-center md:items-start md:text-left">
            <h3 className="text-2xl font-bold text-white mb-4">DEVSUM</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering future developers through hands-on courses and real-world projects.
              Join our community of learners and start your journey to becoming a skilled developer.
            </p>
            <div className="flex space-x-4 justify-center md:justify-start w-full"> {/* */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="ml-0 md:ml-16 lg:ml-24">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleQuickLinkClick(link)}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Courses</h4>
            <ul className="space-y-3">
              {courses.map((course, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleCourseClick(course.path)}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200 text-left"
                  >
                    {course.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <Mail size={16} className="mr-3 text-orange-400" />
                <a href="mailto:info@devsum.com" className="hover:text-orange-400 transition-colors">
                  infodevsum@gmail.com
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <Phone size={16} className="mr-3 text-orange-400" />
                <a href="tel:+923301963038" className="hover:text-orange-400 transition-colors">
                  +92 330 1963038
                </a>
              </div>
              <div className="flex items-center text-slate-300">
                <MapPin size={16} className="mr-3 text-orange-400" />
                <span>Islamabad, Pakistan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex justify-center">
            <p className="text-slate-400 text-sm">
              © 2024 DEVSUM. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;