'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoadingScreenProps {
  onComplete: () => void
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const logoRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(onComplete, 500)
      }
    })

    // Counter animation
    const counter = { value: 0 }
    tl.to(counter, {
      value: 100,
      duration: 2.5,
      ease: "power2.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.value).toString()
        }
      }
    })

    // Logo and text animations
    tl.from(logoRef.current, {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)"
    }, 0.5)

    tl.from(textRef.current?.children || [], {
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.1,
      ease: "power2.out"
    }, 1)

    // Exit animation
    tl.to([counterRef.current, textRef.current, logoRef.current], {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.in"
    }, 3)

    tl.to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 1.2,
      ease: "power4.inOut"
    }, 3.5)

    return () => {
      tl.kill()
    }
  }, [onComplete])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black overflow-hidden"
    >
      {/* Animated overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black"
      />

      {/* Loading content */}
      <div className="relative z-10 text-center">
        {/* Logo */}
        <div ref={logoRef} className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-r from-white to-gray-300 rounded-2xl flex items-center justify-center transform rotate-45">
            <div className="w-10 h-10 bg-black rounded-lg transform -rotate-45"></div>
          </div>
        </div>

        {/* Counter */}
        <div className="mb-8">
          <span
            ref={counterRef}
            className="text-6xl md:text-8xl font-black text-white font-mono tracking-wider"
          >
            0
          </span>
          <span className="text-2xl md:text-3xl text-gray-400 ml-2">%</span>
        </div>

        {/* Text */}
        <div ref={textRef} className="space-y-2">
          <div className="text-xl md:text-2xl font-light text-gray-300 tracking-widest">
            MUHAMMAD KASHAN
          </div>
          <div className="text-sm md:text-base text-gray-500 tracking-wider">
            CREATIVE DEVELOPER
          </div>
        </div>
      </div>

      {/* Animated dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white rounded-full opacity-50"
              style={{
                animation: `pulse 1.5s ease-in-out ${i * 0.2}s infinite alternate`
              }}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 1; transform: scale(1.2); }
        }
      `}</style>
    </div>
  )
}