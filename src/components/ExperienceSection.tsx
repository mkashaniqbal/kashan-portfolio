'use client'

import React from 'react'
import { Briefcase, Award, Calendar, MapPin, ExternalLink } from 'lucide-react'

const ExperienceSection = () => {
  const certifications = [
    {
      title: 'Full Stack Software Development Certification',
      issuer: 'Nexskill',
      date: '2024',
      type: 'Professional'
    },
    {
      title: 'Introduction to Generative AI',
      issuer: 'Google',
      date: '2024',
      type: 'AI/ML'
    },
    {
      title: 'Problem Solving',
      issuer: 'HackerRank',
      date: '2024',
      type: 'Technical'
    },
    {
      title: 'ReactJS Certification',
      issuer: 'HackerRank',
      date: '2024',
      type: 'Frontend'
    },
    {
      title: 'MERN Stack',
      issuer: 'PFTP',
      date: '2024',
      type: 'Full Stack'
    },
    {
      title: 'Foundations of Digital Marketing',
      issuer: 'Google',
      date: '2024',
      type: 'Marketing'
    },
    {
      title: 'Web Development',
      issuer: 'IBM',
      date: '2024',
      type: 'Professional'
    },
    {
      title: 'CS\'50 AI Development',
      issuer: 'Harvard University',
      date: '2024',
      type: 'AI/ML'
    }
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'AI/ML': return 'from-purple-500 to-pink-500'
      case 'Frontend': return 'from-blue-500 to-cyan-500'
      case 'Full Stack': return 'from-green-500 to-teal-500'
      case 'Professional': return 'from-orange-500 to-red-500'
      case 'Technical': return 'from-indigo-500 to-purple-500'
      case 'Marketing': return 'from-pink-500 to-rose-500'
      default: return 'from-gray-500 to-gray-600'
    }
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience & Certifications</h2>
          <p className="text-xl text-gray-400">My professional journey and achievements</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Briefcase className="text-blue-400" size={24} />
              Professional Experience
            </h3>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              <div className="relative">
                {/* Current Position */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Briefcase size={20} className="text-white" />
                  </div>
                  <div className="glass p-6 rounded-xl card-hover flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h4 className="text-xl font-semibold text-white">Freelance Full Stack Developer</h4>
                      <span className="text-sm text-green-400 font-medium">Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-3">
                      <Calendar size={16} />
                      <span>February 2024 – Present</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 mb-4">
                      <MapPin size={16} />
                      <span>Fiverr & Local Freelancer</span>
                    </div>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Developed and deployed responsive and scalable web applications for local and international clients.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Built and maintained front-end and back-end systems using the MERN stack.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span>Collaborated with clients to deliver custom solutions tailored to their business needs.</span>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Achievement */}
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Award size={20} className="text-white" />
                  </div>
                  <div className="glass p-6 rounded-xl card-hover flex-1">
                    <h4 className="text-xl font-semibold text-white mb-3">National Gold Medalist</h4>
                    <p className="text-gray-300">
                      Achieved national recognition for excellence in computer sciences and programming, 
                      demonstrating exceptional technical skills and problem-solving abilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Award className="text-yellow-400" size={24} />
              Certifications
            </h3>

            <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass p-4 rounded-xl card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="font-semibold text-white mb-1">{cert.title}</h4>
                      <p className="text-gray-400 text-sm mb-2">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getTypeColor(cert.type)} text-white`}>
                          {cert.type}
                        </span>
                        <span className="text-gray-500 text-xs">{cert.date}</span>
                      </div>
                    </div>
                    <ExternalLink size={16} className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-8 glass p-6 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">Certification Summary</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400">8</div>
                  <div className="text-sm text-gray-400">Total Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-400">2024</div>
                  <div className="text-sm text-gray-400">Completion Year</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection