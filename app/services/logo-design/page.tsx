import { ServiceLayout } from '@/components/service-pages/service-layout'
import { Palette, Sparkles, Zap, FileText, Target, RefreshCw } from 'lucide-react'

const logo_services = [
  { icon: Palette, title: 'Custom Logo Design', description: 'Unique logos that capture your brand essence' },
  { icon: Sparkles, title: 'Brand Identity', description: 'Complete visual identity and guidelines' },
  { icon: FileText, title: 'Logo Variations', description: 'Multiple versions for different applications' },
  { icon: Target, title: 'Brand Positioning', description: 'Strategic brand development and messaging' },
  { icon: Zap, title: 'Rebranding', description: 'Refreshing tired brands with modern aesthetics' },
  { icon: RefreshCw, title: 'Unlimited Revisions', description: 'Perfect your design until you love it' },
]

const design_process_steps = [
  { title: 'Discovery', description: 'Understanding your brand vision and values' },
  { title: 'Concept', description: 'Creating multiple design concepts' },
  { title: 'Development', description: 'Refining the selected concept' },
  { title: 'Finalization', description: 'Final refinements and delivery' },
]

export default function LogoDesign() {
  return (
    <ServiceLayout>

      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">

        {/* Background Image (optional subtle texture) */}
        <div className="absolute inset-0">
          <img
            src="/logo-design.jpg"
            alt="Logo Design Background"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Pale Blue Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ebf951]/60 via-[#ebf951]/30 to-[#3088fc]/80"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <span className="text-blue-600 font-semibold text-sm px-4 py-2 bg-blue-100/70 rounded-full inline-block border">
                Logo Design
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Crafting Visual Identities That Speak
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                We design timeless brand identities that capture emotion, build recognition,
                and make your business unforgettable across every platform.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                  Start Your Brand Identity
                </button>
              </div>

            </div>

            {/* RIGHT - CREATIVE LOGO ANIMATION */}
            <div className="relative h-[420px] hidden md:block">

              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-blue-300/30 rounded-full blur-3xl"></div>
              </div>

              {/* Floating Logo Cards */}
              {/* Floating Image Cards */}
              <div className="absolute top-10 left-10 animate-float1">
                <div className="w-40 h-40 bg-white rounded-2xl shadow-xl border overflow-hidden">
                  <img
                    src="/logo-design3.jfif"
                    alt="team member"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute top-32 right-10 animate-float2">
                <div className="w-44 h-44 bg-white rounded-2xl shadow-xl border overflow-hidden">
                  <img
                    src="/logo-design1.png"
                    alt="office"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="absolute bottom-0 left-24 animate-float1">
                <div className="w-36 h-36 bg-white rounded-2xl shadow-xl border overflow-hidden">
                  <img
                    src="/logo-design2.jpg"
                    alt="workspace"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Soft sketch lines */}
              <div className="absolute inset-0 opacity-20">
                <div className="w-full h-full bg-[radial-gradient(circle,#00000010_1px,transparent_1px)] bg-[size:20px_20px]"></div>
              </div>

              {/* Animations */}
              <style>{`
          @keyframes float1 {
            0% { transform: translateY(0); }
            50% { transform: translateY(-14px); }
            100% { transform: translateY(0); }
          }

          @keyframes float2 {
            0% { transform: translateY(0); }
            50% { transform: translateY(14px); }
            100% { transform: translateY(0); }
          }

          .animate-float1 { animation: float1 6s ease-in-out infinite; }
          .animate-float2 { animation: float2 7s ease-in-out infinite; }
        `}</style>

            </div>

          </div>

        </div>
      </section>

      <section className="py-24 md:py-32 bg-gradient-to-b from-yellow-20 via-blue-30/20 to-background relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Our Design Services
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Crafted with precision, built for performance, and designed to stand out.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {logo_services.map((service) => {
              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-yellow-300/60 via-transparent to-blue-300/60 hover:from-yellow-400 hover:to-blue-400 transition-all duration-500"
                >
                  {/* Card */}
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 h-full border border-white/40 shadow-md group-hover:shadow-2xl transition-all duration-500">

                    {/* Glow Effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-yellow-400/10 to-blue-500/10 rounded-2xl"></div>

                    {/* Icon */}
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-yellow-100 to-blue-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                      <Icon className="text-blue-600 group-hover:text-yellow-600 transition" size={26} />
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Hover CTA */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                      <span className="text-sm font-medium text-blue-600">
                        Learn more →
                      </span>
                    </div>

                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}

      <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-br from-blue-200 via-blue-100 to-yellow-100 relative overflow-hidden">

        {/* glow blobs */}
        <div className="absolute top-0 left-0 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-yellow-400/20 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6 md:space-y-8 text-center md:text-left">

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-blue-600 leading-tight">
                Why Choose Our <br className="hidden sm:block" />
                <span className="text-yellow-400">Logo Design</span> Services
              </h2>

              <p className="text-blue-600/80 text-sm sm:text-base max-w-md mx-auto md:mx-0">
                We don’t just design logos — we craft identities that leave a lasting impression and elevate your brand presence.
              </p>

              {/* Features */}
              <div className="space-y-4 sm:space-y-5">
                {[
                  'Professional designers with years of experience',
                  'Unlimited revisions until you’re satisfied',
                  'Fast turnaround without compromising quality',
                  'Ownership of all design files and rights',
                  'Brand guideline documentation included',
                  'Multiple design concepts to choose from',
                ].map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 sm:gap-4 group"
                  >
                    <div className="mt-1 w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(255,221,0,0.7)]"></div>

                    <p className="text-blue-600/90 text-sm sm:text-base leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative flex items-center justify-center mt-10 md:mt-0">

              {/* glow */}
              <div className="absolute -top-6 -left-6 w-40 sm:w-72 h-40 sm:h-72 bg-yellow-400/20 rounded-full blur-3xl"></div>

              {/* image */}
              <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:w-[420px] md:h-[380px] h-[300px] rounded-2xl overflow-hidden shadow-2xl border border-white/20 group">
                <img
                  src="/logo-design4.jpg"
                  alt="logo design"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                {/* text */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p className="text-yellow-300 font-semibold sm:font-bold text-lg sm:text-xl">
                    Creative Identity
                  </p>
                  <p className="text-blue-100 text-xs sm:text-sm">
                    Designs that make your brand unforgettable
                  </p>
                </div>
              </div>

              {/* accent */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-16 sm:w-24 h-16 sm:h-24 bg-blue-400/30 rounded-xl blur-xl"></div>

            </div>

          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-50/40 via-yellow-50/30 to-background relative overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Our Design Process
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A structured approach to deliver consistent, high-quality results every time.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">

            {/* horizontal line */}
            <div className="hidden md:block absolute top-6 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-200 via-yellow-200 to-blue-200"></div>

            <div className="grid md:grid-cols-4 gap-10 relative">

              {design_process_steps.map((step, index) => (
                <div key={step.title} className="text-center md:text-left group">

                  {/* Step Circle */}
                  <div className="relative flex md:block justify-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-yellow-400 text-white flex items-center justify-center font-bold shadow-lg group-hover:scale-110 transition">
                      {index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-blue-600 transition">
                      {step.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

    </ServiceLayout>
  )
}
