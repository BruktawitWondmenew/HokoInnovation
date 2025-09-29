"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

interface TeamCardProps {
  image: string
  name: string
  role: string
  linkedinUrl?: string
  emailUrl?: string
}

export default function TeamCard({ image, name, role, linkedinUrl, emailUrl }: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleEmailClick = (email: string) => {
    // This will open the default email client (Gmail app if set as default)
    window.location.href = `mailto:${email}`
  }

  return (
    <motion.div
      className="relative group overflow-hidden rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-[350px] w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-500 ease-in-out ${
          isHovered ? "translate-y-0" : "translate-y-16"
        }`}
      >
        <h3
          className="text-xl font-bold text-white mb-1"
          
        >
          {name}
        </h3>
        <p className={`text-purple-200 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          {role}
        </p>
        <div className={`flex gap-3 mt-4 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
              aria-label={`${name}'s LinkedIn profile`}
            >
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          )}
          {emailUrl && (
            <a
            href={`mailto:${emailUrl}`}
              target="_blank"
              rel="noopener noreferrer"
              
              className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
              aria-label={`Email ${name}`}
            >
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          )}
          {!linkedinUrl && !emailUrl && (
            <a
              href="#"
              className="bg-white/20 p-2 rounded-full hover:bg-white/40 transition-colors duration-300"
              aria-label={`${name}'s Twitter profile`}
            >
              <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}
