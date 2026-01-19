'use client'

import Icon from '@/components/ui/Icon'
import ScrollReveal from '@/components/ui/ScrollReveal'

const valueProps = [
  {
    title: 'Why did I have that attack?',
    description: 'We show you the correlations.',
    icon: 'query_stats',
    iconBg: 'from-blue-50 to-blue-100',
    iconColor: 'text-primary',
    chip: { label: 'High Pollen Alert', sublabel: 'Correlation Detected', color: 'text-primary', icon: 'pollen' },
    shadowColor: 'hover:shadow-primary/10',
    gradientColor: 'from-primary/10',
  },
  {
    title: 'What triggers my symptoms?',
    description: 'We map the patterns.',
    icon: 'track_changes',
    iconBg: 'from-emerald-50 to-emerald-100',
    iconColor: 'text-secondary',
    chip: { label: 'Pattern Identified', sublabel: 'Recurring Trigger', color: 'text-secondary', times: ['A', 'B'] },
    shadowColor: 'hover:shadow-secondary/10',
    gradientColor: 'from-secondary/10',
  },
  {
    title: 'Is my care plan working?',
    description: 'We track the relationships.',
    icon: 'hub',
    iconBg: 'from-purple-50 to-purple-100',
    iconColor: 'text-purple-500',
    chip: { label: 'Relationship: Strong', sublabel: 'View Trend →', color: 'text-purple-500', alert: true },
    shadowColor: 'hover:shadow-purple-500/10',
    gradientColor: 'from-purple-500/10',
    rightIcon: 'notifications_active',
  },
  {
    title: 'Should I avoid certain activities?',
    description: 'We reveal what actually matters.',
    icon: 'waves',
    iconBg: 'from-orange-50 to-orange-100',
    iconColor: 'text-orange-500',
    chip: { label: 'Actionable Insight', sublabel: 'Activity Modified', color: 'text-orange-500', icon: 'insight' },
    shadowColor: 'hover:shadow-orange-500/10',
    gradientColor: 'from-orange-500/10',
    rightIcon: 'waves',
  },
]

export default function StopGuessing() {
  return (
    <section id="approach" className="relative z-10 py-16 px-4 sm:px-6 lg:px-8 max-w-[1500px] mx-auto scroll-mt-32 md:scroll-mt-40">
      <div className="text-center max-w-3xl mx-auto mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700 shadow-sm w-fit mx-auto mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          <span className="text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400">SIGNAL INTELLIGENCE</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600 dark:from-white dark:to-slate-400">
          Stop Guessing. <br className="hidden md:block"/>
          <span className="text-primary dark:text-sky-400">Start Understanding.</span>
        </h1>
        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
          Your body is constantly signaling. We translate the noise into clear, actionable insights so you can take control of your respiratory health.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {valueProps.map((prop, index) => (
          <ScrollReveal key={index} delay={index * 0.1} direction="up">
            <div
              className={`group rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.25)] border border-white/60 bg-white/75 backdrop-blur-xl ${prop.shadowColor} relative overflow-hidden flex flex-col`}
            >
            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${prop.gradientColor} to-transparent rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none opacity-80`}></div>
            <div className="flex flex-col flex-1 relative z-10">
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prop.iconBg} flex items-center justify-center border border-white/70 ${prop.iconColor} shadow-inner shadow-primary/15`}>
                  <Icon name={prop.icon} size={32} className={prop.iconColor} />
                </div>
                {prop.rightIcon ? (
                  <Icon 
                    name={prop.rightIcon} 
                    size={36} 
                    className={`${prop.iconColor === 'text-purple-500' ? 'text-purple-200 dark:text-purple-900' : 'text-orange-200 dark:text-orange-900'} ${prop.rightIcon === 'waves' ? 'group-hover:rotate-12' : 'group-hover:scale-110'} transition-transform duration-500`}
                  />
                ) : (
                  <div className="hidden sm:flex gap-1 items-end h-10">
                    <div className="w-1.5 h-4 bg-slate-200 dark:bg-slate-700 rounded-full group-hover:h-8 group-hover:bg-primary transition-all duration-500 delay-75"></div>
                    <div className="w-1.5 h-6 bg-slate-200 dark:bg-slate-700 rounded-full group-hover:h-10 group-hover:bg-primary transition-all duration-500 delay-100"></div>
                    <div className="w-1.5 h-3 bg-slate-200 dark:bg-slate-700 rounded-full group-hover:h-6 group-hover:bg-primary transition-all duration-500 delay-150"></div>
                  </div>
                )}
              </div>
              
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-2">
                  <Icon name="help" size={20} className="text-slate-400 dark:text-slate-500 mt-0.5 flex-shrink-0" />
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white leading-tight">{prop.title}</h3>
                </div>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed ml-[32px] mt-3 mb-3">
                  {prop.description}
                </p>
              </div>
              
              <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50">
                {prop.chip.alert ? (
                  <div className="flex items-center justify-between bg-purple-50 dark:bg-purple-900/20 p-3 rounded-xl border border-purple-100 dark:border-purple-800/50">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                      </span>
                      <span className={`text-xs font-semibold ${prop.chip.color} dark:text-purple-300`}>{prop.chip.label}</span>
                    </div>
                    <span className={`text-xs ${prop.chip.color} font-medium`}>{prop.chip.sublabel}</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-3">
                    {prop.chip.icon ? (
                      <div className={`w-10 h-10 rounded-full border-2 border-white dark:border-slate-700 shadow-sm flex items-center justify-center ${
                        prop.chip.color === 'text-primary' 
                          ? 'bg-blue-100 dark:bg-blue-900/30' 
                          : prop.chip.color === 'text-orange-500'
                          ? 'bg-orange-100 dark:bg-orange-900/30'
                          : 'bg-blue-100 dark:bg-blue-900/30'
                      }`}>
                        <Icon 
                          name={prop.chip.icon} 
                          size={20} 
                          className={prop.chip.color === 'text-primary' 
                            ? 'text-primary dark:text-blue-400' 
                            : prop.chip.color === 'text-orange-500'
                            ? 'text-orange-500 dark:text-orange-400'
                            : 'text-primary dark:text-blue-400'
                          } 
                        />
                      </div>
                    ) : prop.chip.times ? (
                      <div className="flex -space-x-2">
                        {prop.chip.times.map((time, i) => (
                          <div key={i} className={`w-8 h-8 rounded-full ${i === 0 ? 'bg-emerald-100 dark:bg-emerald-900' : 'bg-blue-100 dark:bg-blue-900'} border-2 border-white dark:border-slate-800 flex items-center justify-center text-[10px] ${i === 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-blue-600 dark:text-blue-400'} font-bold`}>
                            {time}
                          </div>
                        ))}
                      </div>
                    ) : null}
                    <div className="text-xs">
                      <p className="font-semibold text-slate-900 dark:text-white">{prop.chip.label}</p>
                      <p className={prop.chip.color}>{prop.chip.sublabel}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
