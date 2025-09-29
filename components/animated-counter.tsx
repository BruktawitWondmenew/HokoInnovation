"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"

interface AnimatedCounterProps {
  end: number
  duration?: number
  label: string
  prefix?: string
  suffix?: string
}

export default function AnimatedCounter({
  end,
  duration = 2000,
  label,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    if (isInView && !hasAnimated) {
      let startTime: number
      let animationFrame: number

      const startAnimation = (timestamp: number) => {
        startTime = timestamp
        animate(timestamp)
      }

      const animate = (timestamp: number) => {
        const progress = Math.min((timestamp - startTime) / duration, 1)
        const currentCount = Math.floor(progress * end)
        setCount(currentCount)

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else {
          setHasAnimated(true)
        }
      }

      animationFrame = requestAnimationFrame(startAnimation)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, hasAnimated])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-purple-900">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  )
}
