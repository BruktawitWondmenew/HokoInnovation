import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, BookOpen, Lightbulb, Megaphone, Briefcase, ExternalLink } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/s1.jpg" alt="HOKO Innovation background" fill className="object-cover" priority />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/80 to-blue-800/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto space-y-6 text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Empowering Persons with Disabilities</h1>
            <p className="text-lg md:text-xl text-white/90">
              Championing disability inclusion and redefining accessibility in the workplace through innovation and
              advocacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-white/90">
                <Link href="/about">Learn More</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-white border-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                At HOKO Innovation, we are dedicated to championing disability inclusion and redefining accessibility in
                the workplace. Inspired by our founder's father's journey as a visually impaired individual, we have
                committed our work to developing innovative technologies that empower persons with disabilities (PWDs).
              </p>
              <p className="text-lg text-gray-600">
                Our aim is to dismantle the barriers that limit opportunities for individuals with diverse abilities,
                ensuring that every person can realize their full potential.
              </p>
              <Button asChild className="bg-purple-900 hover:bg-purple-800">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              <p className="text-lg text-gray-600">
                We envision a world where accessibility is not an afterthought but a fundamental component of every
                workplace. In this future, inclusion is woven into the fabric of organizational culture, allowing
                individuals—regardless of ability—to thrive and contribute their unique perspectives and skills.
              </p>
              <p className="text-lg text-gray-600">
                By promoting a diverse workforce, we believe that organizations will not only be more equitable but also
                more innovative and successful.
              </p>
              <Button asChild className="bg-purple-900 hover:bg-purple-800">
                <Link href="/about">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative solutions for disability inclusion and accessibility
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-700 to-blue-900 rounded-xl p-6 text-white">
              <div className="mb-4">
                <BookOpen className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Training & Awareness</h3>
              <p className="mb-4 text-white/80">
                Comprehensive training programs and awareness campaigns to build capacity and promote understanding of
                disability inclusion.
              </p>
              <Link href="/services" className="inline-flex items-center font-medium hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-indigo-700 to-indigo-900 rounded-xl p-6 text-white">
              <div className="mb-4">
                <Lightbulb className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Adaptive Industrial Machines</h3>
              <p className="mb-4 text-white/80">
                Designing and developing innovative adaptive industrial machines specifically tailored for persons with
                disabilities.
              </p>
              <Link href="/services" className="inline-flex items-center font-medium hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-purple-700 to-purple-900 rounded-xl p-6 text-white">
              <div className="mb-4">
                <Megaphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Advocating</h3>
              <p className="mb-4 text-white/80">
                Advocating for policy changes, rights, and inclusion of persons with disabilities in all aspects of
                society.
              </p>
              <Link href="/services" className="inline-flex items-center font-medium hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-xl p-6 text-white">
              <div className="mb-4">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Entrepreneurship</h3>
              <p className="mb-4 text-white/80">
                Supporting PWDs in starting and growing their own businesses through comprehensive business development
                services.
              </p>
              <Link href="/services" className="inline-flex items-center font-medium hover:underline">
                Learn More <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Flagship Product Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[300px] md:h-[400px] rounded-xl overflow-hidden bg-gray-100">
              <Image src="/images/s5.jpg" alt="HOKO Adaptive Sewing Machine" fill className="object-cover" />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Flagship Product</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-purple-900">
                HOKO 1967X Adaptive Sewing Machine for Persons With Disabilities
              </h3>
              <p className="text-lg text-gray-600">
                Our flagship product, the HOKO 1967X adaptive sewing machine, is specifically designed for persons with
                physical disabilities, particularly those who use wheelchairs or have limited leg mobility.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>Wheelchair Accessible:</strong> Specially designed height and clearance
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 rounded-full p-1">
                    <svg className="h-4 w-4 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong>Hand-Operated Controls:</strong> Complete elimination of foot pedals
                  </span>
                </li>
              </ul>

              {/* TikTok Video Link */}
              <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                <h4 className="font-semibold text-purple-900 mb-2">🎥 See Our Machine in Action</h4>
                <a
                  href="https://www.tiktok.com/@emebat11/video/7499060349501508870?is_from_webapp=1&sender_device=pc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-900 font-medium hover:text-purple-700"
                >
                  Watch on TikTok
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <Button asChild className="bg-purple-900 hover:bg-purple-800">
                <Link href="/services">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-800 to-purple-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Creating an Inclusive Future</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            At HOKO Innovation, we believe that everyone has a role to play in creating an inclusive future. Together,
            let's make accessibility and inclusion not just goals, but realities in every workplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-purple-900 hover:bg-white/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white/10 bg-transparent"
            >
              <Link href="/news">View Our News</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
