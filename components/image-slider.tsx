"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ImageSliderProps {
  images: {
    src: string
    alt: string
  }[]
  autoSlideInterval?: number
  className?: string
}

export default function ImageSlider({ images, autoSlideInterval = 5000, className }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, autoSlideInterval)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className={cn("relative group h-full w-full", className)}>
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 h-full w-full transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-white opacity-50 transition hover:bg-black/40 hover:opacity-100">
        <ChevronLeft size={24} onClick={prevSlide} />
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/20 p-2 text-white opacity-50 transition hover:bg-black/40 hover:opacity-100">
        <ChevronRight size={24} onClick={nextSlide} />
      </div>

      {/* Indicator dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "w-4 bg-white" : "bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
