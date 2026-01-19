'use client'

import { useEffect } from 'react'

export default function GlobalCardReveal() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const cards = Array.from(document.querySelectorAll<HTMLElement>('.glass-panel'))
    cards.forEach(card => card.classList.add('card-reveal'))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )

    cards.forEach(card => {
      if (!card.classList.contains('is-visible')) {
        observer.observe(card)
      }
    })

    return () => observer.disconnect()
  }, [])

  return null
}
