import { ServiceLayout } from '@/components/service-pages/service-layout'
import { TrendingUp, Target, BarChart2, Share2, Search, Mail } from 'lucide-react'

const marketing_services = [
  { icon: Search, title: 'SEO & SEM', description: 'Organic and paid search optimization' },
  { icon: Share2, title: 'Social Media Marketing', description: 'Engaging campaigns across all platforms' },
  { icon: Mail, title: 'Email Marketing', description: 'Targeted campaigns that convert' },
  { icon: Target, title: 'PPC Advertising', description: 'Precision targeting and optimization' },
  { icon: BarChart2, title: 'Analytics & Reporting', description: 'Data-driven insights and metrics' },
  { icon: TrendingUp, title: 'Growth Strategies', description: 'Scalable strategies for expansion' },
]

const results = [
  { metric: '300%', label: 'Average ROI Increase' },
  { metric: '45%', label: 'Average Traffic Growth' },
  { metric: '2.5x', label: 'Average Conversion Rate' },
]

export default function DigitalMarketing() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-cyan-100/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-cyan-600 font-semibold text-sm px-4 py-2 bg-cyan-100/50 rounded-full inline-block">
                Digital Marketing
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Grow Your Digital Presence
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Comprehensive digital marketing strategies designed to increase visibility, drive traffic, and boost conversions for sustainable business growth.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              {results.map((result, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border">
                  <p className="text-3xl font-bold text-cyan-600">{result.metric}</p>
                  <p className="text-muted-foreground mt-2">{result.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Our Marketing Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {marketing_services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-cyan-50/50 to-transparent rounded-xl p-8 border border-border hover:border-cyan-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-cyan-600" size={24} />
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

      {/* Strategy Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-cyan-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-12 text-center">
            Our Marketing Strategy
          </h2>

          <div className="bg-card rounded-2xl border border-border p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Proven Framework</h3>
                <ul className="space-y-3">
                  {[
                    'Comprehensive audit and competitor analysis',
                    'Target audience identification and segmentation',
                    'Multi-channel campaign strategy',
                    'Content creation and optimization',
                    'Campaign execution and monitoring',
                    'Performance analysis and optimization',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600">
                        ✓
                      </div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-cyan-100/50 to-transparent rounded-xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-4xl font-bold text-cyan-600 mb-2">200%</p>
                  <p className="text-foreground font-semibold">
                    Average Performance Improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            Tools & Technologies
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Google Analytics',
              'SEMrush',
              'Facebook Ads Manager',
              'HubSpot',
              'Mailchimp',
              'Hootsuite',
              'Ahrefs',
              'Canva',
              'Zapier',
            ].map((tool, index) => (
              <div key={index} className="bg-card rounded-lg p-6 border border-border text-center hover:border-cyan-300 transition">
                <p className="font-semibold text-foreground">{tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
