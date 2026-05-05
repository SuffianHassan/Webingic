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
      <section className="relative pt-32 pb-24 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/mobile.png" // 👉 add in /public
            alt="Mobile App Development"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Light Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#eaecfb]/90 via-[#d9d6fb]/80 to-white/70"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <span className="text-secondary font-semibold text-sm px-4 py-2 bg-white/70 backdrop-blur rounded-full inline-block border">
                Mobile App Development
              </span>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Powerful Mobile Apps That Engage Users
              </h1>

              <p className="text-xl text-gray-600 max-w-xl">
                Create exceptional mobile experiences across iOS and Android with high-performance, user-focused applications.
              </p>

              {/* CTA */}
              <div className="pt-4">
                <button className="bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                  Build Your App
                </button>
              </div>

            </div>

            {/* RIGHT VISUAL - PHONE MOCKUPS */}
            <div className="relative h-[420px] hidden md:block">

              <div className="absolute inset-0 rounded-3xl blur-xl opacity-60 bg-gradient-to-br from-purple-400/40 to-indigo-400/40"></div>

              {/* Phone 1 */}
              <div className="absolute top-0 left-10 animate-float1">

                {/* Gradient Border Wrapper */}
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-indigo-400 via-purple-500 to-pink-400">

                  {/* Inner Phone */}
                  <div className="w-40 h-[320px] bg-white rounded-3xl overflow-hidden">
                    <img
                      src="/app-ui.png"
                      alt="App UI"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

              </div>

              {/* Phone 2 */}
              <div className="absolute top-20 right-10 animate-float2">

                {/* Gradient Border Wrapper */}
                <div className="relative p-[2px] rounded-3xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-500">

                  {/* Inner Phone */}
                  <div className="w-40 h-[320px] bg-white rounded-3xl overflow-hidden">
                    <img
                      src="/app-ui-2.png"
                      alt="App UI"
                      className="w-full h-full object-cover"
                    />
                  </div>

                </div>

              </div>

              {/* Soft Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 bg-purple-300/30 rounded-full blur-3xl"></div>
              </div>

              {/* Animations */}
              <style>{`
        @keyframes float1 {
          0% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0); }
        }
        @keyframes float2 {
          0% { transform: translateY(0); }
          50% { transform: translateY(15px); }
          100% { transform: translateY(0); }
        }

        .animate-float1 {
          animation: float1 6s ease-in-out infinite;
        }

        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }
      `}</style>

            </div>

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


            <div className="relative">

              {/* Main Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <img
                  src="/mobile-app.jpg" // 👉 add real dev/team/app image
                  alt="Mobile Development"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Floating Card */}
              <div className="
                absolute left-4 right-4 md:left-6 md:right-auto
                bottom-4 md:-bottom-12
                bg-[#5e60ef]/90 backdrop-blur-xl border border-blue-200
                shadow-lg rounded-2xl p-5
                md:w-[90%]
              ">

                <p className="text-sm text-white mb-2">
                  🚀 Agile + User-Centered Development
                </p>

                <p className="text-gray-100 font-semibold">
                  We build apps that are tested, refined, and optimized for real-world performance.
                </p>

              </div>

              <div className="relative overflow-hidden">
                {/* Soft Glow */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/30 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-[#045de3]/10 via-background to-[#6f59f7]/10 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#045de3]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#6f59f7]/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE - STORY BLOCK */}
            <div className="space-y-6">

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Why Our Mobile Solutions Stand Out
              </h2>

              <p className="text-muted-foreground text-lg">
                We don’t just build apps—we engineer complete mobile ecosystems designed to deliver real business impact, from user acquisition to long-term retention.
              </p>

              <p className="text-muted-foreground text-lg">
                Every product we build is shaped by performance-first architecture, intuitive UI design, and a deep understanding of how users interact with modern mobile experiences.
              </p>

              <p className="text-muted-foreground text-lg">
                Our focus is not only on launching your application, but ensuring it evolves smoothly with user feedback, market demands, and scalable technical foundations.
              </p>

              {/* Visual mini panel */}
              <div className="bg-gradient-to-br from-white to-[#f8f9fd] border border-border rounded-2xl p-6 shadow-sm">
                <p className="text-sm text-muted-foreground">
                  🚀 Built for performance, scalability, and user satisfaction
                </p>
              </div>

            </div>
            {/* RIGHT SIDE - STAGGERED LIST (NOT CARDS) */}
            <div className="space-y-6">

              {benefits.map((benefit, index) => {
                const Icon = benefit.icon

                return (
                  <div
                    key={index}
                    className={`flex gap-4 items-start p-5 rounded-2xl transition border
            ${index % 2 === 0
                        ? "bg-white border-border hover:border-[#045de3]/30"
                        : "bg-[#f8f9fd] border-border hover:border-[#6f59f7]/30 ml-6"
                      }`}
                  >

                    <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-secondary" size={20} />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {benefit.description}
                      </p>
                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>
      </section>

      {/* Platforms Section */}

      <section className="relative py-20 md:py-32 bg-background overflow-hidden">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}
            <div className="space-y-6">

              <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                Built to Run Everywhere Your Users Are
              </h2>

              <p className="text-muted-foreground text-lg">
                We build mobile applications that adapt seamlessly across platforms while maintaining performance, design consistency, and user experience quality.
              </p>

              <p className="text-muted-foreground text-lg">
                From native iOS and Android apps to cross-platform frameworks, we select the right approach based on scalability, speed, and long-term business growth.
              </p>

              <div className="bg-[#f8f9fd] border border-border rounded-2xl p-5">
                <p className="text-sm text-muted-foreground">
                  ⚡ One codebase. Multiple platforms. Maximum reach.
                </p>
              </div>

            </div>

            {/* RIGHT - PLATFORM STRIPS */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">

              {platforms.map((platform, index) => {
                const dotColors = [
                  "bg-blue-500",
                  "bg-purple-500",
                  "bg-indigo-500",
                  "bg-sky-500",
                  "bg-fuchsia-500",
                  "bg-cyan-500",
                ]

                return (
                  <div
                    key={index}
                    className="px-5 py-3 rounded-full bg-white border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition flex items-center gap-2"
                  >
                    <span className={`w-2 h-2 rounded-full ${dotColors[index % dotColors.length]}`}></span>

                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {platform.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {platform.description}
                      </p>
                    </div>

                  </div>
                )
              })}

            </div>

          </div>

        </div>
      </section>
    </ServiceLayout>
  )
}
