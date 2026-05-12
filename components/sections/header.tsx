// 'use client'

// import Link from 'next/link'
// import Image from 'next/image'
// import { useState } from 'react'
// import { Menu, X } from 'lucide-react'

// export function Header() {
//   const [isOpen, setIsOpen] = useState(false)

//   const services = [
//     { label: 'Web Development', href: '/services/web-development' },
//     { label: 'Mobile App Development', href: '/services/mobile-app' },
//     { label: 'Web Design', href: '/services/web-design' },
//     { label: 'Digital Marketing', href: '/services/digital-marketing' },
//     { label: 'E-Commerce Development', href: '/services/e-commerce' },
//     { label: 'Logo Design', href: '/services/logo-design' },
//   ]

//   return (
//     <header className="sticky top-0 z-50 bg-background border-b border-border">
//       <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
//         {/* Logo */}
//         <Link href="/" className="flex items-center gap-2">
//           <Image
//             src="/logo-black.png"
//             alt="Webingic"
//             width={40}
//             height={40}
//             className="h-14 w-22"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center gap-18">
//           <Link href="/#services" className="text-foreground font-semibold hover:text-primary transition">
//             Services
//           </Link>
//           <div className="group relative">

//             <button className="text-foreground font-semibold hover:text-primary transition">
//               Solutions
//             </button>

//             <div className="absolute left-0 mt-0 w-48 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
//               {services.map(service => (
//                 <Link
//                   key={service.label}
//                   href={service.href}
//                   className="block px-4 py-2 text-foreground hover:bg-secondary/10 first:rounded-t-lg last:rounded-b-lg"
//                 >
//                   {service.label}
//                 </Link>
//               ))}
//             </div>
//           </div>
//           <Link href="/about" className="text-foreground font-semibold hover:text-primary transition">
//             About
//           </Link>
//           <Link href="/#contact" className="text-foreground font-semibold hover:text-primary transition">
//             Contact
//           </Link>
//         </div>

//         {/* CTA Button */}
//         <Link href="/#contact" >
//           <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-blue-700 transition">
//             Get Started
//           </button>
//         </Link>

//         {/* Mobile Menu Button */}
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="md:hidden text-foreground"
//         >
//           {isOpen ? <X size={24} /> : <Menu size={24} />}
//         </button>
//       </nav>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden bg-card border-t border-border">
//           <div className="px-4 py-4 space-y-3">
//             <Link href="/#services" className="block text-foreground hover:text-primary">
//               Services
//             </Link>
//             <details className="cursor-pointer">
//               <summary className="text-foreground hover:text-primary">Solutions</summary>
//               <div className="pl-4 mt-2 space-y-2">
//                 {services.map(service => (
//                   <Link
//                     key={service.href}
//                     href={service.href}
//                     className="block text-sm text-muted-foreground hover:text-primary"
//                   >
//                     {service.label}
//                   </Link>
//                 ))}
//               </div>
//             </details>
//             <Link href="/about" className="block text-foreground hover:text-primary">
//               About
//             </Link>
//             <Link href="#contact" className="block text-foreground hover:text-primary">
//               Contact
//             </Link>
//             <Link href="/#contact" className="block text-foreground hover:text-primary">
//               Get Started
//             </Link>
//           </div>
//         </div>
//       )}
//     </header>
//   )
// }

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
          <Link href="/#services" className="font-semibold hover:text-primary">
            Services
          </Link>

          <div className="group relative">
            <button className="font-semibold hover:text-primary">
              Solutions
            </button>

            <div className="absolute left-0 mt-0 w-48 bg-card rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {services.map(service => (
                <Link
                  key={service.label}
                  href={service.href}
                  className="block px-4 py-2 hover:bg-secondary/10"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className="font-semibold hover:text-primary">
            About
          </Link>

          <Link href="/#contact" className="font-semibold hover:text-primary">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <Link href="/#contact">
          <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </Link>

        {/* Mobile Button */}
        <button onClick={() => setIsOpen(true)} className="md:hidden">
          <Menu size={26} />
        </button>
      </nav>

      {/* ================= MOBILE DRAWER ================= */}
      <div
        className={`fixed inset-0 z-50 md:hidden transition-all duration-300 ${
          isOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm bg-white/80 backdrop-blur-1xl border-l border-gray-200/20 shadow-2xl transform transition-transform duration-300 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-5 py-5 border-b">
            <span className="font-bold text-lg">Menu</span>
            <button onClick={() => setIsOpen(false)}>
              <X size={22} />
            </button>
          </div>

          {/* Content */}
          <div className="p-5 space-y-6">

            {/* Main Links */}
            <div className="space-y-4">
              <Link
                href="/#services"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold"
              >
                Services
              </Link>

              <Link
                href="/about"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold"
              >
                About
              </Link>

              <Link
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="block text-lg font-semibold"
              >
                Contact
              </Link>
            </div>

            {/* Solutions Section */}
            <div>
              <p className="text-sm text-gray-500 mb-3 uppercase tracking-wider">
                Solutions
              </p>

              <div className="space-y-3">
                {services.map(service => (
                  <Link
                    key={service.href}
                    href={service.href}
                    onClick={() => setIsOpen(false)}
                    className="block text-sm text-gray-700 hover:text-primary transition"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link href="/#contact" onClick={() => setIsOpen(false)}>
              <button className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-semibold hover:bg-blue-700 transition">
                Get Started
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}