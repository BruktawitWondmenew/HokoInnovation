"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

interface NewsCardFeaturedProps {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
}

export default function NewsCardFeatured({ title, excerpt, date, image, link }: NewsCardFeaturedProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl bg-white shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-64 md:h-full w-full overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className={`object-cover transition-transform duration-700 ease-in-out ${
              isHovered ? "scale-110" : "scale-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent md:bg-none"></div>
          <div className="absolute top-4 left-4 z-10 md:hidden">
            <div className="inline-flex items-center rounded-full bg-purple-900/90 px-3 py-1 text-sm text-white">
              <Calendar className="mr-1 h-3 w-3" />
              {date}
            </div>
          </div>
        </div>

        <div className="p-6 md:p-8">
          <div className="hidden items-center gap-2 text-purple-900 mb-3 md:flex">
            <Calendar className="h-4 w-4" />
            <span className="text-sm">{date}</span>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-3 md:mb-4">{title}</h3>
          <p className="text-gray-600 mb-6">{excerpt}</p>
          <Button asChild className="bg-purple-900 hover:bg-purple-800 group">
            <Link href={link}>
              Read More{" "}
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${isHovered ? "translate-x-1" : ""}`}
              />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}
