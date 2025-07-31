import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Card from "../components/Card";
import { heroData } from '../data/heroData';
import { courses } from '../data/coursesData';
import { projects } from '../data/projectsData';
import { aboutFeatures } from '../data/aboutData';
import { teamMembers } from '../data/teamData';
import { testimonials } from '../data/testimonialsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useNavigate, useLocation } from 'react-router-dom'; 

// Typing Animation Component
const TypingAnimation = () => {
  const words = ['Courses & Projects', 'Real Experiences', 'Career Growth', 'Industry Skills'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = isDeleting ? 500 : 2000;

    const timer = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        //pause then start deleting
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentText === '') {
        //move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        // Delete 
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // Type 
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="bg-orange-500 bg-clip-text text-transparent">
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-orange-400"
      >
        |
      </motion.span>
    </span>
  );
};

// Counter Animation Component
const AnimatedCounter = ({ end, duration = 2, suffix = '', prefix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    // get number
    const num = parseInt(end.replace(/[^\d]/g, ''));
    
    let start;
    const animate = (time) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / (duration * 1000), 1);
      
      const slowdown = 1 - Math.pow(1 - progress, 2);
      const currCount = Math.floor(slowdown * num);
      
      setCount(currCount);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setHasAnimated(true);
      }
    };
    
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('hero-stats');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <motion.span
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {prefix}{count}{suffix}
    </motion.span>
  );
};

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  //navigating from other pages
  useEffect(() => {
    if (location.state && location.state.scrollToId) {
      const element = document.getElementById(location.state.scrollToId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Clear the state after scrolling 
        navigate(location.pathname, { replace: true, state: {} }); 
      }
    }
  }, [location, navigate]); 

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Navigation handlers for internal and external links
  const handleCourseLearnMore = (course) => {
    console.log('Course Learn More clicked:', course);
    navigate('/courses'); 
  };

  const handleProjectView = (project) => {
    console.log('Project View clicked:', project);
    window.open('https://intern-hub-dashboard.vercel.app/', '_blank'); 
  };

  const handleProjectSource = (project) => {
    console.log('Project Source clicked:', project);
    window.open('https://github.com/attiakhan121', '_blank');
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="min-h-screen relative overflow-hidden bg-[#002147]" >
        <div className="absolute inset-0 "></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Empowering Future<br />
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Developers
              </span> through<br />
              <TypingAnimation />
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Join thousands of developers who have transformed their careers with our hands-on approach to learning modern web development.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.button
                onClick={() => navigate('/courses')} 
                className="group px-8 py-4 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-all duration-300 flex items-center gap-2 text-lg font-semibold transform hover:scale-105"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Courses
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </motion.button>
              <motion.button
                onClick={() => navigate('/projects')} 
                className="px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-xl hover:bg-orange-400 hover:text-white transition-all duration-300 text-lg font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            <motion.div
              id="hero-stats"
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              {heroData.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 + (index * 0.2) }}
                >
                  <motion.div 
                    className="inline-flex items-center justify-center w-16 h-16 bg-orange-500/20 rounded-full mb-4"
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.icon}
                  </motion.div>
                  <h3 className="text-3xl font-bold text-white mb-2">
                    <AnimatedCounter 
                      end={stat.number} 
                      duration={2.5}
                      suffix={stat.number.includes('+') ? '+' : stat.number.includes('%') ? '%' : ''}
                    />
                  </h3>
                  <p className="text-slate-300">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Courses Section */}
      <section id="courses" className="py-20 bg-[#002140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-orange-400">Courses</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Choose from our comprehensive range of courses designed to take you from beginner to professional developer.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {courses.slice(0, 3).map((course, index) => (
              <div key={course.id} data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="1000">
                <Card
                  type="course"
                  data={course}
                  onButtonClick={() => handleCourseLearnMore(course)}
                />
              </div>
            ))}
          </div>
          
          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <button
              onClick={() => navigate('/courses')} 
              className="group px-8 py-4 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold mx-auto transform hover:scale-105"
            >
              Explore More Courses
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-[#002147]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Real-World <span className="text-orange-400">Projects</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Build production-ready applications that you can showcase in your portfolio and use in job interviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {projects.slice(0, 3).map((project, index) => (
              <div key={project.id} data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="1000">
                <Card
                  type="project"
                  data={project}
                  onButtonClick={() => handleProjectView(project)}
                  onSecondaryButtonClick={() => handleProjectSource(project)} 
                />
              </div>
            ))}
          </div>

          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <button
              onClick={() => navigate('/projects')} 
              className="group px-8 py-4 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold mx-auto transform hover:scale-105"
            >
              Explore More Projects
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-[#002140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-orange-400">DEVSUM</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              DEVSUM offers a variety of courses and hands-on projects to help you become a skilled software developer.
              We bridge the gap between theoretical knowledge and practical industry skills.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Why Choose DEVSUM?
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                At DEVSUM, we believe in learning by doing. Our curriculum is designed by industry experts
                and updated regularly to match current market demands. We don't just teach you to code -
                we prepare you for a successful career in software development.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">100% hands-on project-based learning</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Industry-relevant curriculum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Personalized mentorship and support</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                  <span className="text-slate-300">Career placement assistance</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {aboutFeatures.map((feature, index) => (
                <div key={index} data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="1000">
                  <Card
                    type="about-feature"
                    data={feature}
                  />
                </div>
              ))}
            </div>
          </div>

          <div
            className="text-center mt-12"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <button
              onClick={() => navigate('/about')} 
              className="group px-8 py-4 border border-slate-600 text-slate-300 rounded-xl hover:bg-slate-700 hover:border-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-lg font-semibold mx-auto transform hover:scale-105"
            >
              Explore More About Us
              <ChevronDown className="group-hover:translate-y-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#002147]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-orange-400">Expert Team</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Learn from industry professionals who have worked at top tech companies and are passionate about teaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={member.id} data-aos="zoom-in" data-aos-delay={index * 100} data-aos-duration="1000">
                <Card
                  type="team"
                  data={member}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-[#002140]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="text-orange-400">Students Say</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Hear from our successful graduates who are now working at top tech companies worldwide.
            </p>
          </div>

          <div
            className="relative px-12 pb-16 w-full"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <Swiper
              modules={[Autoplay, Pagination, Navigation]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active',
              }}
              navigation={true}
              loop={true}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              className="testimonials-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <Card
                    type="testimonial"
                    data={testimonial}
                    className="mx-2"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
