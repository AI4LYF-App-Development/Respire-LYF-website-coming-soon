'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface WhatIfQuestionsSliderProps {
  onJoinWaitlist: () => void
}

const QUESTIONS = [
  "managing your breathing didn't feel so overwhelming — or so expensive?",
  "you didn't need five different apps just to track symptoms and triggers?",
  "you could finally see what's really helping — and what's not?",
  "your progress was easy to track — and even easier to build on?",
  "your health determinants (HD) could be mapped to your health indicators (HI) for the clarity you and your doctor need?"
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

  // Animation variants for sliding questions
  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  }

  const swipeConfidenceThreshold = 10000
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      
      {/* Background Bubbles/Orbs - Keep existing */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
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
        {/* Central glow from HTML */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"></div>
      </div>

      {/* Header */}
      <header className="w-full max-w-7xl mx-auto px-6 py-8 flex items-center justify-between relative z-20">
        <div className="flex items-center gap-3">
          <div className="size-8 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path clipRule="evenodd" d="M24 4H6V17.3333V30.6667H24V44H42V30.6667V17.3333H24V4Z" fill="currentColor" fillRule="evenodd"></path>
            </svg>
          </div>
          <h2 className="text-xl font-extrabold tracking-tight text-charcoal font-display">Respire LYF</h2>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <button className="text-sm font-semibold text-charcoal/60 hover:text-primary transition-colors">Vision</button>
            <button className="text-sm font-semibold text-charcoal/60 hover:text-primary transition-colors">Science</button>
          </nav>
          <button 
            onClick={onJoinWaitlist}
            className="bg-primary hover:bg-[#4296d1] text-white text-sm font-bold px-6 py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20"
          >
            Early Access
          </button>
          <div className="w-10 h-10 rounded-full bg-cover bg-center border border-charcoal/5" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCDJaUxnhCM_8gLI0ZwapvisUrlzaJu39Y0yDcDvxVXCB_sMbuPHeX53f0zly5zojpnCO9JsVcODWvosOK9iQVk-OFqszZhoYvSPyjBeC0WkJ3J-78p5bJNg_zFvz94fbT7HkjKI-OIq1XQLnaY_HmiGBaWSMHm28C-NJkFKLTQhoDw1Csw6YfSrgB3xua5Kf7WrFqS7_9iu5pzDfR5GVgNyysLy-UemPb1RoqAiOvkb6mFx96_knHKF8L-YCaQqSQAAW_n-1UjltI")' }}></div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl px-6 relative z-10">
        
        {/* "WHAT IF" Header */}
        <div className="w-full text-center mb-10">
          <motion.h1
            className="text-primary text-5xl md:text-8xl font-black tracking-tighter uppercase mb-8 font-display"
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
        <div className="w-full max-w-4xl mx-auto text-center min-h-[200px] md:min-h-[300px] flex items-center justify-center">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.3 }
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
              className="w-full"
            >
              <p className="text-charcoal text-3xl md:text-5xl lg:text-6xl font-medium leading-[1.2] tracking-tight">
                {QUESTIONS[currentIndex]}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Circle Icons Image - Show only for 5th question */}
        <AnimatePresence>
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
              className="relative w-full max-w-2xl md:max-w-3xl aspect-square flex items-center justify-center mt-12"
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
                    filter: 'drop-shadow(0 20px 40px rgba(80, 167, 226, 0.2))'
                  }}
                />
              </motion.div>
              
              {/* Glow effect around image */}
              <motion.div
                className="absolute inset-0 rounded-full bg-primary/10 blur-3xl -z-10"
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

      </main>

      {/* Footer */}
      <footer className="w-full px-6 py-12 flex flex-col items-center gap-10 relative z-20">
        
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
                  className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(80,167,226,0.5)] block"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              ) : (
                <span className="w-2.5 h-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-all duration-300 cursor-pointer block"></span>
              )}
            </button>
          ))}
        </div>

        {/* Scroll to Discover */}
        <div className="flex flex-col items-center gap-3 opacity-60 hover:opacity-100 transition-opacity cursor-pointer group">
          <p className="text-[10px] tracking-[0.4em] font-bold uppercase text-charcoal/60">Scroll to Discover</p>
          <motion.span
            className="material-symbols-outlined text-primary text-3xl"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            expand_more
          </motion.span>
        </div>

        {/* Copyright */}
        <div className="pt-4">
          <p className="text-[10px] uppercase tracking-[0.6em] text-charcoal/20 font-bold">Respire LYF © 2024</p>
        </div>

      </footer>

      {/* Floating Button */}
      <button className="fixed bottom-12 right-12 size-14 flex items-center justify-center rounded-full border border-charcoal/5 bg-white/80 backdrop-blur-xl shadow-lg shadow-black/5 hover:bg-white transition-all z-50">
        <span className="material-symbols-outlined text-charcoal/40 text-2xl">graphic_eq</span>
      </button>

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
