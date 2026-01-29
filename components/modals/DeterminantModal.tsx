'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'
import Icon from '@/components/ui/Icon'
import { trackModalInteraction } from '@/lib/analytics'

interface DeterminantModalProps {
  isOpen: boolean
  onClose: () => void
  cardId: string | null
  cardName: string
  iconSrc?: string | null
  iconName?: string
}

// Map card IDs to PDF filenames
const pdfMap: Record<string, string> = {
  inhaler: 'Inhaler Use.pdf',
  medications: 'Medication.pdf',
  supplements: 'Supplements.pdf',
  food: 'Food.pdf',
  weather: 'Weather.pdf',
  environmental: 'Environental Factors.pdf',
  hydration: 'Hydration.pdf',
  activity: 'Activity.pdf',
  sleep: 'Sleep.pdf',
  // stress: No PDF available
}

const determinantContent: Record<string, { title: string; content: string }> = {
  sleep: {
    title: 'Sleep',
    content: `**Your worst breathing days don't follow your worst sleep nights**—they come two days later, and no one's told you why!!
**That delay isn't random.** But the exact lag varies person to person—anywhere from 24 to 72 hours, depending on factors most sleep advice ignores.
Which means you might be treating Wednesday's flare without realizing Monday caused it.
**Read the full paper** to map your personal sleep-symptom lag and stop treating symptoms two days too late.
Sleep is one variable. Stress, medication timing, and environment interact with it—your breathing is shaped by patterns, not isolated factors.`
  },
  inhaler: {
    title: 'Inhaler use',
    content: `Your inhaler works fine at the doctor's office but barely touches your symptoms at 3 AM—and it's not the medication that's different, it's **you under stress!!**
Stress changes your breathing pattern, your coordination, your flow rate. Each device fails **differently** under pressure—and you've never been trained for that.
The gap between "correct technique" and "technique that works during an attack" is where **most medication gets wasted.**
Read the full paper to learn your device-specific failure pattern and how to train for the moments when technique matters most.
Technique is one variable. Medication timing, stress response, and inflammation levels interact with it—your relief depends on **more than the inhaler alone.**`
  },
  supplements: {
    title: 'Supplements',
    content: `Your doctor said try vitamin D. You did. Nothing changed. But the problem might not be the supplement—it might be that **no one checked** whether you'd actually respond to it!!
Same dose, same supplement, **dramatically different results** across individuals. The research is clear on that. What's missing is any way to know which group you're in before you waste six months.
Most people take supplements based on **population averages** and hope for the best.
**Read the full paper** to learn which supplements have real evidence, what predicts individual response, and how to stop guessing.
Supplements are one variable. Your baseline levels, absorption, and timing interact with them—what works depends on **more than the pill itself.**`
  },
  medications: {
    title: 'Medication',
    content: `Some days your medication works great; other days the **same dose feels like nothing**—and you can't figure out why!!
It might not be the medication. Your body's sensitivity to it shifts throughout the day based on **circadian rhythms** most prescriptions ignore.
The same dose at 8 AM vs 3 PM can perform **dramatically differently**—but no one's told you to experiment with timing.
**Read the full paper** to find your personal peak response window and get more from the medication you're already taking.
Timing is one variable. Sleep, food, and stress shift your circadian rhythm—your response depends on **more than the dose itself.**`
  },
  weather: {
    title: 'Weather',
    content: `You check the weather app every morning, but it never predicts which days will be bad—because it's tracking **the wrong variables** for your lungs!!
It's not temperature. It's the swing. A **15-degree shift in 24 hours**, combined with pressure changes, triggers more symptoms than steady cold ever does.
But your specific combination—humidity + pressure, or temperature + pollen—is **different from the next person's**. Generic forecasts can't capture that.
**Read the full paper** to identify which 2-3 weather variables actually predict your symptoms and stop reacting to days that don't matter.
Weather is one variable. Your inflammation baseline, sleep, and medication timing interact with it—bad days are shaped by **combinations, not forecasts.**`
  },
  environmental: {
    title: 'Environmental factors',
    content: `Some days the air quality is "moderate" and you're miserable; other days it's "unhealthy" and you feel fine—the alerts **don't match your reality**!!
That's because triggers combine. Ozone alone might not bother you. Pollen alone might be manageable. But ozone plus pollen on the same day can **multiply the effect**.
Your personal threshold—the specific combination that sets you off—**isn't what the AQI measures**.
**Read the full paper** to identify your synergistic triggers and stop relying on alerts designed for someone else's lungs.
Environment is one variable. Your genetics, sensitization history, and current inflammation interact with it—reactions depend on **combinations, not single readings.**`
  },
  activity: {
    title: 'Activity',
    content: `You know exercise is supposed to help, but every time you try, you end up **tight-chested or worse** the next day!!
The problem usually isn't exercise itself—it's the **wrong intensity, wrong warm-up, or wrong timing** for where your body is that day.
There's a version of movement that helps your lungs without triggering them. But generic advice doesn't account for **your phenotype or inflammation baseline**.
**Read the full paper** to find the approach that gives you the mortality benefit without the post-exercise flare.
Activity is one variable. Your warm-up protocol, medication timing, and current inflammation interact with it—benefit vs. setback depends on **calibration, not just effort.**`
  },
  stress: {
    title: 'Stress',
    content: `That deadline passes, you finally relax—then your breathing gets **worse over the next two days**, not better!!
Stress doesn't just feel bad—it reduces how well your rescue medication works for **up to 48 hours** and triggers inflammation that peaks days later.
The frustrating part: by the time you notice symptoms, the stress is over. So you **never connect them**.
**Read the full paper** to map your personal stress-symptom delay and intervene before the cascade starts—not after.
Stress is one variable. Sleep, baseline inflammation, and medication timing interact with it—your flare pattern depends on **the full sequence, not just the stressor.**`
  },
  food: {
    title: 'Food',
    content: `You've suspected certain foods make your breathing worse but could never prove it—because the reaction doesn't happen until **hours or days later**, and never the same way twice!!
That inconsistency isn't in your head. Food triggers often combine—one ingredient is fine alone, but **paired with another** on the same day, it sets you off.
**Single-food elimination** will never catch that pattern.
**Read the full paper** to learn how to test for combinations, not just individual foods—and finally get a clear answer.
Food is one variable. Your gut microbiome, inflammation status, and timing interact with it—reactions depend on **context, not just ingredients.**`
  },
  hydration: {
    title: 'Hydaration',
    content: `You've tried mucolytics, steam, expectorants—and your mucus is **still thick every morning**. The problem might not be what you're taking, but **when you're drinking**!!
Your mucus clearance peaks about **an hour after hydration**—not continuously throughout the day. Random sipping misses that window entirely.
And hydrating at the wrong time before bed can **fragment your sleep**, which triggers the inflammation you were trying to prevent.
**Read the full paper** to learn the timing windows that actually improve clearance—without wrecking your sleep.
Hydration is one variable. Sleep quality, medication type, and activity level interact with it—clearance depends on **timing, not just volume.**`
  }
}

