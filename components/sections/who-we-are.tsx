'use client'

import { CheckCircle2 } from 'lucide-react'

const highlights = [
  'Award-winning design and development team',
  'Cutting-edge technology stack',
  'Client-centric approach to every project',
  'Proven track record of success',
  'Transparent communication always',
  'On-time and on-budget delivery',
]

export function WhoWeAre() {
  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-primary font-semibold text-sm px-4 py-2 bg-primary/10 rounded-full inline-block">
                About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground">
                Webingic is a forward-thinking digital solutions company dedicated to transforming businesses through innovative web and mobile technologies. With a passion for excellence and a commitment to our clients' success, we've been building digital experiences that matter since day one.
              </p>
            </div>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden md:block">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-primary/20 to-transparent rounded-2xl p-8 flex items-end justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-muted-foreground text-sm mt-2">Projects Completed</p>
                </div>
              </div>
              <div className="bg-gradient-to-br from-secondary/20 to-transparent rounded-2xl p-8 flex items-center justify-center min-h-[300px]">
                <div className="text-center">
                  <p className="text-3xl font-bold text-secondary">98%</p>
                  <p className="text-muted-foreground text-sm mt-2">Client Satisfaction</p>
                </div>
              </div>
              <div className="col-span-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
                <p className="text-foreground font-semibold text-center">
                  Building the future of digital innovation, one project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
