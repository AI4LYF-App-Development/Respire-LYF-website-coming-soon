import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export const dynamic = 'force-static'
export const revalidate = false

export async function GET() {
  try {
    // Serve the logo as favicon for Google search results
    const logoPath = path.join(process.cwd(), 'public', 'icons', 'respirelyf_logo.png')
    
    if (!fs.existsSync(logoPath)) {
      return new NextResponse('Favicon not found', { status: 404 })
    }

    const imageBuffer = fs.readFileSync(logoPath)
    
    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': 'image/png',
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Error serving favicon:', error)
    return new NextResponse('Error serving favicon', { status: 500 })
  }
}
