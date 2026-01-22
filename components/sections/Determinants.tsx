'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import DeterminantModal from '@/components/modals/DeterminantModal'
import VideoModal from '@/components/modals/VideoModal'
import { getABVariant } from '@/lib/abTesting'

// ============================================================================
// DATA & CONSTANTS
// ============================================================================

// A/B Testing: Description Text
const DESCRIPTION_TEXT = {
  A: "It is shaped not by a single factor, but by a collection of factors. Until now, there has been no way to see how they come together in daily life. Explore the 10 determinants that constitute the fabric of your breathing.",
  B: "Respiratory care is not defined by a single element, but by the tapestry of many threads woven together."
}

const CARD_ORDER = ['inhaler', 'medications', 'supplements', 'food', 'weather', 'environmental', 'hydration', 'activity', 'sleep', 'stress']

const determinants = [
  {
    id: 'inhaler',
    name: 'Inhaler Use',
    icon: 'medical_services',
    description: 'Are you really getting the full benefit from your inhaler? Technique, timing, and patterns matter more than most people realise.',
    image: '/images/determinants/inhaler_bg.jpg',
  },
  {
    id: 'medications',
    name: 'Medications',
    icon: 'pill',
    description: 'Taking medication consistently isn\'t the same as taking it effectively. Understand how real-world use patterns affect outcomes.',
    image: '/images/determinants/medicine_bg.jpg',
  },
  {
    id: 'supplements',
    name: 'Supplements',
    icon: 'spa',
    description: 'Which supplements help breathing for some - but not others? Explore how individual response patterns shape real outcomes.',
    image: '/images/determinants/supplements_new.jpg',
  },
  {
    id: 'food',
    name: 'Food',
    icon: 'restaurant',
    description: 'Some foods affect breathing even without allergies. Learn how meals, reflux, and hidden triggers influence your lungs.',
    image: '/images/determinants/food_bg.jpeg',
  },
  {
    id: 'weather',
    name: 'Weather',
    icon: 'partly_cloudy_day',
    description: 'Your symptoms don\'t change randomly - the air does. Discover how weather patterns influence breathing over time.',
    image: '/images/determinants/weather_bg.jpg',
    badge: '72°',
  },
  {
    id: 'environmental',
    name: 'Env. Factors',
    icon: 'air',
    description: 'Not all respiratory triggers are obvious or visible. Identify everyday exposures that quietly affect lung health.',
    image: '/images/determinants/envirnmental_bg.jpg',
    badge: 'Good',
    badgeLabel: 'AQI:',
  },
  {
    id: 'hydration',
    name: 'Hydration',
    icon: 'water_drop',
    description: 'Your lungs rely on hydration more than you think. See how fluid balance affects mucus, airflow, and breathing comfort.',
    image: '/images/determinants/hydration_bg.jpg',
  },
  {
    id: 'sleep',
    name: 'Sleep',
    icon: 'bedtime',
    description: 'Poor sleep worsens breathing - and breathing issues disrupt sleep. Understand this two-way connection shaping daily symptoms.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4TlPAocROh8ZsfodoHuWTiwtdjcS3Db81T8dejHuRKqkZZIDoD-sqouOKx-ibl_rE3zKpejVYupoKGFxbYL6Gkq75wz5OtptGxv4R6fMGaXwyGqlWdDQHH2oIUv-HbVDmF2yXDqJv83efzsapGikMJV4Xderf-V6I1eVgpC8MYhZ0gnPX5wsOtKtXhDiX93-NKQjUm9k2JQhP9BZaV1VijHS02S51hfygbIo__K803-lsWZkA3lf1NKK2aqx-9G1y8GgoRYc-NvE',
    badge: '92% Quality',
    progress: 75,
  },
  {
    id: 'activity',
    name: 'Activity',
    icon: 'directions_run',
    description: 'Movement can support breathing — or strain it. Learn how activity type, timing, and intensity make the difference.',
    image: '/images/determinants/activity_bg.jpg',
  },
  {
    id: 'stress',
    name: 'Stress',
    icon: 'self_improvement',
    description: 'Stress doesn\'t stay in the mind — it reaches the lungs. See how emotional load translates into real respiratory changes.',
    image: '/images/determinants/stress_bg.jpg',
  },
]

