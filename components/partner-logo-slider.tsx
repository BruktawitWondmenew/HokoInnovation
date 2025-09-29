"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface PartnerLogoSliderProps {
  logos: {
    src: string
    alt: string
  }[]
}

export default function PartnerLogoSlider({ logos }: PartnerLogoSliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const clone = slider.innerHTML
    slider.innerHTML += clone

    const animateScroll = () => {
      if (!slider) return
      if (slider.scrollLeft >= slider.scrollWidth / 2) {
        slider.scrollLeft = 0
      } else {
        slider.scrollLeft += 1
      }
    }

    const interval = setInterval(animateScroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={sliderRef}
        className="flex items-center space-x-12 py-8 whitespace-nowrap"
        style={{ scrollBehavior: "auto" }}
      >
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0 h-16 w-32 relative">
            <Image
              src={logo.src || "/placeholder.svg"}
              alt={logo.alt}
              fill
              className="object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
