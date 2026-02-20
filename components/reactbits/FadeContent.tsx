'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type FadeContentProps = {
  children: React.ReactNode
  blur?: boolean
  duration?: number
  easing?: string
  threshold?: number
  initialOpacity?: number
  className?: string
}

export default function FadeContent({
  children,
  blur = false,
  duration = 0.6,
  easing = 'power2.out',
  threshold = 0.1,
  initialOpacity = 0,
  className = '',
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          opacity: initialOpacity,
          y: 24,
          filter: blur ? 'blur(8px)' : 'blur(0px)',
        },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration,
          ease: easing,
          scrollTrigger: {
            trigger: el,
            start: `top ${Math.round((1 - threshold) * 100)}%`,
            toggleActions: 'play none none none',
          },
        },
      )
    }, el)

    return () => ctx.revert()
  }, [blur, duration, easing, threshold, initialOpacity])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform, opacity' }}>
      {children}
    </div>
  )
}
