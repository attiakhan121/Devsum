import React from 'react';
import { motion } from 'framer-motion';
import { Play, MapPin, Calendar, Users } from 'lucide-react';

const EventCard = ({ event, openVideoModal }) => {
  return (
    <motion.div
      className="bg-[#002147] border border-slate-600 rounded-2xl overflow-hidden"
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative">
        <img 
          src={event.imageUrl} 
          alt={event.title}
          className="h-48 w-full object-cover"
        />

        <button
          onClick={() => openVideoModal(event.videoUrl, event.title)}
          className="absolute top-4 right-4 bg-black/50 backdrop-blur-lg rounded-full p-2 hover:bg-black/70 transition-colors"
        >
          <Play className="w-6 h-6 text-white" />
        </button>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
        
        <div className="space-y-2 mb-4 text-slate-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{event.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4" />
            <span className="text-sm">{event.participants} Participants</span>
          </div>
        </div>

        <p className="text-slate-400 text-sm mb-4 line-clamp-3">
          {event.description}
        </p>

        <motion.button
          onClick={() => openVideoModal(event.videoUrl, event.title)}
          className="w-full py-3 bg-orange-500 text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-orange-600 transition-colors"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Watch Event <Play className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default EventCard;