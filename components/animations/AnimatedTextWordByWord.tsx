'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface AnimatedTextWordByWordProps {
  text: string
  wordDelay?: number // Delay between each word appearing (in seconds)
  animationDuration?: number // Duration for each word's fade-in (in seconds)
  className?: string
  highlightClassName?: string
  highlightedPhrase?: string // Phrase to highlight in blue (e.g., "Health Determinants (HD)" or "Health Indicators (HI)")
  onComplete?: () => void
  startAnimation?: boolean
}

export default function AnimatedTextWordByWord({
  text,
  wordDelay = 0.4, // Default: 0.4s (matching Swift questionWordDelay)
  animationDuration = 0.3, // Default: 0.3s (matching Swift questionAnimationDuration)
  className = '',
  highlightClassName = '',
  highlightedPhrase = '', // Phrase to highlight in blue
  onComplete,
  startAnimation = true,
}: AnimatedTextWordByWordProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = text.split(' ')
  
  // Check if a word is part of the highlighted phrase or contains (HD) or (HI)
  const isHighlightedWord = (word: string): boolean => {
    // Always highlight words containing (HD) or (HI)
    if (word.includes('(HD)') || word.includes('(HI)')) {
      return true
    }
    
    // Check if word is part of highlighted phrase
    if (highlightedPhrase) {
      const highlightedWords = highlightedPhrase.toLowerCase().split(' ')
      const wordLower = word.toLowerCase()
      return highlightedWords.some(hw => wordLower.includes(hw))
    }
    
    return false
  }
  
  // Check if animation is complete
  const isAnimationComplete = currentWordIndex >= words.length

  useEffect(() => {
    if (!startAnimation) {
      setCurrentWordIndex(0)
      return
    }

    // Reset when animation starts
    setCurrentWordIndex(0)

    // Animate each word with delay
    const timeouts: NodeJS.Timeout[] = []
    
    words.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setCurrentWordIndex(index + 1)
        
        // Call onComplete when last word appears
        if (index === words.length - 1 && onComplete) {
          setTimeout(() => {
            onComplete()
          }, animationDuration * 1000)
        }
      }, index * wordDelay * 1000)
      
      timeouts.push(timeout)
    })

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  }, [text, wordDelay, animationDuration, startAnimation, onComplete])

  return (
    <span className={className} style={{ display: 'inline-block', width: '100%' }}>
      {words.map((word, index) => {
        const isVisible = index < currentWordIndex
        const isMostRecent = index === currentWordIndex - 1
        const isFuture = index >= currentWordIndex

        return (
          <span key={index} className="inline">
            <motion.span
              className="inline"
              initial={{ opacity: 0 }}
              animate={{
                opacity: isVisible ? 1 : 0,
              }}
              transition={{
                duration: animationDuration,
                ease: [0.4, 0, 0.2, 1], // easeInOut cubic bezier
              }}
            >
              <span
                className={
                  // Apply blue color to: highlighted words OR most recent word (during animation)
                  ((isHighlightedWord(word)) || (isMostRecent && !isAnimationComplete)) && highlightClassName
                    ? highlightClassName
                    : ''
                }
                style={{
                  color: isFuture 
                    ? 'transparent' 
                    : undefined, // Color handled by className
                }}
              >
                {word}
              </span>
            </motion.span>
            {index < words.length - 1 && (
              <span
                className="inline"
                style={{
                  color: isFuture ? 'transparent' : undefined,
                }}
              >
                {' '}
              </span>
            )}
          </span>
        )
      })}
    </span>
  )
}
