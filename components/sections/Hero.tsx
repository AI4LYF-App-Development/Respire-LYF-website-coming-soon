'use client'

import Image from 'next/image'
import Icon from '@/components/ui/Icon'
import { useEffect, useMemo, useState } from 'react'
import { ShieldCheck, Activity as ActivityIcon, Lightbulb, Download } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'

interface HeroProps {
  onJoinWaitlist: () => void
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  const [headlineVisible, setHeadlineVisible] = useState(false)
  const [circleVisible, setCircleVisible] = useState(false)
  const [cardsVisible, setCardsVisible] = useState(false)
  const [buttonsVisible, setButtonsVisible] = useState(false)
  const [countersStarted, setCountersStarted] = useState(false)
  const [bubblesStart, setBubblesStart] = useState(false)
  const [heartRate, setHeartRate] = useState(0)
  const [breathScore, setBreathScore] = useState(0)
  const [spo2, setSpo2] = useState(0)
  const [temp, setTemp] = useState(0)
  const [coughs, setCoughs] = useState(0)

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

  const airStreams = useMemo(() => (
    [15, 25, 35, 45, 55, 65, 75, 85].map((top, idx) => ({
      id: idx,
      top,
      delay: idx * 0.7,
    }))
  ), [])

  const orbs = useMemo(() => ([
    { id: 1, className: 'w-96 h-96 bg-blue-300/15 blur-[120px]', style: { top: '10%', left: '10%' }, delay: '0s' },
    { id: 2, className: 'w-80 h-80 bg-sky-300/20 blur-[100px]', style: { top: '40%', right: '15%' }, delay: '2s' },
    { id: 3, className: 'w-72 h-72 bg-cyan-300/15 blur-[110px]', style: { bottom: '10%', left: '30%' }, delay: '4s' },
  ]), [])

  useEffect(() => {
    const timeouts: Array<ReturnType<typeof setTimeout>> = []
    timeouts.push(setTimeout(() => setHeadlineVisible(true), 100))
    timeouts.push(setTimeout(() => setCircleVisible(true), 105))
    timeouts.push(setTimeout(() => {
      setCardsVisible(true)
    }, 3000))
    timeouts.push(setTimeout(() => setCountersStarted(true), 5000))
    timeouts.push(setTimeout(() => setButtonsVisible(true), 6500))
    timeouts.push(setTimeout(() => setBubblesStart(true), 2200))

    return () => {
      timeouts.forEach(clearTimeout)
    }
  }, [])

  useEffect(() => {
    if (!countersStarted) return
    const intervals: Array<ReturnType<typeof setInterval>> = []

    intervals.push(setInterval(() => {
      setHeartRate(prev => (prev >= 80 ? 80 : Math.min(80, prev + 2)))
    }, 25))
    intervals.push(setInterval(() => {
      setBreathScore(prev => (prev >= 4 ? 4 : Math.min(4, +(prev + 0.08).toFixed(1))))
    }, 25))
    intervals.push(setInterval(() => {
      setSpo2(prev => (prev >= 97 ? 97 : Math.min(97, prev + 2)))
    }, 25))
    intervals.push(setInterval(() => {
      setTemp(prev => (prev >= 98.7 ? 98.7 : Math.min(98.7, +(prev + 1.8).toFixed(1))))
    }, 25))
    intervals.push(setInterval(() => {
      setCoughs(prev => (prev >= 5 ? 5 : Math.min(5, prev + 1)))
    }, 40))

    return () => intervals.forEach(clearInterval)
  }, [countersStarted])

