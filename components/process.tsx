"use client"

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description: "We start with a no-obligation conversation about your goals, concerns, and current financial situation.",
    color: "purple",
  },
  {
    number: "02",
    title: "Financial Breakdown",
    description: "Devyn analyzes your finances and creates a clear breakdown showing where you are and where you could be.",
    color: "blue",
  },
  {
    number: "03",
    title: "Custom Strategy",
    description: "Together, you design a personalized plan using the right combination of insurance and financial products.",
    color: "yellow",
  },
  {
    number: "04",
    title: "Ongoing Support",
    description: "Your plan evolves with your life. She's here for annual reviews and adjustments as needed.",
    color: "purple",
  },
]

export function Process() {
  return (
    <section id="process" className="relative bg-muted/30 py-24 md:py-32 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-0 h-72 w-72 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            How It Works
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            Your Path to Financial Security
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Getting started is simple. Here&apos;s how Devyn will work with you to secure your financial future.
          </p>
        </div>

        <div className="relative">
          {/* Connection line for desktop */}
          <div className="absolute left-0 right-0 top-16 hidden h-1 lg:block">
            <div className="h-full w-full bg-gradient-to-r from-purple-500/20 via-blue-500 via-amber-500 to-purple-500/20 rounded-full" />
          </div>
          
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div 
                key={step.number} 
                className="group relative transition-all duration-500 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className={`relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 bg-background shadow-xl transition-all duration-500 group-hover:shadow-2xl ${
                    step.color === 'purple' ? 'border-purple-500/30 group-hover:border-purple-500 group-hover:shadow-purple-500/20' :
                    step.color === 'blue' ? 'border-blue-500/30 group-hover:border-blue-500 group-hover:shadow-blue-500/20' :
                    'border-amber-500/30 group-hover:border-amber-500 group-hover:shadow-amber-500/20'
                  }`}>
                    <span className={`font-serif text-4xl font-bold transition-all duration-300 group-hover:scale-110 ${
                      step.color === 'purple' ? 'text-purple-500' :
                      step.color === 'blue' ? 'text-blue-500' :
                      'text-amber-500'
                    }`}>{step.number}</span>
                  </div>
                  <h3 className="mt-8 font-serif text-xl font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`absolute left-1/2 top-32 h-10 w-1 -translate-x-1/2 lg:hidden ${
                    step.color === 'purple' ? 'bg-gradient-to-b from-purple-500 to-purple-500/20' :
                    step.color === 'blue' ? 'bg-gradient-to-b from-blue-500 to-blue-500/20' :
                    'bg-gradient-to-b from-amber-500 to-amber-500/20'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
