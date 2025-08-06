"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Linkedin, Github, Twitter, Mail, MapPin, Calendar, Award, Users } from 'lucide-react'
//import { Card, CardContent } from "@/components/ui/card"
//import { Badge } from "@/components/ui/badge"
import Card from './../../Components/Card';
import CardContent from './../../Components/Card';
import Badge from './../../Components/Card';

const teamMembers = [
  {
    id: 1,
    name: "Tariq Khan",
    role: "Chief Executive Officer",
    department: "Leadership",
    image: "/professional-ceo.png",
    bio: "2+ years of experience in web development with expertise in React, Node.js, and cloud technologies.",
    skills: ["Leadership", "Strategy", "Business Development", "Team Management"],
    experience: "8+ years",
    location: "San Francisco, CA",
    joinDate: "2020",
    achievements: 15,
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "tariq@devsom.com"
    }
  },
  {
    id: 2,
    name: "Attia Khan",
    role: "Chief Directing Officer",
    department: "Frontend Specialist",
    image: "/placeholder-2ugn8.png",
    bio: "Frontend expert with 3+ years experience at top tech companies. Specializes in React and modern UI/UX.",
    skills: ["React", "TypeScript", "UI/UX Design", "Team Leadership"],
    experience: "6+ years",
    location: "New York, NY",
    joinDate: "2021",
    achievements: 12,
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "attia@devsom.com"
    }
  },
  {
    id: 3,
    name: "Haseeb Ahmed",
    role: "Chief Technology Officer",
    department: "Backend Specialist",
    image: "/professional-cto.png",
    bio: "Backend specialist with expertise in scalable systems, databases, cloud infrastructure, and DevOps practices.",
    skills: ["Node.js", "Python", "AWS", "DevOps", "System Architecture"],
    experience: "7+ years",
    location: "Austin, TX",
    joinDate: "2019",
    achievements: 18,
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "haseeb@devsom.com"
    }
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Senior Full Stack Developer",
    department: "Development",
    image: "/placeholder-c8tcc.png",
    bio: "Full-stack developer passionate about creating seamless user experiences with modern web technologies.",
    skills: ["React", "Node.js", "PostgreSQL", "GraphQL"],
    experience: "5+ years",
    location: "Seattle, WA",
    joinDate: "2022",
    achievements: 10,
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "sarah@devsom.com"
    }
  },
  {
    id: 5,
    name: "Michael Chen",
    role: "UI/UX Design Lead",
    department: "Design",
    image: "/professional-male-designer.png",
    bio: "Creative designer with a passion for user-centered design and innovative digital experiences.",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
    experience: "4+ years",
    location: "Los Angeles, CA",
    joinDate: "2023",
    achievements: 8,
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "michael@devsom.com"
    }
  },
  {
    id: 6,
    name: "Emily Rodriguez",
    role: "DevOps Engineer",
    department: "Infrastructure",
    image: "/professional-female-engineer.png",
    bio: "DevOps expert specializing in cloud infrastructure, CI/CD pipelines, and system reliability.",
    skills: ["Docker", "Kubernetes", "AWS", "Terraform", "Monitoring"],
    experience: "6+ years",
    location: "Denver, CO",
    joinDate: "2021",
    achievements: 14,
    social: {
      linkedin: "#",
      github: "#",
      twitter: "#",
      email: "emily@devsom.com"
    }
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
}

const cardHoverVariants = {
  hover: {
    y: -10,
    scale: 1.02,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 20
    }
  }
}

export default function TeamPage() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center py-20 px-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-block mb-6"
          >
            <Badge variant="outline" className="border-orange-500 text-orange-500 px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2" />
              Our Amazing Team
            </Badge>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Meet Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Expert Team
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Learn from industry professionals who have worked at top tech companies
            and are passionate about teaching and innovation.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="container mx-auto px-4 pb-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredCard(member.id)}
                onHoverEnd={() => setHoveredCard(null)}
                className="group"
              >
                <Card 
                  type="team"
                  data={{
                    name: member.name,
                    position: member.role,
                    specialty: member.department,
                    image: member.image,
                    bio: member.bio,
                    social: member.social
                  }}
                  className="bg-slate-800/50 border-slate-700 backdrop-blur-sm overflow-hidden h-full"
                >
                  <motion.div
                    variants={cardHoverVariants}
                    className="relative"
                  >
                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 pointer-events-none"
                      animate={{ opacity: hoveredCard === member.id ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center py-20 px-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              Join Our Team?
            </span>
          </h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for innovation and excellence.
          </p>
          <motion.button
            className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}
