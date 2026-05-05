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
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Design Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {design_services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-indigo-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Design Philosophy */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-indigo-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-8">
                Design Thinking Approach
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'User-Centered',
                    desc: 'Every design decision is based on user research and behavior',
                  },
                  {
                    title: 'Results-Driven',
                    desc: 'Designs optimized for your key business metrics',
                  },
                  {
                    title: 'Accessible',
                    desc: 'Inclusive design that works for everyone',
                  },
                  {
                    title: 'Modern & Timeless',
                    desc: 'Beautiful designs that stand the test of time',
                  },
                ].map((item, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[...Array(4)].map((_, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-indigo-200/50 to-primary/10 rounded-xl p-8 h-40 flex items-center justify-center border border-indigo-200/30"
                >
                  <p className="text-indigo-600 font-semibold text-center">
                    Design Element {index + 1}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Design Process
          </h2>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
            {design_process.map((step, index) => (
              <div key={index} className="flex flex-col items-center md:flex-1">
                <div className="w-12 h-12 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mb-3">
                  {index + 1}
                </div>
                <p className="text-foreground font-semibold text-center">{step}</p>

                {index < design_process.length - 1 && (
                  <div className="hidden md:block w-full h-1 bg-gradient-to-r from-indigo-300 to-transparent mt-8 absolute"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
