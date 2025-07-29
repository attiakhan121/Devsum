import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Button from "../components/Button";
import Card from "../components/Card";
import { heroData } from '../data/heroData';
import { courses } from '../data/coursesData';
import { projects } from '../data/projectsData';
import { aboutFeatures } from '../data/aboutData';
import { teamMembers } from '../data/teamData';
import { testimonials } from '../data/testimonialsData';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const HomePage = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // if course is clicked
  const handleCourseClick = (course) => {
    console.log('Course clicked:', course);
  };

  //if project is clicked
  const handleProjectClick = (project) => {
    console.log('Project clicked:', project);
  };

  //project source is clicked
  const handleProjectSourceClick = (project) => {
    console.log('Project source clicked:', project);
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative overflow-hidden bg-[#002147] animate-fade-in" >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Empowering Future<br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Developers
              </span> through<br />
              Courses & Real Projects
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Join thousands of developers who have transformed their careers with our hands-on approach to learning modern web development.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
              <button
                onClick={() => scrollToSection('courses')}
                className="group px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 text-lg font-semibold transform hover:scale-105"
              >
                Explore Courses
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300 text-lg font-semibold"
              >
                View Projects
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {heroData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2">{stat.number}</h3>
                  <p className="text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default HomePage;