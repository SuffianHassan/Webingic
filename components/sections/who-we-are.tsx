
'use client'

import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Award-winning design and development team',
  'Cutting-edge technology stack',
  'Client-centric approach to every project',
  'Proven track record of success',
  'Transparent communication always',
  'On-time and on-budget delivery',
]

export function WhoWeAre() {
  return (
    <section
      id="about"
      className="relative py-20 md:py-32 overflow-hidden bg-[#f8f9fd]"
    >

      {/* 🌈 Subtle Rainbow Grid Background */}
      <div className="absolute inset-0 opacity-[0.35]">
        {/* grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)] bg-[size:50px_50px]"></div>

        {/* rainbow glow overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-blue-500/10 via-purple-500/10 via-green-500/10 to-yellow-500/10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            <div className="space-y-4">
              <span className="text-blue-600 font-semibold text-sm px-4 py-2 bg-blue-100 rounded-full inline-block shadow-sm border">
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Who We Are
              </h2>

              <p className="text-gray-600 text-lg">
                Webingic is a forward-thinking digital solutions company focused on building modern, scalable web and mobile applications that help businesses grow.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 flex-shrink-0" size={20} />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT VISUAL (IMAGES) */}
          <div className="relative hidden md:block">

            {/* Main Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition">
              <img
                src="/team-1.avif"
                alt="team"
                className="w-full h-[380px] object-cover"
              />
            </div>

            {/* Floating Image 1 */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-xl overflow-hidden shadow-lg border bg-white">
              <img
                src="/office-1.webp"
                alt="office"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Image 2 */}
            <div className="absolute -top-10 -right-10 w-40 h-40 rounded-xl overflow-hidden shadow-lg border bg-white">
              <img
                src="/workspace-1.avif"
                alt="workspace"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}