  return (
    <>
      
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-28" style={{ background: 'radial-gradient(circle at 20% 20%, rgba(59,130,246,0.14), transparent 50%)' }}></div>
        <div className="absolute inset-0 opacity-28" style={{ background: 'radial-gradient(circle at 80% 15%, rgba(34,211,238,0.12), transparent 50%)' }}></div>
        <div className="absolute inset-0 opacity-28" style={{ background: 'radial-gradient(circle at 15% 80%, rgba(125,211,252,0.12), transparent 55%)' }}></div>
        
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className={`absolute rounded-full animate-float-orb ${orb.className}`}
            style={{ ...orb.style, animationDelay: orb.delay }}
          />
        ))}

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
      </div>
      <main className="flex-grow flex flex-col min-h-screen pt-0 pb-16 lg:pb-24 relative z-10">
        <div className="flex-1 flex items-center justify-center min-h-[70vh]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="flex flex-col gap-8 max-w-2xl relative z-20">
              <h1
                className={`text-5xl lg:text-[68px] font-bold tracking-tight leading-[1.05] text-figma-dark transition-all duration-[1000ms] ease-out ${
                  headlineVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                Be among the first to <span className="text-figma-blue">breathe</span> with clarity — for Asthma and COPD
              </h1>
              <div
                className={`flex flex-col sm:flex-row gap-4 mt-2 transition-all duration-800 ease-out ${
                  buttonsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <button 
                  className="h-12 px-8 rounded-lg bg-figma-blue text-white font-semibold text-[15px] transition-transform duration-300 hover:scale-[1.05] hover:shadow-figma-hover shadow-figma-card flex items-center justify-center gap-2"
                  onClick={onJoinWaitlist}
                >
                  Join Waitlist
                </button>
                <button className="h-12 px-8 rounded-lg border border-gray-300 bg-white text-gray-700 font-semibold text-[15px] transition-transform duration-300 hover:scale-[1.05] hover:shadow-lg flex items-center justify-center gap-2">
                  Download Magazines
                  <Download size={18} className="text-gray-700" />
                </button>
              </div>
            </div>
            
            <div className="relative h-[650px] w-full flex items-center justify-center lg:justify-end">
              <div
                className={`relative w-[550px] h-[550px] flex items-center justify-center transition-all duration-[2000ms] ${
                  circleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                }`}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                  transitionDelay: circleVisible ? '120ms' : '0ms',
                }}
              >
                <div className="absolute inset-0 rounded-full border border-blue-100/60 animate-breathe" style={{ animationDelay: '0s' }}></div>
                <div className="absolute inset-16 rounded-full border border-blue-200/40 animate-breathe" style={{ animationDelay: '1.5s' }}></div>
                <div className="absolute inset-32 rounded-full border border-blue-50/80 animate-breathe" style={{ animationDelay: '3s' }}></div>
                
                <div
                  className={`relative z-10 w-80 h-80 rounded-full p-3 bg-white shadow-2xl ring-1 ring-gray-100 transition-all duration-[1200ms] ${
                    circleVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                  }`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
                    transitionDelay: circleVisible ? '200ms' : '0ms',
                  }}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative bg-gray-50">
                    <Image
                      src="/icons/hero_img_6.png"
                      alt="Happy Patient"
                      fill
                      className="object-cover transform hover:scale-105 transition-transform duration-700"
                      style={{ objectPosition: '50% 30%' }}
                    />
                  </div>
                  <div
                    className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur px-5 py-2 rounded-full shadow-lg border border-emerald-200 flex items-center gap-2 whitespace-nowrap transition-all duration-[2000ms]"
                    style={{
                      opacity: cardsVisible ? 1 : 0,
                      transform: cardsVisible ? 'translate(-50%, 0)' : 'translate(-50%, 20px)',
                      transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                      transitionDelay: cardsVisible ? '0ms' : '0ms',
                    }}
                  >
                    <Icon name="sentiment_satisfied" size={20} className="text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      Feeling Good
                    </span>
                  </div>
                </div>
                
                <div
                  className="absolute top-[5%] left-[-5%] sm:left-0 glass-card p-4 rounded-xl flex items-center gap-4 z-30 min-w-[180px] transition-all duration-[2000ms] border border-emerald-200"
                  style={{
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(-60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '0ms' : '0ms',
                  }}
                >
                  <div className="relative h-12 w-12 flex items-center justify-center">
                  <svg className="transform -rotate-90 w-12 h-12">
                    <circle cx="24" cy="24" fill="transparent" r="20" stroke="#f3f4f6" strokeWidth="4"></circle>
                    <circle cx="24" cy="24" fill="transparent" r="20" stroke="#10b981" strokeDasharray="125" strokeDashoffset="40" strokeLinecap="round" strokeWidth="4"></circle>
                  </svg>
                  <span className="absolute text-sm font-bold text-gray-800">{Math.round(breathScore)}/5</span>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider flex items-center gap-1">
                    <Image src="/icons/breathing-score.png" alt="Breathing score icon" width={18} height={18} className="rounded-sm" />
                      BREATHING SCORE
                    </p>
                  <p className="text-emerald-600 font-bold text-sm">Good</p>
                  </div>
                </div>
                
                <div
                  className="absolute top-[10%] right-[-5%] sm:right-4 glass-card p-4 rounded-xl flex flex-col gap-2 z-20 min-w-[150px] items-start transition-all duration-[2000ms] border border-red-200"
                  style={{
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '200ms' : '0ms',
                  }}
                >
                  <div className="flex items-center gap-2 w-full">
                    <div className="h-8 w-8 rounded-full bg-rose-100 flex items-center justify-center">
                      <Image src="/icons/heart.fill.svg" alt="Heart rate icon" width={18} height={18} className="drop-shadow" />
                    </div>
                    <span className="text-[10px] text-gray-500 font-bold uppercase">HEART RATE</span>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold text-gray-900 tracking-tight">{Math.round(heartRate)}</span>
                    <span className="text-xs font-medium text-gray-400">bpm</span>
                  </div>
                </div>
                
                <div
                  className="absolute bottom-[25%] right-[-8%] glass-card p-4 rounded-xl flex items-center gap-3 z-30 shadow-lg items-start transition-all duration-[2000ms] border border-sky-200"
                  style={{
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '400ms' : '0ms',
                  }}
                >
                  <div className="bg-blue-50 h-10 w-10 rounded-lg flex items-center justify-center text-figma-blue">
                    <Image src="/icons/drop.degreesign.fill.svg" alt="SpO2 icon" width={22} height={22} className="drop-shadow" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1">
                      SPO2
                    </p>
                    <p className="text-gray-900 font-bold text-xl">{Math.round(spo2)}<span className="text-sm font-normal text-gray-400">%</span></p>
                  </div>
                </div>
                
                <div
                  className="absolute bottom-[5%] right-[10%] glass-card px-4 py-3 rounded-lg flex items-center gap-3 z-20 transition-all duration-[2000ms] border border-orange-200"
                  style={{
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '600ms' : '0ms',
                  }}
                >
                  <Icon name="device_thermostat" size={20} className="text-orange-400" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase flex items-center gap-1">
                    TEMP
                    </p>
                  <p className="text-gray-800 font-bold text-base">{temp.toFixed(1)}°F</p>
                  </div>
                </div>
                
                <div
                  className="absolute bottom-[15%] left-[-5%] glass-card p-4 rounded-xl flex items-center gap-3 z-30 transition-all duration-[2000ms] border border-sky-200"
                  style={{
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '800ms' : '0ms',
                  }}
                >
                  <div className="bg-indigo-50 h-10 w-10 rounded-lg flex items-center justify-center text-indigo-500">
                    <Image src="/icons/lungs.fill.svg" alt="Respiratory rate icon" width={22} height={22} className="drop-shadow" />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 font-bold uppercase flex items-center gap-1">
                      RESP. RATE
                    </p>
                    <p className="text-gray-900 font-bold text-xl">16 <span className="text-sm font-normal text-gray-400">rpm</span></p>
                  </div>
                </div>
                
                <div
                  className="absolute top-[-20px] left-1/2 translate-x-8 glass-card px-4 py-2 rounded-full flex items-center gap-2.5 z-10 border border-emerald-200 bg-white transition-all duration-[2000ms]"
                  style={{
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(-60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '1000ms' : '0ms',
                  }}
                >
                  <Image src="/icons/cough.png" alt="Cough icon" width={20} height={20} className="rounded-sm" />
                <span className="text-sm font-medium text-emerald-800">Coughs: {coughs}</span>
                </div>
                
                <div
                  className="absolute bottom-[-10px] left-8 glass-card px-4 py-2 rounded-full flex items-center gap-2.5 z-10 transition-all duration-[2000ms] border border-sky-200"
                  style={{
                    transform: cardsVisible ? 'translateY(0)' : 'translateY(60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '1200ms' : '0ms',
                  }}
                >
                  <Image src="/icons/inhaler.png" alt="Inhaler icon" width={20} height={20} className="rounded-sm" />
                <span className="text-sm font-medium text-gray-600">Inhaler: 3 Uses</span>
                </div>
                
                <div
                  className="absolute top-[25%] left-[-15%] glass-card px-4 py-2 rounded-full flex items-center gap-2.5 z-10 transition-all duration-[2000ms] border border-amber-200"
                  style={{
                    transform: cardsVisible ? 'translateX(0)' : 'translateX(-60px)',
                    opacity: cardsVisible ? 1 : 0,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: cardsVisible ? '1400ms' : '0ms',
                  }}
                >
                  <Image src="/icons/food.png" alt="Food icon" width={20} height={20} className="rounded-sm" />
                  <span className="text-sm font-semibold text-gray-700">Oatmeal logged</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        <div className="w-full pb-12 pt-28 lg:pt-32 relative z-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollReveal delay={0} direction="up">
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:-translate-y-2 transition-all duration-300 cursor-default group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <ShieldCheck size={26} className="text-blue-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-gray-900 font-semibold text-lg">Secure & Private</h3>
              </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Enterprise-grade encryption keeps your health data fully protected and HIPAA compliant. We prioritize your privacy above everything else.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1} direction="up">
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:-translate-y-2 transition-all duration-300 cursor-default group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center group-hover:bg-emerald-500 transition-colors">
                    <ActivityIcon size={26} className="text-teal-500 group-hover:text-white transition-colors" />
            </div>
                  <h3 className="text-gray-900 font-semibold text-lg">Continuous Monitoring</h3>
              </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Automatic sensing captures cough patterns, inhaler use, and breathing trends revealing what&apos;s happening beyond manual logs.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2} direction="up">
              <div className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 hover:-translate-y-2 transition-all duration-300 cursor-default group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <Lightbulb size={28} strokeWidth={2.1} className="text-purple-500 group-hover:text-white transition-colors drop-shadow-sm" />
            </div>
                  <h3 className="text-gray-900 font-semibold text-lg">Proactive Insights</h3>
              </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  Brings together symptoms, triggers, and daily habits to uncover meaningful respiratory patterns and potential issues before they arise.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
      </main>
      <style jsx global>{`
        @keyframes breath-rise {
          0% {
            transform: translateY(0) translateX(0) scale(0.3);
            opacity: 0;
          }
          5% { opacity: 0.1; }
          15% { opacity: 0.4; }
          50% {
            transform: translateY(-60vh) translateX(var(--drift)) scale(0.9);
          }
          85% { opacity: 0.3; }
          95% { opacity: 0.1; }
          100% {
            transform: translateY(-140vh) translateX(calc(var(--drift) * 1.2)) scale(0.2);
            opacity: 0;
          }
        }
        @keyframes mesh-1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50px, -30px) rotate(5deg); }
        }
        @keyframes mesh-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-50px, 30px) rotate(-5deg); }
        }
        @keyframes mesh-3 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(30px, 50px) rotate(3deg); }
        }
        @keyframes air-stream {
          0% { transform: translateX(-130px); opacity: 0; }
          20% { opacity: 0.8; }
          80% { opacity: 0.8; }
          100% { transform: translateX(calc(100vw + 130px)); opacity: 0; }
        }
        @keyframes float-orb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -40px) scale(1.1); }
          66% { transform: translate(-30px, 40px) scale(0.9); }
        }

        .animate-air-stream { animation: air-stream 4s linear infinite; }
        .animate-float-orb { animation: float-orb 20s ease-in-out infinite; }
        .breath-particle {
          position: absolute;
          border-radius: 9999px;
          background: radial-gradient(circle at 30% 30%, rgba(59,130,246,0.75), rgba(96,165,250,0.35));
          box-shadow: 0 0 18px rgba(59,130,246,0.4), 0 0 36px rgba(96,165,250,0.28);
          animation: breath-rise linear infinite;
          will-change: transform, opacity;
        }
      `}</style>
    </>
  )
}

