'use client'

import React, { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram, MessageSquare, ArrowRight } from 'lucide-react'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const formRef = useRef<HTMLDivElement>(null)
  const contactInfoRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Contact section entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    })

    tl.fromTo('.contact-header',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    )

    tl.fromTo('.contact-info',
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      0.3
    )

    tl.fromTo('.contact-form',
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      0.3
    )

    // Contact info cards stagger animation
    gsap.utils.toArray('.contact-card').forEach((card: any, index) => {
      gsap.fromTo(card,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      )
    })

    // Form fields animation
    gsap.utils.toArray('.form-field').forEach((field: any, index) => {
      gsap.fromTo(field,
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          delay: index * 0.1
        }
      )
    })

  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    console.log('Form submitted:', formData)
    setIsSubmitting(false)

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kashaniqbal623@gmail.com',
      link: 'mailto:kashaniqbal623@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92-3317430602',
      link: 'tel:+923317430602',
      description: 'Call for urgent matters'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      link: '#',
      description: 'Available remotely worldwide'
    }
  ]

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="contact-header text-center mb-20">
          <div className="space-y-6">
            <div className="text-sm font-medium text-gray-400 tracking-widest uppercase">Contact</div>
            <h2 className="text-5xl lg:text-6xl font-black">
              Let's Create
              <span className="block text-gradient bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something amazing together.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Contact Information */}
          <div className="lg:col-span-5">
            <div className="contact-info space-y-12">
              {/* Intro */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">Get In Touch</h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  I'm always excited to work on new projects and collaborate with talented individuals.
                  Whether you have a project in mind or just want to connect, I'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <div
                      key={index}
                      className="contact-card group bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-500 cursor-pointer hover:scale-105"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400 mb-1">{info.label}</div>
                          <div className="text-white font-semibold mb-1 group-hover:text-gradient group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 group-hover:bg-clip-text group-hover:text-transparent transition-all">
                            {info.value}
                          </div>
                          <div className="text-xs text-gray-500">{info.description}</div>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-bold text-white">Follow My Journey</h4>
                <div className="flex gap-4">
                  {[
                    { icon: Github, href: 'https://github.com/mkashaniqbal', label: 'GitHub' },
                    { icon: Linkedin, href: 'https://www.linkedin.com/in/mkashan-iqbal', label: 'LinkedIn' },
                    { icon: Instagram, href: 'https://www.instagram.com/devkashaniqbal', label: 'Instagram' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-110 group"
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability Status */}
              <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-semibold">Available for Projects</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new projects and collaborations.
                  Response time is usually within 24 hours.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div ref={formRef} className="contact-form bg-black/30 backdrop-blur-sm border border-white/10 rounded-3xl p-8 lg:p-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">Send Me a Message</h3>
                  <p className="text-gray-400">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="form-field">
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white/20"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white/20"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-3">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white/20"
                      placeholder="Project Discussion"
                    />
                  </div>

                  <div className="form-field">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:border-white/30 focus:outline-none focus:ring-0 transition-all duration-300 hover:border-white/20 resize-none"
                      placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full bg-white text-black px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-20 border-t border-white/10">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Ready to Start?</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Let's discuss your project requirements and how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+923317430602"
                className="group bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20 flex items-center justify-center gap-3"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:kashaniqbal623@gmail.com"
                className="group border border-white/20 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:border-white/40 flex items-center justify-center gap-3"
              >
                <Mail className="w-5 h-5" />
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection