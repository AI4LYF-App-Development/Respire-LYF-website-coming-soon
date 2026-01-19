'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import Image from 'next/image'

interface WhatIfQuestionsSliderProps {
  onJoinWaitlist: () => void
}

const QUESTIONS = [
  "What if managing your breathing didn't feel so overwhelming — or so expensive?",
  "What if you didn't need five different apps just to track symptoms and triggers?",
  "What if you could finally see what's really helping — and what's not?",
  "What if your progress was easy to track — and even easier to build on?",
  "What if your health determinants (HD) could be mapped to your health indicators (HI) for the clarity you and your doctor need?"
]

export default function WhatIfQuestionsSlider({ onJoinWaitlist }: WhatIfQuestionsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length)
    }, 6000) // Change question every 6 seconds

    return () => clearInterval(interval)
  }, [])

  // Animation variants for sliding
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)'
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)'
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
      filter: 'blur(4px)'
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      
      {/* Beautiful Gradient Background */}
      <div className="absolute inset-0 z-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-slate-50"></div>
        
        {/* Animated gradient orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ bottom: '15%', right: '15%' }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] bg-indigo-400/8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        />
      </div>

      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center min-h-screen py-20">
          
          {/* What if Header - Breathing Animation */}
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.9 }}
            animate={{ 
              opacity: 1, 
              y: 0, 
              scale: 1,
            }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-16 md:mb-20"
          >
            <motion.h2
              className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight relative"
              animate={{
                scale: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span 
                className="text-[#2893D7] relative inline-block"
                style={{
                  textShadow: '0 0 40px rgba(40, 147, 215, 0.3), 0 0 80px rgba(40, 147, 215, 0.2)'
                }}
              >
                What if
              </span>
            </motion.h2>
            
            {/* Decorative underline */}
            <motion.div
              className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#2893D7] to-transparent rounded-full"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 96, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          {/* Questions Slider Container */}
          <div className="relative w-full max-w-5xl flex flex-col items-center justify-center mb-12">
            
            {/* Question Text Container */}
            <div className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center overflow-hidden mb-8">
              {/* Gradient overlays on sides for depth */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
              
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30, mass: 0.8 },
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    filter: { duration: 0.3 }
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x)

                    if (swipe < -swipeConfidenceThreshold) {
                      setDirection(1)
                      setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length)
                    } else if (swipe > swipeConfidenceThreshold) {
                      setDirection(-1)
                      setCurrentIndex((prev) => (prev - 1 + QUESTIONS.length) % QUESTIONS.length)
                    }
                  }}
                  className="absolute w-full px-6 md:px-12"
                >
                  <motion.p
                    className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-gray-900 leading-[1.2] tracking-tight text-center"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    {QUESTIONS[currentIndex]}
                  </motion.p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Circle Icons Image - Show only for 5th question */}
            <AnimatePresence mode="wait">
              {currentIndex === 4 && (
                <motion.div
                  key="circle-icons"
                  initial={{ opacity: 0, scale: 0.8, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8, y: 50 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 25,
                    duration: 0.6
                  }}
                  className="relative w-full max-w-2xl md:max-w-3xl aspect-square flex items-center justify-center"
                >
                  <motion.div
                    className="relative w-full h-full"
                    animate={{
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <Image
                      src="/icons/circle_icons.png"
                      alt="Health Determinants and Indicators"
                      fill
                      className="object-contain drop-shadow-2xl"
                      priority
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(40, 147, 215, 0.2))'
                      }}
                    />
                  </motion.div>
                  
                  {/* Glow effect around image */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#2893D7]/10 blur-3xl -z-10"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Enhanced Dots Indicator */}
          <div className="flex gap-3 mb-8">
            {QUESTIONS.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className="relative group"
                aria-label={`Go to question ${index + 1}`}
              >
                <div className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#2893D7]'
                    : 'bg-gray-300 group-hover:bg-gray-400'
                }`}>
                  {index === currentIndex && (
                    <>
                      <motion.div
                        layoutId="activeDot"
                        className="absolute inset-0 rounded-full bg-[#2893D7]"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                      <motion.div
                        className="absolute inset-0 rounded-full bg-[#2893D7]/30"
                        animate={{
                          scale: [1, 2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </>
                  )}
                </div>
              </button>
            ))}
          </div>

          {/* Enhanced Navigation Arrows */}
          <div className="flex gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.1, x: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setDirection(-1)
                setCurrentIndex((prev) => (prev - 1 + QUESTIONS.length) % QUESTIONS.length)
              }}
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 flex items-center justify-center hover:border-[#2893D7] hover:bg-[#2893D7]/5 transition-all duration-300 group shadow-lg hover:shadow-xl"
              aria-label="Previous question"
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-[#2893D7] transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1, x: 3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setDirection(1)
                setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length)
              }}
              className="w-14 h-14 rounded-full bg-white/80 backdrop-blur-sm border-2 border-gray-200 flex items-center justify-center hover:border-[#2893D7] hover:bg-[#2893D7]/5 transition-all duration-300 group shadow-lg hover:shadow-xl"
              aria-label="Next question"
            >
              <svg
                className="w-6 h-6 text-gray-600 group-hover:text-[#2893D7] transition-colors"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={onJoinWaitlist}
              className="relative h-14 px-10 rounded-xl bg-gradient-to-r from-[#2893D7] to-[#1F5C99] text-white font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30 flex items-center justify-center gap-2 overflow-hidden group"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#3ba3e8] to-[#2893D7]"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Join Waitlist</span>
              <motion.span
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="h-14 px-10 rounded-xl border-2 border-gray-300 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold text-lg transition-all duration-300 hover:border-[#2893D7] hover:text-[#2893D7] shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Download Magazines
              <Download size={20} className="text-gray-700 group-hover:text-[#2893D7] transition-colors" />
            </motion.button>
          </motion.div>

          {/* Question counter */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-12 text-sm text-gray-500 font-medium"
          >
            {currentIndex + 1} / {QUESTIONS.length}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
