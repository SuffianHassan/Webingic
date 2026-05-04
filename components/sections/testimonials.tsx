'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Jennifer Walsh',
    company: 'TechCorp Solutions',
    text: 'Webingic transformed our entire digital presence. Their attention to detail and innovative approach exceeded all our expectations.',
    rating: 5,
  },
  {
    name: 'Robert Chen',
    company: 'GlobalTrade Inc',
    text: 'Working with Webingic was a game-changer for our business. They delivered on time and within budget while maintaining exceptional quality.',
    rating: 5,
  },
  {
    name: 'Maria Garcia',
    company: 'InnovateLabs',
    text: 'The team at Webingic is absolutely professional and talented. They understood our vision and executed it flawlessly.',
    rating: 5,
  },
  {
    name: 'David Kim',
    company: 'CloudFirst Systems',
    text: 'Outstanding service from start to finish. Webingic is now our go-to partner for all digital solutions.',
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm px-4 py-2 bg-primary/10 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Real feedback from real clients who've experienced our exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:shadow-lg transition-all duration-300 group"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Client Info */}
              <div>
                <p className="font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-muted-foreground text-sm">
                  {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
