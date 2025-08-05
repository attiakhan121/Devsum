import {useRef} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Star} from 'lucide-react';
import { FaQuoteLeft } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";






const testimonials = [
  {
    quote: "Devsum gave me real-world confidence as a frontend developer. It bridged the gap between theory and practical development",
    name: "Muhammad Hanain",
    role: "Intern - React",
    img: "/assets/testimonials/hanain.jpg",
    rating:3,
    techSlack:["React","Tailwind.Css",'Figma'],
   
  },
  {
    quote: "Working with Devsum gave me the confidence to build frontend projects that matter in the real world. The mentorship and teamwork made all the difference",
    name:"Hussain Muhammad",
    role: "UI/UX Intern",
    img: "/assets/testimonials/hanain.jpg",
    rating:5,
    techSlack:["React","Tailwind.Css",'Figma'],
  
  },
  {
    quote: "Devsum gave me real-world confidence as a frontend developer. It bridged the gap between theory and practical development",
    name: "Fehmeen Zahra",
    role: "Intern - React",
    img: "/assets/testimonials/hanain.jpg",
    rating:3,
    techSlack:["React","Tailwind.Css",'Figma'],
   
  },
  {
    quote: "Devsum gave me real-world confidence as a frontend developer. It bridged the gap between theory and practical development",
    name: "Fehmeen Zahra",
    role: "Intern - React",
    img: "/assets/testimonials/hanain.jpg",
    rating:3,
    techSlack:["React","Tailwind.Css",'Figma'],
   
  },
];

const TestimonialSection = () => {
  

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 rounded-3xl overflow-hidden shadow-lg">
        
        {/* Left: Testimonials Carousel */}
        <div>
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            autoplay={{delay:4000,disableOnInteraction: false}}
            loop={true}
            spaceBetween={70}
            slidesPerView={1}
            pagination={{clickable:true}}
          
            className="w-full pb-10 relative"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <div className="bg-[#002147] p-10 rounded-2xl shadow-md relative w-full min-h-[350px] transition-transform duration-300 hover:scale-[1.02]">
                  <div className='flex justify-start'>
                  <FaQuoteLeft className='text-4xl text-orange-500 absolute top-6 left-6'/>
                  </div>
                  <div className="flex items-center mb-6 mt-6">
                    <img src={t.img} className="w-16 h-16 rounded-full mr-5 shadow-md" alt={t.name} />
                    <div>
                      <h4 className="text-xl font-bold text-gray-200">{t.name}</h4>
                      {/* <p className="text-sm text-gray-500">{t.role}</p> */}
                      <p className="text-sm text-gray-300 flex items-center gap-2 mt-1">
                     <FaUserGraduate className="indigo-500 text-base" /> {t.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-base italic leading-relaxed mb-4">“{t.quote}”</p>
                <div className="flex gap-1 text-orange-500">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={18}
          fill={i < t.rating ? '#f97316' : 'none'}
          stroke="#f97316"
        />
      ))}
    </div>
                
                <div className="mt-3 inline-flex items-center gap-2">
                <img src="/assets/testimonials/DevSum.jpeg" className="h-4 w-4" />
               <span className="text-shadow-xs text-gray-200">Verified Devsum Intern</span>
               </div>
                 
                </div>
              </SwiperSlide>
            ))}
              

          </Swiper>
         
        </div>
    

        {/* Right: Big Impact Text */}
        <div className="bg-white p-10 md:rounded-r-3xl">
          <p className="uppercase text-orange-500 font-semibold text-sm tracking-widest mb-2">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            Trusted by <span className="text-orange-500">Future Tech Leaders</span>
          </h2>
          <p className="text-gray-600 text-md">
            We’ve helped hundreds of interns like you gain hands-on experience, polish their skills, and shine in real-world projects. Hear their stories!
          </p>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;
