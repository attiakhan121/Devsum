import {useState , useEffect,useRef} from 'react';
import {Star, StarOff,Code2,GraduationCap,Rocket,BookOpen,Quote } from 'lucide-react';
import {motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import VideoPopup from './VideoPopup';

const StudentSection = ()=>{
    const [showVideo,setShowVideo] =useState(false);
    const [currentIndex,setCurrentIndex]=useState(0);
    const slideInterval = useRef(null);


    const students =[
    {
        name:"Muhammad Hanain",
        photo:"/assets/testimonials/hanain.jpg",
        background:"Computer Science graduate exploring frontend technologies.",
        learned:'React, Tailwind. CSS',
        result:"Got internship at Devsum",
        rating:5,
        description:'This platform didn’t just teach me — it transformed me. I walked in with doubt, and left with clarity, confidence, and a career.',
        videoUrl:"/assets/testimonials/Travel Website - Google Chrome 2024-11-25 12-42-07.mp4",

    },
    {
        name:"Hussain Muhammad",
        photo:"/assets/testimonials/hussain-removebg-preview.png",
        background:"Computer Science graduate exploring frontend technologies.",
        learned:'React, Tailwind. CSS',
        result:"Got internship at Devsum",
        rating:4,
        description:'Every module felt like a door opening. Today, I look back and see not just progress, but a complete journey from zero to professional.',
        videoUrl:"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    },
    {
        name:"Muhammad Hanain",
        photo:"/assets/testimonials/hanain.jpg",
        background:"Computer Science graduate exploring frontend technologies.",
        learned:'React, Tailwind. CSS',
        result:"Got internship at Devsum",
        rating:5,
        description:'What once felt impossible is now my everyday reality. The mentorship, structure, and support changed the trajectory of my career.',
        videoUrl:"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    },
    {
        name:"Muhammad Hanain",
        photo:"/assets/testimonials/hanain.jpg",
        background:"Computer Science graduate exploring frontend technologies.",
        learned:'React, Tailwind. CSS',
        result:"Got internship at Devsum",
        rating:5,
        description:'I never imagined a learning platform could feel so personal. It empowered me to grow at my pace, yet pushed me beyond my limits',
        videoUrl:"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    },
    {
        name:"Muhammad Hanain",
        photo:"/assets/testimonials/hanain.jpg",
        background:"Computer Science graduate exploring frontend technologies.",
        learned:'React, Tailwind. CSS',
        result:"Got internship at Devsum",
        rating:4,
        description:'Learning here wasn’t just about skills — it was about belief. I gained confidence, purpose, and most importantly, a vision for my future.',
        videoUrl:"https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4",

    },
]

useEffect(()=>{
      if (showVideo) {
      clearInterval(slideInterval.current);
      return;
    }

    slideInterval.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length);
    }, 30000); // Adjust timing as needed

    return () => clearInterval(slideInterval.current);
  }, [showVideo]);

const student=students[currentIndex];
    return(
        <>
        <section className={`py-12 px-4 md:px-20 space-y-8 bg-[#002140] transition-all duration-300 relative  border border-gray-600  shadow-xl rounded-xl 
             ${showVideo ? 'blur-sm scale-95 pointer-events-none' : ''}`}>
            {/* heading */}
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-white'>Student <span className='text-orange-500'>Success</span>  Story</h2>
                <p className='text-gray-300 mt-2"'>From learners to leaders – discover how our students transformed their careers</p>
            </div>
            {/* Animated card */}
            <div className={`relative transition-all duration-300 ${showVideo ? 'blur-sm scale-95 pointer-events-none' : ''}`}>
            <div className='relative flex justify-center'>
                {/* left arrow */}
                <button 
                   onClick={() =>
                   setCurrentIndex((prev) => (prev === 0 ? students.length - 1 : prev - 1))
                   }
                className="absolute -left-2 sm:-left-12 top-1/2 -translate-y-1/2  bg-orange-500 hover:bg-slate-600  p-1.5 sm:p-2 rounded-full text-white z-10 shadow"
                aria-label="Previous"
                 >
                 <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
               </button>

              {/* Right Arrow */}
               <button
              onClick={() =>
                setCurrentIndex((prev) => (prev + 1) % students.length)
              }
             className="absolute -right-2 sm:-right-12 top-1/2 -translate-y-1/2  bg-orange-500 hover:bg-slate-600  p-1.5 sm:p-2 rounded-full text-white z-10 shadow"
              aria-label="Next"
               >
           <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
          
                <AnimatePresence mode='wait'> 
                    <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className='flex flex-col md:flex-row bg-[#021425] text-white rounded-lg shadow-lg overflow-hidden'
                    // w-full md:w-[80%] bg-[#021425] text-white rounded-lg shadow-lg flex flex-col md:flex-row overflow-hidden
                    >
                
            
                {/* left side */}
            <div className='md:w-[30%] bg-[#002147] flex flex-col items-center justify-start overflow-hidden'>
                    {/*pic and name */}
                      <div className='w-full h-72 bg-white rounded-t-xl overflow-hidden'>
                      <img src={student.photo}
                       alt={student.name} 
                       className="w-full h-full object-cover object-top" 
                       />
                       </div>
                       <div className='p-6 flex flex-cols items-center justify-center space-y-4'>
                        <h3 className='text-xl font-semibold text-white'>{student.name}</h3>

                       </div>
                      
                </div>
                {/* right side */}
                <div className='md:w-[70%] bg-[#002147] flex flex-col  p-4  space-y-3 justify-between'>
                    {/* grid of 4 cards */}
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    {/* Bio Section */}
                     <motion.div 
                     whileHover={{
                        scale:1.00,
                        boxShadow:"0 0 16px 3px rgba(100, 116, 139, 0.4)", 
                     }}
                     transition={{type: "spring", stiffness: 200, damping: 10}}
                     className="bg-slate-800 hover:bg-slate-700 rounded-lg px-4 py-2 "
                     >
                   <h3 className="flex items-center gap-2 text-base justify-center text-center font-semibold text-white mb-1">
                   <GraduationCap size={18} className='text-orange-500' /> Bio
                   </h3>
                  <p className="text-gray-300 text-sm justify-center  text-center leading-snug">{student.background}</p>
                  </motion.div>
                  
                    {/* Learned Section */}
                    <motion.div
                     whileHover={{
                        scale:1.00,
                        boxShadow:"0 0 16px 3px rgba(100, 116, 139, 0.4)", 
                     }}
                     transition={{type: "spring", stiffness: 200, damping: 10}}
                     className='bg-slate-800 hover:bg-slate-700 rounded-lg px-4 py-2'>
                        <h3 className='flex items-center gap-2  text-center justify-center text-base font-semibold text-white mb-1'>
                            <BookOpen size={18} className='text-orange-500'/> Skills Learned
                        </h3>
                         <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-300 text-center">
                         {student.learned.includes('React') && (
                         <div className="flex items-center gap-1"><Code2 size={16} /> React</div>
                         )}
                        {student.learned.includes('Tailwind') && (
                        <div className="flex items-center gap-1"><Code2 size={16} /> Tailwind</div>
                          )}
                        {student.learned.includes('CSS') && (
                        <div className="flex items-center gap-1"><Code2 size={16} /> CSS</div>
                         )}
                       </div>

                    </motion.div>
                   
                    {/* result section */}
                    <motion.div 
                     whileHover={{
                        scale:1.00,
                        boxShadow:"0 0 16px 3px rgba(100, 116, 139, 0.4)", 
                     }}
                    transition={{type: "spring", stiffness: 200, damping: 10}}
                    className="bg-slate-800 hover:bg-slate-700 rounded-lg px-4 py-2">
                        <h3 className='flex items-center gap-2 text-center justify-center text-base font-semibold text-white mb-1'>
                            <Rocket size={20} className='text-orange-500'/> 
                            Result
                        </h3>
                        <p className='text-gray-300 text-sm  justify-center text-center leading-snug'>{student.result}</p>
                    </motion.div>
                     {/* Rating Section */}
                      <motion.div 
                       whileHover={{
                        scale:1.00,
                        boxShadow:"0 0 16px 3px rgba(100, 116, 139, 0.4)", 
                     }}
                     transition={{type: "spring", stiffness: 200, damping: 10}}
                      className="bg-slate-800 hover:bg-slate-700 rounded-lg px-4 py-2">
                      <h3 className="flex items-center gap-2  text-center justify-center text-base font-semibold text-white mb-1">
                      <Star size={18} className='text-orange-500'/> Rating
                     </h3>
                    <div className="flex justify-center gap-1 text-orange-500">
                     {[...Array(5)].map((_, i) =>
                     i < student.rating ? (
                     <Star key={i} size={16} fill="currentColor" className='text-orange-500' />
                     ) : (
                    <Star key={i} size={16} className='text-orange-500'  />
                     )
                   )}
                </div>
              </motion.div>
              </div>
                    {/* desription */}
                    <div className="relative border-t border-gray-700 pt-6 max-w-3xl mx-auto px-4">
                    <p className="text-md text-gray-200 italic font-medium leading-relaxed tracking-wide">
                   <span className="text-md text-orange-500 font-bold mr-2 align-top">“</span>
                   {student.description}
                    <span className="text-md text-orange-500 font-bold ml-1 align-bottom">”</span>
                      </p>
                   </div>
                     <div className='text-center justify-center'>
                    <button onClick={()=>setShowVideo(true)}
                    className="mt-4 w-fit px-4 py-2 text-center justify-center bg-orange-500 hover:bg-orange-600  rounded transition"
                    >Watch Review
                    </button>
                   </div>
                </div>
            
            </motion.div>
            </AnimatePresence>
            </div>
            </div>
          



            {/* dots section */}
            <div className='flex justify-center items-center space-x-4  mt-6'>
                
                {/* Dots (Optional) */}
             <div className="flex space-x-2">
                {students.map((_, i) => (
               <div
              key={i}
               onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === currentIndex ? 'bg-orange-500' : 'bg-gray-500'
                 }`}
            ></div>
          ))}
  </div>
              
            </div>
      
        </section>
        {showVideo && (
        <VideoPopup
          videoUrl={student.videoUrl}
          onClose={() => setShowVideo(false)}
        />
      )}
         </>
        
    )
 
}

export default StudentSection;