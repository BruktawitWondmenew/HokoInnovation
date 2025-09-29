"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ServiceCardProps {
  icon: React.ReactNode
  title: string
  description: string
  link: string
  color: string
  delay?: number
}

export default function ServiceCard({ icon, title, description, link, color, delay = 0 }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-xl p-6 shadow-lg transition-all duration-500",
        color,
        isHovered ? "shadow-xl translate-y-[-10px] scale-[1.02]" : "",
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div
        className={cn(
          "absolute top-0 right-0 h-24 w-24 -translate-y-8 translate-x-8 transform rounded-full bg-white/10 transition-all duration-700",
          isHovered ? "scale-150 opacity-30" : "scale-100 opacity-20",
        )}
      ></div>
      <div
        className={cn(
          "absolute bottom-0 left-0 h-24 w-24 translate-y-8 -translate-x-8 transform rounded-full bg-white/10 transition-all duration-700",
          isHovered ? "scale-150 opacity-30" : "scale-100 opacity-20",
        )}
      ></div>

      <div className="relative z-10">
        <div
          className={cn(
            "mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/20 transition-all duration-300",
            isHovered ? "bg-white/30 scale-110" : "",
          )}
        >
          {icon}
        </div>
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className={cn("mb-4 text-white/80 transition-opacity duration-300", isHovered ? "text-white/100" : "")}>
          {description}
        </p>
        <Link href={link} className="inline-flex items-center text-white font-medium hover:underline group">
          Learn More{" "}
          <ArrowRight
            className={cn("ml-1 h-4 w-4 transition-transform duration-500", isHovered ? "translate-x-2" : "")}
          />
        </Link>
      </div>

      {/* Animated border effect */}
      <div
        className={cn(
          "absolute inset-0 border-2 border-white/0 rounded-xl transition-all duration-500",
          isHovered ? "border-white/20" : "",
        )}
      ></div>
    </motion.div>
  )
}
