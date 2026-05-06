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
        <div className="absolute inset-0 bg-gradient-to-br from-[#ebf951]/100 via-[#ebf951]/30 to-[#3088fc]/80"></div>

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
              <div className="absolute top-10 left-10 animate-float1">
                <div className="w-40 h-40 bg-white rounded-2xl shadow-xl border flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">A</span>
                </div>
              </div>

              <div className="absolute top-32 right-10 animate-float2">
                <div className="w-44 h-44 bg-white rounded-2xl shadow-xl border flex items-center justify-center">
                  <span className="text-2xl font-bold text-pink-500">B</span>
                </div>
              </div>

              <div className="absolute bottom-0 left-24 animate-float1">
                <div className="w-36 h-36 bg-white rounded-2xl shadow-xl border flex items-center justify-center">
                  <span className="text-2xl font-bold text-indigo-500">C</span>
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
      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Design Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {logo_services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-rose-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-rose-600" size={24} />
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

      {/* Why Choose Us */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Why Choose Our Logo Design Services
              </h2>

              <div className="space-y-4">
                {[
                  'Professional designers with years of experience',
                  'Unlimited revisions until you&apos;re satisfied',
                  'Fast turnaround without compromising quality',
                  'Ownership of all design files and rights',
                  'Brand guideline documentation included',
                  'Multiple design concepts to choose from',
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-rose-100 rounded-full flex items-center justify-center text-rose-600">
                      ✓
                    </div>
                    <span className="text-foreground">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-100/50 to-transparent rounded-2xl p-12 h-96 flex items-center justify-center border border-rose-200/30">
              <div className="text-center">
                <p className="text-6xl font-bold text-rose-600 mb-4">Logo</p>
                <p className="text-foreground font-semibold">
                  Your visual identity starts here
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Design Process
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {design_process_steps.map((step, index) => (
              <div key={index}>
                <div className="bg-card rounded-xl p-6 border border-border h-full relative">
                  <div className="w-10 h-10 bg-rose-600 text-white rounded-lg flex items-center justify-center font-bold mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>

                {/* Connection Arrow */}
                {index < design_process_steps.length - 1 && (
                  <div className="hidden md:flex justify-center mt-4">
                    <span className="text-rose-300">→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Styles */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-rose-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Design Styles We Specialize In
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {['Minimalist', 'Modern', 'Classic', 'Bold', 'Elegant', 'Creative'].map((style, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 border border-border text-center hover:border-rose-300 hover:shadow-lg transition-all"
              >
                <p className="text-lg font-semibold text-foreground">{style}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
