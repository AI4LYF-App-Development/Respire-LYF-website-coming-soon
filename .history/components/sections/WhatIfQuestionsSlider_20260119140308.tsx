'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface WhatIfQuestionsSliderProps {
  onJoinWaitlist: () => void
}

const QUESTIONS = [
  "Managing your breathing didn't feel so overwhelming — or so expensive?",
  "You didn't need five different apps just to track symptoms and triggers?",
  "You could finally see what's really helping — and what's not?",
  "Your progress was easy to track — and even easier to build on?",
  "Your health determinants (HD) could be mapped to your health indicators (HI) for the clarity you and your doctor need?"
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

  // Animation variants for sliding questions - optimized for performance
  const slideVariants = useMemo(() => ({
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    })
  }), [])

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  const isLastQuestion = currentIndex === 4

  return (
    <section className="relative h-screen flex flex-col items-center overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      
      {/* Background Bubbles/Orbs - Keep existing */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            top: '10%', 
            left: '10%',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
        />
        <motion.div
          className="absolute w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -60, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{ 
            bottom: '15%', 
            right: '15%',
            willChange: 'transform',
            transform: 'translateZ(0)'
          }}
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
          style={{ 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%) translateZ(0)',
            willChange: 'transform'
          }}
        />
        {/* Central glow from HTML */}
        {!isLastQuestion && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"></div>
        )}
        {isLastQuestion && (
          <>
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
          </>
        )}
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 pt-6 pb-4 flex items-center justify-between relative z-30 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12">
            <Image
              src="/icons/respirelyf_logo.png"
              alt="Respire LYF logo"
              fill
              className="object-contain"
              sizes="48px"
              priority
            />
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-charcoal font-display">Respire LYF</h2>
        </div>
        <div className="flex items-center gap-8">
          <button 
            onClick={onJoinWaitlist}
            className="bg-primary hover:bg-[#4296d1] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20"
          >
            Join Waitlist
          </button>
        </div>
      </header>


      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!isLastQuestion ? (
          // Questions 1-4: Centered layout
          <motion.main
            key="centered"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col items-center w-full max-w-5xl px-6 relative z-10"
            style={{ willChange: 'opacity' }}
          >
            {/* "WHAT IF" Header */}
            <div className="w-full text-center mb-2 md:mb-2 mt-32 md:mt-40">
              <motion.h1
                className="text-primary text-5xl md:text-8xl font-black tracking-tighter font-display"
                style={{
                  textShadow: '0 0 20px rgba(80, 167, 226, 0.4), 0 0 40px rgba(80, 167, 226, 0.1)'
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                What if
              </motion.h1>
            </div>

            {/* Questions Slider */}
            <div className="w-full max-w-4xl mx-auto text-center flex-1 flex items-center justify-center py-4">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "tween", duration: 0.4, ease: [0.4, 0, 0.2, 1] },
                    opacity: { duration: 0.3, ease: "easeOut" }
                  }}
                  style={{ 
                    willChange: 'transform, opacity',
                    transform: 'translateZ(0)'
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.2}
                  dragMomentum={false}
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
                  className="w-full flex items-center justify-center"
                >
                  <p className="text-charcoal text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight text-center w-full">
                    {QUESTIONS[currentIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.main>
        ) : (
          // Question 5: Two-column layout
          <motion.main
            key="two-column"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative z-10 pb-12"
            style={{ willChange: 'opacity' }}
          >
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <motion.h1
                className="text-primary text-5xl md:text-8xl font-black tracking-tighter mb-16 md:mb-20 font-display"
                style={{
                  textShadow: '0 0 20px rgba(80, 167, 226, 0.4), 0 0 40px rgba(80, 167, 226, 0.1)'
                }}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                What if
              </motion.h1>
              <motion.div
                className="max-w-xl min-h-[200px] md:min-h-[250px] flex items-center"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <p className="text-charcoal text-3xl md:text-4xl lg:text-4xl font-medium leading-tight tracking-tight">
                  Your <span className="text-primary font-bold whitespace-nowrap">Health Determinants (HD)</span> <br/>
                  could be mapped to <br/>
                  Your <span className="text-primary font-bold whitespace-nowrap">Health Indicators (HI)</span> <br/>
                  for the <span className="font-medium">clarity</span> you and your doctor need?
                </p>
              </motion.div>
            </div>

            {/* Right Column */}
            <motion.div
              className="w-full lg:w-1/2 relative flex items-center justify-center"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Circle Icons Image - Original Size */}
              <div className="relative flex items-center justify-center">
                <Image
                  src="/icons/circle_icons.png"
                  alt="Health Determinants and Indicators"
                  width={800}
                  height={800}
                  className="object-contain drop-shadow-2xl w-auto h-auto"
                  priority
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0, 0, 0, 0.2))',
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                />
              </div>
              
              {/* Decorative blur orbs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
            </motion.div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full px-6 py-6 flex flex-col items-center gap-6 relative z-20 mt-auto">
        
        {/* Dots Indicator */}
        <div className="flex gap-4">
          {QUESTIONS.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1)
                setCurrentIndex(index)
              }}
              className="relative"
              aria-label={`Go to question ${index + 1}`}
            >
              {index === currentIndex ? (
                <motion.span
                  layoutId="activeDot"
                  className={`${index === 4 ? 'w-8 h-2.5' : 'w-2.5 h-2.5'} rounded-full bg-primary shadow-[0_0_12px_rgba(80,167,226,0.5)] block`}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-all duration-300 cursor-pointer block"></span>
              )}
            </button>
          ))}
        </div>

        {/* Scroll to Discover / Final Sequence Complete */}
        <div className="flex flex-col items-center gap-2 opacity-60 hover:opacity-100 transition-opacity group">
          <p className="text-[10px] tracking-[0.4em] font-bold uppercase text-charcoal/60">
            {currentIndex === 4 ? 'Scroll to Discover' : 'Scroll to Discover'}
          </p>
          <motion.svg
            className="text-primary w-8 h-8 cursor-pointer"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.scrollTo({
                  top: window.innerHeight,
                  behavior: 'smooth'
                })
              }
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </motion.svg>
        </div>

      </footer>

      {/* Custom Styles */}
      <style jsx global>{`
        :root {
          --primary-blue: #50A7E2;
          --primary-glow: rgba(80, 167, 226, 0.4);
        }
      `}</style>
    </section>
  )
}
