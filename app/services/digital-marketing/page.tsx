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
      {/* Hero Section
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">

        {/* Background Image Layer (optional abstract marketing image) */}
        <div className="absolute inset-0">
          <img
            src="/digital-marketing-bg.png"
            alt="Digital Marketing"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#26d9d3] via-[#0262e5]/70 to-white/60"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff20_1px,transparent_1px),linear-gradient(to_bottom,#ffffff20_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <span className="text-blue-700 font-semibold text-sm px-4 py-2 bg-white/60 backdrop-blur rounded-full inline-block border border-white/30">
                Digital Marketing
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                Grow Your Digital Presence
              </h1>

              <p className="text-lg text-gray-200 max-w-xl">
                Data-driven marketing strategies that increase visibility, drive targeted traffic, and maximize conversions across all digital channels.
              </p>

              <button className="bg-[#0262e5] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                Start Growth Campaign
              </button>

            </div>

            {/* RIGHT - ANALYTICS MOTION VISUAL */}
            <div className="relative h-[420px] hidden md:block">

              {/* Floating KPI Cards */}
              <div className="absolute top-0 left-10 w-44 p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg border border-white/40 animate-float1">
                <p className="text-sm text-gray-500">Traffic Growth</p>
                <p className="text-2xl font-bold text-[#0262e5]">+245%</p>
              </div>

              <div className="absolute top-24 right-10 w-44 p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg border border-white/40 animate-float2">
                <p className="text-sm text-gray-500">Conversions</p>
                <p className="text-2xl font-bold text-[#0262e5]">+68%</p>
              </div>

              <div className="absolute bottom-20 left-20 w-44 p-4 bg-white/80 backdrop-blur rounded-xl shadow-lg border border-white/40 animate-float1">
                <p className="text-sm text-gray-500">ROI</p>
                <p className="text-2xl font-bold text-[#0262e5]">4.2x</p>
              </div>

              {/* Animated Rising Bars */}
              <div className="absolute inset-0 flex items-end justify-center gap-2 opacity-40">
                <div className="w-4 h-20 bg-[#0262e5] animate-pulse"></div>
                <div className="w-4 h-22 bg-[#0262e5] animate-pulse"></div>
                <div className="w-4 h-24 bg-[#0262e5] animate-pulse"></div>
                <div className="w-4 h-26 bg-[#0262e5] animate-pulse"></div>
                <div className="w-4 h-28 bg-[#0262e5] animate-pulse"></div>
                <div className="w-4 h-30 bg-[#fafa13] animate-pulse"></div>
                <div className="w-4 h-32 bg-[#fafa13] animate-pulse"></div>
                <div className="w-4 h-34 bg-[#fafa13] animate-pulse"></div>
                <div className="w-4 h-36 bg-[#fafa13] animate-pulse"></div>
                <div className="w-4 h-38 bg-[#fafa13] animate-pulse"></div>
                <div className="w-4 h-40 bg-[#12f5cb] animate-pulse"></div>
                <div className="w-4 h-44 bg-[#12f5cb] animate-pulse"></div>
                <div className="w-4 h-50 bg-[#12f5cb] animate-pulse"></div>
                <div className="w-4 h-48 bg-[#12f5cb] animate-pulse"></div>
                <div className="w-4 h-55 bg-[#12f5cb] animate-pulse"></div>
                <div className="w-4 h-60 bg-[#12f5cb] animate-pulse"></div>
                <div className="w-4 h-65 bg-[#12f5cb] animate-pulse"></div>
              </div>

              {/* Glow Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-[#0262e5]/20 rounded-full blur-3xl"></div>
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
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#e6f9fd]/40 to-background">

        {/* Soft background glow */}
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#0262e5]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-cyan-300/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT (Sticky Feel) */}
            <div className="space-y-6 lg:sticky lg:top-32 h-fit">

              <span className="text-cyan-600 font-semibold text-sm px-4 py-2 bg-cyan-100/50 rounded-full inline-block">
                Our Expertise
              </span>

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Full Stack Digital Marketing Solutions
              </h2>

              <p className="text-muted-foreground text-lg">
                We don’t just offer services — we build growth systems that scale your brand visibility, engagement, and conversions across all digital platforms.
              </p>

              <div className="pt-4 border-l-2 border-cyan-500 pl-4">
                <p className="text-sm text-muted-foreground">
                  SEO, paid ads, content strategy, and automation — all working together as one system.
                </p>
              </div>

            </div>

            {/* RIGHT STACKED VISUAL CARDS */}
            <div className="relative">

              {marketing_services.map((service, index) => {
                const Icon = service.icon

                return (
                  <div
                    key={index}
                    className={`relative bg-white/80 backdrop-blur-xl border border-gray-200 rounded-2xl p-6 shadow-md
            transition-all duration-300 hover:shadow-xl hover:-translate-y-2
            ${index !== 0 ? '-mt-1' : ''}`}
                    style={{
                      zIndex: marketing_services.length - index,
                    }}
                  >

                    <div className="flex items-start gap-4">

                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-100 to-[#0262e5]/10 flex items-center justify-center">
                        <Icon className="text-cyan-600" size={22} />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {service.title}
                        </h3>

                        <p className="text-muted-foreground text-sm mt-1">
                          {service.description}
                        </p>
                      </div>

                    </div>

                  </div>
                )
              })}

            </div>

          </div>
        </div>
      </section>

      {/* Strategy Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#dff6ff] via-[#e6f9fd] to-background">

        {/* Background glow */}
        <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-[#0262e5]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 left-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Our Marketing Strategy
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT - TIMELINE STYLE */}
            <div className="space-y-8 relative">

              <div className="absolute left-3 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 to-transparent" />

              {[
                {
                  title: "Audit & Research",
                  desc: "Deep analysis of your market, competitors, and current digital presence."
                },
                {
                  title: "Strategy Building",
                  desc: "We design a custom multi-channel growth roadmap tailored to your brand."
                },
                {
                  title: "Execution",
                  desc: "Campaigns go live across SEO, ads, content, and social channels."
                },
                {
                  title: "Optimization",
                  desc: "We continuously refine campaigns based on real-time performance data."
                },
              ].map((step, i) => (
                <div key={i} className="relative pl-10">

                  {/* Dot */}
                  <div className="absolute left-0 top-2 w-6 h-6 rounded-full bg-cyan-500 shadow-lg border-4 border-white" />

                  <h3 className="text-lg font-bold text-foreground">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mt-1">
                    {step.desc}
                  </p>

                </div>
              ))}

            </div>

            {/* RIGHT - IMPACT PANEL */}
            <div className="relative">
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src="/digital-marketing-bg.png"
                  alt="Web Design"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="bg-white/80 backdrop-blur-md border border-white/40 rounded-3xl p-10 shadow-xl">

                <div className="text-center space-y-6">

                  <p className="text-sm text-cyan-500 font-semibold tracking-wide">
                    PERFORMANCE IMPACT
                  </p>

                  <div className="text-6xl font-bold text-cyan-500">
                    200%
                  </div>

                  <p className="text-foreground font-semibold text-lg">
                    Average Growth Boost
                  </p>

                  <p className="text-gray-700 text-sm">
                    Through structured campaigns, continuous optimization, and multi-channel strategy execution.
                  </p>

                  {/* mini indicators */}
                  <div className="grid grid-cols-3 gap-4 pt-6">

                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">SEO</p>
                      <p className="text-xs text-muted-foreground">Organic Growth</p>
                    </div>

                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">ADS</p>
                      <p className="text-xs text-muted-foreground">Paid Scaling</p>
                    </div>

                    <div className="text-center">
                      <p className="text-lg font-bold text-foreground">SOCIAL</p>
                      <p className="text-xs text-muted-foreground">Brand Reach</p>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#f7fbff] to-white">

        {/* soft background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-200/10 rounded-full blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">
            Tools & Technologies
          </h2>

          {/* floating ecosystem */}
          <div className="flex flex-wrap justify-center gap-4">

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
            ].map((tool, index) => {

              // slight randomness effect (manual variation)
              const sizes = [
                "px-5 py-2 text-sm",
                "px-6 py-3 text-base",
                "px-4 py-2 text-sm"
              ]

              return (
                <div
                  key={index}
                  className={`
            relative group cursor-default
            bg-white/70 backdrop-blur-xl
            border border-gray-200
            rounded-full shadow-sm
            hover:shadow-xl hover:-translate-y-1
            transition-all duration-300
            ${sizes[index % sizes.length]}
          `}
                >

                  {/* glow effect */}
                  <div className="absolute inset-0 rounded-full bg-cyan-400/0 group-hover:bg-cyan-400/10 blur-xl transition" />

                  <span className="relative font-medium text-foreground group-hover:text-cyan-700 transition">
                    {tool}
                  </span>

                </div>
              )
            })}

          </div>

          {/* subtle note */}
          <p className="text-center text-muted-foreground mt-12 text-sm max-w-xl mx-auto">
            We use industry-leading tools to ensure precision, automation, and measurable growth across all campaigns.
          </p>

        </div>
      </section>
    </ServiceLayout>
  )
}
