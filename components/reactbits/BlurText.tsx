'use client'

import { useEffect, useRef, useState, useMemo } from 'react'
import { motion, useAnimation, type Variants } from 'motion/react'

type BlurTextProps = {
  text?: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'letters'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  onAnimationComplete?: () => void
  stepDuration?: number
  as?: keyof React.JSX.IntrinsicElements
}

const buildVariants = (direction: 'top' | 'bottom'): Variants => ({
  hidden: {
    filter: 'blur(10px)',
    opacity: 0,
    y: direction === 'top' ? -20 : 20,
  },
  visible: {
    filter: 'blur(0px)',
    opacity: 1,
    y: 0,
  },
})

export default function BlurText({
  text = '',
  delay = 200,
  className = '',
  animateBy = 'words',
  direction = 'top',
  threshold = 0.1,
  rootMargin = '0px',
  onAnimationComplete,
  stepDuration = 0.35,
  as: Tag = 'p',
}: BlurTextProps) {
  const controls = useAnimation()
  // Attach IntersectionObserver to a wrapper span so we avoid ref union complexity
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const [inView, setInView] = useState(false)

  const elements = useMemo(
    () => (animateBy === 'words' ? text.split(' ') : text.split('')),
    [text, animateBy],
  )

  const variants = useMemo(() => buildVariants(direction), [direction])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )
    if (wrapperRef.current) observer.observe(wrapperRef.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  useEffect(() => {
    if (!inView) return
    const start = async () => {
      await controls.start('visible')
      onAnimationComplete?.()
    }
    start()
  }, [inView, controls, onAnimationComplete])

  // Render the semantic tag as a wrapper; observe via a nested span
  const TagEl = Tag as React.ElementType
  return (
    <TagEl className={`inline-block ${className}`} aria-label={text}>
      <span ref={wrapperRef} aria-hidden="true" className="inline-block">
        {elements.map((el, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={variants}
            initial="hidden"
            animate={controls}
            transition={{
              duration: stepDuration,
              delay: (index * delay) / 1000,
              ease: [0.2, 0.65, 0.3, 0.9],
            }}
            style={{ display: 'inline-block', willChange: 'transform, opacity, filter' }}
          >
            {el}
            {animateBy === 'words' && index < elements.length - 1 ? '\u00A0' : ''}
          </motion.span>
        ))}
      </span>
    </TagEl>
  )
}
