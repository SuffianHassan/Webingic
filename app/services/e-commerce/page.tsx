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
      <section className="relative pt-32 pb-24 overflow-hidden">

        {/* Background Image (optional soft texture or ecommerce abstract) */}
        <div className="absolute inset-0">
          <img
            src="/ecommerce-bg.jpg"
            alt="E-commerce"
            className="w-full h-full object-cove"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffe4ec]/100 via-[#e6f0ff]/80 to-white/30"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <span className="text-pink-600 font-semibold text-sm px-4 py-2 bg-pink-100/60 backdrop-blur rounded-full inline-block border">
                E-Commerce Development
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                E-Commerce Solutions That Drive Sales
              </h1>

              <p className="text-xl text-gray-600 max-w-xl">
                Build powerful online stores with seamless shopping experiences, secure checkout systems, and conversion-focused design that grows revenue.
              </p>

              <button className="bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition">
                Launch Your Store
              </button>

            </div>

            {/* RIGHT - FLOATING PRODUCT SYSTEM */}
            <div className="relative h-[420px] hidden md:block">

              {/* Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-pink-300/20 rounded-full blur-3xl"></div>
              </div>

              {/* Product Card 1 */}
              <div className="absolute top-0 left-40 animate-float1">
                <div className="bg-white rounded-2xl shadow-xl border p-4 w-56">
                  <img src="/shoes.jpg" className="rounded-xl h-28 w-full object-cover" />
                  <p className="font-semibold mt-2">Premium Shoes</p>
                  <p className="text-pink-500 font-bold">$120</p>
                </div>
              </div>

              {/* Product Card 2 */}
              <div className="absolute top-20 right-5 animate-float2">
                <div className="bg-white rounded-2xl shadow-xl border p-4 w-52">
                  <img src="/watch.jpg" className="rounded-xl h-28 w-full object-cover" />
                  <p className="font-semibold mt-2">Smart Watch</p>
                  <p className="text-pink-500 font-bold">$199</p>
                </div>
              </div>

              {/* Product Card 3 */}
              <div className="absolute bottom-0 left-40 animate-float1">
                <div className="bg-white rounded-2xl shadow-xl border p-4 w-48">
                  <img src="/headphones.jpg" className="rounded-xl h-24 w-full object-cover" />
                  <p className="font-semibold mt-2">Headphones</p>
                  <p className="text-pink-500 font-bold">$89</p>
                </div>
              </div>

              {/* Animation */}
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


      {/* Features Section */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-pink-50/40 via-background to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-12 items-start">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <div>
                <span className="text-pink-600 font-semibold text-sm px-4 py-2 bg-pink-100/50 rounded-full inline-block">
                  E-Commerce Excellence
                </span>

                <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
                  Everything You Need to Build High-Converting Stores
                </h2>
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                We don’t just build e-commerce websites — we design complete digital selling ecosystems.
                From product discovery to checkout optimization, every interaction is crafted to increase conversions and maximize revenue.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                Our solutions combine performance engineering, modern UI/UX, and marketing intelligence to help brands scale faster
                across all digital channels with measurable business impact.
              </p>

              <div className="flex gap-4 pt-2">
                <div className="px-4 py-2 rounded-lg bg-pink-100/40 text-pink-600 text-sm font-medium">
                  Conversion Focused
                </div>
                <div className="px-4 py-2 rounded-lg bg-blue-100/40 text-blue-600 text-sm font-medium">
                  Performance Optimized
                </div>
              </div>

            </div>

            {/* RIGHT CARDS */}
            <div className="grid sm:grid-cols-2 gap-4">

              {ecommerce_features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="bg-white/70 backdrop-blur-xl rounded-xl p-5 border border-pink-100 hover:border-pink-300 hover:shadow-md transition-all duration-300"
                  >

                    <div className="w-10 h-10 bg-pink-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="text-pink-500" size={20} />
                    </div>

                    <h3 className="text-base font-bold text-foreground mb-1">
                      {feature.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>

                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </section>

      {/* Implementation Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0462e3]/30 via-background to-pink-100/90">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            {/* LEFT - TIMELINE STORY */}
            <div className="space-y-8">

              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  From Idea to Scalable E-Commerce Platform
                </h2>

                <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
                  We follow a structured yet flexible execution system that ensures every e-commerce project is built for performance,
                  security, and long-term scalability — from first wireframe to global launch.
                </p>
              </div>

              {/* Timeline */}
              <div className="space-y-6">

                {[
                  { step: "01", title: "Discovery", desc: "Understand business model, audience & goals" },
                  { step: "02", title: "UX Strategy", desc: "Define journey maps and conversion flow" },
                  { step: "03", title: "UI Design", desc: "Modern, high-converting store interface" },
                  { step: "04", title: "Development", desc: "Secure, scalable full-stack architecture" },
                  { step: "05", title: "Optimization", desc: "Speed, SEO, and conversion tuning" },
                  { step: "06", title: "Growth Launch", desc: "Deploy with analytics + marketing setup" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group">

                    {/* Step number */}
                    <div className="relative">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#0462e3] to-pink-500 text-white flex items-center justify-center font-bold shadow-md group-hover:scale-105 transition">
                        {item.step}
                      </div>

                      {/* connecting line */}
                      {i !== 5 && (
                        <div className="absolute left-1/2 top-12 w-[2px] h-10 bg-gradient-to-b from-[#0462e3]/40 to-transparent"></div>
                      )}
                    </div>

                    {/* Content */}
                    <div>
                      <h4 className="font-semibold text-foreground">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                ))}

              </div>

            </div>

            {/* RIGHT - VISUAL CARD (REDESIGNED BLUE DASHBOARD) */}
            <div className="relative">

              {/* Glow Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-[#0462e3]/50 rounded-full blur-3xl"></div>
                <div className="w-72 h-72 bg-pink-400/50 rounded-full blur-3xl ml-10"></div>
              </div>

              {/* Main Blue Card */}
              <div className="relative bg-gradient-to-br from-[#0462e3]/70 via-[#0352c4]/70 to-[#0241a3]/50 text-white rounded-3xl shadow-2xl p-10 border border-white/10 overflow-hidden">

                {/* subtle overlay shine */}
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,white,transparent_60%)]"></div>

                {/* Header */}
                <div className="relative mb-6">
                  <h3 className="text-2xl font-bold">
                    Live Commerce Control Panel
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    Real-time store performance overview
                  </p>
                </div>

                {/* Stats Blocks */}
                <div className="relative space-y-4">

                  <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 backdrop-blur">
                    <span className="text-white/80 text-sm">Conversion Rate</span>
                    <span className="font-semibold">4.8%</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 backdrop-blur">
                    <span className="text-white/80 text-sm">Active Users</span>
                    <span className="font-semibold">12,450</span>
                  </div>

                  <div className="flex justify-between items-center bg-white/10 rounded-xl px-4 py-3 backdrop-blur">
                    <span className="text-white/80 text-sm">Revenue Today</span>
                    <span className="font-semibold">$18,320</span>
                  </div>

                </div>

                {/* Progress Section */}
                <div className="relative mt-8 space-y-3">

                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Traffic Growth</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-pink-400 to-white/70"></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-white/70 mb-1">
                      <span>Sales Funnel</span>
                      <span>72%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full w-[72%] bg-gradient-to-r from-white to-cyan-300"></div>
                    </div>
                  </div>

                </div>

                {/* Footer badge */}
                <div className="relative mt-6 text-xs text-white/60">
                  ⚡ Updated in real-time • Secure analytics engine
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
      {/* Platforms Section
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
      </section> */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-background via-emerald-50/20 to-background">

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Header */}
          <h2 className="text-4xl font-bold text-foreground">
            Trusted E-Commerce Ecosystem
          </h2>

          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            We build powerful online stores using the world’s most reliable platforms,
            ensuring scalability, security, and long-term performance.
          </p>

          {/* Glow background */}
          <div className="relative mt-14">

            <div className="absolute inset-0 flex justify-center">
              <div className="w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Platform pills */}
            <div className="relative flex flex-wrap justify-center gap-4">

              {ecommerce_platforms.map((platform, index) => (
                <div
                  key={index}
                  className="px-6 py-3 rounded-full bg-white/70 backdrop-blur-xl border border-emerald-100 shadow-sm 
                     hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                >
                  <span className="text-foreground font-medium">
                    {platform}
                  </span>
                </div>
              ))}

            </div>

          </div>

          {/* Footer micro text */}
          <p className="text-xs text-muted-foreground mt-12">
            Built for Shopify • WooCommerce • Magento • Headless Commerce & More
          </p>

        </div>
      </section>


    </ServiceLayout>
  )
}
