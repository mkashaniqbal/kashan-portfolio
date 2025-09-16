'use client'

import React from 'react'
import { ExternalLink, Github, Code, Database, Brain, ShoppingCart, Cloud, MessageSquare } from 'lucide-react'

const ProjectsSection = () => {
  const projects = [
    {
      title: 'AI-Powered Developer Workspace',
      description: 'A comprehensive development environment with AI-powered code review, bug detection, and intelligent suggestions. Features real-time collaboration and advanced project management.',
      tech: ['React', 'Node.js', 'OpenAI API', 'Socket.io', 'MongoDB'],
      category: 'AI/ML',
      status: 'In Development',
      icon: Brain,
      gradient: 'from-purple-500 to-pink-500',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured e-commerce platform with payment integration, admin dashboard, inventory management, and real-time analytics.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind'],
      category: 'Full Stack',
      status: 'Completed',
      icon: ShoppingCart,
      gradient: 'from-green-500 to-teal-500',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Real-Time Chat Application',
      description: 'Modern chat application with real-time messaging, file sharing, group chats, and online status indicators using Socket.io.',
      tech: ['React', 'Express', 'Socket.io', 'MongoDB', 'Cloudinary'],
      category: 'Real-time',
      status: 'Completed',
      icon: MessageSquare,
      gradient: 'from-blue-500 to-cyan-500',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management tool with drag-and-drop functionality, team collaboration, and productivity analytics.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Charts.js'],
      category: 'Productivity',
      status: 'Completed',
      icon: Code,
      gradient: 'from-orange-500 to-red-500',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Weather Analytics Dashboard',
      description: 'Interactive weather dashboard with location services, forecasting, data visualization, and weather maps integration.',
      tech: ['React', 'Weather APIs', 'Mapbox', 'Chart.js', 'Tailwind'],
      category: 'Data Visualization',
      status: 'Completed',
      icon: Cloud,
      gradient: 'from-indigo-500 to-purple-500',
      image: '/api/placeholder/400/250'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Comprehensive finance management app with expense tracking, budget planning, investment monitoring, and financial insights.',
      tech: ['React', 'Node.js', 'MongoDB', 'Recharts', 'Plaid API'],
      category: 'Finance',
      status: 'In Development',
      icon: Database,
      gradient: 'from-pink-500 to-rose-500',
      image: '/api/placeholder/400/250'
    }
  ]

  const getStatusColor = (status: string) => {
    return status === 'Completed' ? 'text-green-400' : 'text-yellow-400'
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML': return 'from-purple-500/20 to-pink-500/20 border-purple-500/30'
      case 'Full Stack': return 'from-green-500/20 to-teal-500/20 border-green-500/30'
      case 'Real-time': return 'from-blue-500/20 to-cyan-500/20 border-blue-500/30'
      case 'Productivity': return 'from-orange-500/20 to-red-500/20 border-orange-500/30'
      case 'Data Visualization': return 'from-indigo-500/20 to-purple-500/20 border-indigo-500/30'
      case 'Finance': return 'from-pink-500/20 to-rose-500/20 border-pink-500/30'
      default: return 'from-gray-500/20 to-gray-600/20 border-gray-500/30'
    }
  }

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-400">Showcasing my latest work and innovations</p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div 
                key={index}
                className="glass rounded-2xl overflow-hidden card-hover group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Image/Icon */}
                <div className={`relative h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <IconComponent size={64} className="text-white/80 z-10" />
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getCategoryColor(project.category)} border`}>
                      {project.category}
                    </span>
                  </div>

                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Tech Stack:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300 hover:bg-white/10 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 btn-primary px-4 py-2 rounded-lg font-medium flex items-center justify-center gap-2 text-sm">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="glass px-4 py-2 rounded-lg hover:bg-white/10 transition-colors flex items-center justify-center">
                      <Github size={16} className="text-gray-400" />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Projects Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">6+</div>
            <div className="text-gray-400 text-sm">Projects Completed</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
            <div className="text-gray-400 text-sm">Technologies Used</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">100%</div>
            <div className="text-gray-400 text-sm">Client Satisfaction</div>
          </div>
          <div className="glass p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-gray-400 text-sm">Deployment Uptime</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-4">Interested in working together?</h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              I'm always open to discussing new opportunities, creative projects, or potential collaborations.
            </p>
            <button className="btn-primary px-8 py-3 rounded-full font-semibold text-white">
              Let's Build Something Amazing
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection