'use client'

import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react'

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
  suggestions?: string[]
}

interface FAQData {
  [key: string]: {
    answer: string
    followUp?: string[]
  }
}

const faqData: FAQData = {
  'hello': {
    answer: 'Hello! 👋 I\'m Kashan\'s AI assistant. I can help you learn about his skills, projects, and experience. What would you like to know?',
    followUp: ['Tell me about his skills', 'Show me his projects', 'What services does he offer?']
  },
  'hi': {
    answer: 'Hi there! 👋 I\'m here to help you learn about Muhammad Kashan. Feel free to ask me anything about his work, experience, or projects!',
    followUp: ['What programming languages does he know?', 'Show me his experience', 'How can I contact him?']
  },
  'skills': {
    answer: 'Kashan is a Full-Stack Developer specializing in:\n\n🚀 **Frontend:** React, Next.js, TypeScript, Tailwind CSS\n💼 **Backend:** Node.js, Express, Python, Django\n🗄️ **Databases:** MongoDB, PostgreSQL, MySQL\n⛓️ **Blockchain:** Solidity, Web3.js, Smart Contracts\n🤖 **AI/ML:** TensorFlow, OpenAI API, Machine Learning\n☁️ **Cloud:** AWS, Google Cloud, Vercel, Heroku',
    followUp: ['Tell me about his projects', 'What certifications does he have?', 'Years of experience?']
  },
  'projects': {
    answer: 'Here are some of Kashan\'s featured projects:\n\n🏠 **DeFi Real Estate Platform** - Blockchain-based property investment platform\n🛒 **E-Commerce Platform** - Full-stack solution with payment integration\n🤖 **AI Chat Application** - Real-time messaging with AI features\n📊 **Task Management System** - Collaborative project management tool\n🗳️ **Blockchain Voting System** - Decentralized voting with smart contracts',
    followUp: ['Tell me more about the DeFi project', 'What technologies were used?', 'Can I see the live demos?']
  },
  'defi': {
    answer: 'The **DeFi Real Estate Platform** is one of Kashan\'s flagship projects! 🏗️\n\n**Features:**\n• Tokenized real estate investments\n• Smart contract automation\n• Decentralized property management\n• Built with React, TypeScript, Solidity\n• Deployed on Vercel\n\n**Live Demo:** https://defi-real-estate-weld.vercel.app/\n**Source Code:** https://github.com/mkashaniqbal/defi-real-estate',
    followUp: ['What other blockchain projects has he built?', 'How can I hire him?', 'Tell me about his experience']
  },
  'experience': {
    answer: 'Kashan has impressive experience for his age:\n\n🏆 **National Gold Medalist** in Computer Sciences\n👨‍💻 **2+ Years** of professional development\n🌍 **50+ Projects** delivered for international clients\n📜 **8+ Certifications** from Harvard, Google, IBM\n💼 **Freelance Developer** since February 2024\n🎯 **100% Client Satisfaction** rate',
    followUp: ['What services does he offer?', 'How much does he charge?', 'Can I see testimonials?']
  },
  'services': {
    answer: 'Kashan offers comprehensive development services:\n\n🎨 **Frontend Development**\n• React/Next.js applications\n• Responsive UI/UX design\n• Performance optimization\n\n⚙️ **Backend Development**\n• API development\n• Database design\n• Cloud integration\n\n🚀 **Full-Stack Solutions**\n• Complete web applications\n• E-commerce platforms\n• AI integration',
    followUp: ['How much does he charge?', 'How can I hire him?', 'What\'s his availability?']
  },
  'contact': {
    answer: 'You can reach Kashan through multiple channels:\n\n📧 **Email:** kashaniqbal623@gmail.com\n📱 **Phone:** +92-3317430602\n🐙 **GitHub:** https://github.com/mkashaniqbal\n💼 **LinkedIn:** https://www.linkedin.com/in/mkashan-iqbal\n📍 **Location:** Lahore, Pakistan (Available remotely worldwide)\n\n✅ **Status:** Currently available for new projects!',
    followUp: ['What\'s his response time?', 'Does he work internationally?', 'How can I start a project?']
  },
  'pricing': {
    answer: 'Kashan offers competitive rates for high-quality work:\n\n💰 **Project-based pricing** starting from $500\n⏱️ **Hourly rate:** $25-50 (depending on complexity)\n📦 **Package deals** available for ongoing work\n🎯 **Free consultation** for project discussion\n\n**Payment methods:** PayPal, Wise, Bank transfer\n**Project timeline:** Usually 1-4 weeks depending on scope',
    followUp: ['How can I get a quote?', 'What\'s included in the price?', 'Do you offer support?']
  },
  'availability': {
    answer: 'Kashan is currently accepting new projects! 🎯\n\n⚡ **Response time:** Usually within 24 hours\n🌍 **Remote work:** Available worldwide\n⏰ **Working hours:** Flexible with client time zones\n📅 **Project start:** Can begin immediately\n🔄 **Ongoing support:** Available post-delivery\n\n**Current capacity:** 2-3 new projects this month',
    followUp: ['How can I start a project?', 'What information do you need?', 'Can we schedule a call?']
  },
  'testimonials': {
    answer: 'Here\'s what clients say about Kashan:\n\n⭐⭐⭐⭐⭐ **Sarah Johnson, CEO TechStart Inc.**\n*"Muhammad delivered our e-commerce platform ahead of schedule. His technical skills are exceptional."*\n\n⭐⭐⭐⭐⭐ **Ahmed Al-Rashid, Founder Digital Solutions**\n*"Working with Kashan was a game-changer for our startup. Highly recommended!"*\n\n⭐⭐⭐⭐⭐ **Emily Rodriguez, Project Manager**\n*"Impressive work ethic and communication. Will definitely work with him again."*',
    followUp: ['Can I speak with past clients?', 'What makes him different?', 'How can I hire him?']
  }
}

