import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

interface NewsCardProps {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
  className?: string
}

export default function NewsCard({ title, excerpt, date, image, link, className }: NewsCardProps) {
  return (
    <div
      className={cn(
        "group bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl",
        className,
      )}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-purple-900 mb-2">
          <Calendar className="h-4 w-4" />
          <span className="text-sm">{date}</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-900 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-2">{excerpt}</p>
        <Link href={link} className="inline-flex items-center text-purple-900 font-medium hover:underline">
          Read More
          <svg
            className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </Link>
      </div>
    </div>
  )
}
