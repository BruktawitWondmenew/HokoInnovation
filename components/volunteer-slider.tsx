"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react"

interface Volunteer {
  id: number
  name: string
  role: string
  image: string
  linkedinUrl?: string
}

const volunteers: Volunteer[] = [
  {
    id: 1,
    name: "Bruktawit Wondmenew",
    role: "Social Media Manager",
    image: "/images/volunteer1.jpg",
    linkedinUrl: "https://www.linkedin.com/in/bruktawit-wondmenew-3650b9279",
  },
  {
    id: 2,
    name: "Samrawit Tsigneh",
    role: "Training Coordinator",
    image: "/images/volunteer2.jpg",
  },
  {
    id: 3,
    name: "Eyerusalem Beyen",
    role: "Secretary",
    image: "/images/volunteer3.jpg",
  },
  {
    id: 4,
    name: "Hiwot Wondimnew",
    role: "Nurse",
    image: "/images/volunteer4.jpg",
  },
]

export default function VolunteerSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % volunteers.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + volunteers.length) % volunteers.length)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      nextSlide()
    }, 4000)

    return () => clearInterval(interval)
  }, [currentIndex, isAutoPlaying])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  const currentVolunteer = volunteers[currentIndex]

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative overflow-hidden" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {/* Main Slider Container */}
        <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden bg-gradient-to-br from-purple-100 to-blue-100">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="absolute inset-0 flex flex-col items-center justify-center p-8"
            >
              {/* Volunteer Image */}
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="relative w-64 h-64 md:w-80 md:h-80 mb-8"
              >
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src={currentVolunteer.image || "/placeholder.svg"}
                    alt={currentVolunteer.name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {/* Animated border effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-purple-500"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1.1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "easeInOut",
                    }}
                  />
                </div>

                {/* LinkedIn Icon - Only for Bruktawit */}
                {currentVolunteer.linkedinUrl && (
                  <motion.a
                    href={currentVolunteer.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-2 -right-2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 1, duration: 0.6, type: "spring", bounce: 0.5 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`Visit ${currentVolunteer.name}'s LinkedIn profile`}
                  >
                    <Linkedin className="h-5 w-5 text-white group-hover:text-blue-100 transition-colors" />

                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-blue-400 rounded-full"
                      initial={{ scale: 1, opacity: 0.5 }}
                      animate={{ scale: 1.5, opacity: 0 }}
                      transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeOut",
                      }}
                    />
                  </motion.a>
                )}

                {/* Floating elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full"
                  animate={{
                    y: [0, 10, 0],
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.div>

              {/* Volunteer Info */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-center"
              >
                <motion.h3
                  className="text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                >
                  {currentVolunteer.name}
                </motion.h3>
                <motion.p
                  className="text-lg md:text-xl text-purple-700 font-semibold"
                  initial={{ letterSpacing: "0em" }}
                  animate={{ letterSpacing: "0.05em" }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  {currentVolunteer.role}
                </motion.p>

                {/* LinkedIn text indicator - Only for Bruktawit */}
                {currentVolunteer.linkedinUrl && (
                  <motion.p
                    className="text-sm text-blue-600 mt-2 flex items-center justify-center gap-1"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                  >
                    <Linkedin className="h-4 w-4" />
                    Connect on LinkedIn
                  </motion.p>
                )}
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous volunteer"
          >
            <ChevronLeft className="h-6 w-6 text-purple-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next volunteer"
          >
            <ChevronRight className="h-6 w-6 text-purple-900" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-3">
          {volunteers.map((volunteer, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-purple-600 scale-125" : "bg-gray-300 hover:bg-purple-400"
              }`}
              aria-label={`Go to ${volunteer.name}`}
            >
              {/* Special indicator for LinkedIn user */}
              {volunteer.linkedinUrl && (
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-blue-500 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-gray-200 rounded-full h-1">
          <motion.div
            className="bg-gradient-to-r from-purple-600 to-blue-600 h-1 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentIndex}
          />
        </div>
      </div>
    </div>
  )
}
