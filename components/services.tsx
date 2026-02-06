"use client"

import { TrendingUp, Shield, Landmark, Clock, FileText, ArrowRight, GraduationCap } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: TrendingUp,
    title: "Indexed Universal Life (IUL)",
    description: "Build cash value with market-linked growth potential while maintaining protection for your loved ones. Enjoy flexibility in premiums and death benefits.",
    features: ["Tax-advantaged growth", "Flexible premiums", "Living benefits"],
    color: "purple",
  },
  {
    icon: Landmark,
    title: "Annuities",
    description: "Create a reliable income stream for retirement. Whether fixed, variable, or indexed, find the annuity that matches your goals.",
    features: ["Guaranteed income", "Tax-deferred growth", "Retirement planning"],
    color: "blue",
  },
  {
    icon: Shield,
    title: "Whole Life Insurance",
    description: "Permanent protection with guaranteed cash value accumulation. A cornerstone of generational wealth building.",
    features: ["Lifetime coverage", "Guaranteed cash value", "Dividend potential"],
    color: "yellow",
  },
  {
    icon: Clock,
    title: "Term Life Insurance",
    description: "Affordable protection for specific periods of your life. Ideal for covering mortgages, education costs, or income replacement.",
    features: ["Budget-friendly", "High coverage amounts", "Convertible options"],
    color: "purple",
  },
  {
    icon: GraduationCap,
    title: "Financial Literacy Classes",
    description: "Build money skills for life. We offer financial literacy classes for individuals, families, and educators—and partners with teachers to bring financial education into schools and help improve education in America.",
    features: ["For individuals & families", "Teacher partnerships", "School & community programs"],
    color: "blue",
  },
]

