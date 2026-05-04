'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '' },
    { label: 'Mobile Apps', href: '' },
    { label: 'Web Design', href: '' },
    { label: 'Digital Marketing', href: '' },
  ],
  Company: [
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  // Resources: [
  //   { label: 'Blog', href: '#blog' },
  //   { label: 'Case Studies', href: '#cases' },
  //   { label: 'Documentation', href: '#docs' },
  //   { label: 'FAQ', href: '#faq' },
  // ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-foreground text-white overflow-hidden">

      {/* ⭐ Star Pattern Background */}
      <div className="absolute inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      </div>

      {/* ✨ Soft gradient fade (adds depth) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">

          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-white.png"
                alt="Webingic"
                width={40}
                height={40}
                className="h-16 w-25"
              />
            </Link>

            <div className="flex gap-4">
              <a href="#" className="hover:text-primary transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-primary transition">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={`${link.label}-${index}`}>
                    <Link
                      href={link.href}
                      className="text-gray-300 hover:text-white transition text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Webingic. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
            {/* <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Cookie Policy
            </a> */}
          </div>
        </div>

      </div>
    </footer>
  )
}