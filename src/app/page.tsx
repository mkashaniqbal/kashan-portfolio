'use client'

import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Github, Linkedin, Download, ArrowRight, Star, Menu, X, Instagram, Heart, ExternalLink } from 'lucide-react'
import ContactSection from '@/components/ContactSection'
import LoadingScreen from '@/components/LoadingScreen'
import BackgroundElements from '@/components/BackgroundElements'
import FAQChatbot from '@/components/FAQChatbot'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentSection, setCurrentSection] = useState('home')
  const [isLiked, setIsLiked] = useState(false)

  // Refs for GSAP animations
  const heroRef = useRef<HTMLElement>(null)
  const aboutRef = useRef<HTMLElement>(null)
  const servicesRef = useRef<HTMLElement>(null)
  const projectsRef = useRef<HTMLElement>(null)
  const testimonialsRef = useRef<HTMLElement>(null)
  const navRef = useRef<HTMLElement>(null)
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)

  // Custom cursor
  useEffect(() => {
    if (!isLoading) {
      const handleMouseMove = (e: MouseEvent) => {
        if (cursorRef.current && cursorDotRef.current) {
          gsap.to(cursorRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.3,
            ease: "power2.out"
          })
          gsap.to(cursorDotRef.current, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out"
          })
        }
      }

      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isLoading])

  // GSAP Animations after loading
  useEffect(() => {
    if (!isLoading) {
      // Navigation entrance
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
      )

      // Hero section animations
      const heroTl = gsap.timeline({ delay: 0.5 })

      heroTl.fromTo('.hero-badge',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      )

      heroTl.fromTo('.hero-title .word',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" },
        0.2
      )

      heroTl.fromTo('.hero-subtitle',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        0.8
      )

      heroTl.fromTo('.hero-cta',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        1.2
      )

      heroTl.fromTo('.hero-image',
        { scale: 0.8, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: "power2.out" },
        0.8
      )

      // Scroll-triggered animations
      gsap.utils.toArray('.reveal-section').forEach((section: any) => {
        gsap.fromTo(section,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Service cards stagger animation
      gsap.utils.toArray('.service-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.2
          }
        )
      })

      // Project cards reveal animation
      gsap.utils.toArray('.project-card').forEach((card: any, index) => {
        gsap.fromTo(card,
          { y: 100, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.15
          }
        )
      })

      // Text reveal animations
      gsap.utils.toArray('.text-reveal').forEach((text: any) => {
        gsap.fromTo(text,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse"
            }
          }
        )
      })

      // Section tracking for navigation
      const sections = ['home', 'about', 'services', 'projects', 'testimonials', 'contact']
      sections.forEach(section => {
        ScrollTrigger.create({
          trigger: `#${section}`,
          start: "top 50%",
          end: "bottom 50%",
          onEnter: () => setCurrentSection(section),
          onEnterBack: () => setCurrentSection(section)
        })
      })
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Background Elements */}
      <BackgroundElements />

      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 pointer-events-none z-50 mix-blend-difference"
        style={{ transform: 'translate(-50%, -50%)' }}
      >
        <div className="w-full h-full border border-white rounded-full opacity-50"></div>
      </div>
      <div
        ref={cursorDotRef}
        className="fixed w-1 h-1 bg-white pointer-events-none z-50 rounded-full"
        style={{ transform: 'translate(-50%, -50%)' }}
      ></div>

      {/* Navigation */}
      <nav ref={navRef} className="fixed top-0 w-full z-40 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-black rounded-full"></div>
              </div>
              <span className="text-xl font-bold tracking-tight">KASHAN</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Work', id: 'projects' },
                { name: 'Reviews', id: 'testimonials' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                    currentSection === item.id ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 h-px bg-white transition-all duration-300 ${
                    currentSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-gray-300 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10">
            <div className="px-6 py-8 space-y-6">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Work', id: 'projects' },
                { name: 'Reviews', id: 'testimonials' },
                { name: 'Contact', id: 'contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-xl font-medium text-gray-300 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" ref={heroRef} className="min-h-screen flex items-center relative pt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div className="lg:col-span-7">
              {/* Trust Badge */}
              <div className="hero-badge inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-6 py-3 mb-12 backdrop-blur-sm">
                <Star className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium tracking-wide">TRUSTED BY 50+ BUSINESSES WORLDWIDE</span>
              </div>

              {/* Main Heading */}
              <h1 className="hero-title text-6xl lg:text-8xl xl:text-9xl font-black leading-[0.9] mb-8 tracking-tight">
                <div className="overflow-hidden">
                  <div className="word">PLAN.</div>
                </div>
                <div className="overflow-hidden">
                  <div className="word">DESIGN.</div>
                </div>
                <div className="overflow-hidden">
                  <div className="word text-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">BUILD.</div>
                </div>
                <div className="overflow-hidden">
                  <div className="word">MAINTAIN.</div>
                </div>
              </h1>

              {/* Subtitle */}
              <p className="hero-subtitle text-xl lg:text-2xl text-gray-400 leading-relaxed mb-12 max-w-2xl">
                From strategic roadmaps and pixel-perfect designs to robust, scalable code
                and ongoing support, we partner with you at every step.
              </p>

              {/* CTA Buttons */}
              <div className="hero-cta flex flex-col sm:flex-row gap-6">
                <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3">
                  Book Discovery Call
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    setIsLiked(!isLiked)
                    if (!isLiked) {
                      window.open('tel:+923317430602', '_self')
                    }
                  }}
                  className={`group flex items-center justify-center gap-3 px-8 py-4 rounded-full font-semibold text-lg border-2 transition-all duration-300 hover:scale-105 ${
                    isLiked
                      ? 'bg-red-500/10 border-red-500 text-red-400 hover:bg-red-500/20'
                      : 'border-white/20 text-white hover:border-red-500 hover:text-red-400'
                  }`}
                >
                  <Heart className={`w-5 h-5 transition-all ${isLiked ? 'fill-red-400 text-red-400' : 'text-white group-hover:text-red-400'}`} />
                  {isLiked ? 'Call +923317430602' : 'Like Project'}
                </button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="hero-image relative">
                <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                  {/* Gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-2xl"></div>

                  {/* Main image container */}
                  <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 shadow-2xl">
                    <img
                      src="/images/profile.jpeg"
                      alt="Muhammad Kashan"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>

                  {/* Gold medalist badge */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-6 py-3 rounded-full text-sm font-bold rotate-12 shadow-xl border-2 border-yellow-300">
                    🥇 Gold Medalist
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center">
                    <div className="text-2xl">💻</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-gray-500 tracking-widest transform -rotate-90 origin-center">SCROLL</span>
            <div className="w-px h-16 bg-gradient-to-b from-white/50 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={aboutRef} className="reveal-section py-32 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
            <div className="lg:col-span-5">
              <div className="text-reveal space-y-8">
                <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">About Me</div>
                <h2 className="text-5xl lg:text-6xl font-black leading-tight">
                  Meet Your Next
                  <span className="block text-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Developer
                  </span>
                </h2>
                <p className="text-xl text-gray-400 leading-relaxed">
                  16-year-old National Gold Medalist with enterprise-level expertise. Started coding at 14,
                  now building production applications for international clients.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="space-y-12">
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { number: '50+', label: 'Projects Delivered' },
                    { number: '8+', label: 'Certifications' },
                    { number: '2+', label: 'Years Experience' },
                    { number: '100%', label: 'Client Satisfaction' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-3xl lg:text-4xl font-black text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-gray-400 tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Achievements */}
                <div className="space-y-6">
                  {[
                    '8+ Professional Certifications (Harvard, Google, IBM)',
                    '50+ Projects Delivered Successfully',
                    'Specialized in MERN Stack & AI Integration',
                    'Available for Remote Work Worldwide'
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group">
                      <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-6 pt-8">
                  <a
                    href="/CV.pdf"
                    download="Muhammad_Kashan_CV.pdf"
                    className="group bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                  >
                    <Download size={20} />
                    Download CV
                  </a>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>Lahore, Pakistan</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>Available for Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" ref={servicesRef} className="reveal-section py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="text-reveal space-y-6">
              <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">Services</div>
              <h2 className="text-5xl lg:text-6xl font-black">
                What I Do
                <span className="block text-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Best
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Specialized in modern web development with enterprise-grade solutions
              </p>
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Frontend Development',
                description: 'React, Next.js, TypeScript with pixel-perfect designs',
                features: ['Responsive Design', 'Performance Optimization', 'Modern Frameworks'],
                icon: '🎨'
              },
              {
                title: 'Backend Development',
                description: 'Node.js, databases, and scalable API architecture',
                features: ['RESTful APIs', 'Database Design', 'Cloud Integration'],
                icon: '⚙️'
              },
              {
                title: 'Full-Stack Solutions',
                description: 'Complete end-to-end application development',
                features: ['MERN Stack', 'DevOps', 'Deployment'],
                icon: '🚀'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="service-card group bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 cursor-pointer hover:scale-105"
              >
                <div className="text-4xl mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" ref={projectsRef} className="reveal-section py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="text-reveal space-y-6">
              <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">Portfolio</div>
              <h2 className="text-5xl lg:text-6xl font-black">
                Featured
                <span className="block text-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real-world applications built for clients across different industries
              </p>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {[
              {
                title: 'DeFi Real Estate Platform',
                description: 'Decentralized real estate investment platform combining blockchain technology with property investment, enabling tokenized real estate transactions.',
                tech: ['React', 'TypeScript', 'Solidity', 'Tailwind CSS', 'Web3'],
                status: 'Live',
                type: 'Blockchain DeFi',
                github: 'https://github.com/mkashaniqbal/defi-real-estate',
                live: 'https://defi-real-estate-weld.vercel.app/',
                featured: true
              },
              {
                title: 'AI-Powered Resume Analyzer',
                description: 'Intelligent resume analysis platform using machine learning to provide comprehensive feedback and optimization suggestions.',
                tech: ['React', 'Python', 'TensorFlow', 'NLP APIs'],
                status: 'Live',
                type: 'AI/ML Application',
                featured: true
              },
              {
                title: 'Smart Expense Tracker with Visual Insights',
                description: 'Advanced expense tracking application with AI-powered categorization and comprehensive visual analytics.',
                tech: ['Next.js', 'Chart.js', 'MongoDB', 'Machine Learning'],
                status: 'Live',
                type: 'FinTech Application'
              },
              {
                title: 'Real-Time Project Management Board',
                description: 'Collaborative project management platform with real-time updates, drag-and-drop functionality, and team analytics.',
                tech: ['React', 'Socket.io', 'MongoDB', 'Chart.js'],
                status: 'Live',
                type: 'SaaS Application'
              }
            ].map((project, index) => (
              <div
                key={index}
                className={`project-card group bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 cursor-pointer hover:scale-[1.02] ${
                  project.featured ? 'lg:col-span-2' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 font-medium tracking-wide">{project.type}</span>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-xs font-medium border ${
                    project.status === 'Live'
                      ? 'bg-green-500/10 border-green-500/20 text-green-400'
                      : 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>

                <p className="text-gray-400 mb-8 leading-relaxed">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 rounded-lg px-3 py-1 text-xs text-gray-300 backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-6">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-white hover:text-gray-300 transition-colors font-medium"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </a>
                  ) : (
                    <span className="text-gray-500 font-medium">Coming Soon</span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors font-medium"
                    >
                      View Code
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Tech Stack Showcase - Automatic Logo Slider */}
          <div className="mt-20 pt-16 border-t border-white/10">
            <div className="text-center mb-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
                Built with Modern Technologies
              </h3>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Utilizing cutting-edge tools and frameworks to deliver exceptional results
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Full Width Logo Slider */}
      <div className="relative overflow-hidden w-full bg-transparent">
        {/* Fade overlays for smooth appearance */}
        <div className="absolute left-0 top-0 w-40 h-full bg-gradient-to-r from-[#0f0f23] via-[#1a1a2e]/90 via-[#16213e]/70 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-40 h-full bg-gradient-to-l from-[#0f0f23] via-[#1a1a2e]/90 via-[#16213e]/70 to-transparent z-10"></div>

        {/* Slider Container */}
        <div className="flex animate-infinite-scroll space-x-8 py-12">
                {/* First set of logos */}
                {[
                  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
                  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
                  { name: 'Next.js', icon: '▲', color: 'from-gray-400 to-white' },
                  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-400' },
                  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-500' },
                  { name: 'Blockchain', icon: '⛓️', color: 'from-yellow-400 to-orange-500' },
                  { name: 'AI/ML', icon: '🤖', color: 'from-purple-500 to-pink-500' },
                  { name: 'GSAP', icon: '🎬', color: 'from-green-400 to-blue-500' },
                  { name: 'Tailwind', icon: '💨', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Vercel', icon: '▲', color: 'from-gray-900 to-gray-700' },
                  { name: 'Git', icon: '📝', color: 'from-orange-500 to-red-500' },
                  { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' }
                ].map((tech, index) => (
                  <div
                    key={`first-${index}`}
                    className="flex-shrink-0 group relative"
                  >
                    <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-xl p-6 min-w-[120px] hover:border-white/15 hover:bg-white/8 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {[
                  { name: 'React', icon: '⚛️', color: 'from-blue-400 to-cyan-400' },
                  { name: 'TypeScript', icon: '📘', color: 'from-blue-600 to-blue-400' },
                  { name: 'Next.js', icon: '▲', color: 'from-gray-400 to-white' },
                  { name: 'Node.js', icon: '🟢', color: 'from-green-500 to-green-400' },
                  { name: 'MongoDB', icon: '🍃', color: 'from-green-600 to-green-500' },
                  { name: 'Blockchain', icon: '⛓️', color: 'from-yellow-400 to-orange-500' },
                  { name: 'AI/ML', icon: '🤖', color: 'from-purple-500 to-pink-500' },
                  { name: 'GSAP', icon: '🎬', color: 'from-green-400 to-blue-500' },
                  { name: 'Tailwind', icon: '💨', color: 'from-cyan-400 to-blue-500' },
                  { name: 'Vercel', icon: '▲', color: 'from-gray-900 to-gray-700' },
                  { name: 'Git', icon: '📝', color: 'from-orange-500 to-red-500' },
                  { name: 'AWS', icon: '☁️', color: 'from-orange-400 to-yellow-500' }
                ].map((tech, index) => (
                  <div
                    key={`second-${index}`}
                    className="flex-shrink-0 group relative"
                  >
                    <div className="bg-white/3 backdrop-blur-sm border border-white/5 rounded-xl p-6 min-w-[120px] hover:border-white/15 hover:bg-white/8 transition-all duration-300 hover:scale-105 text-center relative overflow-hidden">
                      {/* Gradient background on hover */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl`}></div>
                      <div className="relative z-10">
                        <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">{tech.icon}</div>
                        <div className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                          {tech.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <section id="testimonials" ref={testimonialsRef} className="reveal-section py-32 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="text-reveal space-y-6">
              <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">Testimonials</div>
              <h2 className="text-5xl lg:text-6xl font-black">
                What Clients
                <span className="block text-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  Say
                </span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from businesses that trusted me with their projects
              </p>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc.',
                location: 'San Francisco, USA',
                rating: 5,
                text: 'Muhammad delivered our e-commerce platform ahead of schedule. His technical skills are exceptional for someone so young. The code quality and attention to detail exceeded our expectations.',
                avatar: 'SJ'
              },
              {
                name: 'Ahmed Al-Rashid',
                role: 'Founder, Digital Solutions',
                location: 'Dubai, UAE',
                rating: 5,
                text: 'Working with Kashan was a game-changer for our startup. He built our entire web application from scratch and integrated complex AI features seamlessly. Highly recommended!',
                avatar: 'AR'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Project Manager, InnovateLab',
                location: 'London, UK',
                rating: 5,
                text: 'Impressive work ethic and communication. Muhammad understood our requirements perfectly and delivered a pixel-perfect application. Will definitely work with him again.',
                avatar: 'ER'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-black/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:border-white/20 transition-all duration-500 hover:scale-105">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-8 italic leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <button className="group bg-white text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3 mx-auto">
              Start Your Project Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Logo and Copyright */}
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-black rounded-full"></div>
                </div>
                <span className="text-xl font-bold tracking-tight">KASHAN</span>
              </div>
              <p className="text-gray-400 text-sm">© 2024 Muhammad Kashan. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6">
              {[
                { icon: Github, href: 'https://github.com/mkashaniqbal', label: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/mkashan-iqbal', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/devkashaniqbal', label: 'Instagram' },
                { icon: Mail, href: 'mailto:kashaniqbal623@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

      {/* FAQ Chatbot */}
      <FAQChatbot />
    </div>
  )
}