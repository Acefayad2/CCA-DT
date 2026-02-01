"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Users, GraduationCap } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 py-12 sm:py-16 md:py-24 lg:py-36">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse delay-500" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="space-y-6 sm:space-y-8 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1.5 sm:px-4 sm:py-2 transition-all duration-500 hover:bg-amber-500/20 hover:scale-105">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-medium text-amber-200">
                Turning Awareness Into Action
              </span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white text-balance">
              Secure Your Family&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>
            
            <p className="max-w-lg mx-auto text-base sm:text-lg leading-relaxed text-white">
              I help families and individuals build lasting wealth and protection through personalized life insurance and financial strategies. Let&apos;s create a plan that works for you.
            </p>

            <div className="flex flex-col gap-3 sm:gap-4 sm:flex-row justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group border-0 w-full sm:w-auto"
              >
                <Link href="#contact">
                  Get Your Free Breakdown
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 bg-transparent text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400" />
                <span className="text-xs sm:text-sm text-white">Licensed Agent</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400" />
                <span className="text-xs sm:text-sm text-white">100+ Families Served</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-amber-400" />
                <span className="text-xs sm:text-sm text-white">Wealth Building</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-400" />
                <span className="text-xs sm:text-sm text-white">Financial Literacy &amp; Teachers</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
