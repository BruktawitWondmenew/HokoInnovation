"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

interface Testimonial {
  quote: string
  name: string
  role: string
  image: string
}

interface TestimonialSliderProps {
  testimonials: Testimonial[]
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="relative max-w-4xl mx-auto px-4 py-8">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-purple-100 p-4 rounded-full">
        <Quote className="h-8 w-8 text-purple-900" />
      </div>

      <div className="mt-8 bg-white rounded-lg shadow-lg p-8 md:p-12">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            }`}
            style={{ display: index === currentIndex ? "block" : "none" }}
          >
            <blockquote className="text-lg md:text-xl text-gray-700 italic mb-8 text-center">
              "{testimonial.quote}"
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-purple-900">{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="bg-purple-100 p-2 rounded-full text-purple-900 hover:bg-purple-200 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="bg-purple-100 p-2 rounded-full text-purple-900 hover:bg-purple-200 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
    </div>
  )
}
