import { ServiceLayout } from '@/components/service-pages/service-layout'
import { Smartphone, Zap, Users, Settings, TrendingUp, Lock } from 'lucide-react'

const platforms = [
  { name: 'iOS', description: 'Native and Swift development for Apple devices' },
  { name: 'Android', description: 'Kotlin and native Android applications' },
  { name: 'Cross-Platform', description: 'React Native and Flutter solutions' },
  { name: 'Progressive Web Apps', description: 'App-like experiences in the browser' },
]

const benefits = [
  { icon: Smartphone, title: 'Multi-Platform Support', description: 'Reach users on iOS, Android, and web' },
  { icon: Zap, title: 'High Performance', description: 'Fast, responsive apps that users love' },
  { icon: Users, title: 'User-Centric Design', description: 'Intuitive interfaces optimized for mobile' },
  { icon: Settings, title: 'Easy Maintenance', description: 'Clean code for simple updates and scaling' },
  { icon: TrendingUp, title: 'Analytics Ready', description: 'Built-in tracking and insights' },
  { icon: Lock, title: 'Security First', description: 'Enterprise-level security standards' },
]

export default function MobileAppDevelopment() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-100/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-secondary font-semibold text-sm px-4 py-2 bg-secondary/20 rounded-full inline-block">
                Mobile App Development
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Powerful Mobile Apps That Engage Users
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Create exceptional mobile experiences across iOS, Android, and web. Engage users with intuitive, high-performance applications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-secondary">150+</p>
                <p className="text-muted-foreground mt-2">Mobile Apps Built</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-secondary">30M+</p>
                <p className="text-muted-foreground mt-2">Total App Downloads</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-secondary">4.8★</p>
                <p className="text-muted-foreground mt-2">Average App Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Supported Platforms
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-secondary/10 to-transparent rounded-xl p-8 border border-border">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {platform.name}
                </h3>
                <p className="text-muted-foreground">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Key Benefits of Our Mobile Solutions
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-secondary/30 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Development Approach */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Our Development Approach
              </h2>
              <ul className="space-y-4">
                {[
                  'User-first design philosophy',
                  'Agile development methodology',
                  'Continuous testing and iteration',
                  'Post-launch support and updates',
                  'Performance optimization',
                  'App store optimization (ASO)',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-secondary/20 rounded-full flex items-center justify-center text-secondary font-bold">
                      ✓
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-secondary/20 to-primary/10 rounded-2xl p-12 h-96 flex items-center justify-center">
              <p className="text-xl text-foreground font-semibold text-center">
                Mobile apps that deliver results
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
