"use client"

import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin, ArrowUp, Linkedin } from "lucide-react"

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-16 h-12 overflow-hidden rounded-lg border-2 border-white transition-transform hover:scale-105 duration-300 bg-white p-1">
                <Image src="/images/logo.jpg" alt="HOKO Innovation Logo" fill className="object-contain" />
              </div>
              <span className="font-bold text-xl">HOKO Innovation</span>
            </div>
            <p className="text-gray-400">
              Championing disability inclusion and redefining accessibility in the workplace through innovation and
              advocacy.
            </p>
            </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">+251 937 66 66 66</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:hokoinnovationET@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  hokoinnovationET@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Linkedin className="h-5 w-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <a
                  href="https://linkedin.com/in/sibhat-wondimnew"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition-colors"
                >
                  linkedin.com/in/sibhat-wondimnew
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center relative">
          <button
            onClick={scrollToTop}
            className="absolute right-0 top-0 -translate-y-1/2 bg-purple-900 text-white p-2 rounded-full hover:bg-purple-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} HOKO Innovation for Disability Empowerment and Development. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
