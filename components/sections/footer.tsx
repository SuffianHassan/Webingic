'use client'

import Link from 'next/link'
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  Services: [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile Apps', href: '/services/mobile-app' },
    { label: 'Web Design', href: '/services/web-design' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  Resources: [
    { label: 'Blog', href: '#blog' },
    { label: 'Case Studies', href: '#cases' },
    { label: 'Documentation', href: '#docs' },
    { label: 'FAQ', href: '#faq' },
  ],
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-4">
            {/* <h3 className="text-2xl font-bold">Webingic</h3>
            <p className="text-gray-300 text-sm">
              Building web apps. Empowering businesses.
            </p> */}
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo-white.png"
                alt="Webingic"
                width={40}
                height={40}
                className="h-16 w-25"
              />
              {/* <span className="font-bold text-xl text-foreground hidden sm:inline">Webingic</span> */}
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
                {links.map((link) => (
                  <li key={link.href}>
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

        {/* Bottom Section */}
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
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
