// 'use client'

import Link from 'next/link'
import {
  Code2,
  Smartphone,
  Palette,
  TrendingUp,
  ShoppingCart,
  PenTool,
} from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern tech.',
    href: '/services/web-development',
    image: '/web.webp',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'High-performance mobile apps for iOS & Android.',
    href: '/services/mobile-app',
    image: '/mobile.avif',
  },
  {
    icon: Palette,
    title: 'Web Design',
    description: 'Clean, modern UI/UX that converts users.',
    href: '/services/web-design',
    image: '/web-design.jpg',
  },
  {
    icon: TrendingUp,
    title: 'Marketing',
    description: 'Growth-focused digital marketing strategies.',
    href: '/services/digital-marketing',
    image: '/marketing.jpg',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description: 'Scalable online stores that drive revenue.',
    href: '/services/e-commerce',
    image: '/e-commerce.jpg',
  },
  {
    icon: PenTool,
    title: 'Branding',
    description: 'Memorable identities that stand out.',
    href: '/services/logo-design',
    image: '/brand.avif',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-16 md:py-32 overflow-hidden">

      {/* 🔥 Your Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6e9eed]/70 via-[#4847E8]/80 to-[#4847E8]/70" />

      {/* Optional glow blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-white/80 text-sm font-semibold bg-white/10 px-4 py-1 rounded-full">
            Our Expertise
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-white mt-4">
            Services that drive growth
          </h2>

          <p className="text-white/70 mt-3 max-w-xl mx-auto">
            We craft high-performance digital solutions that elevate your brand.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Link key={index} href={service.href}>
                {/* 🔥 Gradient Border Wrapper */}
                <div
                  className="
                    group relative rounded-2xl p-[1px]
                    bg-gradient-to-br from-transparent to-transparent
                    hover:from-blue-500/60 hover:to-purple-500/60
                    transition-all duration-500
                  "
                >
                  {/* Inner Card */}
                  <div
                    className="
                      relative rounded-2xl bg-white/95 backdrop-blur-xl
                      p-6 h-full overflow-hidden
                      shadow-lg hover:shadow-2xl
                      transition-all duration-500
                      hover:-translate-y-2
                    "
                  >

                    {/* 🖼️ Image on Hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-25 transition duration-500 bg-cover bg-center"
                      style={{ backgroundImage: `url(${service.image})` }}
                    />

                    {/* ✨ Inner Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-blue-500/15 opacity-0 group-hover:opacity-100 transition duration-500" />

                    {/* Top gradient line */}
                    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition" />

                    {/* Content */}
                    <div className="relative z-10">

                      {/* Icon */}
                      <div
                        className="
                          w-12 h-12 rounded-xl flex items-center justify-center mb-4
                          bg-gradient-to-br from-blue-500 to-purple-500 text-white
                          group-hover:scale-110 transition
                        "
                      >
                        <Icon size={22} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 text-sm mb-4">
                        {service.description}
                      </p>

                      {/* CTA */}
                      <div className="text-blue-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}