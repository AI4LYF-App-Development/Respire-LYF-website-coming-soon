import { NextRequest, NextResponse } from 'next/server'

const API_BASE_URL = 'https://apis.lyfsuite.com/pr/a/api/v1/waitlist'

export async function POST(request: NextRequest) {
  
  try {
    const body = await request.json()
    
    const { email, source, message, timezone } = body
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { detail: 'Email is required' },
        { status: 400 }
      )
    }
    
    if (!source || typeof source !== 'string') {
      return NextResponse.json(
        { detail: 'Source is required' },
        { status: 400 }
      )
    }
    
    // Validate message if provided (max 1000 characters)
    if (message !== undefined && message !== null) {
      if (typeof message !== 'string') {
        return NextResponse.json(
          { detail: 'Message must be a string' },
          { status: 400 }
        )
      }
      if (message.length > 1000) {
        return NextResponse.json(
          { detail: 'Message must be 1000 characters or less' },
          { status: 400 }
        )
      }
    }
    
    // Get user timezone from request body, headers, or use default
    const userTimezone = timezone || 
                        request.headers.get('x-user-timezone') || 
                        request.headers.get('timezone') || 
                        'UTC'
    
    // Build request body - only include message if provided
    const requestBody: { email: string; source: string; message?: string } = {
      email,
      source
    }
    
    if (message && message.trim().length > 0) {
      requestBody.message = message.trim().substring(0, 1000)
    }
    
    console.log('🚀 [API Proxy] Forwarding waitlist request:', { email, source, message: message ? 'provided' : 'not provided', userTimezone })
    
    // Proxy the request to the actual API with required headers
    const response = await fetch(API_BASE_URL, {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json',
        'X-App-Source': 'WEBSITE',
        'X-Os-Source': 'WEB',
        'X-App-Version': '1.0.0',
        'X-User-Timezone': userTimezone,
      },
      body: JSON.stringify(requestBody),
    })
    
    const data = await response.json()
    
    console.log('📡 [API Proxy] Response from API:', {
      status: response.status,
      data,
      timestamp: new Date().toISOString()
    })
    
    // Forward the response from the API
    return NextResponse.json(data, { status: response.status })
    
  } catch (error) {
    console.error('💥 [API Proxy] Error:', error)
    return NextResponse.json(
      { detail: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}






