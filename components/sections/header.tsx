'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const services = [
    { label: 'Web Development', href: '/services/web-development' },
    { label: 'Mobile App Development', href: '/services/mobile-app' },
    { label: 'Web Design', href: '/services/web-design' },
    { label: 'Digital Marketing', href: '/services/digital-marketing' },
    { label: 'E-Commerce Development', href: '/services/e-commerce' },
    { label: 'Logo Design', href: '/services/logo-design' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo-black.png"
            alt="Webingic"
            width={40}
            height={40}
            className="h-14 w-22"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-18">
          <Link href="#services" className="text-foreground font-semibold hover:text-primary transition">
            Services
          </Link>
          <div className="group relative">

            <button className="text-foreground font-semibold hover:text-primary transition">
              Solutions
            </button>

            <div className="absolute left-0 mt-0 w-48 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {services.map(service => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="block px-4 py-2 text-foreground hover:bg-secondary/10 first:rounded-t-lg last:rounded-b-lg"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/about" className="text-foreground font-semibold hover:text-primary transition">
            About
          </Link>
          <Link href="#contact" className="text-foreground font-semibold hover:text-primary transition">
            Contact
          </Link>
        </div>

        {/* CTA Button */}
        <Link href="#contact" >
          <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <div className="px-4 py-4 space-y-3">
            <Link href="#services" className="block text-foreground hover:text-primary">
              Services
            </Link>
            <details className="cursor-pointer">
              <summary className="text-foreground hover:text-primary">Solutions</summary>
              <div className="pl-4 mt-2 space-y-2">
                {services.map(service => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block text-sm text-muted-foreground hover:text-primary"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="#about" className="block text-foreground hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="block text-foreground hover:text-primary">
              Contact
            </Link>
            <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-blue-700 transition mt-4">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
