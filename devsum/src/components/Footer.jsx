import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Courses', href: '#courses' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' }
  ];

  const courses = [
    { name: 'Frontend Development', href: '#' },
    { name: 'Backend Development', href: '#' },
    { name: 'Full Stack Development', href: '#' },
  ];

  const socialLinks = [
    { icon: <Facebook size={20} />, href: '#', name: 'Facebook' },
    { icon: <Instagram size={20} />, href: '#', name: 'Instagram' },
    { icon: <Linkedin size={20} />, href: '#', name: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', name: 'GitHub' }
  ];

  const scrollToSection = (sectionId) => { 
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-white mb-4">DEVSUM</h3>
            <p className="text-slate-300 mb-6 leading-relaxed">
              Empowering future developers through hands-on courses and real-world projects. 
              Join our community of learners and start your journey to becoming a skilled developer.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
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
                    onClick={() => scrollToSection(link.href)}
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
                  <a
                    href={course.href}
                    className="text-slate-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    {course.name}
                  </a>
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