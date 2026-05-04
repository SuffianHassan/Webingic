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
      <section className="pt-32 pb-20 bg-gradient-to-br from-rose-100/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-rose-600 font-semibold text-sm px-4 py-2 bg-rose-100/50 rounded-full inline-block">
                Logo Design
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Memorable Logos That Stand Out
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Create a powerful brand identity with professional logo design that captures your company&apos;s essence and resonates with your audience.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-rose-600">500+</p>
                <p className="text-muted-foreground mt-2">Logos Designed</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-rose-600">98%</p>
                <p className="text-muted-foreground mt-2">Client Satisfaction</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-rose-600">25+</p>
                <p className="text-muted-foreground mt-2">Design Awards</p>
              </div>
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
