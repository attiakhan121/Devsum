import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, X } from 'lucide-react';

const ReviewModal = ({ isOpen, onClose, review }) => {
  if (!isOpen || !review) return null;

  const reviewTxt = review.fullReview || review.review;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="bg-gray-900 rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] relative"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {review.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-white text-xl font-semibold">{review.name}</h3>
                <p className="text-gray-400">{review.position}</p>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, num) => (
                    <Star key={num} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="p-6 max-h-[60vh] overflow-y-auto">
            <Quote className="w-8 h-8 text-orange-400 mb-4" />
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              {reviewTxt}
            </p>

            {review.videoUrl && (
              <div className="aspect-video bg-gray-800 rounded-xl overflow-hidden">
                <iframe
                  src={review.videoUrl}
                  title={`${review.name} - Video Review`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReviewModal;