"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, TrendingUp, GraduationCap, Handshake, ArrowRight, CheckCircle2 } from "lucide-react"

const benefits = [
  {
    icon: GraduationCap,
    title: "Training & Mentorship",
    description: "Comprehensive training programs and one-on-one mentorship to help you succeed in the financial services industry.",
    color: "purple",
  },
  {
    icon: TrendingUp,
    title: "Unlimited Earning Potential",
    description: "Build your own book of business with competitive commissions and residual income opportunities.",
    color: "blue",
  },
  {
    icon: Handshake,
    title: "Supportive Community",
    description: "Join a team that celebrates your wins and supports you through challenges. We grow together.",
    color: "yellow",
  },
  {
    icon: Users,
    title: "Flexible Schedule",
    description: "Enjoy the freedom to build your career on your terms while making a real impact in people's lives.",
    color: "purple",
  },
]

const checklistItems = [
  "Self-motivated and driven",
  "Passionate about helping others",
  "Strong communication skills",
  "Eager to learn and grow",
  "No experience required",
]

export function JoinTeam() {
  return (
    <section id="join-team" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/30 to-slate-900 py-12 sm:py-16 md:py-24 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-400">
            Career Opportunity
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
            Become a{" "}
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
              CCA Agent
            </span>
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-white leading-relaxed px-4">
            Ready to turn awareness into action for yourself? Join Devyn&apos;s team and build a rewarding career helping families secure their financial futures.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-2">
          {/* Benefits Grid */}
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className={`group border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:-translate-y-1 hover:shadow-xl ${
                  benefit.color === 'purple' ? 'hover:shadow-purple-500/20' :
                  benefit.color === 'blue' ? 'hover:shadow-blue-500/20' :
                  'hover:shadow-amber-500/20'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 ${
                  benefit.color === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                  benefit.color === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                  'bg-gradient-to-r from-amber-500 to-amber-600'
                }`} />
                <CardContent className="p-4 sm:p-6">
                  <div className={`mb-3 sm:mb-4 flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                    benefit.color === 'purple' ? 'bg-purple-500/20 text-purple-400 group-hover:bg-purple-500 group-hover:text-white' :
                    benefit.color === 'blue' ? 'bg-blue-500/20 text-blue-400 group-hover:bg-blue-500 group-hover:text-white' :
                    'bg-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-900'
                  }`}>
                    <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="mb-2 text-sm sm:text-base font-semibold text-white">{benefit.title}</h3>
                  <p className="text-xs sm:text-sm text-white leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Card */}
          <div className="flex flex-col justify-center">
            <Card className="border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-500 hover:border-purple-500/30">
              <CardContent className="p-4 sm:p-6 md:p-8">
                <h3 className="mb-4 sm:mb-6 font-serif text-xl sm:text-2xl font-semibold text-white">
                  Who We&apos;re Looking For
                </h3>
                
                <ul className="mb-6 sm:mb-8 space-y-3 sm:space-y-4">
                  {checklistItems.map((item, index) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-white transition-all duration-300 hover:translate-x-1"
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0 text-amber-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3 sm:space-y-4">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 group border-0 text-sm sm:text-base"
                  >
                    <Link href="#contact">
                      Apply to Join the Team
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </Button>
                  <p className="text-center text-xs sm:text-sm text-white px-2">
                    Questions? Reach out directly to learn more about the opportunity.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
