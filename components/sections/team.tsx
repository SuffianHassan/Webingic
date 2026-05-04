'use client'

import { Linkedin, Twitter } from 'lucide-react'

const team = [
  {
    name: 'Sarah Anderson',
    role: 'CEO & Founder',
    bio: 'Visionary leader with 15 years in digital transformation',
  },
  {
    name: 'Marcus Chen',
    role: 'CTO & Lead Developer',
    bio: 'Expert in scalable architecture and cloud solutions',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Head of Design',
    bio: 'Creative designer focused on user-centered experiences',
  },
  {
    name: 'David Thompson',
    role: 'Project Manager',
    bio: 'Ensures seamless delivery and client satisfaction',
  },
  {
    name: 'Lisa Park',
    role: 'Marketing Strategist',
    bio: 'Data-driven marketer maximizing digital ROI',
  },
  {
    name: 'Alex Kumar',
    role: 'Senior Developer',
    bio: 'Full-stack expert in modern web technologies',
  },
]

export function Team() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm px-4 py-2 bg-primary/10 rounded-full inline-block">
            Our Team
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4">
            Meet the Experts
          </h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">
            Talented professionals dedicated to bringing your vision to life.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              {/* Avatar Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <div className="w-24 h-24 bg-primary/30 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary font-semibold text-sm mt-1">
                  {member.role}
                </p>
                <p className="text-muted-foreground text-sm mt-3">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition"
                  >
                    <Twitter size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
