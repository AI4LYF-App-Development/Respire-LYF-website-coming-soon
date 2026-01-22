'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import DeterminantModal from '@/components/modals/DeterminantModal'

// ============================================================================
// DATA & CONSTANTS
// ============================================================================

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
function Card({ card, onClick }: { card: Determinant; onClick: () => void }) {
  return (
    <div 
      className="card-container reveal-card relative overflow-hidden rounded-[1rem] bg-white premium-shadow aspect-[3.8/5.2] group cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <Image
        alt={card.name}
        src={card.image}
        fill
        className="card-image absolute inset-0 w-full h-full object-cover z-0 rounded-[1rem]"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
      />
      
      {/* Glass Overlay */}
      <div 
        className="absolute inset-x-0 bottom-0 p-5 flex flex-col h-[62%] justify-between z-10"
        style={{
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px) saturate(160%)',
          WebkitBackdropFilter: 'blur(12px) saturate(160%)',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          left: 0,
          right: 0,
          bottom: 0,
          borderBottomLeftRadius: '1rem',
          borderBottomRightRadius: '1rem',
          overflow: 'hidden'
        }}
      >
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <div className="bg-white/90 backdrop-blur-sm p-2 rounded-lg border border-slate-100">
              {renderIcon(card, 24, 'text-[#256096]')}
            </div>
            <h3 className="text-xl font-extrabold text-[#256096] leading-tight">{card.name}</h3>
          </div>
          <p className="text-[#333333]/80 text-[13px] leading-snug font-medium">{card.description}</p>
        </div>
        <div className="flex flex-row gap-2 pt-4 border-t border-[#2894D9]/10 mt-auto justify-center items-center mx-auto max-w-[90%]">
          <button 
            className="btn-action btn-read-magazine" 
            onClick={(e) => {
              e.stopPropagation()
              onClick()
            }}
          >
            <Icon name="library_books" size={16} className="text-white" />
            <span className="text-[10px] tracking-wide whitespace-nowrap">Read Magazine</span>
          </button>
          <button className="btn-action btn-watch-video">
            <Icon name="play_circle" size={16} className="text-[#333333]" />
            <span className="text-[10px] tracking-wide whitespace-nowrap">Watch Video</span>
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
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [selectedCardName, setSelectedCardName] = useState('')
  const [selectedCardIconSrc, setSelectedCardIconSrc] = useState<string | null>(null)
  const [selectedCardIconName, setSelectedCardIconName] = useState<string>('')

  const handleCardClick = (card: Determinant) => {
    setSelectedCardId(card.id)
    setSelectedCardName(card.name)
    setSelectedCardIconSrc(iconSrcMap[card.id] || null)
    setSelectedCardIconName(card.icon || '')
    setIsModalOpen(true)
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
    <section id="solution" data-section="solution" className="relative flex min-h-screen w-full flex-col">
      {/* Background Gradient */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-200/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px]"></div>
      </div>

      {/* Header Section */}
      <div className="px-6 md:px-20 lg:px-40 flex flex-col items-center justify-center pt-20 pb-12">
        <div className="max-w-[800px] text-center flex flex-col gap-4">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-slate-900">
          Your Breathing Story <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
            Goes Deeper
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-[900px] mx-auto pt-4 whitespace-nowrap md:whitespace-normal">
          Explore comprehensive educational materials that may affect your breathing.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[1440px] mx-auto">
          <div className="compact-grid">
            {CARD_ORDER.map(id => {
              const card = determinants.find(d => d.id === id)
              return card ? <Card key={card.id} card={card} onClick={() => handleCardClick(card)} /> : null
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
      
      <style jsx global>{`
        .glass-overlay {
          background: rgba(255, 255, 255, 0.75) !important;
          backdrop-filter: blur(12px) saturate(160%) !important;
          -webkit-backdrop-filter: blur(12px) saturate(160%) !important;
          border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
        }
        .premium-shadow {
          box-shadow: 0 4px 12px -2px rgba(40, 148, 217, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.02);
        }
        .card-container {
          transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          border: 1px solid rgba(0, 0, 0, 0.08);
          outline: none;
        }
        .card-container:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px -12px rgba(40, 148, 217, 0.12), 0 10px 20px -10px rgba(0, 0, 0, 0.04);
          border-color: rgba(40, 148, 217, 0.2);
        }
        .card-image {
          transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1);
        }
        .card-container:hover .card-image {
          transform: scale(1.05);
        }
        .compact-grid {
          display: grid;
          grid-template-columns: repeat(1, minmax(0, 1fr));
          gap: 1.5rem;
        }
        @media (min-width: 640px) {
          .compact-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }
        @media (min-width: 1024px) {
          .compact-grid {
            grid-template-columns: repeat(5, minmax(0, 1fr));
          }
        }
        .btn-action {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.375rem 0.75rem;
          border-radius: 1rem;
          font-weight: 700;
          font-size: 10px;
          transition: all 0.3s;
          text-decoration: none;
          flex: 1;
          white-space: nowrap;
          border: none;
          cursor: pointer;
          font-family: inherit;
        }
        .btn-read-magazine {
          color: white;
          background-color: #2894D9;
        }
        .btn-read-magazine:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.02);
          background-color: #217cb8;
        }
        .btn-watch-video {
          color: #333333;
          background-color: #F8F5EE;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .btn-watch-video:hover {
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          transform: scale(1.02);
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