function TimelineItem({ 
  service, 
  index, 
  isVisible 
}: { 
  service: typeof services[0]
  index: number
  isVisible: boolean 
}) {
  const isLeft = index % 2 === 0

  const colorClasses = {
    purple: {
      iconBg: "bg-purple-500/20 group-hover:bg-purple-500",
      iconText: "text-purple-400 group-hover:text-white",
      dot: "bg-purple-400",
      nodeBg: "bg-purple-500",
      glow: "shadow-purple-500/50",
    },
    blue: {
      iconBg: "bg-blue-500/20 group-hover:bg-blue-500",
      iconText: "text-blue-400 group-hover:text-white",
      dot: "bg-blue-400",
      nodeBg: "bg-blue-500",
      glow: "shadow-blue-500/50",
    },
    yellow: {
      iconBg: "bg-amber-500/20 group-hover:bg-amber-500",
      iconText: "text-amber-400 group-hover:text-slate-900",
      dot: "bg-amber-400",
      nodeBg: "bg-amber-500",
      glow: "shadow-amber-500/50",
    },
  }

  const colors = colorClasses[service.color as keyof typeof colorClasses]

  return (
    <div className={`relative flex items-center justify-center md:justify-between gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      {/* Content Card */}
      <div 
        className={`w-full md:w-[calc(50%-3rem)] transition-all duration-700 ease-out ${
          isVisible 
            ? 'opacity-100 translate-x-0' 
            : `opacity-0 ${isLeft ? 'md:-translate-x-12' : 'md:translate-x-12'}`
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className={`group relative overflow-hidden rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-4 sm:p-6 md:p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl ${colors.glow}`}>
          {/* Gradient accent line */}
          <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
            service.color === 'purple' ? 'from-purple-500 via-purple-400 to-purple-600' :
            service.color === 'blue' ? 'from-blue-500 via-blue-400 to-blue-600' :
            'from-amber-500 via-amber-400 to-amber-600'
          } opacity-60 group-hover:opacity-100 transition-opacity duration-500`} />
          
          <div className="relative">
            {/* Icon */}
            <div className={`mb-4 sm:mb-5 inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 ${colors.iconBg}`}>
              <service.icon className={`h-6 w-6 sm:h-7 sm:w-7 transition-colors duration-300 ${colors.iconText}`} />
            </div>

            {/* Title & Description */}
            <h3 className="font-serif text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-4 sm:mb-5">{service.description}</p>

            {/* Features */}
            <ul className="space-y-2 sm:space-y-2.5">
              {service.features.map((feature, i) => (
                <li 
                  key={feature} 
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-slate-400"
                  style={{ transitionDelay: `${(index * 150) + (i * 50)}ms` }}
                >
                  <div className={`h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full transition-all duration-300 group-hover:scale-150 ${colors.dot}`} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Timeline Node - pulled left to sit on vertical line (line at 16px, content at 80px), centered on desktop */}
      <div className="absolute -left-16 sm:-left-16 md:left-1/2 md:-translate-x-1/2 z-10">
        <div 
          className={`relative flex h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 items-center justify-center rounded-full border-2 sm:border-3 md:border-4 border-slate-900 transition-all duration-500 shadow-lg ${
            isVisible ? 'scale-100' : 'scale-0'
          } ${colors.nodeBg} ${colors.glow}`}
          style={{ transitionDelay: `${index * 150 + 100}ms` }}
        >
          <span className={`font-bold text-sm sm:text-base md:text-lg ${service.color === 'yellow' ? 'text-slate-900' : 'text-white'}`}>{index + 1}</span>
          {/* Pulse animation */}
          <div className={`absolute inset-0 rounded-full animate-ping opacity-30 ${colors.nodeBg}`} style={{ animationDuration: '2s' }} />
        </div>
      </div>

      {/* Empty space for alternating layout on desktop */}
      <div className="hidden md:block md:w-[calc(50%-3rem)]" />
    </div>
  )
}

export function Services() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'))
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index])
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [visibleItems])

  return (
    <section id="services" className="relative bg-slate-900 py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute -bottom-40 right-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-6" ref={sectionRef}>
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-purple-400">
            Our Services
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Comprehensive Financial Protection
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed px-4">
            Every family deserves a personalized approach to financial security. Explore our range of solutions designed to protect and grow your wealth.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Timeline Line - left edge for mobile so numbers sit on it */}
          <div className="absolute left-4 sm:left-5 md:left-1/2 top-0 bottom-0 w-0.5 sm:w-1 md:-translate-x-1/2">
            {/* Background line */}
            <div className="absolute inset-0 bg-slate-700/50 rounded-full" />
            {/* Animated gradient line */}
            <div 
              className="h-full w-full bg-gradient-to-b from-purple-500 via-blue-500 to-amber-500 rounded-full transition-all duration-1000"
              style={{
                transform: `scaleY(${visibleItems.length / services.length})`,
                transformOrigin: 'top',
              }}
            />
          </div>

          {/* Timeline Items - extra left padding on mobile so numbers don't overlap text */}
          <div className="relative space-y-8 sm:space-y-12 md:space-y-20 pl-20 sm:pl-20 md:pl-0">
            {services.map((service, index) => (
              <div 
                key={service.title}
                ref={(el) => { itemRefs.current[index] = el }}
                data-index={index}
              >
                <TimelineItem 
                  service={service} 
                  index={index} 
                  isVisible={visibleItems.includes(index)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Free Financial Breakdowns CTA */}
        <div className="mt-12 sm:mt-16 md:mt-24 relative rounded-2xl sm:rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/10 via-slate-900 to-amber-500/10 p-6 sm:p-8 md:p-10 text-center transition-all duration-500 hover:border-white/20 hover:shadow-xl overflow-hidden">
          {/* Glow effects */}
          <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-amber-500/20 blur-3xl" />
          
          <div className="relative">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-amber-500/20 transition-all duration-300 hover:bg-amber-500 hover:scale-110 group">
                <FileText className="h-6 w-6 sm:h-7 sm:w-7 text-amber-400 group-hover:text-slate-900 transition-colors duration-300" />
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">Free Financial Breakdowns</h3>
            </div>
            <p className="mx-auto mt-4 max-w-xl text-slate-400 text-base sm:text-lg leading-relaxed px-4">
              Not sure where to start? We offer complimentary financial breakdowns to help you understand your current situation and explore your options.
            </p>
            <Link
              href="#contact"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group"
            >
              Request Your Free Breakdown
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
