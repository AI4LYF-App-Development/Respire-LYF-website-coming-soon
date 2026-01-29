import { NextResponse } from 'next/server'

const llmsContent = `# Respire LYF

About Respire LYF
Respire LYF is an all-in-one respiratory co-pilot platform that transforms scattered symptoms into clear patterns. We help users discover their personal respiratory fingerprint through the world's first MD-RIC.

Core Features
Comprehensive respiratory health tracking
Analysis of 10 key health determinants affecting breathing
Personalized insights for asthma and COPD management
Free tracking with premium insights
Integration of sleep, stress, food, hydration, and environmental factors

Health Determinants Tracked
1. Inhaler Use - Technique, timing, and patterns
2. Medications - Real-world use patterns and effectiveness
3. Supplements - Individual response patterns
4. Food - Meals, reflux, and hidden triggers
5. Weather - Air quality and weather pattern influences
6. Environmental Factors - Everyday exposures affecting lung health
7. Hydration - Fluid balance and mucus management
8. Sleep - Two-way connection between sleep and breathing
9. Activity - Movement type, timing, and intensity
10. Stress - Emotional load and respiratory changes

Target Audience
Individuals with asthma
People managing COPD
Healthcare providers seeking respiratory insights
Anyone interested in understanding their breathing patterns

Contact Information
Email: contact@aiforlife.ai
Website: https://respirelyf.com

Social Media
Twitter/X: https://x.com/RespireLYF
YouTube: https://www.youtube.com/@respirelyf
Instagram: https://www.instagram.com/respire.lyf
Facebook: https://www.facebook.com/profile.php?id=61581530281991

Medical Disclaimer
All information provided by Respire LYF is for informational and educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions regarding a medical condition.

Technology
Web-based health application
Real-time data tracking and analysis
Personalized respiratory intelligence platform
HIPAA-compliant data handling

Mission
Transforming respiratory care through intelligent, all-in-one analysis that reveals the hidden patterns affecting breathing. We believe every person deserves to understand their personal respiratory fingerprint.
`

export async function GET() {
  return new NextResponse(llmsContent, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
