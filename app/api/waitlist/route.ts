import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  
  try {
    const body = await request.json()
    
    const { email } = body
    
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }
    
    // TODO: Integrate with your waitlist service (e.g., email service, database, etc.)
    // For now, just return success
    console.log('Waitlist signup:', { email })
    
    return NextResponse.json(
      { success: true, message: 'Successfully joined waitlist' },
      { status: 200 }
    )
    
  } catch (error) {
    console.error('Waitlist error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}






