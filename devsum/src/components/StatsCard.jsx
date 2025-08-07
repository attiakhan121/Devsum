import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';


const StatsCard = ({ icon: Icon, number, suffix, label }) => {
  const [inView, setInView] = useState(false);
  const ref = useRef(null); 

  const num = parseInt(String(number).replace(/[^\d]/g, ''), 10);
  const animatedNumber = useMotionValue(0);
  const spring = useSpring(animatedNumber, { duration: 2000, bounce: 0 });

  const display = useTransform(spring, (value) => {
    return `${Math.floor(value)}${suffix}`;
  });

  useEffect(() => {
    const element = ref.current;
    if (!element) return; // if null

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(element);

    // clean when unmounts
    return () => {
      observer.unobserve(element);
    };
  }, []); // no dependency 


  useEffect(() => {
    if (inView) {
      animatedNumber.set(num);
    }
  }, [inView, num, animatedNumber]);

  return (
    <motion.div
      ref={ref}
      className="bg-slate-800 border border-slate-600 rounded-2xl p-6 text-center"
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <Icon className="w-8 h-8 mx-auto mb-4 text-orange-400" />
      <motion.div className="text-3xl font-bold text-white mb-2">
        {display}
      </motion.div>
      <div className="text-slate-300 text-sm">{label}</div>
    </motion.div>
  );
};

export default StatsCard;
