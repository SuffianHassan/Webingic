'use client'

export function ClientLogos() {
  const companies = [
    'TechCorp',
    'GlobalTrade',
    'InnovateLabs',
    'CloudFirst',
    'DataSync',
    'FutureVision',
    'SmartBuild',
    'DigitalHub',
  ]

  // Duplicate array for seamless loop
  const displayCompanies = [...companies, ...companies]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-2">
            Trusted by Leading Companies
          </h3>
          <p className="text-muted-foreground">
            Join hundreds of businesses we've helped succeed
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {displayCompanies.map((company, index) => (
              <div
                key={index}
                className="flex-shrink-0 h-20 w-40 bg-card rounded-lg border border-border flex items-center justify-center hover:shadow-md transition"
              >
                <span className="text-foreground font-semibold text-center px-4">
                  {company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Add to globals.css for animation */}
        <style>{`
          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 30s linear infinite;
          }

          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
      </div>
    </section>
  )
}
