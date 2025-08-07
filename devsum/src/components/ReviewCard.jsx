import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ChevronRight } from 'lucide-react';

const ReviewCard = ({ review, openReviewModal }) => {
  return (
    <motion.div
      className="bg-[#002140] border border-slate-900 rounded-2xl p-8 h-full"
      whileHover={{ backgroundColor: '#13355a' }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
          {review.name.charAt(0)}
        </div>
        <div>
          <h4 className="text-white font-semibold">{review.name}</h4>
          <p className="text-slate-400 text-sm">{review.position}</p>
          <div className="flex items-center mt-1">
            {[...Array(5)].map((_, num) => (
              <Star key={num} className="w-4 h-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
      </div>
      
      <Quote className="w-8 h-8 text-orange-400 mb-4" />
      <p className="text-slate-300 text-sm mb-6 leading-relaxed">
        {review.review}
      </p>
      
      <motion.button
        onClick={() => openReviewModal(review)}
        className="text-orange-400 font-semibold flex items-center gap-2 hover:text-orange-300 transition-colors"
        whileHover={{ x: 5 }}
      >
        Read Full Review <ChevronRight className="w-4 h-4" />
      </motion.button>
    </motion.div>
  );
};

export default ReviewCard;