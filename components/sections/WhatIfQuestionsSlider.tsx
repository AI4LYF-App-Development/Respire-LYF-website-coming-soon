'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import AnimatedTextWordByWord from '../animations/AnimatedTextWordByWord'
import CircularIconsAnimation from '../animations/CircularIconsAnimation'

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
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const [bubblesStart, setBubblesStart] = useState(true)
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })
  const liveYourFullestRef = useRef<HTMLDivElement>(null)
  const yourWordRef = useRef<HTMLSpanElement>(null)
  const [textCenterOffset, setTextCenterOffset] = useState({ x: 0, y: 0 })

  // Track window size for responsive calculations
  useEffect(() => {
    const updateWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    updateWindowSize()
    window.addEventListener('resize', updateWindowSize)
    return () => window.removeEventListener('resize', updateWindowSize)
  }, [])

  // Breath particles - small floating bubbles
  const breathParticles = useMemo(() => (
    Array.from({ length: 60 }, (_, i) => ({
      id: i,
      size: 3.5 + Math.random() * 5.5, // ~4-9px
      left: Math.random() * 100,
      delay: Math.random() * 10,
      duration: 10 + Math.random() * 10,
      drift: (Math.random() - 0.5) * 60,
      opacity: 0.35 + Math.random() * 0.25, // 0.35-0.6
    }))
  ), [])

  // Air streams - horizontal gradient lines
  const airStreams = useMemo(() => (
    [15, 25, 35, 45, 55, 65, 75, 85].map((top, idx) => ({
      id: idx,
      top,
      delay: idx * 0.7,
    }))
  ), [])

  // Orbs - large blurred backgrounds
  const orbs = useMemo(() => ([
    { id: 1, className: 'w-96 h-96 bg-blue-300/15 blur-[120px]', style: { top: '10%', left: '10%' }, delay: '0s' },
    { id: 2, className: 'w-80 h-80 bg-sky-300/20 blur-[100px]', style: { top: '40%', right: '15%' }, delay: '2s' },
    { id: 3, className: 'w-72 h-72 bg-cyan-300/15 blur-[110px]', style: { bottom: '10%', left: '30%' }, delay: '4s' },
  ]), [])

  // Handle scroll to next section
  const handleScrollToNext = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  // Handle wheel scroll to trigger scroll to next section
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Only handle downward scroll when at the top of the page
      if (e.deltaY > 0 && window.scrollY < 50) {
        // Clear any existing timeout
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current)
        }

        // Debounce scroll events
        scrollTimeoutRef.current = setTimeout(() => {
          handleScrollToNext()
        }, 100)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })

    return () => {
      window.removeEventListener('wheel', handleWheel)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [])

  const isLastQuestion = currentIndex === 4
  const [isAnimationComplete, setIsAnimationComplete] = useState(false)
  const [showMeetRespireLYF, setShowMeetRespireLYF] = useState(false)
  
  // States for Meet Respire LYF animations
  const [showMeetText, setShowMeetText] = useState(false)
  const [showRespireLYFText, setShowRespireLYFText] = useState(false)
  const [showLogo, setShowLogo] = useState(false)
  const [showLiveYourFullest, setShowLiveYourFullest] = useState(false)
  const [liveYourFullestWordIndex, setLiveYourFullestWordIndex] = useState(0)
  const [showSlogan, setShowSlogan] = useState(false)
  const [sloganCharacterIndex, setSloganCharacterIndex] = useState(0)
  const [showSimplePersonalAffordable, setShowSimplePersonalAffordable] = useState(false)
  const [simplePersonalAffordableWordIndex, setSimplePersonalAffordableWordIndex] = useState(0)
  const [showMasterMonitor, setShowMasterMonitor] = useState(false)

  // Calculate center position of "Your" word for circle alignment
  useEffect(() => {
    if (yourWordRef.current && showLiveYourFullest) {
      const updateTextCenter = () => {
        const rect = yourWordRef.current?.getBoundingClientRect()
        if (rect) {
          // Get the center of the "Your" word relative to its container
          const container = yourWordRef.current?.closest('.flex-1')
          if (container) {
            const containerRect = container.getBoundingClientRect()
            const textCenterX = rect.left + rect.width / 2 - containerRect.left
            const textCenterY = rect.top + rect.height / 2 - containerRect.top
            setTextCenterOffset({ x: textCenterX, y: textCenterY })
          }
        }
      }
      
      updateTextCenter()
      window.addEventListener('resize', updateTextCenter)
      return () => window.removeEventListener('resize', updateTextCenter)
    }
  }, [showLiveYourFullest, windowSize, liveYourFullestWordIndex])

  useEffect(() => {
    // Only auto-advance if not on last question or if animation is complete, and not on Meet Respire LYF slide
    if ((!isLastQuestion || isAnimationComplete) && !showMeetRespireLYF) {
    const interval = setInterval(() => {
      setDirection(1)
      setCurrentIndex((prev) => (prev + 1) % QUESTIONS.length)
    }, 8000) // Change question every 8 seconds

    return () => clearInterval(interval)
    }
  }, [isLastQuestion, isAnimationComplete, showMeetRespireLYF])

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
  const [showDeterminantsText, setShowDeterminantsText] = useState(false)
  const [showKPIsMiddleText, setShowKPIsMiddleText] = useState(false)
  const [showKPIsFinalText, setShowKPIsFinalText] = useState(false)
  const [showClarityText, setShowClarityText] = useState(false)
  const [visibleIconIndices, setVisibleIconIndices] = useState<Set<number>>(new Set())

  // Reset animation states when switching to/from last question
  useEffect(() => {
    if (isLastQuestion) {
      // Start animation sequence for 5th question
      setShowDeterminantsText(false)
      setShowKPIsMiddleText(false)
      setShowKPIsFinalText(false)
      setShowClarityText(false)
      setVisibleIconIndices(new Set())
      setIsAnimationComplete(false)

      // Start animation immediately with question text (no delay for "What if")
      // Show determinants text first
      const determinantsTimeout = setTimeout(() => {
        setShowDeterminantsText(true)
      }, 0)

      // Sync determinant icons with "Your Health Determinants (HD)" text word-by-word
      const determinantsText = "Your Health Determinants (HD)"
      const determinantsWords = determinantsText.split(' ')
      const determinantsCount = 10
      const wordDelay = 400 // 0.4s in milliseconds
      const iconStaggerDelay = 300 // 0.3s delay between icons
      
      // Show icons progressively as text appears
      // Distribute 10 icons across the text animation
      const totalTextDuration = determinantsWords.length * wordDelay
      const iconInterval = totalTextDuration / determinantsCount
      
      for (let i = 0; i < determinantsCount; i++) {
        setTimeout(() => {
          setVisibleIconIndices(prev => new Set([...prev, i]))
        }, i * iconInterval)
      }
      
      const determinantsTextDuration = totalTextDuration

      // Show "could be mapped to" after determinants completes
      const pauseAfterDeterminants = 1000 // 1 second pause
      const kpisMiddleStartTime = determinantsTextDuration + pauseAfterDeterminants
      
      const kpisMiddleTimeout = setTimeout(() => {
        setShowKPIsMiddleText(true)
      }, kpisMiddleStartTime)

      // Show "Your Health Indicators (HI)" after "could be mapped to" completes
      const kpisMiddleWords = "could be mapped to".split(' ').length
      const kpisMiddleDuration = kpisMiddleWords * 0.4 * 1000
      const pauseBeforeKPIsFinal = 800
      const kpisFinalStartTime = kpisMiddleStartTime + kpisMiddleDuration + pauseBeforeKPIsFinal
      
      const kpisFinalTimeout = setTimeout(() => {
        setShowKPIsFinalText(true)
      }, kpisFinalStartTime)

      // Sync KPI icons with "Your Health Indicators (HI)" text word-by-word
      const kpisText = "Your Health Indicators (HI)"
      const kpisWords = kpisText.split(' ')
      const kpisCount = 5 // Vitals, Cough, Breathing Score, Peak Flow, ACT
      const kpisStartIndex = determinantsCount
      
      // Show KPI icons progressively as text appears
      const kpisTextDuration = kpisWords.length * wordDelay
      const kpisIconInterval = kpisTextDuration / kpisCount
      
      for (let i = 0; i < kpisCount; i++) {
        setTimeout(() => {
          setVisibleIconIndices(prev => new Set([...prev, kpisStartIndex + i]))
        }, kpisFinalStartTime + (i * kpisIconInterval))
      }

      // Show clarity text after KPIs complete
      const pauseBeforeClarity = 200
      const clarityStartTime = kpisFinalStartTime + kpisTextDuration + pauseBeforeClarity
      
      const clarityTimeout = setTimeout(() => {
        setShowClarityText(true)
      }, clarityStartTime)

      // Calculate total animation duration and mark as complete
      const clarityWords = "for the clarity you and your doctor need?".split(' ').length
      const clarityDuration = clarityWords * 0.3 * 1000 // 0.3s delay for clarity text
      const totalDuration = clarityStartTime + clarityDuration
      const finalDelay = 2000 // 2 seconds delay after all animations complete
      
      const completeTimeout = setTimeout(() => {
        setIsAnimationComplete(true)
        // Transition to Meet Respire LYF slide after 2 second delay
        setTimeout(() => {
          // Reset icon indices for the 6th slide
          setVisibleIconIndices(new Set())
          setShowMeetRespireLYF(true)
          startMeetRespireLYFAnimation()
        }, 2000)
      }, totalDuration + finalDelay)

      return () => {
        clearTimeout(determinantsTimeout)
        clearTimeout(kpisMiddleTimeout)
        clearTimeout(kpisFinalTimeout)
        clearTimeout(clarityTimeout)
        clearTimeout(completeTimeout)
      }
    } else {
      // Reset states when not on last question
      setShowDeterminantsText(false)
      setShowKPIsMiddleText(false)
      setShowKPIsFinalText(false)
      setShowClarityText(false)
      setVisibleIconIndices(new Set())
      setIsAnimationComplete(false)
      setShowMeetRespireLYF(false)
      // Reset all Meet Respire LYF states
      setShowMeetText(false)
      setShowRespireLYFText(false)
      setShowLogo(false)
      setShowLiveYourFullest(false)
      setLiveYourFullestWordIndex(0)
      setShowSlogan(false)
      setSloganCharacterIndex(0)
      setShowSimplePersonalAffordable(false)
      setSimplePersonalAffordableWordIndex(0)
      setShowMasterMonitor(false)
    }
  }, [isLastQuestion])

  // Start Meet Respire LYF animation sequence - matching Swift code exactly
  const startMeetRespireLYFAnimation = () => {
    // Step 1: Show "Meet" text first (BreathingText animation)
    setTimeout(() => {
      setShowMeetText(true)
    }, 300) // 0.3s delay matching Swift

    // Step 2: Show "Respire LYF™" and logo simultaneously after "Meet" appears (0.8s delay)
    setTimeout(() => {
      setShowRespireLYFText(true)
      setShowLogo(true)
    }, 1100) // 0.3s + 0.8s delay

    // Step 3: Show "Live Your Fullest" after "Respire LYF" appears (0.5s delay)
    setTimeout(() => {
      setShowLiveYourFullest(true)
      animateLiveYourFullest()
    }, 1600) // 0.3s + 0.8s + 0.5s delay

    // Step 4: Show slogan and icons after 1 second delay (matching Swift: 1.0s delay after Respire LYF + Logo appear)
    setTimeout(() => {
      setShowSlogan(true)
      animateSloganWithIconAppearance() // Use the exact Swift function name and logic
    }, 2600) // 0.3s + 0.8s + 0.5s + 1.0s delay

    // Step 5: Show "Simple — Personal — Affordable" after slogan completes
    const text = "All-in-One Respiratory Co-Pilot"
    const characters = Array.from(text)
    const totalIcons = 15
    const iconDelay = 150 // 0.15s delay so user can see each icon properly
    const lastIconIndex = Math.min(characters.length - 1, totalIcons - 1)
    const lastIconTime = lastIconIndex * 200 + iconDelay // sloganCharacterDelay = 0.2s = 200ms
    const sloganDuration = lastIconTime
    
    setTimeout(() => {
      setShowSimplePersonalAffordable(true)
      animateSimplePersonalAffordable()
    }, 2600 + sloganDuration + 300) // 0.3s delay after slogan completes

    // Step 6: Show master monitor after grouping animation completes
    const groupingAnimationDuration = 3000 // 3.0s closing animation
    const delayAfterAnimation = 500 // 0.5s delay
    setTimeout(() => {
      setShowMasterMonitor(true)
    }, 2600 + sloganDuration + 300 + groupingAnimationDuration + delayAfterAnimation)
  }

  const animateLiveYourFullest = () => {
    const words = "Live Your Fullest".split(' ')
    words.forEach((_, index) => {
      setTimeout(() => {
        setLiveYourFullestWordIndex(index + 1)
      }, index * 250) // 0.25s delay per word
    })
  }

  // Animate slogan with icon appearance - matching Swift code exactly (1:1 mapping)
  const animateSloganWithIconAppearance = () => {
    const text = "All-in-One Respiratory Co-Pilot"
    const characters = Array.from(text)
    const totalIcons = 15 // 10 determinants + 5 KPIs
    
    // Ensure icons start empty (they will appear as typing progresses)
    setVisibleIconIndices(new Set())
    
    // Exact 1:1 mapping: one icon per letter
    // Icons appear staggered WHILE typing happens with delay, so user can see each icon properly
    const iconDelay = 150 // 0.15s delay so user can see each icon properly
    
    // Calculate when the last icon will appear
    const lastIconIndex = Math.min(characters.length - 1, totalIcons - 1)
    const lastIconTime = lastIconIndex * 200 + iconDelay // sloganCharacterDelay = 0.2s = 200ms
    
    // Calculate text character delay so ALL text appears by the time last icon appears
    // We want the last text character to appear at or before lastIconTime
    const textCharacterDelay = characters.length > 1 
      ? lastIconTime / (characters.length - 1) 
      : lastIconTime
    
    characters.forEach((_, charIndex) => {
      // Icons appear at: charIndex * sloganCharacterDelay + iconDelay
      const iconTiming = charIndex * 200 + iconDelay
      
      // Text appears at: charIndex * textCharacterDelay (faster delay to complete with icons)
      const textTiming = charIndex * textCharacterDelay
      
      // Show text character (faster timing to complete with icons)
      setTimeout(() => {
        setSloganCharacterIndex(charIndex + 1)
      }, textTiming)

      // Show icon at the calculated timing
      if (charIndex < totalIcons) {
        const iconIndex = charIndex
        setTimeout(() => {
          setVisibleIconIndices(prev => new Set([...prev, iconIndex]))
        }, iconTiming)
      }
    })
  }

  const animateSimplePersonalAffordable = () => {
    const text = "Simple — Personal — Affordable"
    const words = text.split(' — ')
    
    words.forEach((_, index) => {
      setTimeout(() => {
        // Map to component word index (accounting for separators)
        const componentIndex = (index * 2) + 1
        setSimplePersonalAffordableWordIndex(componentIndex)
      }, index * 700) // 0.7s delay per word
    })
  }


  return (
    <section className="relative h-screen flex flex-col items-center overflow-hidden" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      
      {/* Background Bubbles/Orbs - Enhanced from source project */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Radial gradient overlays */}
        <div className="absolute inset-0 opacity-28" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 50%)' }}></div>
        <div className="absolute inset-0 opacity-28" style={{ background: 'radial-gradient(circle at 80% 15%, rgba(34,211,238,0.12), transparent 50%)' }}></div>
        <div className="absolute inset-0 opacity-28" style={{ background: 'radial-gradient(circle at 15% 80%, rgba(125,211,252,0.12), transparent 55%)' }}></div>
        
        {/* Floating orbs */}
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`absolute rounded-full animate-float-orb ${orb.className}`}
            style={{ ...orb.style, animationDelay: orb.delay }}
          />
        ))}

        {/* Air streams */}
        {airStreams.map((stream) => (
          <div
            key={stream.id}
            className="absolute h-px w-32 bg-gradient-to-r from-transparent via-blue-500/45 to-transparent blur-sm animate-air-stream"
            style={{
              top: `${stream.top}%`,
              animationDelay: `${stream.delay}s`,
              animationDuration: '4s',
            }}
          />
        ))}

        {/* Breath particles */}
        {bubblesStart && (
          <div className="absolute inset-0 overflow-hidden z-10">
            {breathParticles.map((particle) => (
              <div
                key={particle.id}
                className="breath-particle"
                style={{
                  width: `${particle.size}px`,
                  height: `${particle.size}px`,
                  left: `${particle.left}%`,
                  bottom: '-50px',
                  animationDelay: `${particle.delay + 1.5}s`,
                  animationDuration: `${particle.duration}s`,
                  opacity: particle.opacity,
                  // @ts-expect-error css var
                  '--drift': `${particle.drift}px`,
                }}
              />
            ))}
          </div>
        )}

        {/* Central glow */}
        {!isLastQuestion && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px]"></div>
        )}
        {isLastQuestion && (
          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
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
        {showMeetRespireLYF ? (
          // Slide 6: Meet Respire LYF - matching Swift layout exactly
          <motion.main
            key="meet-respire-lyf"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col items-center justify-center relative z-10"
            style={{ willChange: 'opacity' }}
          >
            <div className="w-full flex flex-col items-center justify-center relative" style={{ minHeight: '600px' }}>
              
              {/* Top Section: "Meet", "Respire LYF™", and "Live Your Fullest" stacked */}
              <div className="relative z-30 flex flex-col items-center gap-4 mb-0 mb-4 -mt-20">
                {/* "Meet" text */}
                {showMeetText && (
                  <motion.h1
                    className="text-primary text-5xl md:text-6xl font-black tracking-tighter font-display text-center"
                    initial={{ scale: 3, opacity: 0, rotate: -2 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", response: 1.2, dampingFraction: 0.6 }}
                    style={{
                      textShadow: '0 0 20px rgba(80, 167, 226, 0.4), 0 0 40px rgba(80, 167, 226, 0.1)'
                    }}
                  >
                    Meet
                  </motion.h1>
                )}

                {/* "Respire LYF™" text */}
                {showRespireLYFText && (
                  <motion.div
                    className="flex items-center gap-2"
                    initial={{ scale: 0.8, opacity: 0, y: -20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    transition={{ type: "spring", response: 0.8, dampingFraction: 0.7 }}
                  >
                    <h1
                      className="text-primary text-4xl md:text-5xl font-black tracking-tighter font-display"
                      style={{
                        textShadow: '0 0 20px rgba(80, 167, 226, 0.4), 0 0 40px rgba(80, 167, 226, 0.1)'
                      }}
                    >
                      Respire LYF
                    </h1>
                    <span className="text-primary text-sm md:text-base font-medium -mt-4">TM</span>
                  </motion.div>
                )}

                {/* "Live Your Fullest" text */}
                {showLiveYourFullest && (
                  <motion.div
                    ref={liveYourFullestRef}
                    className="flex items-center gap-1 -mb-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    {["Live", "Your", "Fullest"].map((word, index) => {
                      const isVisible = index < liveYourFullestWordIndex
                      const firstLetter = word[0]
                      const rest = word.slice(1)
                      const isYourWord = index === 1 // "Your" is at index 1
                      
                      return (
                        <span 
                          key={index} 
                          className="flex items-center"
                          ref={isYourWord ? yourWordRef : null}
                        >
                          <span
                            className="text-2xl md:text-3xl font-medium"
                            style={{
                              color: isVisible ? '#1F5C99' : 'transparent',
                              transition: 'color 0.3s ease'
                            }}
                          >
                            {firstLetter}
                          </span>
                          <span
                            className="text-2xl md:text-3xl font-medium"
                            style={{
                              color: isVisible ? '#2893D7' : 'transparent',
                              transition: 'color 0.3s ease'
                            }}
                          >
                            {rest}
                          </span>
                          {index < 2 && <span className="w-2"></span>}
                        </span>
                      )
                    })}
                  </motion.div>
                )}
              </div>

              {/* Center Section: Logo with icons around it - Positioned relative to "Live Your Fullest" text */}
              <div 
                className="relative w-full flex items-center justify-center -mt-4 mb-0 mr-20"
                style={{
                  position: 'relative',
                }}
              >
                {/* Responsive container - positioned so supplement icon aligns with text center */}
                {(() => {
                  // Calculate container width: min of 90vw or 500px
                  const containerWidth = windowSize.width > 0 
                    ? Math.min(windowSize.width * 0.9, 500) 
                    : 500
                  
                  // Responsive icon size: scales between 30px (mobile) and 50px (desktop)
                  const responsiveIconSize = Math.max(30, Math.min(50, containerWidth * 0.1))
                  
                  // Responsive circle radius: scales between 120px (mobile) and 180px (desktop)
                  const responsiveCircleRadius = Math.max(120, Math.min(180, containerWidth * 0.36))
                  
                  // Responsive logo size: scales between 80px (mobile) and 160px (desktop)
                  const responsiveLogoSize = Math.max(80, Math.min(160, containerWidth * 0.32))
                  
                  // Supplement icon is at index 0, which is at 12 o'clock (270° or -90°)
                  // To align supplement icon with text center, we need to offset the circle center
                  // Supplement icon position = circle center + (0, -radius) [12 o'clock is up]
                  // We want supplement icon at text center, so:
                  // circle center = text center - (0, -radius) = text center + (0, radius)
                  const offsetY = responsiveCircleRadius
                  
                  return (
                    <div 
                      className="relative" 
                      style={{ 
                        aspectRatio: '1 / 1',
                        maxWidth: '500px',
                        maxHeight: '500px',
                        width: windowSize.width > 0 ? `min(90vw, 500px)` : '500px',
                        height: windowSize.width > 0 ? `min(90vw, 500px)` : '500px',
                        // Position circle center to align supplement icon with text center
                        transform: textCenterOffset.y > 0 
                          ? `translateY(${textCenterOffset.y - offsetY}px)` 
                          : undefined,
                      }}
                    >
                      {/* Circular Icons around logo - uses container's center (50%, 50%) */}
                      <CircularIconsAnimation
                        visibleIconIndices={visibleIconIndices}
                        iconSize={responsiveIconSize}
                        circleRadius={responsiveCircleRadius}
                        centerX={0}
                        centerY={0}
                        className="absolute inset-0"
                      />

                      {/* Logo at exact center of circle - same center point as icons */}
                      {showLogo && (
                        <div
                          className="absolute z-20"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(calc(-50% + 40px), calc(-50% + 28px))',
                            width: `${responsiveLogoSize}px`,
                            height: `${responsiveLogoSize}px`,
                          }}
                        >
                          <motion.div
                            initial={{ scale: 3, opacity: 0, rotate: -15 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0 }}
                            transition={{ type: "spring", response: 1.2, dampingFraction: 0.7 }}
                            style={{
                              transformOrigin: 'center center',
                              width: '100%',
                              height: '100%',
                            }}
                          >
                            <div className="relative w-full h-full">
                              <Image
                                src="/icons/respirelyf_logo.png"
                                alt="Respire LYF Logo"
                                fill
                                className="object-contain"
                                sizes="(max-width: 640px) 128px, 160px"
                                priority
                              />
                            </div>
                          </motion.div>
                        </div>
                      )}
                    </div>
                  )
                })()}
              </div>

              {/* Bottom Section: Slogan and "Simple — Personal — Affordable" */}
              <div className="relative z-30 flex flex-col items-center gap-4 mt-6">
                
                {/* "All-in-One Respiratory Co-Pilot" slogan */}
                {showSlogan && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <p className="text-charcoal text-xl md:text-2xl font-semibold">
                      {Array.from("All-in-One Respiratory Co-Pilot").map((char, index) => (
                        <span
                          key={index}
                          style={{
                            color: index < sloganCharacterIndex 
                              ? (index < 10 ? '#2894D9' : '#256096') 
                              : 'transparent',
                            transition: 'color 0.2s ease'
                          }}
                        >
                          {char}
                        </span>
                      ))}
                    </p>
                  </motion.div>
                )}

                {/* "Simple — Personal — Affordable" text */}
                {showSimplePersonalAffordable && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", response: 0.7, dampingFraction: 0.8 }}
                  >
                    <p className="text-charcoal text-2xl md:text-3xl font-semibold">
                      {["Simple", "Personal", "Affordable"].map((word, index) => {
                        const wordIndex = index * 2 + 1 // Account for separators
                        const isVisible = wordIndex <= simplePersonalAffordableWordIndex
                        
                        return (
                          <span key={index}>
                            <span style={{ color: isVisible ? undefined : 'transparent' }}>
                              {word}
                            </span>
                            {index < 2 && (
                              <span style={{ color: isVisible ? undefined : 'transparent' }}>
                                {' — '}
                              </span>
                            )}
                          </span>
                        )
                      })}
                    </p>
                  </motion.div>
                )}

              </div>

            </div>
          </motion.main>
        ) : !isLastQuestion ? (
          // Questions 1-4: Centered layout
          <motion.main
            key="centered"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex-1 flex flex-col justify-center items-center w-full max-w-5xl px-6 relative z-10"
            style={{ willChange: 'opacity' }}
          >
            {/* "WHAT IF" Header */}
            <div className="w-full text-center mb-8 md:mb-10">
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
            <div className="w-full max-w-4xl mx-auto text-center h-[220px] md:h-[280px] flex items-center justify-center">
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
                    transform: 'translateZ(0)',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
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
                  className="w-full"
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
            className="flex-1 w-full max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 relative z-10"
            style={{ willChange: 'opacity' }}
          >
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* "What if" text - stable (no animation), left-aligned */}
              <h1
                className="text-primary text-5xl md:text-8xl font-black tracking-tighter mb-16 md:mb-20 font-display text-left"
                style={{
                  textShadow: '0 0 20px rgba(80, 167, 226, 0.4), 0 0 40px rgba(80, 167, 226, 0.1)'
                }}
              >
                What if
              </h1>
              
              {/* Question text - word by word animation matching Swift */}
              <div className="min-h-[200px] md:min-h-[250px] flex items-center">
                <div className="text-charcoal text-3xl md:text-4xl lg:text-4xl font-medium leading-tight tracking-tight text-left w-full">
                  {/* "Your Health Determinants (HD)" - word by word */}
                  {showDeterminantsText && (
                    <div className="inline">
                      <AnimatedTextWordByWord
                        text="Your Health Determinants (HD)"
                        wordDelay={0.4}
                        animationDuration={0.3}
                        className="text-charcoal"
                        highlightClassName="text-primary font-bold"
                        highlightedPhrase="Health Determinants (HD)"
                        startAnimation={showDeterminantsText}
                      />
                    </div>
                  )}
                  
                  {/* "could be mapped to" - word by word */}
                  {showKPIsMiddleText && (
                    <div className="inline">
                      {' '}
                      <AnimatedTextWordByWord
                        text="could be mapped to"
                        wordDelay={0.4}
                        animationDuration={0.3}
                        className="text-charcoal"
                        highlightClassName="text-primary"
                        startAnimation={showKPIsMiddleText}
                      />
                    </div>
                  )}
                  
                  {/* "Your Health Indicators (HI)" - word by word on new line, right-aligned */}
                  {showKPIsFinalText && (
                    <div className="block text-right w-full mt-2">
                      <AnimatedTextWordByWord
                        text="Your Health Indicators (HI)"
                        wordDelay={0.4}
                        animationDuration={0.3}
                        className="text-charcoal"
                        highlightClassName="text-primary font-bold"
                        highlightedPhrase="Health Indicators (HI)"
                        startAnimation={showKPIsFinalText}
                      />
                    </div>
                  )}
                  
                  {/* "for the clarity you and your doctor need?" - word by word on new line, right-aligned */}
                  {showClarityText && (
                    <div className="block text-right w-full mt-2 whitespace-nowrap">
                      <AnimatedTextWordByWord
                        text="for the clarity you and your doctor need?"
                        wordDelay={0.3}
                        animationDuration={0.3}
                        className="text-charcoal"
                        highlightClassName="text-primary"
                        startAnimation={showClarityText}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div
              className="w-full lg:w-1/2 relative flex items-center justify-center"
              style={{ minHeight: '500px', maxHeight: '600px' }}
            >
              {/* Circular Icons Animation - synchronized with text */}
              <div className="relative w-full h-full max-w-[500px] max-h-[500px]">
                <CircularIconsAnimation
                  visibleIconIndices={visibleIconIndices}
                  iconSize={50}
                  circleRadius={180}
                  centerX={0}
                  centerY={0}
                  className="w-full h-full"
                />
              </div>
              
              {/* Decorative blur orbs */}
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none -z-10"></div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none -z-10"></div>
            </div>
          </motion.main>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="w-full px-6 pt-4 pb-6 flex flex-col items-center gap-6 relative z-20 mt-auto flex-shrink-0">
        
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
          {/* 6th dot for Meet Respire LYF slide */}
          <button
            onClick={() => {
              if (!showMeetRespireLYF) {
                setShowMeetRespireLYF(true)
                startMeetRespireLYFAnimation()
              }
            }}
            className="relative"
            aria-label="Go to Meet Respire LYF"
          >
            {showMeetRespireLYF ? (
              <motion.span
                layoutId="activeDot"
                className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(80,167,226,0.5)] block"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            ) : (
              <span className="w-2.5 h-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-all duration-300 cursor-pointer block"></span>
            )}
          </button>
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
            onClick={handleScrollToNext}
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
