"use client"

import { CheckCircle } from "lucide-react"
import Image from "next/image"

const values = [
  {
    title: "Community First",
    description: "She believes in giving back and ensuring every family has access to sound financial guidance.",
  },
  {
    title: "Transparency",
    description: "No hidden fees or confusing jargon. She explains everything in plain language.",
  },
  {
    title: "Personalized Approach",
    description: "Your financial plan should be as unique as your family. One size never fits all.",
  },
  {
    title: "Long-term Partnership",
    description: "She's here for the long haul, adjusting your plan as your life evolves.",
  },
]

export function About() {
  return (
    <section id="about" className="bg-muted py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-6">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-secondary">
              About Devyn
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
              Devyn Thompson
            </h2>
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4 text-muted-foreground leading-relaxed text-sm sm:text-base">
              <p>
                Devyn started CCA (Consistent, Compassionate Activists) with a simple mission: to help families in our community build and protect their wealth through smart financial planning—and to help improve education in America.
              </p>
              <p>
                After years of seeing hardworking people struggle with confusing insurance policies and missed opportunities for wealth building, she knew there had to be a better way. That&apos;s why she focuses on education first—helping you understand your options so you can make informed decisions. We also offer financial literacy classes and actively partner with teachers to bring financial education into schools.
              </p>
              <p>
                Whether you&apos;re looking to protect your family with life insurance, plan for retirement with an annuity, build cash value through an IUL, or bring financial literacy to your school or community, Devyn is here to guide you every step of the way.
              </p>
            </div>

            <div className="mt-6 sm:mt-8 flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-base sm:text-lg">
                DT
              </div>
              <div>
                <p className="font-semibold text-sm sm:text-base text-foreground">Devyn Thompson</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Licensed Financial Advisor | CCA</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-4 sm:space-y-6">
            {/* Devyn professional headshot */}
            <div className="relative mx-auto h-80 sm:h-96 md:h-[28rem] lg:h-[32rem] w-full max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl border-2 sm:border-4 border-secondary/20 bg-card shadow-2xl transition-all duration-500 hover:border-secondary/40 hover:shadow-secondary/20">
              <div className="absolute left-1/2 top-1/2 h-[175%] w-[175%] -translate-x-1/2 -translate-y-1/2">
                <Image
                  src="/Devyn Thompson Headshot.png"
                  alt="Devyn Thompson - Licensed Financial Advisor"
                  fill
                  className="object-contain"
                  sizes="36rem"
                />
              </div>
            </div>
            
            <div className="space-y-2 sm:space-y-3">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-xl border border-border bg-card p-4 sm:p-5 transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-secondary transition-colors duration-300 group-hover:text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-sm sm:text-base text-card-foreground">{value.title}</h3>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