export default function DeterminantModal({ isOpen, onClose, cardId, cardName, iconSrc, iconName }: DeterminantModalProps) {
  const [formData, setFormData] = useState({
    email: '',
  })
  
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const content = cardId ? determinantContent[cardId] : null

  useEffect(() => {
    if (isOpen) {
      trackModalInteraction('DeterminantModal', 'open')
    }
  }, [isOpen])

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
    
    setIsLoading(true)
    setErrors({})
    
    const apiUrl = '/api/waitlist'
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
    const requestBody = {
      email: formData.email,
      source: 'WEBSITE',
      timezone: userTimezone
    }
    
    console.log('🚀 [DeterminantModal] API Call Started:', {
      url: apiUrl,
      method: 'POST',
      body: requestBody,
      cardId,
      cardName,
      timestamp: new Date().toISOString()
    })
    
    try {
      // Submit email to waitlist API
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
      
      console.log('📡 [DeterminantModal] API Response Received:', {
        status: response.status,
        statusText: response.statusText,
        ok: response.ok,
        headers: Object.fromEntries(response.headers.entries()),
        timestamp: new Date().toISOString()
      })
      
      let data: any = {}
      try {
        const contentType = response.headers.get('content-type')
        if (contentType && contentType.includes('application/json')) {
          data = await response.json()
        } else {
          const text = await response.text()
          console.warn('⚠️ [DeterminantModal] Non-JSON response:', text)
          data = { detail: text || `Server returned status ${response.status}` }
        }
      } catch (parseError) {
        console.error('⚠️ [DeterminantModal] Failed to parse response:', parseError)
        data = { detail: `Server returned status ${response.status}` }
      }
      
      console.log('📦 [DeterminantModal] Response Data:', {
        data,
        timestamp: new Date().toISOString()
      })
      
      // Handle success responses (200 OK or 201 Created)
      if (response.status === 200 || response.status === 201) {
        console.log('✅ [DeterminantModal] Success:', {
          status: response.status,
          message: data.detail || 'Email submitted successfully',
          email: formData.email,
          cardId,
          cardName,
          timestamp: new Date().toISOString()
        })
        
        // Open the PDF in a new tab if available
        if (cardId && pdfMap[cardId]) {
          const pdfPath = `/Determinenet_pdf/${pdfMap[cardId]}`
          console.log('📄 [DeterminantModal] Opening PDF:', {
            pdfPath,
            cardId,
            timestamp: new Date().toISOString()
          })
          window.open(pdfPath, '_blank')
          // Close the modal after opening PDF
          setFormData({ email: '' })
          setErrors({})
          onClose()
        } else {
          console.log('ℹ️ [DeterminantModal] No PDF available for card:', {
            cardId,
            timestamp: new Date().toISOString()
          })
          // If no PDF available, show success message
          setIsSubmitted(true)
          setFormData({ email: '' })
        }
      } else {
        // Handle API errors (400, 402, 422, 500, 503, 504)
        let errorMessage = 'Something went wrong. Please try again.'
        
        if (data.detail) {
          // Handle 422 where detail is an array of error objects
          if (Array.isArray(data.detail)) {
            const errorDescriptions = data.detail.map((err: any) => 
              err.error_description || err.field ? `${err.field}: ${err.error_description}` : JSON.stringify(err)
            ).join(', ')
            errorMessage = errorDescriptions || 'Validation error. Please check your input.'
          } else {
            // Regular error message
            errorMessage = data.detail
          }
        } else if (data.message) {
          errorMessage = data.message
        }
        
        console.error('❌ [DeterminantModal] API Error:', {
          status: response.status,
          statusText: response.statusText,
          error: errorMessage,
          data,
          cardId,
          timestamp: new Date().toISOString()
        })
        setErrors({ submit: errorMessage })
      }
    } catch (error) {
      let errorMessage = 'Network error. Please check your connection and try again.'
      
      if (error instanceof TypeError && error.message.includes('Failed to fetch')) {
        // Likely a CORS issue
        errorMessage = 'Unable to connect to the server. This may be a CORS (Cross-Origin) issue. Please contact support.'
        console.error('🚫 [DeterminantModal] CORS Error Detected:', {
          error: error.message,
          suggestion: 'Consider using a Next.js API route as a proxy',
          cardId,
          timestamp: new Date().toISOString()
        })
      } else if (error instanceof Error) {
        errorMessage = `Error: ${error.message}`
      }
      
      console.error('💥 [DeterminantModal] Network/Exception Error:', {
        error,
        message: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined,
        cardId,
        timestamp: new Date().toISOString()
      })
      setErrors({ submit: errorMessage })
    } finally {
      setIsLoading(false)
      console.log('🏁 [DeterminantModal] API Call Completed:', {
        cardId,
        timestamp: new Date().toISOString()
      })
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
                      Your email has been submitted. You&apos;ll receive the full magazine content shortly.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="mb-6 space-y-4">
                      {(() => {
                        const lines = content.content.split('\n').filter(line => line.trim())
                        const firstLine = lines[0] // First line is bold statement
                        const middleLines = lines.slice(1, -1) // Middle lines are regular paragraphs
                        const lastLine = lines[lines.length - 1] // Last line is the final statement
                        
                        // Function to parse bold (**text**) and render it
                        const renderFormatted = (text: string) => {
                          const parts = text.split(/(\*\*.*?\*\*)/g)
                          return parts.map((part, index) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              const boldText = part.slice(2, -2)
                              return <strong key={index} className="font-bold">{boldText}</strong>
                            }
                            return <span key={index}>{part}</span>
                          })
                        }
                        
                        return (
                          <>
                            {/* First Line - Regular Text with Bold Phrases */}
                            <p className="text-gray-700 leading-relaxed mb-4">
                              {renderFormatted(firstLine)}
                            </p>
                            
                            {/* Middle Paragraphs - Regular Text with Bold */}
                            <div className="space-y-3 mb-4">
                              {middleLines.map((paragraph, index) => (
                                <p key={index} className="text-gray-700 leading-relaxed">
                                  {renderFormatted(paragraph)}
                                </p>
                              ))}
                            </div>
                            
                            {/* Last Line - Final Statement */}
                            <p className="text-gray-700 leading-relaxed">
                              {renderFormatted(lastLine)}
                            </p>
                          </>
                        )
                      })()}
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
                          className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:border-[#2894D9] ${
                            errors.email ? 'border-red-500' : 'border-gray-300'
                          }`}
                          placeholder="you@example.com"
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
                        disabled={isLoading}
                        className="w-full px-6 py-3 bg-[#2894D9] hover:bg-[#217cb8] disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-semibold transition-colors"
                      >
                        {isLoading ? 'Submitting...' : 'View Magazine'}
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
