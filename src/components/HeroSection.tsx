'use client'

import React from 'react'
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react'

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image Placeholder */}
          <div className="mb-8 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 animate-glow">
              <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center text-6xl font-bold text-white">
                MK
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="gradient-text">Muhammad Kashan</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 space-y-2">
              <p className="font-semibold text-blue-400">Full-Stack Developer</p>
              <p className="text-lg">National Gold Medalist</p>
            </div>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              16-year-old certified Full Stack Web Developer with expertise in the MERN stack. 
              Passionate about building modern web applications, improving skills, and contributing to innovative projects.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400">16</div>
                <div className="text-sm text-gray-400">Years Old</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400">8+</div>
                <div className="text-sm text-gray-400">Certifications</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-400">1</div>
                <div className="text-sm text-gray-400">Gold Medal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400">2024</div>
                <div className="text-sm text-gray-400">Started Freelancing</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <button className="btn-primary px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 text-white">
                <Download size={20} />
                Download CV
              </button>
              <button 
                onClick={scrollToAbout}
                className="glass px-8 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
              >
                View My Work
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 mt-8">
              <a href="mailto:kashaniqbal623@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <button 
            onClick={scrollToAbout}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection