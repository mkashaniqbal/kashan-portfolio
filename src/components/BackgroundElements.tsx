'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export default function BackgroundElements() {
  const containerRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animated text elements
    const textElements = gsap.utils.toArray('.bg-text')

    textElements.forEach((text: any, index) => {
      gsap.to(text, {
        y: -50,
        rotation: index % 2 === 0 ? 5 : -5,
        duration: 20 + index * 5,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: index * 2
      })

      // Parallax effect based on scroll
      gsap.to(text, {
        y: (i) => (i - textElements.length / 2) * 100,
        scrollTrigger: {
          trigger: text,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      })
    })

    // Create floating particles
    const createParticle = () => {
      if (!particlesRef.current) return

      const particle = document.createElement('div')
      particle.className = 'particle absolute rounded-full opacity-20'

      const size = Math.random() * 4 + 2
      const duration = Math.random() * 20 + 10
      const startX = Math.random() * window.innerWidth
      const startY = window.innerHeight + 50
      const endY = -50
      const drift = (Math.random() - 0.5) * 200

      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${startX}px`
      particle.style.top = `${startY}px`
      particle.style.background = `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`

      particlesRef.current.appendChild(particle)

      gsap.to(particle, {
        y: endY - startY,
        x: drift,
        rotation: 360,
        duration: duration,
        ease: "none",
        onComplete: () => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle)
          }
        }
      })
    }

    // Create particles periodically
    const particleInterval = setInterval(createParticle, 800)

    // Floating geometric shapes
    const shapes = gsap.utils.toArray('.floating-shape')
    shapes.forEach((shape: any, index) => {
      gsap.to(shape, {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-180, 180)",
        duration: "random(15, 25)",
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: index * 3
      })

      // Mouse interaction
      shape.addEventListener('mouseenter', () => {
        gsap.to(shape, {
          scale: 1.2,
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.out"
        })
      })

      shape.addEventListener('mouseleave', () => {
        gsap.to(shape, {
          scale: 1,
          opacity: 0.1,
          duration: 0.3,
          ease: "power2.out"
        })
      })
    })

    return () => {
      clearInterval(particleInterval)
    }
  }, [])

  const backgroundTexts = [
    { text: 'DEVELOPER', size: 'text-9xl', opacity: '0.02', top: '10%', left: '5%' },
    { text: 'CREATIVE', size: 'text-8xl', opacity: '0.03', top: '25%', right: '10%' },
    { text: 'INNOVATIVE', size: 'text-7xl', opacity: '0.02', top: '45%', left: '15%' },
    { text: 'FULL-STACK', size: 'text-6xl', opacity: '0.04', top: '65%', right: '5%' },
    { text: 'BLOCKCHAIN', size: 'text-8xl', opacity: '0.02', top: '80%', left: '10%' },
    { text: 'AI/ML', size: 'text-5xl', opacity: '0.05', top: '15%', right: '30%' },
    { text: 'REACT', size: 'text-4xl', opacity: '0.03', top: '35%', left: '70%' },
    { text: 'NEXT.JS', size: 'text-6xl', opacity: '0.02', top: '55%', right: '25%' },
    { text: 'NODE.JS', size: 'text-5xl', opacity: '0.04', top: '75%', left: '60%' },
    { text: 'TYPESCRIPT', size: 'text-7xl', opacity: '0.02', top: '90%', right: '15%' }
  ]

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated Background Texts */}
      <div className="absolute inset-0">
        {backgroundTexts.map((item, index) => (
          <div
            key={index}
            className={`bg-text absolute font-black select-none ${item.size}`}
            style={{
              opacity: item.opacity,
              top: item.top,
              left: item.left,
              right: item.right,
              color: '#ffffff',
              transform: `rotate(${Math.random() * 20 - 10}deg)`,
              fontWeight: 900,
              letterSpacing: '-0.02em'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Circles */}
        <div
          className="floating-shape absolute w-32 h-32 border border-white/5 rounded-full opacity-10"
          style={{ top: '15%', left: '20%' }}
        ></div>
        <div
          className="floating-shape absolute w-20 h-20 border border-white/10 rounded-full opacity-10"
          style={{ top: '60%', right: '15%' }}
        ></div>
        <div
          className="floating-shape absolute w-16 h-16 border border-white/5 rounded-full opacity-10"
          style={{ top: '80%', left: '70%' }}
        ></div>

        {/* Squares */}
        <div
          className="floating-shape absolute w-24 h-24 border border-white/5 rotate-45 opacity-10"
          style={{ top: '30%', right: '30%' }}
        ></div>
        <div
          className="floating-shape absolute w-16 h-16 border border-white/10 rotate-12 opacity-10"
          style={{ top: '70%', left: '25%' }}
        ></div>

        {/* Triangles using CSS */}
        <div
          className="floating-shape absolute opacity-10"
          style={{
            top: '40%',
            left: '80%',
            width: 0,
            height: 0,
            borderLeft: '20px solid transparent',
            borderRight: '20px solid transparent',
            borderBottom: '35px solid rgba(255, 255, 255, 0.1)'
          }}
        ></div>
        <div
          className="floating-shape absolute opacity-10"
          style={{
            top: '85%',
            right: '40%',
            width: 0,
            height: 0,
            borderLeft: '15px solid transparent',
            borderRight: '15px solid transparent',
            borderBottom: '26px solid rgba(255, 255, 255, 0.05)'
          }}
        ></div>

        {/* Hexagon */}
        <div
          className="floating-shape absolute w-20 h-20 opacity-10"
          style={{
            top: '25%',
            left: '50%',
            background: 'rgba(255, 255, 255, 0.02)',
            clipPath: 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
          }}
        ></div>

        {/* Lines */}
        <div
          className="floating-shape absolute bg-white/5 opacity-10"
          style={{
            top: '50%',
            left: '10%',
            width: '100px',
            height: '1px',
            transform: 'rotate(45deg)'
          }}
        ></div>
        <div
          className="floating-shape absolute bg-white/5 opacity-10"
          style={{
            top: '20%',
            right: '20%',
            width: '80px',
            height: '1px',
            transform: 'rotate(-30deg)'
          }}
        ></div>
      </div>

      {/* Dynamic Particles */}
      <div ref={particlesRef} className="absolute inset-0"></div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-black/5 to-transparent"></div>

      {/* Subtle noise texture */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.005) 0%, transparent 50%),
            radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.005) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.002) 0%, transparent 50%)
          `
        }}
      ></div>

      {/* Animated Grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
          animation: 'grid-move 20s linear infinite'
        }}
      ></div>

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(100px, 100px); }
        }
      `}</style>
    </div>
  )
}