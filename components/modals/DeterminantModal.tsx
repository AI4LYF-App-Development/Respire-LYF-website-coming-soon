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
  inhaler: {
    title: 'Inhaler Use',
    content: `Why do most people's inhalers fail them, even when taking every dose?
Studies show 86% make technique errors that reduce lung delivery by over 60%—meaning most doses never reach your airways.
After 40 years of education, only 31% use the correct technique, while non-adherence causes 60-80% of preventable attacks.
Your inhaler fails when stress makes you rush, poor sleep kills consistency, or daily chaos disrupts the precise technique needed for medicine to reach the lungs instead of the air.
Find out why your inhaler isn't working like it should in the magazine.`
  },
  supplements: {
    title: 'Supplements',
    content: `That daily vitamin might be helping or hurting your breathing.
Research on omega-3s, vitamin D, and magnesium shows variable respiratory effects based on individual biology.
Supplement timing affects medication absorption. Some enhance, others interfere; effects vary by genetics.
Supplements work within your complete picture: diet, stress, sleep, and medications determine effectiveness.
Learn how supplements influence your breathing quality in the magazine.`
  },
  medications: {
    title: 'Medication',
    content: `What if the timing of your pill matters more than the pill itself?
Your body clock changes how medication works. Afternoon doses (3-4 PM) might protect your lungs better at night than morning doses.
Half of patients don't take meds as prescribed, and every missed dose pushes you closer to the hospital—adherence literally predicts survival.
Here's what steals medication power: eating at the wrong time blocks absorption, supplements interfere, poor sleep weakens effects, and stress makes everything worse.
Find out how medication timing shapes your breathing in the magazine.`
  },
  sleep: {
    title: 'Sleep',
    content: `Ever wonder why some nights you breathe easy, while others feel impossible?
75% of people with asthma report worse nighttime symptoms. Research shows your lung function naturally drops during sleep due to your body's internal clock.
Sleep under 5 hours = 1.5x higher breathing struggles next day. It's a bidirectional relationship: breathing problems disrupt your sleep, and then sleep loss worsens breathing issues.
Sleep doesn't affect breathing alone—it's the master switch controlling stress hormones, food cravings, hydration levels, and medication consistency that collectively determine your respiratory health.
Uncover the sleep secrets sabotaging your breathing every night in the magazine.`
  },
  stress: {
    title: 'Stress',
    content: `Why does stress tighten your chest—even when sitting still?
Chronic stress can make your rescue inhaler up to 9.5x less effective—it literally changes how your body responds to the medication you depend on.
Stress weakens your immune system, making you more vulnerable to infections (the #1 trigger of breathing emergencies) and increasing flare-up risk over 4x.
Stress is the invisible connector: it ruins your sleep, drives unhealthy food cravings, dehydrates you, and makes you forget medications—all working together to steal your breath.
See how stress is hijacking your lungs without you knowing in the magazine.`
  },
  food: {
    title: 'Food',
    content: `Why does breathing feel harder after certain meals?
High-fat meals can trigger airway inflammation within 4 hours and reduce bronchodilator response up to 50%.
5-10% show sensitivity to sulfites in foods, while fiber influences gut bacteria that communicate with lung immunity.
Meal timing shapes your breathing fingerprint. Late meals cause reflux, large portions compress lungs, and inflammatory foods amplify the breathing damage from stress and poor sleep.
Decode the food-breathing connection no one talks about in the magazine.`
  },
  hydration: {
    title: 'Hydration',
    content: `Your airways need water to work: here's what happens when they don't get it.
Studies link dehydration to increased cough frequency in children with asthma, yet it's rarely discussed.
Airways depend on a thin liquid layer (about 7 micrometers) for defense. Dehydration thickens mucus and slows this protective clearance system.
Hydration timing works with sleep cycles, exercise, stress, and medications to support breathing.
Discover how hydration changes everything for your lungs in the magazine.`
  },
  weather: {
    title: 'Weather',
    content: `Why does the weather affect your breathing differently every time?
COPD flare-ups are 2.16x higher in winter, and extreme cold is linked to 20% higher asthma attack risk.
Hot, humid air triggers measurable airway constriction through nerve reflexes—it's biological, not anxiety.
The secret: weather combines with your sleep, stress, and hydration levels, creating unique patterns that explain why the same forecast affects you differently each time.
Find out what the weather really does to your airways in the magazine.`
  },
  environmental: {
    title: 'Environmental Factors',
    content: `The air looks clear so why can't you breathe?
Pollen seasons are now 20 days longer with 21% higher concentrations than three decades ago. Climate change is making invisible triggers worse.
Air pollution increases coughing within the same hour of exposure; your airways react in real-time to what you can't see.
Moderate pollen plus moderate ozone plus poor sleep triggers severe symptoms when none alone would, revealing why "bad air days" affect you differently each time.
Discover the invisible triggers in every breath you take in the magazine.`
  },
  activity: {
    title: 'Activity',
    content: `Why does exercise feel easy one day, impossible the next?
Active COPD patients show 34% lower readmissions and 47% lower mortality than inactive patients.
40-90% get exercise-induced bronchoconstriction, but proper warm-up creates 1-2 hour protection.
Success depends on medication timing, hydration, sleep, food, and your body's daily rhythm working together.
Uncover your personal exercise-breathing patterns in the magazine.`
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
                  <h2 className="text-2xl font-bold text-gray-900 text-center uppercase">
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
                        const question = lines[0] // First line is the question
                        const bulletPoints = lines.slice(1, -1) // Middle lines are bullet points
                        const callToAction = lines[lines.length - 1] // Last line is call to action
                        
                        return (
                          <>
                            {/* Leading Question */}
                            <p className="text-gray-900 font-bold leading-relaxed mb-4">
                              {question}
                            </p>
                            
                            {/* Bullet Points */}
                            <ul className="space-y-3 mb-4">
                              {bulletPoints.map((point, index) => (
                                <li key={index} className="text-gray-700 leading-relaxed flex items-start">
                                  <span className="text-gray-900 mr-2 mt-1.5">•</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                            
                            {/* Call to Action (Bold) */}
                            <p className="text-gray-900 font-bold  leading-relaxed">
                              {callToAction}
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
                        {isLoading ? 'Submitting...' : 'Read Magazine'}
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
