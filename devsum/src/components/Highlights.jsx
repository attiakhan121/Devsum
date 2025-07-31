import React from 'react';
import { motion ,useAnimation} from 'framer-motion';
import { ShieldCheck, Clock, Globe2,Code, Users, Rocket} from 'lucide-react';
import {useEffect} from 'react';

const Highlights = () => {
  const highlights = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Quick Response",
      desc: "We usually respond within 24 hours.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-orange-500" />,
      title: "Your Privacy",
      desc: "We ensure your data stays secure.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-orange-500" />,
      title: "Global Reach",
      desc: "We work with clients around the world.",
    },
    {
      icon: <Code className="w-8 h-8 text-orange-500" />,
      title: "Clean Code",
      desc: "We follow best practices to write clean and efficient code.",
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Team Collaboration",
      desc: "We work in agile teams to deliver fast and effectively",
    },
     {
      icon: <Rocket className="w-8 h-8 text-orange-500" />,
      title: "Performance Focused",
      desc: "We build fast, responsive, and optimized web apps.",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 " >
      {highlights.map((item, index) => {
        const iconControls=useAnimation();
        return (
          <motion.div
          key={index}
          className='bg-slate-800 rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 group hover:bg-slate-700'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          
          whileHover={{
            scale: 1.05,
    y: -5,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.1, ease: "easeInOut" },
  }}      
          onHoverStart={()=>{
            iconControls.start({
              y: [-5, -30, 0],
              opacity: [1, 0, 1],
              transition: { duration: 0.6 },
            });
          }}

          >
            <motion.div
            className='flex justify-center mb-4'
            animate={iconControls}
            initial={{ y: 0, opacity: 1 }}
            >
              {item.icon}

            </motion.div>
            <h4 className="text-lg font-semibold mb-1 text-gray-100">{item.title}</h4>
            <p className="text-gray-300 text-sm">{item.desc}</p>

          </motion.div>

        )
        
})}
    </div>
  );
};

export default Highlights;
