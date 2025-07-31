import React from 'react'; 
import { Award, Users, BookOpen, Target } from 'lucide-react';

export const aboutFeatures = [
  {
    icon: <BookOpen className="text-orange-400" size={32} />,
    title: 'Practical Learning',
    description: 'Learn by building real time projects that matter in the industry.'
  },
  {
    icon: <Users className="text-orange-400" size={32} />,
    title: 'Expert Mentorship',
    description: 'Get guidance from industry professionals with years of experience.'
  },
  {
    icon: <Award className="text-orange-400" size={32} />,
    title: 'Career Support',
    description: 'Job placement assistance and career guidance throughout your journey.'
  },
  {
    icon: <Target className="text-orange-400" size={32} />,
    title: 'Industry Focus',
    description: 'Curriculum designed based on current industry demands and trends.'
  }
];

