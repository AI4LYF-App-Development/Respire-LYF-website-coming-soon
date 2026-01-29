import { NextResponse } from 'next/server'

export const dynamic = 'force-static'

export async function GET() {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appID: '6752850093.com.ai4lyf.RespireLYF',
          paths: [
            '/',
            '/paywall',
            '/onboarding',
            '/invite',
            '/invite/*',
            '/report/*',
            '/insights/*',
            '/referr/*',
            '/youtube',
            '/instagram',
            '/facebook',
            '/reddit',
            '/x',
            '/tiktok',
            '/respire-website',
            '/email'
          ]
        }
      ]
    }
  }

  return NextResponse.json(aasa, {
    headers: {
      'Cache-Control': 'public, max-age=3600',
      'Content-Type': 'application/json'
    }
  })
}
