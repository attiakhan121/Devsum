import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Globe2 } from 'lucide-react';

const Highlights = () => {
  const highlights = [
    {
      icon: <Clock className="w-8 h-8 text-[#FF6B00]" />,
      title: "Quick Response",
      desc: "We usually respond within 24 hours.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#FF6B00]" />,
      title: "Your Privacy",
      desc: "We ensure your data stays secure.",
    },
    {
      icon: <Globe2 className="w-8 h-8 text-[#FF6B00]" />,
      title: "Global Reach",
      desc: "We work with clients around the world.",
    },
  ];

  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 " >
      {highlights.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          className="bg-white rounded-2xl p-6 text-center transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 hover:bg-gray-100 hover-shadow-2xl shadow-md"
        >
          <div className="flex justify-center mb-4">
            {item.icon}
          </div>
          <h4 className="text-lg font-semibold mb-1 text-orange-600">{item.title}</h4>
          <p className="text-gray-600 text-sm">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Highlights;
