
'use client'

import {
  Building2,
  ShoppingBag,
  Stethoscope,
  GraduationCap,
  DollarSign,
  Zap,
} from 'lucide-react'

const industries = [
  {
    icon: ShoppingBag,
    name: 'E-Commerce',
    image: 'ecommerce.jpg',
  },
  {
    icon: Building2,
    name: 'Real Estate',
    image: '/real-estate.jpg',
  },
  {
    icon: Stethoscope,
    name: 'Healthcare',
    image: '/healthcare.jpg',
  },
  {
    icon: GraduationCap,
    name: 'Education',
    image: '/education.jpg',
  },
  {
    icon: DollarSign,
    name: 'Finance',
    image: '/finance.jpg',
  },

]

export function Industries() {
  return (
    <section className="relative py-16 md:py-30 bg-[#EDF0FB] overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0">
        <div className="absolute w-[350px] h-[350px] bg-blue-200/40 blur-3xl rounded-full top-[-120px] left-[-120px]" />
        <div className="absolute w-[300px] h-[300px] bg-indigo-200/40 blur-3xl rounded-full bottom-[-120px] right-[-120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-blue-600 text-sm font-semibold bg-blue-100 px-4 py-1 rounded-full">
            Industries
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
            Industries We Empower
          </h2>

          <p className="text-gray-600 mt-2 max-w-xl mx-auto">
            Tailored solutions across diverse business sectors.
          </p>
        </div>

        {/* 🔥 Horizontal Scroll */}
        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide">

          {industries.map((industry, index) => {
            const Icon = industry.icon

            return (
              <div
                key={index}
                className="
                  group min-w-[220px] h-[180px]
                  rounded-xl p-[2px]
                  bg-gradient-to-br from-[#004EC1] via-[#3B5BFF] to-[#4847E8]
                  flex-shrink-0
                  hover:-translate-y-2 transition-all duration-500
                "
              >
                {/* Inner */}
                <div className="relative w-full h-full rounded-xl overflow-hidden">

                  {/* Image */}
                  <div
                    className="
                      absolute inset-0 bg-cover bg-center
                      scale-105 group-hover:scale-110
                      transition duration-700
                    "
                    style={{ backgroundImage: `url(${industry.image})` }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 p-4 w-full">

                    {/* Icon */}
                    <div className="
                      w-8 h-8 rounded-md bg-white/20 backdrop-blur
                      flex items-center justify-center mb-2
                    ">
                      <Icon className="text-white" size={16} />
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-sm font-semibold">
                      {industry.name}
                    </h3>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}