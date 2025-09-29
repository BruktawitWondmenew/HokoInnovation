"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { ZoomIn, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

interface InteractiveImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
  fill?: boolean
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down"
}

export default function InteractiveImage({
  src,
  alt,
  className,
  width,
  height,
  priority = false,
  fill = false,
  objectFit = "cover",
}: InteractiveImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isZoomed, setIsZoomed] = useState(false)

  const handleZoomClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsZoomed(true)
    document.body.style.overflow = "hidden"
  }

  const closeZoom = () => {
    setIsZoomed(false)
    document.body.style.overflow = "auto"
  }

  return (
    <>
      <div
        className={cn("relative overflow-hidden rounded-lg group", !fill && "w-full h-auto", className)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative w-full h-full">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            width={!fill ? width || 1200 : undefined}
            height={!fill ? height || 800 : undefined}
            fill={fill}
            className={cn(
              "transition-transform duration-700 ease-in-out",
              isHovered ? "scale-110" : "scale-100",
              fill ? `object-${objectFit}` : "",
            )}
            priority={priority}
          />
          <div
            className={cn(
              "absolute inset-0 bg-black/30 transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0",
            )}
          />
          <button
            onClick={handleZoomClick}
            className={cn(
              "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm p-3 rounded-full text-white transition-all duration-300",
              isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75",
            )}
            aria-label="Zoom image"
          >
            <ZoomIn className="h-6 w-6" />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={closeZoom}
          >
            <motion.button
              initial={{ opacity: 0, top: "1rem" }}
              animate={{ opacity: 1, top: "2rem" }}
              exit={{ opacity: 0, top: "1rem" }}
              className="absolute top-2 right-4 text-white bg-black/20 p-2 rounded-full hover:bg-black/40 transition-colors z-10"
              onClick={closeZoom}
              aria-label="Close zoom view"
            >
              <X className="h-6 w-6" />
            </motion.button>
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-5xl max-h-[80vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={1920}
                height={1080}
                className="w-full h-auto object-contain"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
