import { ServiceLayout } from '@/components/service-pages/service-layout'
import { ShoppingCart, Zap, Lock, BarChart3, Package, CreditCard } from 'lucide-react'

const ecommerce_features = [
  { icon: ShoppingCart, title: 'Custom Store Setup', description: 'Tailored e-commerce platforms for your brand' },
  { icon: CreditCard, title: 'Payment Integration', description: 'Secure payment gateways and checkout' },
  { icon: Package, title: 'Inventory Management', description: 'Complete product and stock management' },
  { icon: BarChart3, title: 'Sales Analytics', description: 'Detailed insights into your business performance' },
  { icon: Zap, title: 'Performance Optimized', description: 'Fast loading and conversion-optimized stores' },
  { icon: Lock, title: 'Security & Compliance', description: 'PCI-DSS compliant and secure transactions' },
]

const ecommerce_platforms = [
  'Shopify',
  'WooCommerce',
  'Magento',
  'BigCommerce',
  'Custom Solutions',
]

export default function EcommerceDevelopment() {
  return (
    <ServiceLayout>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-emerald-100/50 via-background to-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-emerald-600 font-semibold text-sm px-4 py-2 bg-emerald-100/50 rounded-full inline-block">
                E-Commerce Development
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                E-Commerce Solutions That Drive Sales
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Build powerful online stores with seamless shopping experiences, secure payments, and tools that maximize conversions and customer lifetime value.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-emerald-600">$500M+</p>
                <p className="text-muted-foreground mt-2">Total Sales Generated</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-emerald-600">120+</p>
                <p className="text-muted-foreground mt-2">Stores Launched</p>
              </div>
              <div className="bg-card rounded-lg p-6 border border-border">
                <p className="text-3xl font-bold text-emerald-600">3.2x</p>
                <p className="text-muted-foreground mt-2">Avg. Revenue Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            E-Commerce Features & Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ecommerce_features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border hover:border-emerald-300 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-emerald-600" size={24} />
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

      {/* Platforms Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background to-emerald-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-foreground mb-16 text-center">
            E-Commerce Platforms We Use
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ecommerce_platforms.map((platform, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 border border-border text-center hover:border-emerald-300 hover:shadow-md transition"
              >
                <p className="font-semibold text-foreground">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                From Concept to Launch
              </h2>

              <div className="space-y-4">
                {[
                  {
                    step: '01',
                    title: 'Planning',
                    desc: 'Define goals, audience, and business model',
                  },
                  {
                    step: '02',
                    title: 'Design',
                    desc: 'Create user-focused shopping experience',
                  },
                  {
                    step: '03',
                    title: 'Development',
                    desc: 'Build secure and scalable platform',
                  },
                  {
                    step: '04',
                    title: 'Integration',
                    desc: 'Connect payment, inventory, and shipping',
                  },
                  {
                    step: '05',
                    title: 'Testing',
                    desc: 'Rigorous QA and security audits',
                  },
                  {
                    step: '06',
                    title: 'Launch',
                    desc: 'Go live with ongoing support',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-emerald-600 text-white font-bold">
                        {item.step}
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{item.title}</p>
                      <p className="text-muted-foreground text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-100/50 to-transparent rounded-2xl p-12 h-96 flex items-center justify-center border border-emerald-200/30">
              <p className="text-xl text-foreground font-semibold text-center">
                Scalable e-commerce solutions built for growth
              </p>
            </div>
          </div>
        </div>
      </section>
    </ServiceLayout>
  )
}
