import { Calendar } from "lucide-react"
import ImageSlider from "@/components/image-slider"

export default function NewsPage() {
  const awardImages = [
    { src: "/images/s11.jpg", alt: "Award ceremony presentation at Focus on Ability Ethiopia" },
    { src: "/images/s12.jpg", alt: "Award ceremony audience at Ethiopian Skylight Hotel" },
    { src: "/images/s13.jpg", alt: "Receiving Maleda Award at Focus on Ability Ethiopia" },
  ]

  const expoImages = [
    { src: "/images/s16.jpg", alt: "Government officials observing machine demonstration" },
    { src: "/images/s17.jpg", alt: "High-level officials visiting HOKO Innovation booth" },
    { src: "/images/s14.jpg", alt: "HOKO Innovation booth at Ethiopia Tamirt Expo 2023" },
    { src: "/images/s15.jpg", alt: "Demonstrating adaptive sewing machine to officials" },
  ]

  const meetingImages = [
    { src: "/images/s18.jpg", alt: "Board members meeting discussing future plans" },
    { src: "/images/s19.jpg", alt: "Board meeting with presentation" },
    { src: "/images/s20.jpg", alt: "Group photo of board members after meeting" },
  ]

  const trainingImages = [
    { src: "/images/s21.jpg", alt: "Training session in progress with PWD participants" },
    { src: "/images/s22.jpg", alt: "Group photo of PWD trainees in training room" },
    { src: "/images/s23.jpg", alt: "PWD trainees group photo outside training facility" },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-800 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">News & Updates</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay informed about our latest activities, achievements, and opportunities
          </p>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-16">
            {/* Focus on Ability Ethiopia Award */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageSlider images={awardImages} autoSlideInterval={4000} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-purple-900">
                    <Calendar className="h-5 w-5" />
                    <span>December 24, 2022</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  HOKO Innovation Awarded at Focus on Ability Ethiopia Short Film Festival & Maleda Awards
                </h2>
                <p className="text-gray-600">
                  HOKO Innovation was honored to be invited to the Focus on Ability Ethiopia Short Film Festival and
                  Maleda Awards event. We were proud to receive the Maleda Award in recognition of our efforts to
                  empower persons with disabilities through inclusive technology.
                </p>
                <p className="text-gray-600">
                  This award celebrates our commitment to telling stories that inspire, and to building a more inclusive
                  and equitable society for all. The event was held at the Ethiopian Skylight Hotel, bringing together
                  advocates, innovators, and supporters of disability inclusion.
                </p>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="text-purple-900 font-semibold">📍 Ethiopian Skylight Hotel, Addis Ababa</p>
                  <p className="text-purple-800">🏆 Maleda Award for Disability Empowerment</p>
                </div>
              </div>
            </div>

            {/* Ethiopia Tamirt Expo 2023 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-purple-900">
                    <Calendar className="h-5 w-5" />
                    <span>May 9-13, 2023</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  HOKO Innovation Participates in Ethiopia Tamirt Expo 2023
                </h2>
                <p className="text-gray-600">
                  HOKO Innovation proudly participated in the Ethiopia Tamirt Expo 2024 to showcase our inclusive
                  technologies designed to empower persons with disabilities. The expo provided a valuable platform to
                  demonstrate our adaptive industrial machines and engage with innovators, stakeholders, and supporters.
                </p>
                <p className="text-gray-600">
                  We had the honor of presenting our machines to high-level governmental officials and community
                  participants, demonstrating how our adaptive sewing machines can create employment opportunities for
                  persons with disabilities. Our presence at this national event reinforced our dedication to creating
                  solutions that promote equal opportunity and inclusive development.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-900 font-semibold">📍 Millennium Hall, Addis Ababa</p>
                  <p className="text-blue-800">🎯 Showcased adaptive industrial machines to government officials</p>
                  <p className="text-blue-800">👥 Engaged with community participants and stakeholders</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageSlider images={expoImages} autoSlideInterval={4000} />
              </div>
            </div>

            {/* Board Meeting */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <ImageSlider images={meetingImages} autoSlideInterval={4000} />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-purple-900">
                    <Calendar className="h-5 w-5" />
                    <span>Recent</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Strategic Board Meeting: Planning for Future Growth and Impact
                </h2>
                <p className="text-gray-600">
                  HOKO Innovation's board members convened for a comprehensive strategic planning meeting to discuss
                  future plans and initiatives. The meeting focused on expanding our programs, enhancing our adaptive
                  technology offerings, and strengthening partnerships to better serve the disability community.
                </p>
                <p className="text-gray-600">
                  Key discussions included scaling our training programs, developing new adaptive industrial machines,
                  and exploring opportunities for international collaboration. The board reaffirmed our commitment to
                  innovation and inclusive development.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-900 font-semibold">🎯 Strategic planning for organizational growth</p>
                  <p className="text-green-800">📈 Discussed program expansion and new initiatives</p>
                  <p className="text-green-800">🤝 Explored partnership opportunities</p>
                </div>
              </div>
            </div>

            {/* Training Program */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4 order-2 lg:order-1">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-purple-900">
                    <Calendar className="h-5 w-5" />
                    <span>2022</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Inclusive Training Program Reaches 150+ PWD Trainees
                </h2>
                <p className="text-gray-600">
                  HOKO Innovation successfully conducted comprehensive inclusive training programs that have reached
                  over 150 persons with disabilities. These training sessions focus on developing practical skills,
                  building confidence, and enhancing employability for participants.
                </p>
                <p className="text-gray-600">
                  Our training programs cover various areas including vocational skills, entrepreneurship development,
                  and the use of adaptive technologies. The success of these programs demonstrates our commitment to
                  empowering PWDs through education and skill development.
                </p>
                <p className="text-gray-600">
                  The training sessions were held in well-equipped facilities with accessible learning environments,
                  ensuring that all participants could fully engage in the learning process regardless of their
                  disability type.
                </p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-orange-900 font-semibold">👥 150+ PWD trainees successfully trained</p>
                  <p className="text-orange-800">🎓 Comprehensive skill development programs</p>
                  <p className="text-orange-800">💼 Focus on employability and entrepreneurship</p>
                  <p className="text-orange-800">♿ Fully accessible training facilities</p>
                </div>
              </div>
              <div className="relative h-[400px] rounded-lg overflow-hidden order-1 lg:order-2">
                <ImageSlider images={trainingImages} autoSlideInterval={4000} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
