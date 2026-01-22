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
  "Your health determinants (HD) could be mapped to your health indicators (HI) for the clarity you and your doctor needs?"
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
  
  // Track all animation timeouts for cleanup
  const animationTimeoutsRef = useRef<Set<NodeJS.Timeout>>(new Set())
  const prevIsLastQuestionRef = useRef<boolean>(false)
  const prevShowMeetRespireLYFRef = useRef<boolean>(false)
  const intentionallyShowing6thSlideRef = useRef<boolean>(false)
  const fifthSlideAnimationsStartedRef = useRef<boolean>(false)
  const sixthSlideAnimationsStartedRef = useRef<boolean>(false)
  
  // Function to clear all animation timeouts
  const clearAllAnimationTimeouts = () => {
    animationTimeoutsRef.current.forEach(timeout => clearTimeout(timeout))
    animationTimeoutsRef.current.clear()
  }
  
  // Function to reset all animation states immediately
  const resetAllAnimationStates = () => {
    // Clear all timeouts first to stop any pending animations
    clearAllAnimationTimeouts()
    
    // Reset 5th question states - batch updates for better performance
    setShowDeterminantsText(false)
    setShowKPIsMiddleText(false)
    setShowKPIsFinalText(false)
    setShowClarityText(false)
    setVisibleIconIndices(new Set())
    setIsAnimationComplete(false)
    
    // Reset Meet Respire LYF states - batch updates
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
    setStartMasterMonitorRotation(false)
    setMoveTextsToLogo(false)
    setShowReplaceChaos(false)
    setReplaceChaosCharacterIndex(0)
    setShowReplaceChaosFadeOut(false)
    setHideMeetAfterMerge(false)
    setMeetOpacity(1.0)
    setGroupElementsTogether(false)
    setRotationAngle(0) // Reset rotation angle
  }
  
  // Helper function to add timeout to tracking
  const addTimeout = (timeout: NodeJS.Timeout) => {
    animationTimeoutsRef.current.add(timeout)
    return timeout
  }

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
  const [startMasterMonitorRotation, setStartMasterMonitorRotation] = useState(false)
  const [showReplaceChaos, setShowReplaceChaos] = useState(false)
  const [replaceChaosCharacterIndex, setReplaceChaosCharacterIndex] = useState(0)
  const [showReplaceChaosFadeOut, setShowReplaceChaosFadeOut] = useState(false)
  const [hideMeetAfterMerge, setHideMeetAfterMerge] = useState(false)
  const [meetOpacity, setMeetOpacity] = useState(1.0)
  const [groupElementsTogether, setGroupElementsTogether] = useState(false)
  const [rotationAngle, setRotationAngle] = useState(0)
  const [moveTextsToLogo, setMoveTextsToLogo] = useState(false)

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

  // Reset animation states when switching to/from last question or between 5th/6th slides
  useEffect(() => {
    // Detect if we're switching between 5th and 6th slides
    const switchedFrom5thTo6th = prevIsLastQuestionRef.current === true && prevShowMeetRespireLYFRef.current === false && showMeetRespireLYF === true
    const switchedFrom6thTo5th = prevShowMeetRespireLYFRef.current === true && showMeetRespireLYF === false && isLastQuestion === true
    const switchedTo5thFromOther = prevIsLastQuestionRef.current !== isLastQuestion && isLastQuestion === true && !showMeetRespireLYF
    // Detect switching to 6th slide from slides 1-4 (isLastQuestion changes from false to true, showMeetRespireLYF becomes true)
    const switchedTo6thFromOther = prevIsLastQuestionRef.current === false && isLastQuestion === true && showMeetRespireLYF === true
    const isOn5thSlide = isLastQuestion === true && !showMeetRespireLYF
    const isOn6thSlide = isLastQuestion === true && showMeetRespireLYF === true
    
    // Always clear animations and reset states when switching between slides
    // This ensures animations always start fresh
    if (switchedFrom5thTo6th || switchedFrom6thTo5th || switchedTo5thFromOther || switchedTo6thFromOther) {
      clearAllAnimationTimeouts()
      resetAllAnimationStates()
      // Reset animation tracking refs when switching slides
      fifthSlideAnimationsStartedRef.current = false
      sixthSlideAnimationsStartedRef.current = false
    }
    
    // Update refs
    prevIsLastQuestionRef.current = isLastQuestion
    prevShowMeetRespireLYFRef.current = showMeetRespireLYF
    
    // Start 5th question animations if we're on 5th slide and animations haven't started
    // This ensures animations restart fresh every time we come to the 5th slide
    if (isOn5thSlide && !fifthSlideAnimationsStartedRef.current) {
      fifthSlideAnimationsStartedRef.current = true
      // Start animation sequence for 5th question
      setShowDeterminantsText(false)
      setShowKPIsMiddleText(false)
      setShowKPIsFinalText(false)
      setShowClarityText(false)
      setVisibleIconIndices(new Set())
      setIsAnimationComplete(false)

      // Start animation immediately with question text (no delay for "What if")
      // Show determinants text first
      const determinantsTimeout = addTimeout(setTimeout(() => {
        setShowDeterminantsText(true)
      }, 0))

      // Sync determinant icons with "Your Health Determinants (HD)" text word-by-word
      const determinantsText = "Your Health Determinants (HD)"
      const determinantsWords = determinantsText.split(' ')
      const determinantsCount = 10
      // Match the icon interval with health indicators (400ms per icon)
      const iconInterval = 300 // Same speed as health indicators icons (400ms per icon)
      // Text word delay: 0.8s per word to match icon speed (5 words * 0.8s = 4s, same as 10 icons * 0.4s = 4s)
      const determinantsWordDelay = 800 // 0.8s per word to match icon animation speed

      // Show icons progressively as text appears
      // Icons appear at 400ms intervals (same as health indicators)
      // Total icon duration: 10 icons * 400ms = 4000ms
      // Text duration: 5 words * 800ms = 4000ms (matches icon speed)
      const totalTextDuration = determinantsCount * iconInterval // 4000ms to match icon speed

      // Show icons at consistent 400ms intervals (matching health indicators speed)
      for (let i = 0; i < determinantsCount; i++) {
        addTimeout(setTimeout(() => {
          setVisibleIconIndices(prev => new Set([...prev, i]))
        }, i * iconInterval))
      }

      const determinantsTextDuration = totalTextDuration

      // Show "could be mapped to" after determinants completes
      const pauseAfterDeterminants = 1000 // 1 second pause
      const kpisMiddleStartTime = determinantsTextDuration + pauseAfterDeterminants

      const kpisMiddleTimeout = addTimeout(setTimeout(() => {
        setShowKPIsMiddleText(true)
      }, kpisMiddleStartTime))

      // Show "Your Health Indicators (HI)" after "could be mapped to" completes
      const kpisMiddleWords = "could be mapped to".split(' ').length
      const kpisMiddleDuration = kpisMiddleWords * 0.4 * 1000
      const pauseBeforeKPIsFinal = 800
      const kpisFinalStartTime = kpisMiddleStartTime + kpisMiddleDuration + pauseBeforeKPIsFinal

      const kpisFinalTimeout = addTimeout(setTimeout(() => {
        setShowKPIsFinalText(true)
      }, kpisFinalStartTime))

      // Sync KPI icons with "Your Health Indicators (HI)" text word-by-word
      const kpisText = "Your Health Indicators (HI)"
      const kpisWords = kpisText.split(' ')
      const kpisCount = 5 // Vitals, Cough, Breathing Score, Peak Flow, ACT
      const kpisStartIndex = determinantsCount
      const wordDelay = 400 // 0.4s per word for health indicators (same as icon speed)

      // Show KPI icons progressively as text appears
      const kpisTextDuration = kpisWords.length * wordDelay
      const kpisIconInterval = kpisTextDuration / kpisCount

      for (let i = 0; i < kpisCount; i++) {
        addTimeout(setTimeout(() => {
          setVisibleIconIndices(prev => new Set([...prev, kpisStartIndex + i]))
        }, kpisFinalStartTime + (i * kpisIconInterval)))
      }

      // Show clarity text after KPIs complete
      const pauseBeforeClarity = 200
      const clarityStartTime = kpisFinalStartTime + kpisTextDuration + pauseBeforeClarity

      const clarityTimeout = addTimeout(setTimeout(() => {
        setShowClarityText(true)
      }, clarityStartTime))

      // Calculate total animation duration and mark as complete
      const clarityWords = "for the clarity you and your doctor needs?".split(' ').length
      const clarityDuration = clarityWords * 0.3 * 1000 // 0.3s delay for clarity text
      const totalDuration = clarityStartTime + clarityDuration
      const finalDelay = 2000 // 2 seconds delay after all animations complete

      const completeTimeout = addTimeout(setTimeout(() => {
        setIsAnimationComplete(true)
        // Transition to Meet Respire LYF slide after 2 second delay
        addTimeout(setTimeout(() => {
          // Reset icon indices for the 6th slide
          setVisibleIconIndices(new Set())
          setMoveTextsToLogo(false)
          // Reset animation tracking ref for 6th slide
          sixthSlideAnimationsStartedRef.current = false
          // Note: intentionallyShowing6thSlideRef stays false for auto-transition
          setShowMeetRespireLYF(true)
          // Animation will be started by useEffect
        }, 2000))
      }, totalDuration + finalDelay))

      return () => {
        clearAllAnimationTimeouts()
      }
    } else {
      // Reset states when not on last question
      // IMPORTANT: Don't reset showMeetRespireLYF here - it's controlled by button clicks
      // Only reset animation states, not the slide visibility state
      // But only if we're not intentionally showing the 6th slide
      if (!intentionallyShowing6thSlideRef.current) {
        setShowDeterminantsText(false)
        setShowKPIsMiddleText(false)
        setShowKPIsFinalText(false)
        setShowClarityText(false)
        setVisibleIconIndices(new Set())
        setIsAnimationComplete(false)
        
        // Only reset Meet Respire LYF animation states if we're not showing the 6th slide
        // This prevents the useEffect from interfering when user clicks 6th slide
        if (!showMeetRespireLYF) {
          // Reset all Meet Respire LYF animation states
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
          setMoveTextsToLogo(false)
        }
      }
    }
    
    // Handle 6th slide animations when showMeetRespireLYF becomes true
    // Start animations if:
    // 1. We're intentionally showing the 6th slide (user clicked the dot), OR
    // 2. We just switched from 5th to 6th slide (auto-transition), OR
    // 3. We just switched to 6th slide from slides 1-4
    // And animations haven't started yet
    // Use switchedFrom5thTo6th and switchedTo6thFromOther which were calculated before refs were updated
    if (isOn6thSlide && !sixthSlideAnimationsStartedRef.current && (intentionallyShowing6thSlideRef.current || switchedFrom5thTo6th || switchedTo6thFromOther)) {
      sixthSlideAnimationsStartedRef.current = true
      // Small delay to ensure all states are reset and UI is ready
      addTimeout(setTimeout(() => {
        startMeetRespireLYFAnimation()
      }, 50))
    }
  }, [isLastQuestion, showMeetRespireLYF])

  // Start Meet Respire LYF animation sequence - smooth and professional
  const startMeetRespireLYFAnimation = () => {
    // Clear any existing animations first
    clearAllAnimationTimeouts()
    
    // Step 1: Show "Meet" text first with smooth fade-in
    addTimeout(setTimeout(() => {
      setShowMeetText(true)
    }, 300)) // 0.3s initial delay

    // Step 2: Show "Respire LYF™", logo, and "Live Your Fullest" together simultaneously after "Meet" appears
    // They appear together to show alignment and create engaging, cohesive effect
    // "Live Your Fullest" appears immediately with "Respire LYF" as part of the name
    // Maximum 1 second delay after "Meet" appears
    addTimeout(setTimeout(() => {
      setShowRespireLYFText(true)
      setShowLogo(true) // Show together for synchronized, aligned appearance
      setShowLiveYourFullest(true)
      // Show all words immediately as part of the name, not word-by-word
      setLiveYourFullestWordIndex(3) // All 3 words appear at once
    }, 1300)) // 0.3s + 1.0s delay (maximum 1 sec after "Meet" appears)

    // Step 3: Show slogan and icons after a brief pause to let the name settle
    addTimeout(setTimeout(() => {
      setShowSlogan(true)
      animateSloganWithIconAppearance() // Use the exact Swift function name and logic
    }, 2100)) // 1.3s (when elements appear) + 0.8s (brief pause) = 2.1s

    // Step 5: "Replace the Chaos" is now triggered from animateSloganWithIconAppearance
    // after slogan completes (matching Swift code - immediate, no delay)
  }

  const animateLiveYourFullest = () => {
    const words = "Live Your Fullest".split(' ')
    words.forEach((_, index) => {
      addTimeout(setTimeout(() => {
        setLiveYourFullestWordIndex(index + 1)
      }, index * 500)) // 0.5s delay per word for smooth, professional, engaging appearance
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
      addTimeout(setTimeout(() => {
        setSloganCharacterIndex(charIndex + 1)
      }, textTiming))

      // Show icon at the calculated timing
      if (charIndex < totalIcons) {
        const iconIndex = charIndex
        addTimeout(setTimeout(() => {
          setVisibleIconIndices(prev => new Set([...prev, iconIndex]))
        }, iconTiming))
      }
    })

    // After all characters appear (and icons if available), proceed to Step 4
    // Since text and icons use the same timing formula, they finish together
    const sloganDuration = (characters.length - 1) * 200 + iconDelay

    // No delay: proceed immediately when animation completes (matching Swift)
    addTimeout(setTimeout(() => {
      // Ensure all available icons are visible (matching Swift code)
      const allIconIndices = new Set(Array.from({ length: Math.min(totalIcons, characters.length) }, (_, i) => i))
      setVisibleIconIndices(allIconIndices)

      // Proceed to Step 4: "Replace the Chaos" with icon merging synchronized with text
      // Both animations run in parallel: text appears while icons merge simultaneously
      setShowReplaceChaos(true)
      animateReplaceChaosWithIconMerging()
    }, sloganDuration))
  }

  const animateSimplePersonalAffordable = () => {
    const text = "Simple — Personal — Affordable"
    const words = text.split(' — ')

    words.forEach((_, index) => {
      addTimeout(setTimeout(() => {
        // Map to component word index (accounting for separators)
        const componentIndex = (index * 2) + 1
        setSimplePersonalAffordableWordIndex(componentIndex)
      }, index * 600)) // 0.6s delay per word for smoother appearance
    })
  }

  // Animate "Replace the Chaos With Confidence" text with icon merging synchronized
  const animateReplaceChaosWithIconMerging = () => {
    const text = "Replace the Chaos With Confidence"
    const characters = Array.from(text)
    const totalIcons = 15 // 10 determinants + 5 KPIs
    
    // ============================================
    // TIMING CONTROLS - Adjust these values to change animation speed
    // ============================================
    // Character delay: Time between each character appearing (in milliseconds)
    // Increase for slower text appearance, decrease for faster
    const replaceChaosCharacterDelay = 100 // Default: 350ms (0.35s per character)
    
    // Icon delay: Additional delay before icon starts merging (in milliseconds)
    // Increase for more spacing between icon merges, decrease for tighter timing
    const iconDelay = 50 // Default: 200ms (0.2s delay)
    // ============================================

    // Icons merge in reverse order (last icon first) as characters appear
    // Distribute 15 icons across all 33 characters so they merge throughout the entire text appearance
    
    // Calculate text character delay - text appears at normal pace
    const textCharacterDelay = replaceChaosCharacterDelay

    // Calculate which character index should trigger each icon merge
    // Icons merge in reverse order: last icon (14) merges first, first icon (0) merges last
    const iconMergeMap: Map<number, number> = new Map()
    for (let iconIndex = totalIcons - 1; iconIndex >= 0; iconIndex--) {
      // Distribute icons evenly across all characters
      // Last icon (14) merges at character 0, first icon (0) merges at character 32
      const charIndex = Math.round((totalIcons - 1 - iconIndex) * (characters.length - 1) / (totalIcons - 1))
      iconMergeMap.set(charIndex, iconIndex)
    }

    characters.forEach((_, charIndex) => {
      // Text appears at normal pace
      const textTiming = charIndex * textCharacterDelay

      // Show text character
      addTimeout(setTimeout(() => {
        setReplaceChaosCharacterIndex(charIndex + 1)
      }, textTiming))

      // Check if this character position should trigger an icon merge
      if (iconMergeMap.has(charIndex)) {
        const iconIndex = iconMergeMap.get(charIndex)!
        const iconMergeTiming = charIndex * replaceChaosCharacterDelay + iconDelay

        // Merge icon at the calculated timing
        addTimeout(setTimeout(() => {
          setVisibleIconIndices(prev => {
            const newSet = new Set(prev)
            newSet.delete(iconIndex)
            return newSet
          })
        }, iconMergeTiming))
      }
    })

    // Calculate when all animations complete
    const animationDuration = (characters.length - 1) * replaceChaosCharacterDelay + iconDelay

    // After all characters appear and icons merge, proceed to next step
    addTimeout(setTimeout(() => {
      // Ensure all icons are merged (removed from visible set)
      setVisibleIconIndices(new Set())

      // Add 1 second delay after text completes
      addTimeout(setTimeout(() => {
        // Fade out "Replace the Chaos"
        setShowReplaceChaosFadeOut(true)

        // Hide "Meet" word only (keep "Respire LYF" visible)
        setHideMeetAfterMerge(true)
        setMeetOpacity(0.0)

        // Start moving texts toward logo smoothly
        setMoveTextsToLogo(true)

        // After texts move to logo (smooth animation duration), show master monitor
        const textMoveDuration = 2500 // 2.5s for slow, smooth, professional text movement
        addTimeout(setTimeout(() => {
          // Very smoothly appear the master monitor circle above logo (stable, not rotating)
          setShowMasterMonitor(true)
          setStartMasterMonitorRotation(false) // Ensure rotation doesn't start immediately

          // After 2 seconds of being stable, start rotation
          addTimeout(setTimeout(() => {
            setStartMasterMonitorRotation(true)

            // When master monitor starts rotating, show "Simple — Personal — Affordable"
            // Small delay to ensure rotation has started
            addTimeout(setTimeout(() => {
              setShowSimplePersonalAffordable(true)
              animateSimplePersonalAffordable()
            }, 300)) // 0.3s delay after rotation starts
          }, 2000)) // 2 seconds delay before starting rotation
        }, textMoveDuration))
      }, 1000)) // 1 second delay after text completes
    }, animationDuration))
  }

  // Start continuous rotation animation for master monitor circle
  useEffect(() => {
    if (!showMasterMonitor || !startMasterMonitorRotation) {
      setRotationAngle(0)
      return
    }

    const rotationDuration = 8000 // 8 seconds for one full rotation
    const anglePerSecond = (2 * Math.PI) / rotationDuration
    const frameInterval = 0.016 // 16ms per frame (60fps)
    let animationFrameId: number | null = null

    const rotate = () => {
      setRotationAngle(prev => {
        const newAngle = prev + (anglePerSecond * frameInterval)
        return newAngle >= 2 * Math.PI ? newAngle - 2 * Math.PI : newAngle
      })
      animationFrameId = requestAnimationFrame(rotate)
    }

    animationFrameId = requestAnimationFrame(rotate)

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [showMasterMonitor, startMasterMonitorRotation])

  // Auto-restart slides from first question after 5 seconds of rotation
  useEffect(() => {
    // Wait for all animations to complete: master monitor is rotating and "Simple — Personal — Affordable" is shown
    if (!showMasterMonitor || !showSimplePersonalAffordable) return

    // Wait 5 seconds after rotation starts, then restart from first question
    const restartTimeout = addTimeout(setTimeout(() => {
      // Clear all animations and reset states
      clearAllAnimationTimeouts()
      resetAllAnimationStates()
      
      // Reset animation tracking refs
      fifthSlideAnimationsStartedRef.current = false
      sixthSlideAnimationsStartedRef.current = false
      intentionallyShowing6thSlideRef.current = false
      
      // Reset to first question
      setCurrentIndex(0)
      setShowMeetRespireLYF(false)
      setDirection(1)
    }, 10000)) // 10 seconds delay

    return () => {
      // Cleanup is handled by clearAllAnimationTimeouts, but we can also clear directly
      clearTimeout(restartTimeout)
      animationTimeoutsRef.current.delete(restartTimeout)
    }
  }, [showMasterMonitor, showSimplePersonalAffordable])


  return (
    <section className="relative min-h-screen flex flex-col items-center overflow-x-hidden overflow-y-auto" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      
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
      <header className="w-full max-w-7xl mx-auto px-4 sm:px-6 pt-4 sm:pt-6 pb-3 sm:pb-4 flex items-center justify-between relative z-30 flex-shrink-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12">
            <Image
              src="/icons/respirelyf_logo.png"
              alt="Respire LYF logo"
              fill
              className="object-contain"
              sizes="(max-width: 640px) 40px, 48px"
              priority
            />
          </div>
          <h2 className="text-lg sm:text-xl font-extrabold tracking-tight text-charcoal font-display"><span style={{ color: '#2894D9' }}>Respire</span> <span style={{ color: '#256096' }}>LYF</span></h2>
        </div>
        <div className="flex items-center gap-4 sm:gap-8">
          <button 
            onClick={onJoinWaitlist}
            className="bg-primary hover:bg-[#4296d1] text-white text-xs sm:text-sm font-bold px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all shadow-lg shadow-primary/20"
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
            className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex flex-col items-center justify-center relative z-10"
            style={{ willChange: 'opacity', minHeight: 'auto' }}
          >
            <div className="w-full flex flex-col items-center justify-center relative min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">

              {/* Top Section: "Meet", "Respire LYF™", and "Live Your Fullest" stacked */}
              <div className="relative z-30 flex flex-col items-center gap-2 sm:gap-3 md:gap-4 mb-0 mb-2 sm:mb-4 -mt-10 sm:-mt-16 md:-mt-20">
                {/* "Meet" text */}
                {showMeetText && !hideMeetAfterMerge && (
                  <motion.h1
                    className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter font-display text-center"
                    initial={{ scale: 2.5, opacity: 0, y: -30 }}
                    animate={{ scale: 1, opacity: meetOpacity, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      response: 1.5, 
                      dampingFraction: 0.75,
                      stiffness: 100,
                      mass: 0.8
                    }}
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
                    initial={{ scale: 0.4, opacity: 0, y: -40, rotate: -8 }}
                    animate={{
                      scale: moveTextsToLogo ? 0.9 : (groupElementsTogether ? 1.15 : 1),
                      opacity: 1,
                      y: moveTextsToLogo 
                        ? (windowSize.width > 0 && windowSize.width >= 1024 ? 100 : windowSize.width >= 640 ? 85 : 70) // Move down toward logo (reduced to match bottom)
                        : (groupElementsTogether ? (windowSize.width > 0 && windowSize.width >= 1024 ? -170 : windowSize.width >= 640 ? -130 : -100) : 0),
                      rotate: 0
                    }}
                    transition={{
                      type: "spring",
                      response: moveTextsToLogo ? 2.5 : (groupElementsTogether ? 3.0 : 2.5),
                      dampingFraction: moveTextsToLogo ? 0.75 : (groupElementsTogether ? 0.85 : 0.7),
                      stiffness: moveTextsToLogo ? 40 : 50,
                      mass: moveTextsToLogo ? 2.0 : 1.8,
                      duration: moveTextsToLogo ? 2.5 : undefined
                    }}
                  >
                    <h1
                      className="text-charcoal text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight font-display"
                    >
                      <span style={{ color: '#2894D9' }}>Respire</span> <span style={{ color: '#256096' }}>LY<span style={{ position: 'relative' }}>F<sup style={{ position: 'absolute', top: '-0.2em', right: '-0.5em', fontSize: '0.35em', color: '#2894D9', lineHeight: 1, fontWeight: 'normal' }}>™</sup></span></span>
                    </h1>
                  </motion.div>
                )}

                {/* "Live Your Fullest" text */}
                {showLiveYourFullest && (
                  <motion.div
                    ref={liveYourFullestRef}
                    className="flex items-center gap-1 -mb-2"
                    initial={{ opacity: 0, y: 25, scale: 0.85 }}
                    animate={{ 
                      opacity: 1,
                      y: moveTextsToLogo 
                        ? (windowSize.width > 0 && windowSize.width >= 1024 ? 100 : windowSize.width >= 640 ? 85 : 70) // Move down toward logo (reduced to match bottom)
                        : 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: moveTextsToLogo ? 2.5 : 1.4,
                      type: moveTextsToLogo ? "spring" : "spring",
                      response: moveTextsToLogo ? 2.5 : 2.5,
                      dampingFraction: moveTextsToLogo ? 0.75 : 0.7,
                      stiffness: moveTextsToLogo ? 40 : 50,
                      mass: moveTextsToLogo ? 2.0 : 1.8
                    }}
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
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                            style={{
                              color: isVisible ? '#1F5C99' : 'transparent',
                              transition: 'color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                          >
                            {firstLetter}
                          </span>
                          <span
                            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium"
                            style={{
                              color: isVisible ? '#2893D7' : 'transparent',
                              transition: 'color 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
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

                      {/* Master Monitor Circle - appears stable first, then rotates after 2 seconds */}
                      {/* Positioned above logo, centered horizontally, same position for appearance and rotation */}
                      {showMasterMonitor && (
                        <div
                          className="absolute z-10"
                          style={{
                            left: '50%',
                            top: '90%',
                            width: `${containerWidth * 0.56}px`, // ~280px for 500px container
                            height: `${containerWidth * 0.56}px`,
                            transformOrigin: 'center center',
                            transform: `translate(calc(-50% + 38px), calc(-50% - ${containerWidth * 0.28 + 20}px))`,
                          }}
                        >
                          <motion.div
                            className={`relative w-full h-full ${startMasterMonitorRotation ? 'master-monitor-rotating' : ''}`}
                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                            animate={{ 
                              opacity: 1, 
                              scale: 1, 
                              y: 0
                            }}
                            transition={{ 
                              duration: 1.0, 
                              ease: [0.4, 0, 0.2, 1],
                              type: "spring",
                              response: 1.2,
                              dampingFraction: 0.7
                            }}
                            style={{
                              transformOrigin: 'center center'
                            }}
                          >
                            <Image
                              src="/images/master_and_monitor_circle.png"
                              alt="Master Monitor Circle"
                              fill
                              className="object-contain"
                              sizes="280px"
                              priority
                            />
                          </motion.div>
                        </div>
                      )}

                      {/* Logo at exact center of circle - same center point as icons */}
                      {showLogo && (
                        <div
                          className="absolute z-20"
                          style={{
                            left: '50%',
                            top: '50%',
                            transform: 'translate(calc(-50% + 38px), calc(-50% + 35px))',
                            width: `${responsiveLogoSize}px`,
                            height: `${responsiveLogoSize}px`,
                          }}
                        >
                          <motion.div
                            initial={{ scale: 1.3, opacity: 0, rotate: -12, y: -25 }}
                            animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
                            transition={{ 
                              type: "spring", 
                              response: 2.5, 
                              dampingFraction: 0.7,
                              stiffness: 50,
                              mass: 1.8
                            }}
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
              <div className={`relative z-30 flex flex-col items-center gap-4 ${moveTextsToLogo ? 'mt-0' : 'mt-6'}`}>

                {/* "All-in-One Respiratory Co-Pilot" slogan */}
                {showSlogan && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{
                      opacity: 1,
                      y: moveTextsToLogo 
                        ? (windowSize.width > 0 && windowSize.width >= 1024 ? -35 : windowSize.width >= 640 ? -85 : -65) // Move up toward logo (same absolute distance as top group)
                        : (groupElementsTogether ? (windowSize.width > 0 && windowSize.width >= 1024 ? -130 : windowSize.width >= 640 ? -90 : -70) : 0),
                      scale: moveTextsToLogo ? 0.9 : (groupElementsTogether ? 1.15 : 1)
                    }}
                    transition={{
                      type: "spring",
                      response: moveTextsToLogo ? 2.5 : (groupElementsTogether ? 3.0 : 1.0),
                      dampingFraction: moveTextsToLogo ? 0.75 : (groupElementsTogether ? 0.85 : 0.75),
                      stiffness: moveTextsToLogo ? 40 : 120,
                      mass: moveTextsToLogo ? 2.0 : 0.9,
                      duration: moveTextsToLogo ? 2.5 : undefined
                    }}
                  >
                    <p className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">
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

                {/* "Replace the Chaos With Confidence" text */}
                {showReplaceChaos && !showReplaceChaosFadeOut && (
                  <motion.div
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ 
                      duration: 0.6,
                      ease: [0.4, 0, 0.2, 1]
                    }}
                  >
                    <p className="text-charcoal text-base sm:text-lg md:text-xl lg:text-3xl font-semibold">
                      {Array.from("Replace the Chaos With Confidence").map((char, index) => (
                        <span
                          key={index}
                          style={{
                            color: index < replaceChaosCharacterIndex
                              ? (index < 10 ? '#2894D9' : '#2894D9')
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
                    className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-display font-extrabold text-charcoal"
                    initial={{ opacity: 0, scale: 0.95, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      type: "spring", 
                      response: 1.0, 
                      dampingFraction: 0.75,
                      stiffness: 100,
                      mass: 0.9
                    }}
                  >
                    {["Simple", "Personal", "Affordable"].map((word, index) => {
                      const wordIndex = index * 2 + 1 // Account for separators
                      const isVisible = wordIndex <= simplePersonalAffordableWordIndex
// 256096
                      return (
                        <>
                          <span 
                            key={`word-${index}`} 
                            style={{ 
                              color: isVisible ? '#256096' : 'transparent',
                              transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                          > 
                            {word}
                          </span>
                          {index < 2 && (
                            <>
                              <span 
                                key={`separator-${index}`}
                                className="hidden md:block w-3 h-1 bg-primary rounded-full opacity-30"
                                style={{ 
                                  opacity: isVisible ? 0.3 : 0,
                                  transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                              ></span>
                              <span 
                                key={`dash-${index}`}
                                className="md:hidden mx-3"
                                style={{ 
                                  color: isVisible ? undefined : 'transparent',
                                  transition: 'color 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }}
                              >
                                {' — '}
                              </span>
                            </>
                          )}
                        </>
                      )
                    })}
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
            className="flex-1 flex flex-col justify-center items-center w-full max-w-6xl px-2 sm:px-3 md:px-4 py-4 sm:py-8 relative z-10"
            style={{ willChange: 'opacity' }}
          >
            {/* "WHAT IF" Header */}
            <div className="w-full text-center mb-8 sm:mb-10 md:mb-12">
              <motion.h1
                className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black tracking-tighter font-display"
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
            <div className="w-full max-w-5xl mx-auto text-center min-h-[180px] sm:min-h-[200px] md:min-h-[240px] lg:h-[280px] flex items-center justify-center py-4">
          {/* <div className="w-full max-w-4xl mx-auto text-center flex items-center justify-center"> */}
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
                  <p className="text-charcoal text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-medium leading-[1.2] tracking-tight text-center w-full px-1">
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
            className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-8 flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-20 relative z-10"
            style={{ willChange: 'opacity' }}
          >
            {/* Left Column */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              {/* "What if" text - stable (no animation), left-aligned */}
              <div className="w-full mb-8 sm:mb-10 md:mb-12">
                <h1
                  className="text-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-black tracking-tighter font-display text-left"
                  style={{
                    textShadow: '0 0 20px rgba(80, 167, 226, 0.4), 0 0 40px rgba(80, 167, 226, 0.1)'
                  }}
                >
                  What if
                </h1>
              </div>

              {/* Question text - word by word animation matching Swift */}
              <div className="min-h-[150px] sm:min-h-[180px] md:min-h-[200px] lg:min-h-[250px] flex items-center">
                <div className="text-charcoal text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium leading-tight tracking-tight text-left w-full">
                  {/* "Your Health Determinants (HD)" - word by word */}
                  {showDeterminantsText && (
                    <div className="inline">
                      <AnimatedTextWordByWord
                        text="Your Health Determinants (HD)"
                        wordDelay={0.8}
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
                    <div className="block text-right mt-2 -ml-50px">
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
                    <div className="block text-right w-full mt-2 sm:whitespace-nowrap">
                      <AnimatedTextWordByWord
                        text="for the clarity you and your doctor needs?"
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
              className="w-full lg:w-1/2 relative flex items-center justify-center mt-8 lg:mt-0"
              style={{ minHeight: '300px', maxHeight: '600px' }}
            >
              {/* Circular Icons Animation - synchronized with text */}
              <div className="relative w-full h-full max-w-[300px] max-h-[300px] sm:max-w-[400px] sm:max-h-[400px] md:max-w-[500px] md:max-h-[500px]">
                <CircularIconsAnimation
                  visibleIconIndices={visibleIconIndices}
                  iconSize={windowSize.width >= 1024 ? 50 : windowSize.width >= 640 ? 40 : 30}
                  circleRadius={windowSize.width >= 1024 ? 180 : windowSize.width >= 640 ? 140 : 100}
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
      <footer className="w-full px-4 sm:px-6 pt-3 sm:pt-4 pb-4 sm:pb-6 flex flex-col items-center gap-4 sm:gap-6 relative z-20 mt-auto flex-shrink-0">
        
        {/* Dots Indicator */}
        <div className="flex gap-3 sm:gap-4">
          {QUESTIONS.map((_, index) => {
            const isActive = index === currentIndex && !showMeetRespireLYF
            return (
              <button
                key={index}
                onClick={() => {
                  // Immediately stop all animations and reset states for smooth transition
                  clearAllAnimationTimeouts()
                  resetAllAnimationStates()
                  
                  // Reset the 6th slide ref since we're navigating to a question
                  intentionallyShowing6thSlideRef.current = false
                  
                  // Reset animation tracking refs to allow animations to restart
                  fifthSlideAnimationsStartedRef.current = false
                  sixthSlideAnimationsStartedRef.current = false
                  
                  // Update slide state immediately - React will batch these updates
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                  setShowMeetRespireLYF(false)
                }}
                className="relative"
                aria-label={`Go to question ${index + 1}`}
              >
                {isActive ? (
                  <motion.span
                    layoutId="activeDot"
                    className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_12px_rgba(80,167,226,0.5)] block"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                ) : (
                  <span className="w-2.5 h-2.5 rounded-full bg-charcoal/10 hover:bg-charcoal/20 transition-all duration-300 cursor-pointer block"></span>
                )}
              </button>
            )
          })}
          {/* 6th dot for Meet Respire LYF slide */}
          <button
            onClick={() => {
              // Always stop all animations and reset states for smooth transition
              // This ensures animations restart fresh every time, even if already on 6th slide
              clearAllAnimationTimeouts()
              resetAllAnimationStates()
              
              // Reset animation tracking refs to allow animations to restart
              fifthSlideAnimationsStartedRef.current = false
              sixthSlideAnimationsStartedRef.current = false
              
              // Mark that we're intentionally showing the 6th slide
              intentionallyShowing6thSlideRef.current = true
              
              // Set currentIndex to 4 (last question index) so isLastQuestion becomes true
              // This is required for the 6th slide to work properly
              setCurrentIndex(QUESTIONS.length - 1)
              
              // Set showMeetRespireLYF to true - this controls which slide renders
              // showMeetRespireLYF takes precedence in rendering logic
              setShowMeetRespireLYF(true)
              
              // Animation will be started by useEffect when showMeetRespireLYF becomes true
              // This ensures consistent behavior with the 5th slide
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
        
        @keyframes rotateMasterMonitor {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .master-monitor-rotating {
          animation: rotateMasterMonitor 8s linear infinite;
        }
      `}</style>
    </section>
  )
}
