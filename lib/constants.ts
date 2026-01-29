// App Store ID from App Store Connect (numeric). Set NEXT_PUBLIC_APP_STORE_ID in env.
export const APP_STORE_ID = process.env.NEXT_PUBLIC_APP_STORE_ID || ''
export const APP_STORE_URL = APP_STORE_ID
  ? `https://apps.apple.com/app/id${APP_STORE_ID}`
  : ''

export const HEALTH_DETERMINANTS = [
  {
    id: 1,
    name: 'Inhaler Use',
    icon: '/images/determinants/inhaler.svg',
    description: 'Are you really getting the full benefit from your inhaler? Technique, timing, and patterns matter more than most people realise.',
  },
  {
    id: 2,
    name: 'Supplements',
    icon: '/images/determinants/supplement.svg',
    description: 'Which supplements help breathing for some — but not others? Explore how individual response patterns shape real outcomes.',
  },
  {
    id: 3,
    name: 'Food',
    icon: '/images/determinants/food.svg',
    description: 'Some foods affect breathing even without allergies. Learn how meals, reflux, and hidden triggers influence your lungs.',
  },
  {
    id: 4,
    name: 'Hydration',
    icon: '/images/determinants/hydration.svg',
    description: 'Your lungs rely on hydration more than you think. See how fluid balance affects mucus, airflow, and breathing comfort.',
  },
  {
    id: 5,
    name: 'Sleep',
    icon: '/images/determinants/sleep.svg',
    description: 'Poor sleep worsens breathing — and breathing issues disrupt sleep. Understand this two-way connection shaping daily symptoms.',
  },
  {
    id: 6,
    name: 'Weather',
    icon: '/images/determinants/weather.svg',
    description: 'Your symptoms don\'t change randomly — the air does. Discover how weather patterns influence breathing over time.',
  },
  {
    id: 7,
    name: 'Environmental Factors',
    icon: '/images/determinants/environmental.svg',
    description: 'Not all respiratory triggers are obvious or visible. Identify everyday exposures that quietly affect lung health.',
  },
  {
    id: 8,
    name: 'Activity',
    icon: '/images/determinants/activity.svg',
    description: 'Movement can support breathing — or strain it. Learn how activity type, timing, and intensity make the difference.',
  },
  {
    id: 9,
    name: 'Stress',
    icon: '/images/determinants/stress.svg',
    description: 'Stress doesn\'t stay in the mind — it reaches the lungs. See how emotional load translates into real respiratory changes.',
  },
  {
    id: 10,
    name: 'Medications',
    icon: '/images/determinants/medication.svg',
    description: 'Taking medication consistently isn\'t the same as taking it effectively. Understand how real-world use patterns affect outcomes.',
  },
]

export const HEALTH_INDICATORS = [
  {
    id: 1,
    name: 'Breathing Score',
    icon: '/images/indicators/breathing_score.svg',
    description: 'Rate breathing in 30 seconds daily and watch how hidden patterns emerge.',
  },
  {
    id: 2,
    name: 'Weekly Check-in',
    icon: '/images/indicators/act.svg',
    description: 'A validated clinical questionnaire providing standardized asthma/COPD control measures',
  },
  {
    id: 3,
    name: 'Cough',
    icon: '/images/indicators/cough.svg',
    description: 'Intelligent automatic wet/dry cough classification with day/night pattern analysis',
  },
  {
    id: 4,
    name: 'Peak Flow',
    icon: '/images/indicators/peakflow.svg',
    description: 'Track peak flow readings and turn simple numbers into clear breathing trends.',
  },
  {
    id: 5,
    name: 'Vitals',
    icon: '/images/indicators/vitals.svg',
    description: 'Smartwatch vitals — heart rate, breathing rate, oxygen levels, and temperature — combined into breathing intelligence',
  },
]

export const FEATURES = [
  {
    title: 'Multi-determinant & KPI tracking',
    description: 'Comprehensive monitoring of all factors affecting your breathing'
  },
  {
    title: 'Error correction feedback',
    description: 'Continuous learning and improvement of tracking accuracy'
  },
  {
    title: 'Automatic cough classification',
    description: 'AI-powered dry/wet cough detection and analysis'
  },
  {
    title: 'Personalised "Breathing Fingerprint"',
    description: 'Unique insights tailored to your individual respiratory patterns'
  },
  {
    title: 'Hardware-free inhaler monitoring',
    description: 'Track medication usage without additional devices'
  },
  {
    title: 'Proactive, Correlational Co-Piloting',
    description: 'Intelligent insights connecting patterns across all determinants'
  }
]

