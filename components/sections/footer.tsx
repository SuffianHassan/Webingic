'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Services: [
    { label: 'E-Commerce', href: '/services/e-commerce' },
    { label: 'Logo Design', href: '/services/logo-design' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
  ],
  Solutions: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-app' },
    { label: 'Web Design', href: '/services/web-design' },
  ],
  Company: [
    { label: 'Services', href: '/#services' },
    { label: 'About Us', href: '/about' },
    { label: 'Testimonials', href: '/#testimonials' },
    { label: 'Contact', href: '/#contact' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative text-white overflow-hidden bg-[#050816]">

      {/* 🌌 Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-120px] left-[-120px] w-[420px] h-[420px] bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[-120px] right-[-120px] w-[420px] h-[420px] bg-secondary/20 rounded-full blur-3xl"></div>
      </div>

      {/* ⭐ Grid Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:30px_30px]"></div>
      </div>

      {/* 🌫 Fade Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-8 py-16">

        {/* TOP SECTION */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">

          {/* BRAND */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-center md:items-start text-center md:text-left space-y-5">

            <Link href="/" className="flex justify-center md:justify-start">
              <Image
                src="/logo-white.png"
                alt="Webingic"
                width={120}
                height={40}
                className="h-16 w-auto"
              />
            </Link>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4">
              {[Linkedin, Twitter, Facebook, Instagram].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-primary hover:border-primary transition hover:shadow-[0_0_15px_rgba(79,70,229,0.6)]"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <div
              key={category}
              className={index < 2 ? 'col-span-1' : 'col-span-2 md:col-span-1'}
            >
              <h4 className="font-semibold mb-4 text-white">{category}</h4>

              <ul className="space-y-2">
                {links.map((link, i) => (
                  <li key={i}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white text-sm relative group transition"
                    >
                      {link.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM SECTION */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

          <p className="text-gray-500 text-sm">
            © {currentYear} Webingic. All rights reserved.
          </p>

          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map((item, i) => (
              <Link
                key={i}
                href="link.href"
                className="text-gray-400 hover:text-white text-sm relative group transition"
              >
                {item}
                <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </footer>
  )
}