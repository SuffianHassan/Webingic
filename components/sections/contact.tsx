'use client'

import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-gradient-to-b from-[#eef2ff] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm px-4 py-2 bg-white rounded-full shadow-sm border">
            Get In Touch
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-4">
            Let’s Build Something Great
          </h2>

          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We’d love to hear about your project. Reach out and let’s create something impactful together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="space-y-6">

            {/* Card */}
            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Mail className="text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Email</p>
                <p className="text-gray-600">hello@webingic.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Phone className="text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Phone</p>
                <p className="text-gray-600">+14092695242</p>
              </div>
            </div>

            {/* <div className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-sm border hover:shadow-md transition">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <MapPin className="text-purple-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p className="text-gray-600">Karachi, Pakistan</p>
              </div>
            </div> */}

          </div>

          {/* RIGHT SIDE - IMAGE + CTA */}
          <div className="relative">

            {/* Main Image */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/contact.avif"
                alt="team"
                className="w-full h-[420px] object-cover"
              />
            </div>

            {/* Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#4346E6]/60 backdrop-blur rounded-2xl p-6 shadow-lg">
              <p className="text-white font-semibold mb-3">
                Have a project in mind?
              </p>

              <button className="w-full bg-white py-3 rounded-lg font-semibold hover:bg-blue-500 hover:text-white transition">
                Start a Conversation
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}