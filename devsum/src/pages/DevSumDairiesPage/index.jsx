// import { Swiper, SwiperSlide } from "swiper/react";
// import { useCallback, useRef } from "react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import TechIcon from "../../components/TechIcon";
// import InternshipReviewCard from "./InternshipReviewCard";
// import { InternesData } from "./internesData";

// const InternesTestimonials = () => {
//   const sliderRef = useRef(null);

//   const handlePrev = useCallback(() => {
//     if (!sliderRef.current) return;
//     sliderRef.current.swiper.slidePrev();
//   }, []);

//   const handleNext = useCallback(() => {
//     if (!sliderRef.current) return;
//     sliderRef.current.swiper.slideNext();
//   }, []);

//   return (
//     <section className="my-10 sm:my-20">
//       <div className="container">
//         {/* Section Title */}

//         <div className="mb-10 flex items-center justify-between flex-wrap">
//           <div>
//             <span className="flex items-center gap-2.5 font-medium text-white mb-2">
//               <TechIcon name="users" className="text-accent w-5 h-5" />
//               Testimonials
//             </span>
//             <h2 className="font-semibold text-2xl sm:text-3xl text-white">
//               Internes Stories
//             </h2>
//           </div>

//           <div className="flex items-center gap-3">
//             <button
//               onClick={handlePrev}
//               className="group flex items-center justify-center h-9 w-9 rounded-lg bg-border-blue/40 text-white border ease-out duration-200 hover:bg-accent hover:border-accent"
//             >
//               <TechIcon
//                 name="chevron-left"
//                 className="text-secondary group-hover:text-white"
//               />
//             </button>

//             <button
//               onClick={handleNext}
//               className="group flex items-center justify-center h-9 w-9 rounded-lg bg-border-blue/40 text-white border ease-out duration-200 hover:bg-accent hover:border-accent"
//             >
//               <TechIcon
//                 name="chevron-right"
//                 className="text-secondary group-hover:text-white"
//               />
//             </button>
//           </div>
//         </div>

//         {/* Swiper Carousel */}
//         <Swiper
//           ref={sliderRef}
//           slidesPerView={3}
//           spaceBetween={20}
//           breakpoints={{
//             0: {
//               slidesPerView: 1,
//             },
//             1000: {
//               slidesPerView: 2,
//             },
//             1200: {
//               slidesPerView: 3,
//             },
//           }}
//         >
//           {InternesData.map((item, key) => (
//             <SwiperSlide key={item.id} className="!h-auto">
//               <div className="h-full">
//                 <InternshipReviewCard key={key} item={item} />
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// };

// export default InternesTestimonials;

import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef, useEffect, useState } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import TechIcon from "../../components/TechIcon";
import InternshipReviewCard from "./InternshipReviewCard";
import { InternesData } from "./internesData";
import VideoModal from "./VideoModal";

const InternesTestimonials = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const sliderRef = useRef(null);

  const openModal = (videoData) => {
    setCurrentVideo(videoData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo(null);
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    if (sliderRef.current && !isInitialized) {
      const swiper = sliderRef.current.swiper;

      swiper.slides.forEach((slide, index) => {
        const isActive = index === swiper.activeIndex;
        slide.style.transform = isActive ? "scale(1.0)" : "scale(0.9)";
        slide.style.opacity = isActive ? "1" : "0.8";
        slide.style.transition = "transform 0.3s ease, opacity 0.3s ease";
      });

      setTimeout(() => {
        swiper.update();
        setIsInitialized(true);
      }, 100);

      swiper.on("slideChange", () => {
        swiper.slides.forEach((slide, index) => {
          const isActive = index === swiper.activeIndex;
          slide.style.transform = isActive ? "scale(1.0)" : "scale(0.9)";
          slide.style.opacity = isActive ? "1" : "0.8";
        });
      });
    }
  }, [isInitialized]);

  return (
    <section className="my-10 sm:my-20">
      <div className="container">
        {/* Section Title */}
        <div className="mb-10 flex items-center justify-between flex-wrap">
          <div>
            <span className="flex items-center gap-2.5 font-medium text-white mb-2">
              <TechIcon name="users" className="text-accent w-5 h-5" />
              Testimonials
            </span>
            <h2 className="font-semibold text-2xl sm:text-3xl text-white">
              Internes Stories
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="group flex items-center justify-center h-9 w-9 rounded-lg bg-border-blue/40 text-white border ease-out duration-200 hover:bg-accent hover:border-accent"
            >
              <TechIcon
                name="chevron-left"
                className="text-secondary group-hover:text-white"
              />
            </button>

            <button
              onClick={handleNext}
              className="group flex items-center justify-center h-9 w-9 rounded-lg bg-border-blue/40 text-white border ease-out duration-200 hover:bg-accent hover:border-accent"
            >
              <TechIcon
                name="chevron-right"
                className="text-secondary group-hover:text-white"
              />
            </button>
          </div>
        </div>

        <Swiper
          ref={sliderRef}
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
              effect: "slide",
              coverflowEffect: {
                modifier: 1,
              },
            },
            768: {
              slidesPerView: 2.3, 
              effect: "coverflow",
              coverflowEffect: {
                modifier: 2,
              },
            },
            1024: {
              slidesPerView: 2.7,
              effect: "coverflow",
              coverflowEffect: {
                modifier: 2.3,
              },
            },
            1200: {
              slidesPerView: 3,
              effect: "coverflow",
              coverflowEffect: {
                modifier: 2,
              },
            },
          }}
          onAfterInit={(swiper) => {
            setTimeout(() => {
              swiper.update();
              swiper.slideTo(1, 0);
            }, 50);
          }}
        >
          {InternesData.map((item) => (
            <SwiperSlide key={item.id} className="!h-auto">
              <div className="h-full flex items-end pb-4">
                <InternshipReviewCard
                  item={item}
                  onPlayVideo={() =>
                    openModal({
                      videoUrl: item.videoUrl,
                      title: item.studentName,
                      company: item.companyName,
                    })
                  }
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <VideoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={currentVideo?.videoUrl}
        title={`${currentVideo?.title} at ${currentVideo?.company} | Student Review`}
      />
    </section>
  );
};

export default InternesTestimonials;
