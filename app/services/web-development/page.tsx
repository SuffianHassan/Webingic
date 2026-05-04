import { ServiceLayout } from '@/components/service-pages/service-layout'
import { Code2, Zap, Shield, Smartphone, Database, Rocket } from 'lucide-react'

const features = [
  { icon: Code2, title: 'Modern Tech Stack', description: 'Built with React, Next.js, and cutting-edge technologies' },
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized performance for seamless user experiences' },
  { icon: Shield, title: 'Secure & Scalable', description: 'Enterprise-grade security and unlimited scalability' },
  { icon: Smartphone, title: 'Fully Responsive', description: 'Perfect on mobile, tablet, and desktop devices' },
  { icon: Database, title: 'Data Management', description: 'Robust backend solutions with powerful databases' },
  { icon: Rocket, title: 'SEO Optimized', description: 'Built-in SEO best practices for visibility' },
]

const process = [
  { step: '1', title: 'Discovery', description: 'Understanding your goals and requirements' },
  { step: '2', title: 'Planning', description: 'Creating detailed project roadmap and architecture' },
  { step: '3', title: 'Design', description: 'Crafting beautiful and intuitive user interfaces' },
  { step: '4', title: 'Development', description: 'Building robust and scalable applications' },
  { step: '5', title: 'Testing', description: 'Rigorous QA to ensure quality and performance' },
  { step: '6', title: 'Launch', description: 'Smooth deployment and ongoing support' },
]

export default function WebDevelopment() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/10 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm px-4 py-2 bg-primary/20 rounded-full inline-block">
                Web Development
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Custom Web Applications Built for Success
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform your ideas into powerful, scalable web applications that drive business growth and user engagement.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-primary">250+</p>
                <p className="text-muted-foreground mt-2">Web Apps Delivered</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-primary">45+</p>
                <p className="text-muted-foreground mt-2">Expert Developers</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-primary">99.9%</p>
                <p className="text-muted-foreground mt-2">Uptime Guarantee</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Why Choose Our Web Development Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-primary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Development Process
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-card rounded-xl p-8 border border-border h-full">
                  <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                {/* Connection Line */}
                {index < process.length - 1 && (
                  <div className="absolute -right-4 top-1/2 hidden lg:block">
                    <div className="w-8 h-1 bg-primary/20"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Technologies We Use
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker'].map((tech, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center hover:border-primary transition">
                <p className="font-semibold text-foreground">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
