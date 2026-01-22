'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import Icon from '@/components/ui/Icon'

interface DeterminantModalProps {
  isOpen: boolean
  onClose: () => void
  cardId: string | null
  cardName: string
  iconSrc?: string | null
  iconName?: string
}

const determinantContent: Record<string, { title: string; content: string }> = {
  inhaler: {
    title: 'Inhaler Use',
    content: `Your inhaler worked perfectly at the doctor's office. At 3 AM during an attack? Research shows 87% of patients make technique errors that can reduce medication delivery by half or more.

The three most common errors—skipping the exhale, mistiming the press, rushing the breath-hold—look different on every device type. And they get worse under stress, precisely when technique matters most.

Read the full paper to discover your device-specific error patterns and what research shows actually reaches your lungs.`
  },
  supplements: {
    title: 'Supplements',
    content: `Meta-analyses show vitamin D deficiency is associated with higher exacerbation rates and reduced lung function, with the strongest benefits from supplementation seen in those with baseline deficiency.

N-acetylcysteine doesn't work like drugstore expectorants. It breaks disulfide bonds in mucus proteins at the molecular level—and research documents up to 5-fold variation in individual response based on genetics and disease phenotype.

Read the full paper to discover which supplements have clinical evidence, why identical doses produce different results, and how to track what actually works for your biology.`
  },
  medications: {
    title: 'Medication',
    content: `Your 3 PM dose may outperform your 8 AM dose—same medication, same milligrams, dramatically different results. But standard dosing is built around convenience, not your circadian biology.

Genetic variants like ADRB2 polymorphisms influence how you respond to beta-agonists, and factors like smoking status can change how fast your body clears medications—creating response patterns your prescription can't predict.

Read the full paper to learn what chronobiology research reveals about dosing windows, why individual responses vary so dramatically, and how tracking your patterns can inform conversations with your healthcare provider.`
  },
  sleep: {
    title: 'Sleep',
    content: `Poor sleep on Monday = breathing problems on Wednesday. Research shows 75% of asthmatics suffer nighttime symptoms, yet the inflammation from bad sleep doesn't peak until 48 hours later.

Your lung function naturally drops 8-20% between 3-6 AM. And they get worse under stress, when your circadian rhythm is already disrupted, and inflammation is peaking.

Read the full magazine to discover your personal sleep-symptom lag pattern and what research shows actually improves overnight breathing.`
  },
  stress: {
    title: 'Stress',
    content: `That work presentation made your rescue inhaler significantly less effective for 2 days. Studies show stress reduces beta-receptor sensitivity for 24-48 hours. Chronic stress? Up to 9.5-fold reduction in medication receptors.

The three biggest triggers—work deadlines, caregiving stress, and financial anxiety—show different patterns for each individual. And they get worse under poor sleep, when your cortisol is already dysregulated.

Read the full magazine to discover your stress-inflammation timeline and what research shows actually interrupts the cascade before symptoms hit.`
  },
  food: {
    title: 'Food',
    content: `One high-fat meal triggers airway inflammation in 4 hours AND blocks your inhaler. Research proves it increases sputum neutrophils and impairs bronchodilator recovery. Meanwhile, 5-10% of asthmatics are sulfite-sensitive and don't know it.

The three most common triggers—high-fat dinners, sulfite-rich wines, histamine-loaded aged cheeses—look different in every gut microbiome. And they get worse under dehydration, when mucus is already concentrated.

Read the full magazine to discover your food-symptom interaction patterns and what research shows actually reduces airway inflammation through diet.`
  },
  hydration: {
    title: 'Hydration',
    content: `Your body releases histamine when dehydrated—the same molecule that causes allergic reactions—triggering bronchoconstriction to conserve water. Research shows just 2-3% body weight dehydration measurably increases mucus viscosity and impairs clearance.

The three biggest mistakes—random sipping, wrong timing, and ignoring exercise losses—look different for every activity level. And they get worse overnight, when mucus concentrates and clearance drops.

Read the full magazine to discover your personal hydration windows and what research shows actually optimizes mucociliary clearance.`
  },
  weather: {
    title: 'Weather',
    content: `Your COPD flares twice as often in winter—but it may not be the cold itself. Research shows temperature swings and barometric pressure shifts trigger more symptoms than steady cold or heat.

Your lung function naturally dips 5-8% overnight, bottoming out around 4 AM. When that circadian low collides with a cold front or humidity spike, you're in your most vulnerable window—and most people never see it coming.

Read the full paper to learn which weather variables research links to respiratory symptoms, why individual trigger patterns vary dramatically, and how tracking your personal combinations can inform conversations with your clinician.`
  },
  environmental: {
    title: 'Environmental Factors',
    content: `Same neighborhood, dramatically different reactions—research shows individual responses to identical environmental conditions can vary up to 5-fold based on genetics, sensitization, and what else you're exposed to that day.

Pollen seasons now start 20 days earlier than in 1990, with concentrations up 21%. And ozone doesn't just add to pollen's effects—studies suggest combined exposures can amplify airway inflammation beyond either trigger alone. Your "bad allergy years" are now the baseline.

Read the full paper to learn which environmental combinations research links to respiratory symptoms, why standard AQI alerts miss personal trigger patterns, and how multi-factor tracking can reveal what generic forecasts can't.`
  },
  activity: {
    title: 'Activity',
    content: `47% lower mortality, 34% fewer hospital readmissions—research shows physical activity is the strongest predictor of survival in COPD. But if you're among the 40-90% of asthmatics who experience exercise-induced symptoms, the wrong approach might trigger the inflammation you're trying to prevent.

The difference between benefit and setback often comes down to variables that generic guidelines ignore: warm-up duration, environmental conditions, hydration, medication timing, and your current fitness baseline. Studies show a proper warm-up can create a 1-2 hour protective window—but only if it's calibrated to your response pattern.

Read the full paper to learn which exercise approaches research links to respiratory improvement, how to recognize your personal response patterns, and the preparation strategies that can make activity safer and more effective for your biology.`
  }
}

