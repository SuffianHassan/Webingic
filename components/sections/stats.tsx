'use client'

import { useEffect, useRef, useState } from 'react'

const stats = [
  { value: 500, label: 'Projects Completed', suffix: '+' },
  { value: 98, label: 'Client Satisfaction', suffix: '%' },
  { value: 50, label: 'Team Members', suffix: '+' },
  { value: 12, label: 'Years Experience', suffix: '+' },
]

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      setCount(Math.floor(progress * target))

      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  return <span ref={ref}>{count}</span>
}

export function Stats() {
  return (
    <section className="py-14 md:py-20 relative">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-blue-600 text-sm font-semibold bg-blue-100 px-4 py-1 rounded-full">
            Impact
          </span>
          <h2 className="text-3xl mt-2 md:text-4xl font-bold">
            Our Impact in Numbers
          </h2>
          <p className="text-muted-foreground mt-2 text-sm md:text-base">
            Real results that reflect our dedication and expertise.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="
                group relative p-6 rounded-2xl 
                border border-white/10 
                bg-white/5 backdrop-blur-xl
                shadow-[0_0_20px_rgba(0,0,0,0.1)]
                hover:shadow-[0_0_30px_rgba(59,130,246,0.25)]
                transition-all duration-500
                hover:-translate-y-2
              "
            >
              {/* Glow Effect */}
              <div className="
                absolute inset-0 rounded-2xl opacity-0 
                group-hover:opacity-100 
                transition duration-500
                bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10
              " />

              {/* Content */}
              <div className="relative z-10 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary">
                  <CountUp target={stat.value} />
                  <span>{stat.suffix}</span>
                </div>

                <p className="text-sm md:text-base text-muted-foreground mt-2">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}