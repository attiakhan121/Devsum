import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { achievementStats } from '../data/achievementsStats';
import AOS from 'aos';

import ceo from '../assets/images/ceo.png'
import lastPic from '../assets/images/lastPic.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import 'aos/dist/aos.css';

import {ChevronRight,ArrowRight} from 'lucide-react';
import VideoModal from '../components/VideoModal';
import ReviewModal from '../components/ReviewModal';
import StatsCard from '../components/StatsCard';
import EventCard from '../components/EventCard';
import ReviewCard from '../components/ReviewCard';
import { events } from '../data/events';
import { reviews } from '../data/reviews';

export default function DevsumDiaries() {
  const [videoModal, setVideoModal] = useState({ isOpen: false, videoUrl: '', title: '' });
  const [reviewModal, setReviewModal] = useState({ isOpen: false, review: null });
  const controls = useAnimation();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: 'ease-in-out'
    });

    const sequence = async () => {
      await controls.start({ y: 0, opacity: 1, scale: 1 });
      await controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "loop"
        }
      });
    };

    sequence();
  }, [controls]);

  const openVideoModal = (videoUrl, title) => {
    setVideoModal({ isOpen: true, videoUrl, title });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoUrl: '', title: '' });
  };

  const openReviewModal = (review) => {
    setReviewModal({ isOpen: true, review });
  };

  const closeReviewModal = () => {
    setReviewModal({ isOpen: false, review: null });
  };

  return (
    <>
      <div className="min-h-screen bg-[#002147]">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto max-w-7xl grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            <motion.div
              className="text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-6xl lg:text-7xl font-bold mb-6 text-white"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-orange-400">DEVSUM</span> DIARIES
              </motion.h1>
              <motion.p
                className="text-xl text-orange-400 mb-8 font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Real Stories. Real Success.
              </motion.p>
              <motion.p
                className="text-slate-300 text-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                "Every great journey begins with a single step into the unknown. When I started DevSum,
                I faced countless challenges - from sleepless nights debugging code to the uncertainty
                of building something meaningful. But through every obstacle, every failure, and every
                small victory, I learned that success isn't about avoiding hardships; it's about
                transforming them into stepping stones. Today, seeing thousands of students achieve
                their dreams reminds me why we persevered. Your story of transformation starts here."
              </motion.p>
            </motion.div>

            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative w-full max-w-md">
                <motion.div
                  className="relative z-10"
                  animate={{
                    y: [0, -15, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/*Image*/}
                  <div className="relative w-80 h-80 mx-auto">
                    <div className="absolute -inset-4">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500 rounded-full opacity-90"></div>
                      <div className="absolute bottom-8 left-0 w-16 h-16 bg-orange-400 rounded-full opacity-80"></div>
                      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-orange-600 rounded-full opacity-70 -z-10"></div>
                    </div>

                    <motion.div
                      className="relative w-full h-full"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-orange-600/20 rounded-3xl transform rotate-3"></div>
                      <div className="absolute inset-0 bg-gradient-to-tl from-slate-700/30 to-slate-600/30 rounded-3xl transform -rotate-2"></div>

                      <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                        <img
                          src={ceo}
                          alt="CEO"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-orange-500/5"></div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">DevSum <span className='text-orange-400'>Achievements</span></h2>
              <p className="text-slate-300 text-xl">Transforming careers, one success at a time</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {achievementStats.map((stat, index) => (
                <StatsCard
                  key={index}
                  icon={stat.icon}
                  number={stat.number}
                  suffix={stat.suffix}
                  label={stat.label}
                />
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.button
                className="px-8 py-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Share Story
              </motion.button>
              <motion.button
                className="px-8 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-xl hover:bg-orange-500 hover:border-orange-500 hover:text-white transform transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Journey
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Student Success Stories Section */}
        <section className="py-20 px-4 bg-[#002140] " data-aos="fade-up">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Student <span className='text-orange-400'>Success Stories</span></h2>
              <p className="text-slate-300 text-xl">Hear from our accomplished graduates</p>
            </div>
          </div>
        </section>

        {/* Intern Success Stories Section */}
        <section className="py-20 px-4" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Intern <span className='text-orange-400'>Success Stories</span></h2>
              <p className="text-slate-300 text-xl">From interns to industry leaders</p>
            </div>
          </div>
        </section>

        {/* Events Section */}

        <VideoModal
          isOpen={videoModal.isOpen}
          onClose={closeVideoModal}
          videoUrl={videoModal.videoUrl}
          title={videoModal.title}
        />

        <section className="py-20 px-4 bg-[#002140]" data-aos="zoom-in">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Our <span className='text-orange-400'>Events</span></h2>
              <p className="text-slate-300 text-xl">From seats to spotlights - see how events sparked transformations</p>
            </div>

            <div className="relative overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                effect="coverflow"
                grabCursor={true}
                centeredSlides={true}
                slidesPerView="auto"
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: '.events-next',
                  prevEl: '.events-prev',
                }}
                autoplay={{ delay: 4000 }}
                className="events-swiper"
              >
                {events.map((event) => (
                  <SwiperSlide key={event.id} className="max-w-md">
                    <EventCard event={event} openVideoModal={openVideoModal} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="events-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <button className="events-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>


        {/* Reviews Section */}

        <ReviewModal
          isOpen={reviewModal.isOpen}
          onClose={closeReviewModal}
          review={reviewModal.review}
        />

        <section className="py-20 px-4" data-aos="fade-up">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-white mb-4">Why <span className='text-orange-400'>DevSum?</span></h2>
              <p className="text-slate-300 text-xl">From first impressions to lasting impact - hear from grads what they have to say</p>
            </div>

            <div className="relative overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 }
                }}
                pagination={{ clickable: true }}
                navigation={{
                  nextEl: '.reviews-next',
                  prevEl: '.reviews-prev',
                }}
                autoplay={{ delay: 5000 }}
                className="reviews-swiper"
              >
                {reviews.map((review) => (
                  <SwiperSlide key={review.id}>
                    <ReviewCard review={review} openReviewModal={openReviewModal} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button className="reviews-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-6 h-6 rotate-180" />
              </button>
              <button className="reviews-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center text-white transition-colors">
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </section>


        {/* Last Section */}
        <section className="py-20 px-4 bg-[#002140]" data-aos="fade-up">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              className="md:w-1/2 w-full flex justify-center md:justify-start"
              initial={{ y: 0, opacity: 0 }}
              animate={controls}
            >
              <img
                src={lastPic}
                alt="DevSum Success Story"
                className="rounded-3xl shadow-orange-2xl max-w-xs md:max-w-md w-full h-auto"
              />
            </motion.div>

            <motion.div
              className="md:w-1/2 w-full text-center md:text-left"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-4">
                Your <span className='text-orange-400'>Story</span> Could Be Next
              </h2>
              <p className="text-base text-slate-300 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Join thousands of successful developers who transformed their careers with DevSum.
                Start your journey today and write your own success story.
              </p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <motion.button
                  className="px-8 py-3 bg-orange-500 text-white font-bold text-base rounded-xl transform transition-all duration-300 flex items-center justify-center gap-2 hover:bg-orange-600"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Learning <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="px-8 py-3 border-2 border-slate-600 text-slate-300 font-bold text-base rounded-xl hover:bg-orange-500 hover:border-orange-600 hover:text-white transform transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore Courses <ChevronRight className="w-5 h-5" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </section>     
      </div>
    </>
  );
}
