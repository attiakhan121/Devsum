import React from 'react';
import { ArrowRight, Clock, Users, Star, ExternalLink, Github, Linkedin, Twitter, Quote } from 'lucide-react';

const Card = ({ 
  type = 'default', 
  data, 
  onButtonClick,
  onSecondaryButtonClick,
  className = '',
  children 
}) => {
  const baseClasses = "group bg-slate-900 rounded-2xl overflow-hidden hover:transform hover:scale-102 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10";
  
  const CourseCard = () => (
    <div className={`${baseClasses} flex flex-col ${className}`}>
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
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
          onClick={() => onButtonClick && onButtonClick(data)}
          className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2 font-semibold group mt-auto"
        >
          Learn More About it
          <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
        </button>
      </div>
    </div>
  );

  const ProjectCard = () => (
    <div className={`${baseClasses} flex flex-col ${className}`}>
      <div className="relative">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
        />
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

        <div className="mb-6">
          <h4 className="text-white font-semibold mb-2">Technologies used:</h4>
          <div className="flex flex-wrap gap-2 items-start">
            {data.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-orange-500/20 text-orange-400 px-3 py-1 rounded-full text-sm border border-orange-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="flex gap-3 mt-auto">
          <button 
            onClick={() => onButtonClick && onButtonClick(data)}
            className="flex-1 bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition-colors duration-300 flex items-center justify-center gap-2 font-semibold"
          >
            <ExternalLink size={16} />
            View Project
          </button>
          <button 
            onClick={() => onSecondaryButtonClick && onSecondaryButtonClick(data)}
            className="flex-1 border border-slate-600 text-slate-300 py-3 rounded-xl hover:bg-slate-700 transition-colors duration-300 flex items-center justify-center gap-2 font-semibold"
          >
            <Github size={16} />
            Source Code
          </button>
        </div>
      </div>
    </div>
  );

  const AboutCard = () => (
    <div className={`bg-slate-800 p-6 rounded-xl hover:bg-slate-700 transition-colors duration-300 ${className}`}>
      <div className="mb-4">{data.icon}</div>
      <h4 className="text-white font-semibold mb-2">{data.title}</h4>
      <p className="text-slate-300 text-sm">{data.description}</p>
    </div>
  );

  const TeamCard = () => (
    <div className={`${baseClasses} ${className}`}>
      <div className="relative">
        <img
          src={data.image}
          alt={data.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
        />
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

        <div className="flex gap-3 justify-center">
          <a
            href={data.social.linkedin}
            className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={18} />
          </a>
          <a
            href={data.social.twitter}
            className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            <Twitter size={18} />
          </a>
          <a
            href={data.social.github}
            className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-colors duration-300"
          >
            <Github size={18} />
          </a>
        </div>
      </div>
    </div>
  );

  const TestimonialCard = () => (
    <div className={`bg-slate-800 rounded-2xl p-8 h-full hover:bg-slate-700 transition-colors duration-300 ${className}`}>
      <div className="flex items-center mb-6">
        <Quote className="text-orange-400 mr-3" size={24} />
        <div className="flex text-yellow-400">
          {[...Array(data.rating)].map((_, index) => (
            <Star key={index} size={16} className="fill-current" />
          ))}
        </div>
      </div>

      <p className="text-slate-300 text-lg leading-relaxed mb-6">
        "{data.text}"
      </p>

      <div className="flex items-center">
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

  const DefaultCard = () => (
    <div className={`${baseClasses} ${className}`}>
      {children}
    </div>
  );

  //will show based on type
  switch (type) {
    case 'course':
      return CourseCard();
    case 'project':
      return ProjectCard();
    case 'about-feature':
      return AboutCard();
    case 'team':
      return TeamCard();
    case 'testimonial':
      return TestimonialCard();
    default:
      return DefaultCard();
  }
};

export default Card;