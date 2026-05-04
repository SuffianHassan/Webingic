'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function CTA() {
  return (
    <section className="py-20 md:py-16 bg-gradient-to-r from-primary via-primary/90 to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>

        <div className="relative space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Join hundreds of companies that have already partnered with Webingic. Let&apos;s create something amazing together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/#contact">
              <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition flex items-center justify-center gap-2 group">
                Start Your Project
                <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
            </Link>
            <Link href="/#contact">
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Schedule a Consultation
              </button>
            </Link>
          </div>

          <p className="text-white/80 text-sm pt-4">
            No credit card required. Let&apos;s discuss your vision.
          </p>
        </div>
      </div>
    </section>
  )
}
