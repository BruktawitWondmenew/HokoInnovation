import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Lightbulb, Megaphone, Briefcase, ExternalLink } from "lucide-react"

export default function ProgramsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-800 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">Our Programs</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">Empowering Person With Disability</p>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          {/* Training & Awareness */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 group">
            <div className="space-y-6 transition-all duration-300 group-hover:translate-y-[-8px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-200 transition-colors duration-300">
                  <BookOpen className="h-8 w-8 text-blue-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-blue-900 transition-colors duration-300">
                  Training & Awareness
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                We provide comprehensive training programs and awareness campaigns to build capacity and promote
                understanding of disability inclusion in workplaces and communities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Vocational skills training for PWDs</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Awareness campaigns on disability rights</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-blue-100 rounded-full p-1 group-hover:bg-blue-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-blue-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Capacity building workshops</span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-blue-900 hover:bg-blue-800 transition-transform group-hover:scale-105 duration-300"
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <Image
                src="/images/s1.jpg"
                alt="Training & Awareness Programs"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-blue-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Developing Adaptive Industrial Machines */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 group">
            <div className="relative h-[300px] rounded-lg overflow-hidden order-2 md:order-1 group">
              <Image
                src="/images/s5.jpg"
                alt="Adaptive Industrial Machines for PWD"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-indigo-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2 transition-all duration-300 group-hover:translate-y-[-8px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-indigo-100 p-3 rounded-full group-hover:bg-indigo-200 transition-colors duration-300">
                  <Lightbulb className="h-8 w-8 text-indigo-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-indigo-900 transition-colors duration-300">
                  Developing Adaptive Industrial Machines for PWD
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                We design and develop innovative adaptive industrial machines specifically tailored to meet the needs of
                persons with disabilities in various industries.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-indigo-100 rounded-full p-1 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Adaptive sewing machines with tactile controls</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-indigo-100 rounded-full p-1 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Customizable industrial equipment</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-indigo-100 rounded-full p-1 group-hover:bg-indigo-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-indigo-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Safety-enhanced machinery design</span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-indigo-900 hover:bg-indigo-800 transition-transform group-hover:scale-105 duration-300"
              >
                <Link href="/contact">Explore Our Machines</Link>
              </Button>
            </div>
          </div>

          {/* Advocating */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16 group">
            <div className="space-y-6 transition-all duration-300 group-hover:translate-y-[-8px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-purple-100 p-3 rounded-full group-hover:bg-purple-200 transition-colors duration-300">
                  <Megaphone className="h-8 w-8 text-purple-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-900 transition-colors duration-300">
                  Advocating
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                We advocate for policy changes, rights, and inclusion of persons with disabilities in all aspects of
                society and promote equal opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 rounded-full p-1 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Policy advocacy for disability rights</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 rounded-full p-1 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Community awareness campaigns</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-purple-100 rounded-full p-1 group-hover:bg-purple-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-purple-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Stakeholder engagement and collaboration</span>
                </li>
              </ul>
              <Button
                asChild
                className="bg-purple-900 hover:bg-purple-800 transition-transform group-hover:scale-105 duration-300"
              >
                <Link href="/contact">Join Our Advocacy</Link>
              </Button>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <Image
                src="/images/s6.jpg"
                alt="Advocacy Programs"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Entrepreneurship */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center group">
            <div className="relative h-[400px] rounded-lg overflow-hidden order-2 md:order-1 group bg-gray-50">
              <Image
                src="/images/s24.png"
                alt="Woman in wheelchair using adaptive sewing machine"
                fill
                className="object-contain transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-green-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="space-y-6 order-1 md:order-2 transition-all duration-300 group-hover:translate-y-[-8px]">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 transition-colors duration-300">
                  <Briefcase className="h-8 w-8 text-green-900" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-green-900 transition-colors duration-300">
                  Entrepreneurship
                </h2>
              </div>
              <p className="text-lg text-gray-600">
                We support PWDs in starting and growing their own businesses through comprehensive business development
                services, mentorship, and funding opportunities.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Business plan development assistance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Access to funding and microfinance</span>
                </li>
                <li className="flex items-start">
                  <div className="mr-2 mt-1 bg-green-100 rounded-full p-1 group-hover:bg-green-200 transition-colors duration-300">
                    <svg className="h-4 w-4 text-green-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Mentorship and business coaching</span>
                </li>
              </ul>

              {/* TikTok Video Link */}
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-900 mb-2">🎥 See Our Impact in Action</h4>
                <p className="text-green-800 text-sm mb-3">
                  Watch how our adaptive sewing machines empower women with disabilities to become entrepreneurs.
                </p>
                <a
                  href="https://www.tiktok.com/@emebat11/video/7499038729085013254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-green-900 font-medium hover:text-green-700 transition-colors"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z" />
                  </svg>
                  Watch on TikTok
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-green-900 hover:bg-green-800 transition-transform group-hover:scale-105 duration-300"
                >
                  <Link href="/contact">Start Your Business</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Work Together?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Contact us today to learn more about our programs and how we can help you or your organization embrace
            disability inclusion and accessibility.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-purple-900 hover:bg-purple-800 transition-transform hover:scale-110 duration-300"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