const iconSrcMap: Record<string, string> = {
  sleep: '/images/determinants/sleep.png',
  weather: '/images/determinants/weather.png',
  environmental: '/images/determinants/environmental.png',
  inhaler: '/images/determinants/inhaler.png',
  medications: '/images/determinants/medication.png',
  activity: '/images/determinants/activity.png',
  hydration: '/images/determinants/hydration.png',
  stress: '/images/determinants/stress.png',
  food: '/images/determinants/food.png',
  supplements: '/images/determinants/supplement.png',
}

const videoUrlMap: Record<string, string> = {
  inhaler: 'https://youtu.be/oiOkORJNIh0',
  food: 'https://youtu.be/i6ilTuiQ7ak',
  stress: 'https://youtu.be/H8NpiGRCFgQ',
  sleep: 'https://youtu.be/oIb49bw7oXA',
  environmental: 'https://youtu.be/gGBU3FpHiTI',
  hydration: 'https://youtu.be/7KmT4wiFgOY',
  activity: 'https://youtu.be/AdMn7U3GRys',
  supplements: 'https://youtu.be/V8NsK9J1gd8',
  medications: 'https://youtu.be/AecW2dpc_ts',
  weather: 'https://youtu.be/otrUyN2k3R0',
}

// ============================================================================
// TYPES
// ============================================================================

type Determinant = typeof determinants[0]

// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Renders card icon (image or icon component)
 */
function renderIcon(card: Determinant, size: number = 24, className: string = 'text-slate-500') {
  if (iconSrcMap[card.id]) {
    return (
      <Image
        src={iconSrcMap[card.id]}
        alt={card.name}
        width={size}
        height={size}
        className="object-contain"
      />
    )
  }
  return <Icon name={card.icon} size={size} className={className} />
}

// ============================================================================
// CARD COMPONENT
// ============================================================================

/**
 * Unified Card Component matching HTML design
 */
