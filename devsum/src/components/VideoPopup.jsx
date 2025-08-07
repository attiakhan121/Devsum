import React from 'react'
import {X} from 'lucide-react';
const VideoPopup= ({ videoUrl, onClose }) => {
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center">
      {/* Blur background only */}
      <div className="absolute inset-0 backdrop-blur-sm z-40"></div>

      {/* Popup stays sharp */}
      <div className="relative z-50 bg-[#002140] p-6 rounded-lg max-w-lg w-full shadow-lg">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-100 w-full text-center">
            Review Video
          </h2>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-100 hover:text-gray-900 text-xl font-bold"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <video
          src={videoUrl}
          controls
          className="w-full rounded"
        />
      </div>
    </div>
  );
};

export default VideoPopup;