"use client"

import { CheckCircle, Camera } from "lucide-react"
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
    <section id="about" className="bg-muted py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">
              About Devyn
            </p>
            <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
              Meet Devyn Thompson
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Devyn started CCA with a simple mission: to help families in our community build and protect their wealth through smart financial planning.
              </p>
              <p>
                After years of seeing hardworking people struggle with confusing insurance policies and missed opportunities for wealth building, she knew there had to be a better way. That&apos;s why she focuses on education first—helping you understand your options so you can make informed decisions.
              </p>
              <p>
                Whether you&apos;re looking to protect your family with life insurance, plan for retirement with an annuity, or build cash value through an IUL, Devyn is here to guide you every step of the way.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-4 transition-all duration-300 hover:translate-x-2">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-secondary-foreground font-bold text-lg">
                DT
              </div>
              <div>
                <p className="font-semibold text-foreground">Devyn Thompson</p>
                <p className="text-sm text-muted-foreground">Licensed Financial Advisor | CCA</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            {/* Large image placeholder for About section */}
            <div className="relative mx-auto h-80 w-full max-w-md overflow-hidden rounded-3xl border-4 border-secondary/20 bg-card shadow-2xl transition-all duration-500 hover:border-secondary/40 hover:shadow-secondary/20">
              <div className="flex h-full w-full flex-col items-center justify-center text-muted-foreground">
                <Camera className="h-16 w-16 mb-3" />
                <span className="text-sm text-center px-4">Add Devyn&apos;s professional photo here</span>
              </div>
              {/* Uncomment and update src when you have the image:
              <Image
                src="/devyn-thompson-about.jpg"
                alt="Devyn Thompson"
                fill
                className="object-cover"
              />
              */}
            </div>
            
            <div className="space-y-3">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-secondary/50 hover:shadow-lg hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/10 transition-all duration-300 group-hover:bg-secondary group-hover:scale-110">
                      <CheckCircle className="h-5 w-5 text-secondary transition-colors duration-300 group-hover:text-secondary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{value.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{value.description}</p>
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
