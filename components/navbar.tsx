"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Programs" },
    { href: "/news", label: "News" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white shadow-md border-b" : "bg-white/80 backdrop-blur-md",
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative w-16 h-12 overflow-hidden rounded-lg border-2 border-purple-900 transition-transform hover:scale-105 duration-300 bg-white p-1">
            <Image src="/images/logo.jpg" alt="HOKO Innovation Logo" fill className="object-contain" />
          </div>
          <span className="hidden md:inline-block font-bold text-xl text-purple-900">HOKO Innovation</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium relative group transition-colors duration-300",
                pathname === link.href ? "text-purple-900" : "text-gray-600 hover:text-purple-900",
              )}
            >
              {link.label}
              <span
                className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-purple-900 transition-all duration-300",
                  pathname === link.href ? "w-full" : "w-0 group-hover:w-full",
                )}
              ></span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Button asChild className="bg-purple-900 hover:bg-purple-800 transition-transform hover:scale-105">
            <Link href="/contact">Get Involved</Link>
          </Button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm font-medium py-2 border-b border-gray-100 last:border-0 transition-colors duration-300",
                  pathname === link.href ? "text-purple-900" : "text-gray-600 hover:text-purple-900",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="bg-purple-900 hover:bg-purple-800 w-full mt-2">
              <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                Get Involved
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
