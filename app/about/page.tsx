import Image from "next/image"
import TeamCard from "@/components/team-card"
import VolunteerSlider from "@/components/volunteer-slider"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-800 py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">HOKO Innovation</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            HOKO Innovation for Disability Empowerment and Development
          </p>
        </div>
      </section>

      {/* About HOKO Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* About HOKO */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">About HOKO</h2>
              <div className="space-y-4 text-lg text-gray-600">
                <p>
                  HOKO Innovation for Disability Empowerment and Development is a pioneering social enterprise founded
                  on October 12, 2022, with a bold vision: to break barriers and create inclusive employment
                  opportunities for persons with disabilities across Africa.
                </p>
                <p>
                  HOKO was founded by Sibhat Wondimnew, a communications expert turned disability inclusion innovator,
                  inspired by the lived experience of his father, who is visually impaired. Witnessing the challenges
                  his father faced in accessing work and independence fueled Sibhat's mission to reimagine what
                  accessible workplaces could look like—starting with tools and technologies that truly include
                  everyone.
                </p>
                <p>
                  HOKO designs and produces inclusive industrial machines—beginning with a groundbreaking sewing
                  machine—that are usable by persons with physical disabilities and non-disabled individuals alike. Our
                  focus is not only on accessibility but on dignity, self-reliance, and sustainable impact.
                </p>
                <p>
                  More than just an innovation company, HOKO partners with governments, organizations, and local
                  communities to promote inclusive design and advocate for disability rights in industries like fashion,
                  manufacturing, and technology.
                </p>
                <p>
                  Headquartered in Addis Ababa and working across the African continent, HOKO is committed to building a
                  world where disability is never a limitation—but a source of strength, creativity, and leadership.
                </p>
              </div>
            </div>

            {/* Mission & Vision Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    At HOKO Innovation for Disability Empowerment and Development, our mission is to create a world
                    where disability is never a barrier to opportunity. We empower persons with disabilities by
                    developing inclusive technologies, designing accessible industrial tools, and advocating for
                    equitable employment across Africa and beyond.
                  </p>
                  <p>
                    Through innovation, collaboration, and a deep commitment to inclusion, we are building workplaces
                    where everyone—regardless of ability—can thrive, contribute, and lead. Our goal is not just
                    accessibility, but dignity, independence, and lasting impact.
                  </p>
                </div>
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                <div className="space-y-4 text-lg text-gray-600">
                  <p>
                    To build a world where persons with disabilities have equal access to innovation, employment, and
                    independence—empowered by inclusive technologies, accessible workplaces, and a society that values
                    ability over limitation.
                  </p>
                  <p>
                    We envision a world where accessibility is not an afterthought, but a fundamental component of every
                    workplace. In this future, inclusion is woven into the fabric of organizational culture, allowing
                    individuals—regardless of ability—to thrive and contribute their unique perspectives and skills.
                  </p>
                  <p>
                    By promoting a diverse and inclusive workforce, we believe organizations will not only be more
                    equitable, but also more innovative, resilient, and successful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            <TeamCard
              image="/images/team1.jpg"
              name="Mr. Sibhat Wondimnew"
              role="Founder and CEO"
              linkedinUrl="https://linkedin.com/in/sibhat-wondimnew"
              emailUrl="sibhat1219@gmail.com"
            />
            <TeamCard
              image="/images/team2.jpg"
              name="Mr. Eyuel Tiztaw"
              role="Operation Manager"
              linkedinUrl="https://linkedin.com/in/eyoeltiztawtamrat"
            />
            <TeamCard
              image="/images/team3.jpg"
              name="Mr. Bemnet Nadew"
              role="Project Manager"
              linkedinUrl="https://linkedin.com/in/bemnet-nadew-691326a6"
            />
            <TeamCard image="/images/team4.jpg" name="Mr. Maru Abdi" role="Chairman" />
            <TeamCard
              image="/images/team5.jpg"
              name="Mr. Tariku Assefa"
              role="Project Manager"
              linkedinUrl="https://www.linkedin.com/in/tariku-assefa144"
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our team is dedicated to creating innovative solutions that empower persons with disabilities and foster
              inclusive workplaces. With diverse expertise and a shared commitment to accessibility, we work together to
              drive meaningful change.
            </p>
          </div>
        </div>
      </section>

      {/* Board Members Photos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Board Members</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <Image
                src="/images/s6.jpg"
                alt="Team meeting"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden group">
              <Image
                src="/images/s7.jpg"
                alt="Team collaboration"
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteers Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Volunteers</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Meet the dedicated volunteers who contribute their time, skills, and passion to support HOKO Innovation's
              mission of disability empowerment and inclusion.
            </p>
          </div>

          <VolunteerSlider />

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our volunteers play a crucial role in advancing our mission. From social media management to training
              coordination, each volunteer brings unique skills and dedication to creating a more inclusive world for
              persons with disabilities.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
