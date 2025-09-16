'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Code, Database, Cloud, Smartphone, Brain, Server, Globe, Zap } from 'lucide-react'

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const skills = [
    { name: 'JavaScript', level: 85, icon: Code, color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js', level: 75, icon: Server, color: 'from-green-400 to-emerald-500' },
    { name: 'ReactJS', level: 95, icon: Code, color: 'from-cyan-400 to-blue-500' },
    { name: 'MongoDB', level: 85, icon: Database, color: 'from-green-500 to-teal-500' },
    { name: 'Solidity', level: 65, icon: Brain, color: 'from-purple-400 to-indigo-500' },
    { name: 'Cloud (AWS)', level: 50, icon: Cloud, color: 'from-orange-400 to-red-500' },
    { name: 'Tailwind/Bootstrap', level: 90, icon: Smartphone, color: 'from-pink-400 to-rose-500' }
  ]

  const techStack = [
    { name: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'], icon: Globe },
    { name: 'Backend', techs: ['Node.js', 'Express', 'MongoDB', 'RESTful APIs'], icon: Server },
    { name: 'Tools & Others', techs: ['Git', 'AWS', 'Docker', 'Vercel'], icon: Zap },
    { name: 'Blockchain', techs: ['Solidity', 'Web3', 'Smart Contracts', 'DApps'], icon: Brain }
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-20 relative" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-400">My technical expertise and proficiency levels</p>
        </div>

        {/* Skills Progress Bars */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Proficiency Levels</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon
              return (
                <div key={skill.name} className="glass p-6 rounded-xl card-hover">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${skill.color}`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-white">{skill.name}</span>
                        <span className="text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="skill-bar h-3">
                        <div 
                          className={`skill-progress bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                          style={{ 
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${index * 0.2}s`
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Technology Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category, index) => {
              const IconComponent = category.icon
              return (
                <div 
                  key={category.name} 
                  className="glass p-6 rounded-xl card-hover"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center mb-4">
                    <div className="inline-flex p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 mb-3">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-white">{category.name}</h4>
                  </div>
                  <div className="space-y-2">
                    {category.techs.map((tech, techIndex) => (
                      <div 
                        key={tech}
                        className="text-center p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-gray-300 text-sm"
                        style={{ animationDelay: `${(index * 0.1) + (techIndex * 0.05)}s` }}
                      >
                        {tech}
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="glass p-8 rounded-2xl inline-block">
            <h4 className="text-xl font-bold text-white mb-4">Currently Learning</h4>
            <div className="flex flex-wrap justify-center gap-3">
              {['TypeScript', 'GraphQL', 'Docker', 'Kubernetes', 'AI/ML'].map((tech) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-full text-sm text-gray-300 hover:from-green-500/30 hover:to-blue-500/30 transition-all duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection