'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Icon from '@/components/ui/Icon'

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
    name: 'Environmental Factors',
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
 * Gets all cards in order, excluding the featured card
 */
function getCardsInOrder(selectedId: string | null): Determinant[] {
  return CARD_ORDER
    .filter(id => id !== selectedId)
    .map(id => determinants.find(d => d.id === id))
    .filter((card): card is Determinant => card !== undefined)
}

/**
 * Organizes cards into layout structure based on selected featured card
 */
function organizeCards(selectedId: string | null) {
  const otherCards = getCardsInOrder(selectedId)
  
  return {
    featured: determinants.find(d => d.id === selectedId) || determinants[0],
    row1: [otherCards[0], otherCards[1]], // Medications, Supplements
    food: otherCards[2], // Food
    row2: [otherCards[3], otherCards[4], otherCards[5]], // Weather, Environmental, Hydration
    row3: [otherCards[6], otherCards[7], otherCards[8]], // Activity, Sleep, Stress
    // Dynamic spanning: Weather spans 2 when Environmental is featured, Sleep spans 2 when Stress is featured
    weatherSpans2: selectedId === 'environmental',
    sleepSpans2: selectedId === 'stress',
  }
}

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

/**
 * Renders card badge based on card type
 */
function renderBadge(card: Determinant, isFeatured: boolean = false) {
  if (!card.badge) return null

  // Sleep badge (special styling)
  if (card.id === 'sleep') {
    return (
      <div className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20 shadow-sm">
        {card.badge}
      </div>
    )
  }

  // Badge with label (e.g., AQI Good) - styled like Sleep badge
  if (card.badgeLabel) {
    return (
      <div className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20 shadow-sm">
        <span className="uppercase tracking-wider">{card.badgeLabel}</span> {card.badge}
      </div>
    )
  }

  // Weather badge (temperature) - styled like Sleep badge
  if (card.id === 'weather') {
    return (
      <div className="bg-white text-primary px-3 py-1 rounded-full text-xs font-bold border border-primary/20 shadow-sm">
        {card.badge}
      </div>
    )
  }

  // Hydration badge
  if (card.id === 'hydration') {
    return (
      <span className="text-sm font-bold text-blue-600 bg-white/50 backdrop-blur-sm px-2 py-1 rounded-md">1.2L</span>
    )
  }

  // Default badge fallback
  return (
    <span className={`${isFeatured ? 'text-2xl' : 'text-2xl'} font-bold text-slate-800`}>
      {card.badge}
    </span>
  )
}

/**
 * Renders action buttons (Read Magazine, Watch Video)
 */
function renderButtons(isLarge: boolean = false) {
  const buttonClasses = isLarge
    ? 'bg-primary hover:bg-primary-light text-white text-xs font-bold py-2.5 px-4 rounded-lg transition-colors shadow-sm shadow-primary/20'
    : 'flex-1 bg-primary hover:bg-primary-light text-white text-[11px] font-bold py-2 px-2 rounded-lg transition-colors text-center shadow-sm'

  const secondaryButtonClasses = isLarge
    ? 'bg-white/90 hover:bg-white text-slate-700 border border-slate-200 text-xs font-bold py-2.5 px-4 rounded-lg transition-colors flex items-center gap-2 shadow-sm'
    : 'flex-1 bg-white/90 hover:bg-white text-slate-700 border border-slate-200 text-[11px] font-bold py-2 px-2 rounded-lg transition-colors flex items-center justify-center gap-1 shadow-sm'

  const iconSize = isLarge ? 16 : 14

  return (
    <>
      <button className={buttonClasses}>
        Read Magazine
      </button>
      <button className={secondaryButtonClasses}>
        <Icon name="play_circle" size={iconSize} className="text-slate-700" /> Watch Video
      </button>
    </>
  )
}

// ============================================================================
// CARD COMPONENTS
// ============================================================================

/**
 * Featured Card Component (2x2 grid, top-left)
 */
