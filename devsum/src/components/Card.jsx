import React from 'react';
import { ArrowRight, Clock, Users, Star, ExternalLink, Github, Linkedin, Facebook,Instagram, Quote } from 'lucide-react';

const Card = ({ data, type, onButtonClick, onSecondaryButtonClick }) => {
  const imageClasses = "w-full object-cover group-hover:scale-105 transition-transform duration-500";
  const cardClasses = "group bg-slate-900 rounded-2xl overflow-hidden hover:transform hover:scale-102 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500 flex flex-col";

  // Render content based on card type
  const renderContent = () => {
    switch (type) {
      case 'course':
        return (
          <>
            <div className="relative">
              <img src={data.image} alt={data.title} className={`${imageClasses} h-48`} />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex flex-col items-start mb-3">
                <h3 className="text-2xl font-bold text-white mb-1">
                  {data.title}
                </h3>
                <div className="flex items-baseline space-x-4">
                  <span className="text-base text-slate-400 font-medium">Online: {data.price.online}</span>
                  <span className="text-base text-slate-400 font-medium">Onsite: {data.price.onsite}</span>
                </div>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed flex-grow">
                {data.description}
              </p>
              <div className="flex flex-wrap items-start gap-x-4 gap-y-2 mb-4 text-sm text-slate-400">
                <div className="flex items-center gap-1">
                  <Clock size={16} />
                  <span>{data.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users size={16} />
                  <span>{data.nature}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={16} className="text-yellow-400 fill-current" />
                  <span>{data.rating}</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-2">What you'll learn:</h4>
                <div className="flex flex-wrap gap-2 items-start">
                  {data.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={onButtonClick} 
                className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2 font-semibold group mt-auto"
              >
                Learn More About it
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </div>
          </>
        );
      case 'project':
        return (
          <>
            <div className="relative">
              <img src={data.image} alt={data.title} className={`${imageClasses} h-56`} />
              <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                {data.category}
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-2xl font-bold text-white">
                  {data.title}
                </h3>
              </div>
              <p className="text-slate-300 mb-4 leading-relaxed flex-grow">
                {data.description}
              </p>
              
              <div className="flex gap-3 mt-auto">
                <button
                  onClick={onButtonClick} // View proj btn
                  className="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2 font-semibold"
                >
                  <ExternalLink size={16} />
                  View Project
                </button>
                
              </div>
            </div>
          </>
        );
      case 'team':
        return (
          <>
            <div className="relative">
              <img src={data.image} alt={data.name} className={`${imageClasses} h-64`} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-1">
                {data.name}
              </h3>
              <p className="text-orange-400 font-semibold mb-2">{data.position}</p>
              <p className="text-slate-400 text-sm mb-3">{data.specialty}</p>
              <p className="text-slate-300 text-sm leading-relaxed mb-4">
                {data.bio}
              </p>
              {data.social && (
                <div className="flex gap-3 justify-center">
                  <a
                    href={data.social.linkedin}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={data.social.facebook}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <Facebook size={18} />
                  </a>
                  <a
                    href={data.social.instagram}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <Instagram size={18} />
                  </a>
                  <a
                    href={data.social.github}
                    className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                  </a>
                </div>
              )}
            </div>
          </>
        );
      case 'testimonial':
        return (
          <div className="bg-slate-900 rounded-2xl p-8 h-80 flex flex-col justify-between hover:bg-slate-700 transition-colors duration-300">
            <div>
              <div className="flex items-center mb-6">
                <Quote className="text-orange-400 mr-3" size={24} />
                <div className="flex text-yellow-400">
                  {[...Array(data.rating)].map((_, index) => (
                    <Star key={index} size={16} className="fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6 overflow-y-auto custom-scrollbar">
                "{data.text}"
              </p>
            </div>
            <div className="flex items-center mt-auto">
              <img
                src={data.image}
                alt={data.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h4 className="text-white font-semibold">{data.name}</h4>
                <p className="text-slate-400 text-sm">{data.position}</p>
              </div>
            </div>
          </div>
        );
      case 'about-feature': 
        return (
          <div className="bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300">
            <div className="mb-4">{data.icon}</div>
            <h4 className="text-white font-semibold mb-2">{data.title}</h4>
            <p className="text-slate-300 text-sm">{data.description}</p>
          </div>
        );
      default:
        return <div className="p-6 text-white">Unknown card type.</div>;
    }
  };

  if (type === 'testimonial' || type === 'about-feature') { 
    return renderContent();
  }

  return (
    <div className={cardClasses}>
      {renderContent()}
    </div>
  );
};

export default Card;