function Card({ card, onClick, onWatchVideo }: { card: Determinant; onClick: () => void; onWatchVideo: () => void }) {
  return (
    <div 
      className="card-container reveal-card relative overflow-hidden rounded-[0.875rem] sm:rounded-[1rem] bg-white premium-shadow aspect-[3.8/5.2] group cursor-pointer"
      onClick={onClick}
      style={{ isolation: 'isolate' }}
    >
      {/* Background Image */}
      <Image
        alt={card.name}
        src={card.image}
        fill
        className="card-image absolute inset-0 w-full h-full z-0"
        style={{
          objectFit: 'cover',
          objectPosition: 'center top',
          borderRadius: 'inherit'
        }}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      />
      
      {/* Glass Overlay */}
      <div 
        className="absolute bottom-0 p-3 sm:p-4 md:p-5 flex flex-col h-[62%] justify-between z-10 glass-overlay-bottom"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: '0 -8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.6)',
          overflow: 'hidden'
        }}
      >
        {/* Glass shine effect overlay */}
        <div 
          className="absolute inset-0 pointer-events-none z-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, transparent 60%)',
            borderRadius: 'inherit',
          }}
        />
        <div className="relative z-10">
          <div className="flex items-center gap-1.5 sm:gap-2 mb-1 sm:mb-1.5">
            <div className="bg-white/90 backdrop-blur-sm p-1.5 sm:p-2 rounded-lg border border-slate-100 shrink-0 flex items-center justify-center">
              {renderIcon(card, 20, 'text-[#256096]')}
            </div>
            <h3 className="text-base sm:text-lg md:text-xl font-extrabold text-[#256096] leading-tight">{card.name}</h3>
          </div>
          <p className="text-[#333333]/80 text-[11px] sm:text-[12px] md:text-[13px] leading-snug font-medium">{card.description}</p>
        </div>
        <div className="relative z-10 flex flex-row gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#2894D9]/10 mt-auto justify-center items-center mx-auto max-w-[90%]">
          <button 
            className="btn-action btn-read-magazine" 
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            <Icon name="library_books" size={14} className="text-white shrink-0" />
            <span className="text-[9px] sm:text-[10px] tracking-wide whitespace-nowrap">Read Magazine</span>
          </button>
          <button 
            className="btn-action btn-watch-video"
            onClick={(e) => {
              e.stopPropagation()
              onWatchVideo()
            }}
          >
            <Icon name="play_circle" size={14} className="text-[#333333] shrink-0" />
            <span className="text-[9px] sm:text-[10px] tracking-wide whitespace-nowrap">Watch Video</span>
          </button>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Determinants() {
  // A/B Testing: Get variant for description text
  const [descriptionVariant, setDescriptionVariant] = useState<'A' | 'B'>('A')
  
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [selectedCardName, setSelectedCardName] = useState('')
  const [selectedCardIconSrc, setSelectedCardIconSrc] = useState<string | null>(null)
  const [selectedCardIconName, setSelectedCardIconName] = useState<string>('')
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>('')

  // Assign A/B test variant on component mount
  useEffect(() => {
    const variant = getABVariant('determinants-description')
    setDescriptionVariant(variant)
  }, [])

  const handleCardClick = (card: Determinant) => {
    setSelectedCardId(card.id)
    setSelectedCardName(card.name)
    setSelectedCardIconSrc(iconSrcMap[card.id] || null)
    setSelectedCardIconName(card.icon || '')
    setIsModalOpen(true)
  }

  const handleWatchVideo = (card: Determinant) => {
    const videoUrl = videoUrlMap[card.id]
    if (videoUrl) {
      setSelectedCardName(card.name)
      setSelectedCardIconSrc(iconSrcMap[card.id] || null)
      setSelectedCardIconName(card.icon || '')
      setSelectedVideoUrl(videoUrl)
      setIsVideoModalOpen(true)
    }
  }

  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>('.reveal-card'))
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach(card => {
      if (!card.classList.contains('is-visible')) {
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="solution" data-section="solution" className="relative flex min-h-screen w-full flex-col" style={{ background: 'radial-gradient(circle at center, rgba(80, 167, 226, 0.08) 0%, rgba(255, 255, 255, 1) 75%)' }}>
      {/* Blue Theme Radial Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-28">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 50%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 80% 15%, rgba(34,211,238,0.12), transparent 50%)' }}></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(circle at 15% 80%, rgba(125,211,252,0.12), transparent 55%)' }}></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40 flex flex-col items-center justify-center pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
        <div className="max-w-[800px] text-center flex flex-col gap-2 sm:gap-3 md:gap-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[56px] font-bold leading-[1.1] tracking-tight text-slate-900 px-2">
            Your Breathing Story <br className="hidden sm:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Goes Deeper
            </span>
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm md:text-base lg:text-lg font-medium leading-relaxed max-w-[900px] mx-auto pt-2 sm:pt-3 md:pt-4 px-3 sm:px-4">
            {DESCRIPTION_TEXT[descriptionVariant]}
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="relative z-10 px-3 sm:px-6 md:px-8 lg:px-12 xl:px-20 pb-12 sm:pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="compact-grid">
            {CARD_ORDER.map(id => {
              const card = determinants.find(d => d.id === id)
              return card ? (
                <Card 
                  key={card.id} 
                  card={card} 
                  onClick={() => handleCardClick(card)} 
                  onWatchVideo={() => handleWatchVideo(card)}
                />
              ) : null
            })}
          </div>
        </div>
      </div>

      {/* Determinant Modal */}
      <DeterminantModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cardId={selectedCardId}
        cardName={selectedCardName}
        iconSrc={selectedCardIconSrc}
        iconName={selectedCardIconName || undefined}
      />

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={selectedVideoUrl}
        title={selectedCardName}
        iconSrc={selectedCardIconSrc}
        iconName={selectedCardIconName}
      />
      
      <style jsx global>{`
        .glass-overlay {
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 100%) !important;
          backdrop-filter: blur(20px) saturate(180%) !important;
          -webkit-backdrop-filter: blur(20px) saturate(180%) !important;
          border-top: 1px solid rgba(255, 255, 255, 0.5) !important;
          box-shadow: 0 -8px 32px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 0 rgba(255, 255, 255, 0.6) !important;
        }
        .premium-shadow {
          box-shadow: 0 4px 12px -2px rgba(40, 148, 217, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
        }
        .card-container {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(0, 0, 0, 0.08);
          border-bottom: none;
          outline: none;
          isolation: isolate;
        }
        .glass-overlay-bottom {
          border-bottom-left-radius: 0.875rem;
          border-bottom-right-radius: 0.875rem;
          border-bottom: 2px solid rgba(255, 255, 255, 0.95);
          border-left: 2px solid rgba(255, 255, 255, 0.95);
          border-right: 2px solid rgba(255, 255, 255, 0.95);
          margin-left: -2px;
          margin-right: -2px;
          margin-bottom: -2px;
          width: calc(100% + 4px);
          left: 0;
          right: 0;
          box-sizing: border-box;
        }
        @media (min-width: 640px) {
          .glass-overlay-bottom {
            border-bottom-left-radius: 1rem;
            border-bottom-right-radius: 1rem;
          }
        }
        .card-image {
          object-fit: cover;
          object-position: center top;
        }
        .compact-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1rem;
          padding: 0;
        }
        @media (min-width: 640px) {
          .compact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.25rem;
          }
        }
        @media (min-width: 768px) {
          .compact-grid {
            gap: 1.5rem;
          }
        }
        @media (min-width: 1024px) {
          .compact-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
            gap: 1.5rem;
          }
        }
        .btn-action {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.375rem;
          padding: 0.625rem 1rem;
          border-radius: 0.75rem;
          font-weight: 700;
          font-size: 10px;
          transition: all 0.3s;
          text-decoration: none;
          flex: 1;
          white-space: nowrap;
          cursor: pointer;
          font-family: inherit;
          min-height: 48px;
          min-width: 48px;
        }
        @media (min-width: 640px) {
          .btn-action {
            gap: 0.5rem;
            padding: 0.625rem 3.75rem;
            border-radius: 1rem;
            font-size: 10px;
            min-height: auto;
          }
        }
        .btn-read-magazine {
          color: white;
          background-color: #2894D9;
          border: none;
          box-shadow: 0 4px 12px -2px rgba(40, 148, 217, 0.4), 0 2px 4px -1px rgba(40, 148, 217, 0.2);
          font-weight: 800;
        }
        .btn-read-magazine:hover {
          box-shadow: 0 12px 20px -4px rgba(40, 148, 217, 0.5), 0 4px 8px -2px rgba(40, 148, 217, 0.3);
          transform: scale(1.05) translateY(-1px);
          background-color: #217cb8;
        }
        .btn-watch-video {
          color: #333333;
          background-color: #F8F5EE;
          border: none;
          box-shadow: 0 4px 12px -2px rgba(0, 0, 0, 0.15), 0 2px 4px -1px rgba(0, 0, 0, 0.1);
          font-weight: 800;
        }
        .btn-watch-video:hover {
          box-shadow: 0 12px 20px -4px rgba(0, 0, 0, 0.2), 0 4px 8px -2px rgba(0, 0, 0, 0.15);
          transform: scale(1.05) translateY(-1px);
          background-color: #ffffff;
        }
        .btn-action .material-symbols-outlined {
          font-size: 18px;
        }
        .reveal-card {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 420ms ease, transform 420ms ease, all 500ms cubic-bezier(0.4, 0, 0.2, 1);
          will-change: opacity, transform;
        }
        .reveal-card.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