function FeaturedCard({ card, onClick }: { card: Determinant; onClick: () => void }) {
  return (
    <div
      className="reveal-card glass-panel rounded-2xl p-6 lg:col-span-2 lg:row-span-2 flex flex-col justify-between relative overflow-hidden transition-all duration-500 ease-in-out group min-h-[360px] cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-white">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${card.id === 'sleep' ? 'from-black/40 via-black/25' : 'from-black/40 via-black/25'} to-transparent`}></div>
      </div>

      {/* Header: Icon & Badge */}
      <div className="relative z-10 flex justify-between items-start">
        <div className="bg-white/80 backdrop-blur-md p-2 rounded-lg text-primary shadow-sm border border-white/50">
          {renderIcon(card, 28, 'text-primary')}
        </div>
        {renderBadge(card, true)}
      </div>

      {/* Content: Title, Description, Progress, Buttons */}
      <div className="relative z-10 mt-auto">
        <h3 className="text-2xl font-bold text-white mb-2">{card.name}</h3>
        <p className="text-white text-base mb-4 leading-relaxed max-w-[90%] font-medium">
          {card.description}
        </p>
        {card.progress && (
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-6">
            <div className="h-full w-[75%] bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
          </div>
        )}
        <div className="flex flex-wrap gap-3">
          {renderButtons(true)}
        </div>
      </div>
    </div>
  )
}

/**
 * Small Card Component (standard size)
 */
function SmallCard({ card, onClick }: { card: Determinant; onClick: () => void }) {
  const iconColor = card.id === 'hydration' ? 'text-blue-500' : 'text-slate-500'

  return (
    <div
      className="reveal-card glass-panel rounded-2xl p-5 flex flex-col justify-between transition-all duration-500 ease-in-out group relative overflow-hidden cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-white">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${card.id === 'sleep' ? 'from-black/40 via-black/25' : 'from-black/40 via-black/25'} to-transparent`}></div>
      </div>

      {/* Header: Icon & Badge */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-slate-50/90 backdrop-blur-sm p-2 rounded-lg text-slate-500 border border-slate-100">
            {renderIcon(card, 24, iconColor)}
          </div>
          {renderBadge(card)}
        </div>

        {/* Content: Title, Description, Progress, Buttons */}
        <div className="flex flex-col flex-grow justify-end">
          <h3 className="text-lg font-bold text-white">{card.name}</h3>
          <p className="text-white text-sm mt-1 mb-4 leading-relaxed font-medium">
            {card.description}
          </p>
          <div className="flex gap-2">
            {renderButtons(false)}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Full-Width Card Component (spans 2 columns)
 */
function FullWidthCard({ card, onClick }: { card: Determinant; onClick: () => void }) {
  return (
    <div
      className="reveal-card glass-panel rounded-2xl p-6 lg:col-span-2 flex flex-col justify-between transition-all duration-500 ease-in-out group relative overflow-hidden min-h-[220px] cursor-pointer"
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-white">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${card.id === 'sleep' ? 'from-black/40 via-black/25' : 'from-black/40 via-black/25'} to-transparent`}></div>
      </div>

      {/* Header: Icon */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className="bg-slate-50/90 backdrop-blur-sm p-2 rounded-lg text-slate-500 border border-slate-100">
            {renderIcon(card, 24)}
          </div>
        </div>

        {/* Content: Title, Description, Buttons */}
        <div className="flex flex-col flex-grow justify-end max-w-[85%]">
          <h3 className="text-2xl font-bold text-white leading-tight">{card.name}</h3>
          <p className="text-white text-base mt-2 mb-6 leading-relaxed font-medium">
            {card.description}
          </p>
          <div className="flex flex-wrap gap-3">
            {renderButtons(true)}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * Expandable Card Component (can span 1 or 2 columns based on context)
 */
function ExpandableCard({ 
  card, 
  shouldSpan2, 
  onClick 
}: { 
  card: Determinant; 
  shouldSpan2: boolean; 
  onClick: () => void 
}) {
  const isSleep = card.id === 'sleep'
  const descriptionClasses = isSleep 
    ? 'text-white text-sm mt-1 mb-4 leading-relaxed font-medium'
    : shouldSpan2 
      ? 'text-white text-base mt-2 mb-6 leading-relaxed font-medium'
      : 'text-white text-sm mt-1 mb-4 leading-relaxed font-medium'

  return (
    <div
      className={`reveal-card glass-panel rounded-2xl ${shouldSpan2 ? 'p-6 lg:col-span-2 min-h-[220px]' : 'p-5'} flex flex-col justify-between transition-all duration-500 ease-in-out group relative overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-white">
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className={`absolute inset-0 bg-gradient-to-t ${card.id === 'sleep' ? 'from-black/40 via-black/25' : 'from-black/40 via-black/25'} to-transparent`}></div>
      </div>

      {/* Header: Icon & Badge */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div className="flex justify-between items-start mb-4">
          <div className={`bg-slate-50/90 backdrop-blur-sm p-2 rounded-lg ${card.id === 'hydration' ? 'text-blue-500' : 'text-slate-500'} border border-slate-100`}>
            {renderIcon(card, 24, card.id === 'hydration' ? 'text-blue-500' : 'text-slate-500')}
          </div>
          {renderBadge(card)}
        </div>

        {/* Content: Title, Description, Progress, Buttons */}
        <div className={`flex flex-col flex-grow justify-end ${shouldSpan2 ? 'max-w-[85%]' : ''}`}>
          <h3 className={shouldSpan2 ? 'text-2xl font-bold text-white leading-tight' : 'text-lg font-bold text-white'}>
            {card.name}
          </h3>
          <p className={descriptionClasses}>
            {card.description}
          </p>
          {card.progress && (
            <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden mb-4">
              <div className="h-full w-[75%] bg-gradient-to-r from-primary to-blue-400 rounded-full"></div>
            </div>
          )}
          <div className={shouldSpan2 ? 'flex flex-wrap gap-3' : 'flex gap-2'}>
            {renderButtons(shouldSpan2)}
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function Determinants() {
  const [selectedId, setSelectedId] = useState<string | null>('inhaler')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const organized = organizeCards(selectedId)
  
  const handleCardClick = (cardId: string) => {
    if (cardId === selectedId) return
    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedId(cardId)
      setTimeout(() => setIsTransitioning(false), 50)
    }, 50)
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
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm w-fit mx-auto">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">Holistic Tracking</span>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-slate-900">
            The Complete Picture of <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Your Respiratory Health
            </span>
          </h2>
          <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-[640px] mx-auto pt-4">
          Explore comprehensive educational materials that may affect your breathing.
          </p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-4 md:px-10 lg:px-20 flex flex-1 justify-center pb-20">
        <div className="w-full max-w-[1280px]">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)] ${isTransitioning ? 'transition-all duration-500 ease-in-out' : ''}`}>
            
            {/* Featured Card (2x2) */}
              <FeaturedCard 
                card={organized.featured} 
                onClick={() => handleCardClick(organized.featured.id)} 
              />

            {/* Row 1: Medications, Supplements (Small Cards) */}
            {organized.row1.map((card) => (
                <SmallCard 
                key={card.id} 
                  card={card} 
                  onClick={() => handleCardClick(card.id)} 
                />
            ))}

            {/* Row 1: Food (Full-Width Card) */}
            {organized.food && (
                <FullWidthCard 
                  card={organized.food} 
                  onClick={() => handleCardClick(organized.food!.id)} 
                />
            )}

            {/* Row 2: Weather, Environmental, Hydration */}
            {organized.row2.map((card) => {
              const shouldSpan2 = (card.id === 'weather' && organized.weatherSpans2) || 
                                  (card.id === 'environmental' && !organized.weatherSpans2)
              return (
                  <ExpandableCard
                  key={card.id}
                    card={card}
                    shouldSpan2={shouldSpan2}
                    onClick={() => handleCardClick(card.id)}
                  />
              )
            })}

            {/* Row 3: Activity, Sleep, Stress */}
            {organized.row3.map((card) => {
              const shouldSpan2 = (card.id === 'sleep' && organized.sleepSpans2) || 
                                  (card.id === 'stress' && !organized.sleepSpans2)
              return (
                  <ExpandableCard
                  key={card.id}
                    card={card}
                    shouldSpan2={shouldSpan2}
                    onClick={() => handleCardClick(card.id)}
                  />
              )
            })}

          </div>
        </div>
      </div>
      <style jsx>{`
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
