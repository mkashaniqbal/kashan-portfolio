'use client'

import React from 'react'
import { MapPin, Mail, Phone, Award, Calendar, GraduationCap } from 'lucide-react'

const AboutSection = () => {
  const expertise = [
    'Web Development',
    'Cloud Computing', 
    'Management',
    'Creativity',
    'Critical Thinking',
    'Leadership',
    'Debugging',
    'Testing',
    'Optimization',
    'Deployment',
    'Teamwork'
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-xl text-gray-400">Get to know more about my journey and expertise</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Personal Info */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl card-hover">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Award className="text-yellow-400" size={24} />
                  <span className="text-lg font-semibold text-yellow-400">National Gold Medalist</span>
                </div>

                <p className="text-gray-300 leading-relaxed text-lg">
                  I am a 16-year-old certified Full Stack Web Developer with expertise in the MERN stack. 
                  Passionate about building modern web applications, improving skills, and contributing to innovative projects.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="text-blue-400" size={20} />
                    <span>Johar Town, Lahore, Pakistan</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="text-purple-400" size={20} />
                    <span>kashaniqbal623@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="text-green-400" size={20} />
                    <span>+92-3317430602</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <GraduationCap className="text-blue-400" size={20} />
                    <span className="font-semibold text-white">Education</span>
                  </div>
                  <div className="ml-7">
                    <p className="text-gray-300">Matriculation in Computer Sciences</p>
                    <p className="text-gray-400 text-sm">Unique Group Of Institution (2024-2026)</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center gap-3 mb-3">
                    <Calendar className="text-pink-400" size={20} />
                    <span className="font-semibold text-white">Languages</span>
                  </div>
                  <div className="ml-7 space-y-1">
                    <p className="text-gray-300">English - <span className="text-blue-400">Professional</span></p>
                    <p className="text-gray-300">Urdu - <span className="text-green-400">Native</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Expertise */}
          <div className="space-y-8">
            <div className="glass p-8 rounded-2xl card-hover">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Award className="text-yellow-400" size={24} />
                Areas of Expertise
              </h3>
              
              <div className="grid grid-cols-2 gap-3">
                {expertise.map((skill, index) => (
                  <div 
                    key={skill}
                    className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-3 text-center hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-sm font-medium text-gray-300">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Preview */}
            <div className="glass p-8 rounded-2xl card-hover">
              <h3 className="text-2xl font-bold text-white mb-6">Key Certifications</h3>
              <div className="space-y-3">
                {[
                  'Full Stack Software Development | Nexskill',
                  'Introduction to Generative AI | Google',
                  'CS\'50 AI Development | Harvard University',
                  'ReactJS Certification | HackerRank'
                ].map((cert, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">{cert}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 text-center">
                <span className="text-blue-400 text-sm font-medium">+ 4 more certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection