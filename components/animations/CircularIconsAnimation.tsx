'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface IconData {
  name: string
  imagePath: string
  isKPI: boolean
}

interface CircularIconsAnimationProps {
  visibleIconIndices: Set<number>
  iconSize?: number
  circleRadius?: number
  centerX?: number
  centerY?: number
  className?: string
}

// Icon configuration matching Swift - using correct paths
const DETERMINANTS: IconData[] = [
  { name: 'Supplements', imagePath: '/images/determinants/supplement.png', isKPI: false },
  { name: 'Inhaler', imagePath: '/images/determinants/inhaler.png', isKPI: false },
  { name: 'Food', imagePath: '/images/determinants/food.png', isKPI: false },
  { name: 'Sleep', imagePath: '/images/determinants/sleep.png', isKPI: false },
  { name: 'Hydration', imagePath: '/images/determinants/hydration.png', isKPI: false },
  { name: 'Medications', imagePath: '/images/determinants/medication.png', isKPI: false },
  { name: 'Activity', imagePath: '/images/determinants/activity.png', isKPI: false },
  { name: 'Stress', imagePath: '/images/determinants/stress.png', isKPI: false },
  { name: 'weather', imagePath: '/images/determinants/weather.png', isKPI: false },
  { name: 'environmental_factor', imagePath: '/images/determinants/environmental.png', isKPI: false },
]

const KPIS: IconData[] = [
  { name: 'Vitals', imagePath: '/images/indicators/vitals.png', isKPI: true },
  { name: 'Cough', imagePath: '/images/indicators/cough.png', isKPI: true },
  { name: 'BreathingScore', imagePath: '/images/indicators/breathing_score.png', isKPI: true },
  { name: 'PeakFlow', imagePath: '/images/indicators/peakflow.png', isKPI: true },
  { name: 'ACT', imagePath: '/images/indicators/act.png', isKPI: true },
]

const ALL_ICONS: IconData[] = [...DETERMINANTS, ...KPIS]

// Calculate angle for each icon based on Swift logic - equal spacing around full circle
function calculateIconAngle(index: number, totalIcons: number, isKPI: boolean): number {
  // Calculate equal spacing: full circle (2π) divided by total number of icons
  // Each icon gets equal arc space
  const anglePerIcon = (2.0 * Math.PI) / totalIcons
  
  // Start from 12 o'clock (270° = 3π/2) and distribute evenly anti-clockwise
  // Canvas/SVG coordinate system: 0° = right (3 o'clock), 90° = bottom (6 o'clock), 
  // 180° = left (9 o'clock), 270° = top (12 o'clock)
  // Anti-clockwise from 12 o'clock: 270° → 246° → 222° → ... → 0° → 330° → 306° → 270°
  const startAngle = (3.0 * Math.PI) / 2.0  // 270° (12 o'clock) - start from top
  
  // Calculate angle for this icon: start from top and go anti-clockwise (subtract)
  // Index 0 starts at 12 o'clock, then each subsequent icon is spaced evenly anti-clockwise
  let calculatedAngle = startAngle - (index * anglePerIcon)
  
  // Normalize to 0-2π range (handle negative values when going anti-clockwise)
  if (calculatedAngle < 0) {
    calculatedAngle = calculatedAngle + 2.0 * Math.PI
  } else if (calculatedAngle >= 2.0 * Math.PI) {
    calculatedAngle = calculatedAngle - 2.0 * Math.PI
  }
  
  return calculatedAngle
}

export default function CircularIconsAnimation({
  visibleIconIndices,
  iconSize = 50,
  circleRadius = 180,
  centerX = 0,
  centerY = 0,
  className = '',
}: CircularIconsAnimationProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className={`relative ${className}`} style={{ width: '100%', height: '100%' }}>
      {ALL_ICONS.map((icon, index) => {
        const isVisible = visibleIconIndices.has(index)
        const angle = calculateIconAngle(index, ALL_ICONS.length, icon.isKPI)
        
        // Calculate position based on angle and radius (relative to center)
        const offsetX = circleRadius * Math.cos(angle)
        const offsetY = circleRadius * Math.sin(angle)
        
        return (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ 
              opacity: 0, 
              scale: 0.3,
              x: 0,
              y: 0,
            }}
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.3,
              x: isVisible ? offsetX : 0,
              y: isVisible ? offsetY : 0,
            }}
            transition={{
              duration: 0.8,
              type: 'spring',
              stiffness: 100,
              damping: 15,
            }}
          >
            <div
              className="rounded-full bg-primary/10 bg-white/10 flex items-center justify-center backdrop-blur-sm"
              style={{
                width: `${iconSize + 10}px`,
                height: `${iconSize + 10}px`,
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Image
                src={icon.imagePath}
                alt={icon.name}
                width={iconSize}
                height={iconSize}
                className="object-contain p-1"
                priority
              />
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
