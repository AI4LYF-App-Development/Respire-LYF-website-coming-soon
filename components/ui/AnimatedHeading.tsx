'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  highlightWord: string
  className?: string
  highlightClassName?: string
}

export default function AnimatedHeading({
  text,
  highlightWord,
  className = '',
  highlightClassName = '',
}: AnimatedHeadingProps) {
  
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLHeadingElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )
    
    if (ref.current) {
      observer.observe(ref.current)
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])
  
  const parts = text.split(new RegExp(`(${highlightWord})`, 'gi'))
  
  return (
    <h1 ref={ref} className={className}>
      {parts.map((part, index) => {
        const isHighlight = part.toLowerCase() === highlightWord.toLowerCase()
        
        if (isHighlight) {
          return (
            <span key={index} className="relative inline-block">
              <span className={highlightClassName}>{part}</span>
              {isVisible && (
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  }}
                />
              )}
            </span>
          )
        }
        
        return <span key={index}>{part}</span>
      })}
    </h1>
  )
}






