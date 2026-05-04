'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Walsh',
    company: 'TechCorp Solutions',
    text: 'Webingic transformed our entire digital presence. Their attention to detail exceeded expectations.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    company: 'GlobalTrade Inc',
    text: 'Delivered on time and within budget. Truly professional and reliable team.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    company: 'InnovateLabs',
    text: 'They understood our vision and executed it flawlessly.',
    rating: 5,
  },
  {
    name: 'David Kim',
    company: 'CloudFirst Systems',
    text: 'Outstanding service from start to finish. Highly recommended.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 bg-gradient-to-b from-[#0360df]/70 via-white to-[#5435f6]/50">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm px-4 py-2 bg-white rounded-full shadow-sm border">
            Testimonials
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            What Our Clients Say
          </h2>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Real feedback from clients who trusted us with their digital transformation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >

              {/* stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* text */}
              <p className="text-gray-700 mb-6 italic leading-relaxed">
                “{t.text}”
              </p>

              {/* user */}
              <div className="flex items-center gap-3">

                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                  {t.name.split(' ').map(n => n[0]).join('')}
                </div>

                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.company}</p>
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  )
}