export default function DeterminantModal({ isOpen, onClose, cardId, cardName, iconSrc, iconName }: DeterminantModalProps) {
  const [formData, setFormData] = useState({
    email: '',
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const content = cardId ? determinantContent[cardId] : null

  useEffect(() => {
    if (!isOpen) {
      setIsSubmitted(false)
      setFormData({ email: '' })
      setErrors({})
    }
  }, [isOpen])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.email) {
      newErrors.email = 'Please add your email first'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validate()) {
      return
    }
    
    try {
      // Here you would typically send the email to your API
      // For now, we'll just show success
      setIsSubmitted(true)
      setFormData({ email: '' })
    } catch (error) {
      setErrors({ submit: 'Something went wrong. Please try again.' })
    }
  }

  const handleClose = () => {
    setIsSubmitted(false)
    setFormData({ email: '' })
    setErrors({})
    onClose()
  }

  if (!content) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              
              <div className="sticky top-0 bg-white border-b border-gray-200 px-6 pt-4 pb-4 relative">
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                  aria-label="Close"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
                <div className="flex flex-row items-center justify-center gap-3 mt-8">
                  {(iconSrc || iconName) && (
                    <div className="flex shrink-0 items-center justify-center w-12 h-12 rounded-xl bg-white/90 border border-slate-100 shadow-sm">
                      {iconSrc ? (
                        <Image
                          src={iconSrc}
                          alt={cardName}
                          width={28}
                          height={28}
                          className="object-contain"
                        />
                      ) : iconName ? (
                        <Icon name={iconName} size={28} className="text-[#256096]" />
                      ) : null}
                    </div>
                  )}
                  <h2 className="text-2xl font-bold text-gray-900 text-center">
                    {isSubmitted ? "Thank you!" : content.title}
                  </h2>
                </div>
              </div>
              
              <div className="p-6">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-8 space-y-2"
                  >
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                      Your email has been submitted. You'll receive the full magazine content shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6 space-y-4">
                      {content.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-gray-700 leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6 border-t border-gray-200 pt-6">
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-900">
                          Email address*
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="email@example.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                      </div>
                      
                      {errors.submit && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-sm text-red-600">{errors.submit}</p>
                        </div>
                      )}
                      
                      <button
                        type="submit"
                        className="w-full px-6 py-3 bg-[#2894D9] text-white rounded-lg font-semibold hover:bg-[#217cb8] transition-colors"
                      >
                        Read Magazine
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
