'use client'

export function ClientLogos() {
  const tech = [
    { name: 'SQL Server', logo: '/icons/sql.jpg' },
    { name: 'ASP.NET', logo: '/icons/asp.png' },
    { name: 'JavaScript', logo: '/icons/js.png' },
    { name: 'TypeScript', logo: '/icons/typescript.png' },
    { name: 'React', logo: '/icons/react.png' },
    { name: 'Node JS', logo: '/icons/nodejs.png' },
    { name: 'Next JS', logo: '/icons/nextjs.png' },
    { name: 'Firebase', logo: '/icons/firebase.png' },
    { name: 'HTML', logo: '/icons/html.png' },
    { name: 'CSS', logo: '/icons/css.png' },
    { name: 'Tailwind', logo: '/icons/tailwind.png' },
    { name: 'Bootstrap', logo: '/icons/bootstrap.png' },
    { name: 'SHADCN', logo: '/icons/shadcn.png' },
  ]

  const displayTech = [...tech, ...tech]

  return (
    <section className="relative py-20 md:py-20 overflow-hidden bg-gradient-to-r from-black via-[#0a0a0a] to-[#EFF1FC]">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Technology Stack
          </h3>
          <p className="text-white/70 max-w-xl mx-auto">
            Modern tools we use to build fast, scalable and reliable applications.
          </p>
        </div>

        {/* Slider */}
        {/* <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
          <div className="flex gap-8 animate-marquee">

            {displayTech.map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-24 w-44 bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:scale-105 hover:shadow-xl transition"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-gray-800 text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}

          </div>
        </div> */}

        <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">

          <div className="flex w-max gap-8 animate-marquee">

            {[...tech, ...tech, ...tech].map((item, i) => (
              <div
                key={i}
                className="flex-shrink-0 h-24 w-44 bg-white rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:scale-105 hover:shadow-xl transition"
              >
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-10 w-10 object-contain"
                />
                <span className="text-gray-800 text-sm font-medium">
                  {item.name}
                </span>
              </div>
            ))}

          </div>
        </div>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}</style>
    </section>
  )
}