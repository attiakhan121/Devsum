import  React from 'react';
import {motion,useInView} from 'framer-motion';
import {useEffect, useState,useRef} from 'react';


const Counter = ({ endValue, duration = 2000, inView}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated,setHasAnimated]=useState(false);

  useEffect(() => {
    if(!inView || hasAnimated) return;
    const target = parseInt(endValue.replace(/\D/g, ''));
    let start = 0;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const progressRatio = Math.min(progress / duration, 1);
      const value = Math.floor(progressRatio * target);
      setCount(value);

      if (progress < duration) {
        requestAnimationFrame(step);
      } else {
        setCount(target);
         // Ensure it ends exactly at the target
        setHasAnimated(true);
      }
    };

    requestAnimationFrame(step);
  }, [endValue, duration,inView,hasAnimated]);

  return (
    <span>
      {count}
      {endValue.includes('+') && '+'}
    </span>
  );
};


const stats=[
    {
        label: 'Years of Excellence', value: '10+', highlight: 'Impact' 
    },
    {
        label: 'Projects Delivered', value: '400+'
    },
    {
        label:'Professionals', value:'200+'
    },
    {
        label:'Countries served', value:'10+'
    }
];

const StatsBar = () =>{
     const sectionRef = useRef(null);
     const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    return (
        <section ref={sectionRef} className='bg-[#002147] py-7 rounded-2xl shadow-lg px-6 mt-16'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6 max-w-6xl mx-auto px-1'>
                
                <motion.h3
                initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5 }}
               className=" text-2xl md:text-3xl font-bold text-white-800 "
                
                >
                    Our Global <span className="text-orange-500">Impact</span>
                </motion.h3>
                <div className='flex flex-wrap items-center justify-center gap-6'>
                    {stats.map((item,index)=>(
                        <motion.div
                        key={index}
                        initial={{opacity:0, y:20}}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="bg-[#002140] shadow-md rounded-xl p-6 text-center hover:shadow-lg transition hover:bg-slate-800"
                        >
                             <div className="text-3xl font-bold text-white-600 mb-2">
                                
                               <Counter endValue={item.value} inView={isInView}  />

                             </div>
                            <div className="text-gray-700 text-sm font-medium">{item.label}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

    )
}
export default StatsBar;