export default function FAQChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Hello! I\'m Kashan\'s AI assistant. Ask me anything about his skills, projects, or experience! 🚀',
      isBot: true,
      timestamp: new Date(),
      suggestions: ['Tell me about his skills', 'Show me his projects', 'How can I contact him?']
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const chatRef = useRef<HTMLDivElement>(null)
  const messagesRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (isOpen && chatRef.current) {
      gsap.fromTo(chatRef.current,
        {
          scale: 0.8,
          opacity: 0,
          y: 50
        },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "back.out(1.7)"
        }
      )
    }
  }, [isOpen])

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight
    }
  }, [messages])

  const findBestMatch = (input: string): string | null => {
    const lowercaseInput = input.toLowerCase()

    // Direct keyword matches
    const keywordMap: { [key: string]: string } = {
      'skill': 'skills',
      'technology': 'skills',
      'programming': 'skills',
      'language': 'skills',
      'tech': 'skills',
      'project': 'projects',
      'portfolio': 'projects',
      'work': 'projects',
      'defi': 'defi',
      'blockchain': 'defi',
      'real estate': 'defi',
      'experience': 'experience',
      'background': 'experience',
      'about': 'experience',
      'service': 'services',
      'offer': 'services',
      'do': 'services',
      'contact': 'contact',
      'email': 'contact',
      'phone': 'contact',
      'reach': 'contact',
      'hire': 'contact',
      'price': 'pricing',
      'cost': 'pricing',
      'rate': 'pricing',
      'charge': 'pricing',
      'money': 'pricing',
      'available': 'availability',
      'free': 'availability',
      'time': 'availability',
      'testimonial': 'testimonials',
      'review': 'testimonials',
      'client': 'testimonials',
      'feedback': 'testimonials'
    }

    // Check for direct matches first
    for (const [keyword, response] of Object.entries(keywordMap)) {
      if (lowercaseInput.includes(keyword)) {
        return response
      }
    }

    // Check for greeting patterns
    if (lowercaseInput.match(/^(hi|hello|hey|greetings)/)) {
      return Math.random() > 0.5 ? 'hello' : 'hi'
    }

    return null
  }

  const generateResponse = (input: string): Message => {
    const matchedKey = findBestMatch(input)

    if (matchedKey && faqData[matchedKey]) {
      const faqItem = faqData[matchedKey]
      return {
        id: Date.now(),
        text: faqItem.answer,
        isBot: true,
        timestamp: new Date(),
        suggestions: faqItem.followUp
      }
    }

    // Default response for unmatched queries
    return {
      id: Date.now(),
      text: 'I\'d be happy to help! Here are some things you can ask me about:\n\n• Kashan\'s technical skills and expertise\n• His projects and portfolio\n• Services he offers\n• Contact information\n• Pricing and availability\n• Client testimonials\n\nTry asking something like "Tell me about his skills" or "Show me his projects"!',
      isBot: true,
      timestamp: new Date(),
      suggestions: ['Tell me about his skills', 'Show me his projects', 'What services does he offer?', 'How can I contact him?']
    }
  }

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim()
    if (!textToSend) return

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: textToSend,
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = generateResponse(textToSend)
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // 1-2 seconds delay
  }

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion)
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (!isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 300)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-white text-black rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group hover:shadow-white/20"
        aria-label="Open FAQ Chatbot"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6 group-hover:animate-bounce" />
        )}

        {/* Notification dot */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">?</span>
          </div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          ref={chatRef}
          className="fixed bottom-24 right-6 z-50 w-96 h-[32rem] bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="bg-white/5 border-b border-white/10 p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <Bot className="w-6 h-6 text-black" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white">Kashan's AI Assistant</h3>
              <p className="text-xs text-gray-400">Ask me anything about his work!</p>
            </div>
            <button
              onClick={toggleChat}
              className="w-8 h-8 text-gray-400 hover:text-white transition-colors rounded-lg hover:bg-white/10 flex items-center justify-center"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent"
          >
            {messages.map((message) => (
              <div key={message.id} className="space-y-2">
                <div className={`flex gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot
                      ? 'bg-white text-black'
                      : 'bg-white/10 text-white border border-white/20'
                  }`}>
                    {message.isBot ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>
                  <div className={`max-w-xs p-3 rounded-2xl ${
                    message.isBot
                      ? 'bg-white/10 text-white'
                      : 'bg-white text-black'
                  }`}>
                    <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.isBot ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && (
                  <div className="ml-11 space-y-1">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSuggestionClick(suggestion)}
                        className="block w-full text-left text-xs px-3 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg transition-all duration-200 border border-white/10 hover:border-white/20"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-black" />
                </div>
                <div className="bg-white/10 p-3 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t border-white/10 p-4">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything about Kashan..."
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all text-sm"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="w-12 h-12 bg-white text-black rounded-xl hover:scale-105 transition-all duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 640px) {
          .fixed.bottom-24.right-6 {
            right: 1rem;
            left: 1rem;
            bottom: 5rem;
            width: calc(100vw - 2rem);
          }
        }
      `}</style>
    </>
  )
}