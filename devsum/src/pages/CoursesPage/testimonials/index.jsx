import { Swiper, SwiperSlide } from "swiper/react";
import { useCallback, useRef } from "react";
import testimonialsData from "./testimonialsData";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SingleTestimonialItem from "./SingleTestimonialItem";
import TechIcon from "../../../components/TechIcon";

const Testimonials = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

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
              User Feedbacks
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

        {/* Swiper Carousel */}
        <Swiper
          ref={sliderRef}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1000: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialsData.map((item, key) => (
            <SwiperSlide key={key}>
              <SingleTestimonialItem testimonial={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
