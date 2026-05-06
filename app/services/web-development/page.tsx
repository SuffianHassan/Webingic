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
      <section className="relative pt-20 pb-20 overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/web.png" // 👉 add your image in /public
            alt="Web Development"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#045de3]/100 via-[#6f59f7]/90 to-black/50"></div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">

          <div className="space-y-8">

            {/* Text */}
            <div className="space-y-4 max-w-3xl">
              <span className="font-semibold text-sm px-4 py-2 bg-white/10 backdrop-blur rounded-full inline-block border border-white/20">
                Web Development
              </span>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Custom Web Applications Built for Success
              </h1>

              <p className="text-xl text-white/80">
                Transform your ideas into powerful, scalable web applications that drive business growth and user engagement.
              </p>
            </div>

            {/* Animated Feature Pills */}
            <div className="relative pt-12 h-[220px]">

              {/* Glow Center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-40 h-40 bg-white/100 rounded-full blur-3xl"></div>
              </div>

              {[
                "Custom Dashboards",
                "Scalable APIs",
                "React Apps",
                "E-commerce Solutions",
                "Admin Panels",
                "High Performance"
              ].map((item, i) => (
                <div
                  key={i}
                  className={`absolute px-4 py-2 bg-[#ffffff]/70 text-blue-600 backdrop-blur border rounded-full text-sm shadow-md animate-float-${i}`}
                >
                  {item}
                </div>
              ))}

              {/* Animations */}
              <style>{`
        @keyframes float1 {
          0% { transform: translate(0,0); }
          50% { transform: translate(20px,-20px); }
          100% { transform: translate(0,0); }
        }
        @keyframes float2 {
          0% { transform: translate(0,0); }
          50% { transform: translate(-25px,15px); }
          100% { transform: translate(0,0); }
        }
        @keyframes float3 {
          0% { transform: translate(0,0); }
          50% { transform: translate(15px,25px); }
          100% { transform: translate(0,0); }
        }

        .animate-float-0 { animation: float1 6s ease-in-out infinite; top: 0; left: 20%; }
        .animate-float-1 { animation: float2 7s ease-in-out infinite; top: 30%; left: 65%; }
        .animate-float-2 { animation: float3 5s ease-in-out infinite; top: 65%; left: 25%; }
        .animate-float-3 { animation: float1 8s ease-in-out infinite; top: 10%; left: 75%; }
        .animate-float-4 { animation: float2 6s ease-in-out infinite; top: 70%; left: 55%; }
        .animate-float-5 { animation: float3 7s ease-in-out infinite; top: 40%; left: 5%; }
      `}</style>

            </div>

          </div>

        </div>
      </section>


      <section className="py-20 md:py-32 bg-gradient-to-b from-white to-[#f8f9fd]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Web Development Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine cutting-edge technology with proven strategies to deliver scalable, high-performance solutions.
            </p>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {features.map((feature, index) => {
              const Icon = feature.icon

              return (
                <div
                  key={index}
                  className="group relative bg-white/70 backdrop-blur rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >

                  {/* Top gradient line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#045de3] to-[#6f59f7] opacity-0 group-hover:opacity-100 transition"></div>

                  {/* Icon */}
                  <div className="w-14 h-14 bg-gradient-to-br from-[#045de3]/10 to-[#6f59f7]/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                    <Icon className="text-primary" size={26} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                </div>
              )
            })}

          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-16 bg-gradient-to-br from-primary/10 via-background to-secondary/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-foreground mb-20 text-center">
            Our Development Process
          </h2>

          {/* Timeline Wrapper */}
          <div className="relative">

            {/* Horizontal Line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-primary/20 via-primary to-primary/20"></div>

            <div className="grid lg:grid-cols-6 gap-10">

              {process.map((item, index) => (
                <div key={index} className="relative text-center group">

                  {/* Step Circle */}
                  <div className="mx-auto mb-6 w-16 h-16 rounded-full bg-white border-4 border-primary flex items-center justify-center text-primary font-bold text-lg shadow-md group-hover:scale-110 transition">
                    {item.step}
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Vertical connector for mobile */}
                  {index < process.length - 1 && (
                    <div className="lg:hidden absolute left-1/2 -bottom-10 w-[2px] h-10 bg-primary/20 -translate-x-1/2"></div>
                  )}

                </div>
              ))}

            </div>
          </div>

        </div>
      </section>

      <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8f9fd] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* LEFT - IMAGE */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl">
                <img
                  src="/web-dev.png" // 👉 add in public folder
                  alt="Web Development"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* subtle overlay card */}
              <div className="absolute -bottom-6 left-6 bg-white p-4 rounded-xl shadow-md">
                <p className="text-sm text-gray-600">
                  🚀 High-performance applications
                </p>
              </div>
            </div>

            {/* RIGHT - CONTENT */}
            <div className="space-y-6">

              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Built for Performance & Scalability
              </h2>

              <p className="text-gray-600 text-lg">
                We don’t just build websites—we engineer high-performing digital products designed to scale with your business. From architecture to deployment, every decision is made with performance, security, and growth in mind.
              </p>

              <div className="space-y-3">
                <p className="text-gray-700">✔ Optimized for speed and performance</p>
                <p className="text-gray-700">✔ Scalable architecture for future growth</p>
                <p className="text-gray-700">✔ Secure and reliable systems</p>
                <p className="text-gray-700">✔ Modern technologies & best practices</p>
              </div>

            </div>

          </div>

        </div>
      </section>
    </ServiceLayout>
  )
}
