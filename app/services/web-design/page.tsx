import { ServiceLayout } from '@/components/service-pages/service-layout'
import { Eye, Palette, Zap, Users, BarChart3, Shield } from 'lucide-react'
import Link from 'next/link'

const design_services = [
  { icon: Eye, title: 'UI/UX Design', description: 'Beautiful and intuitive interfaces that users love' },
  { icon: Palette, title: 'Brand Design', description: 'Complete brand identity and visual guidelines' },
  { icon: Zap, title: 'Interactive Design', description: 'Engaging animations and micro-interactions' },
  { icon: Users, title: 'User Research', description: 'Deep understanding of your audience' },
  { icon: BarChart3, title: 'Conversion Optimization', description: 'Design for business results' },
  { icon: Shield, title: 'Accessibility', description: 'Inclusive design for everyone' },
]

const design_process = [
  'Research & Discovery',
  'Wireframing & Prototyping',
  'Visual Design',
  'User Testing',
  'Refinement & Iteration',
  'Handoff & Documentation',
]

export default function WebDesign() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/web-design.png"
            alt="Web Design"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay (orange + purple theme) */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/100 via-[#998af4]/80 to-white/70"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <span className="text-indigo-600 font-semibold text-sm px-4 py-2 bg-white/60 backdrop-blur rounded-full inline-block border">
                Web Design
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Stunning Designs That Convert
              </h1>

              <p className="text-xl text-gray-100 max-w-xl">
                Beautiful, user-centered web designs that not only look amazing but also drive real business results and meaningful user engagement.
              </p>

              <div className="pt-4">
                <Link href="#contact">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
                    Start Your Design
                  </button>
                </Link>
              </div>

            </div>

            {/* RIGHT - DESIGN LAYERS ANIMATION */}
            <div className="relative h-[420px] hidden md:block">

              {/* Layer 1 */}
              <div className="absolute top-0 left-10 w-72 h-40 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-float1">
                <img src="/web-design.avif" className="w-full h-full object-cover" />
              </div>

              {/* Layer 2 */}
              <div className="absolute top-24 right-10 w-64 h-40 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-float2">
                <img src="/web-design1.webp" className="w-full h-full object-cover" />
              </div>

              {/* Layer 3 */}
              <div className="absolute bottom-0 left-20 w-56 h-36 bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-float1">
                <img src="/web-design2.jpeg" className="w-full h-full object-cover" />
              </div>

              {/* Soft Glow Accent */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-60 h-60 bg-[#998af4]/30 rounded-full blur-3xl"></div>
              </div>

              {/* Animations */}
              <style>{`
        @keyframes float1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(0); }
        }

        @keyframes float2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(12px); }
          100% { transform: translateY(0); }
        }

        .animate-float1 { animation: float1 6s ease-in-out infinite; }
        .animate-float2 { animation: float2 7s ease-in-out infinite; }
      `}</style>

            </div>

          </div>

        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 md:py-32 overflow-hidden">

        {/* 🌈 Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#cd8aa6]/10 via-[#EBEAFE]/20 to-white"></div>

        {/* ✨ Soft Glow Accents */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-pink-300/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-indigo-300/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our Design Services
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              We craft visually stunning and conversion-focused designs that elevate your brand and engage your users.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {design_services.map((service, index) => {
              const Icon = service.icon

              return (
                <div
                  key={index}
                  className="group relative"
                >

                  {/* Glow Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                  {/* Gradient Border */}
                  <div className="relative p-[1px] rounded-3xl bg-gradient-to-br from-pink-300 via-indigo-300 to-transparent">

                    {/* Card */}
                    <div className="h-full bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-1">

                      {/* Icon */}
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-200 to-indigo-200 flex items-center justify-center mb-6">
                        <Icon className="text-indigo-700" size={26} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* Bottom Accent Line */}
                      <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-pink-400 to-indigo-400 group-hover:w-full transition-all duration-500"></div>

                    </div>
                  </div>

                </div>
              )
            })}

          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="relative py-20 md:py-32 overflow-hidden">

        {/* 🌌 Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#e0e6fe] via-[#cecafc] to-[#1e1b4b]"></div>

        {/* Glow Accents */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-300/90 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-300/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* LEFT - TIMELINE STYLE */}
            <div>
              <h2 className="text-4xl font-bold text-white mb-12">
                Design Thinking Approach
              </h2>

              <div className="relative border-l border-white/20 pl-8 space-y-10">

                {[
                  {
                    title: 'User-Centered',
                    desc: 'Every design decision is grounded in user behavior, research, and real-world needs.',
                  },
                  {
                    title: 'Results-Driven',
                    desc: 'We craft designs that don’t just look good—they drive conversions and growth.',
                  },
                  {
                    title: 'Accessible',
                    desc: 'Inclusive experiences that ensure usability for all audiences.',
                  },
                  {
                    title: 'Modern & Timeless',
                    desc: 'A balance of trends and longevity for lasting impact.',
                  },
                ].map((item, index) => (
                  <div key={index} className="relative group">

                    {/* Dot */}
                    <div className="absolute -left-[10px] top-2 w-4 h-4 bg-white rounded-full border-4 border-indigo-500 group-hover:scale-110 transition"></div>

                    <h3 className="text-xl font-semibold text-white ps-5 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-dark leading-relaxed ps-5">
                      {item.desc}
                    </p>
                  </div>
                ))}

              </div>
            </div>

            {/* RIGHT - VISUAL */}
            <div className="relative">

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/web-design2.jpg" // 👉 add image
                  alt="Design Process"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating Glass Card */}
              {/* <div className="absolute -bottom-10 left-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-lg">

                <p className="text-white text-sm mb-2">
                  ✨ Human-Centered Design
                </p>

                <p className="text-indigo-100 font-semibold">
                  We blend creativity with usability to deliver impactful digital experiences.
                </p>

              </div> */}

            </div>

          </div>
        </div>
      </section>

      {/* Process Timeline */}

      <section className="relative py-20 md:py-32 overflow-hidden">

        {/* 🌸 Soft Elegant Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#eef1ff] via-white to-[#f8f9ff]"></div>

        {/* subtle glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-200/30 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full"></div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Design Process
          </h2>

          {/* Timeline Wrapper (CONSTRAINED) */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-10 md:gap-6">

            {/* Gradient Line (behind steps) */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-200"></div>

            {design_process.map((step, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center text-center md:flex-1 group"
              >

                {/* Step Circle */}
                <div className="relative z-10 w-14 h-14 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition">
                  {index + 1}
                </div>

                {/* Step Text Card */}
                <div className="mt-4 px-4 py-2 rounded-full bg-white/70 backdrop-blur border border-gray-200 shadow-sm group-hover:shadow-md transition">
                  <p className="text-sm font-semibold text-gray-800">
                    {step}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
