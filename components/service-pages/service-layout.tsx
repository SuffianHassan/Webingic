'use client'

import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { Contact } from '@/components/sections/contact'
import { CTA } from '@/components/sections/cta'
import React from 'react'

interface ServiceLayoutProps {
  children: React.ReactNode
}

export function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <>
      <Header />
      {children}
      <CTA />
      <Contact />
      <Footer />
    </>
  )
}
