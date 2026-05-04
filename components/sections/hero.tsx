'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 text-white">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg2.png" // add your image in public folder
          alt="background"
          className="w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0262E5]/80 to-[#4E45E8]/40"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">

            {/* Badge */}
            <span className="inline-block text-white font-semibold text-sm px-6 py-2 bg-white/20 rounded-full backdrop-blur">
              Welcome to Webingic
            </span>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in-up">
              Building Web Apps <br />
              <span className="relative text-white">
                Empowering Businesses
                <span className="absolute inset-0 blur-xl bg-white/20 opacity-30"></span>
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg text-white/80 max-w-lg animate-fade-in-up delay-100">
              Transform your digital vision into reality with modern web and mobile solutions designed for growth, scalability, and performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link href="/#contact">
                <button className="bg-white text-[#000000] px-8 py-4 rounded-lg font-semibold hover:scale-105 transition flex items-center justify-center gap-2 shadow-xl">
                  Get Started
                  <ArrowRight size={20} />
                </button>
              </Link>

              {/* <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition">
                Learn More
              </button> */}
            </div>

            {/* Stats */}
            {/* <div className="flex gap-8 pt-8 animate-fade-in-up delay-300">
              <div>
                <p className="text-3xl font-bold">500+</p>
                <p className="text-white/70">Projects Delivered</p>
              </div>
              <div>
                <p className="text-3xl font-bold">98%</p>
                <p className="text-white/70">Client Satisfaction</p>
              </div>
              <div>
                <p className="text-3xl font-bold">50+</p>
                <p className="text-white/70">Team Members</p>
              </div>
            </div> */}
          </div>

          {/* Right Visual (Dashboard Mockup) */}
          <div className="relative hidden md:flex justify-center items-center">
            <div className="bg-white/10 backdrop-blur-xl p-4 rounded-2xl shadow-2xl animate-float">
              <img
                src="/dashboard.png" // add a UI/dashboard image
                alt="dashboard"
                className="rounded-xl w-full max-w-md"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}