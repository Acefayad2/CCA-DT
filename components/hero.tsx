"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, TrendingUp, Users, Camera } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900/50 to-slate-900 py-24 md:py-36">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl animate-pulse delay-500" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>
      
      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-2 transition-all duration-500 hover:bg-amber-500/20 hover:scale-105">
              <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-sm font-medium text-amber-200">
                Turning Awareness Into Action
              </span>
            </div>
            
            <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl text-balance">
              Secure Your Family&apos;s{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
                Financial Future
              </span>
            </h1>
            
            <p className="max-w-lg text-lg leading-relaxed text-slate-300">
              I help families and individuals build lasting wealth and protection through personalized life insurance and financial strategies. Let&apos;s create a plan that works for you.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 group border-0"
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
                className="border-white/20 bg-transparent text-white hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Link href="#services">Explore Services</Link>
              </Button>
            </div>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Shield className="h-5 w-5 text-purple-400" />
                <span className="text-sm text-slate-400">Licensed Agent</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm text-slate-400">100+ Families Served</span>
              </div>
              <div className="flex items-center gap-2 transition-all duration-300 hover:scale-105">
                <TrendingUp className="h-5 w-5 text-amber-400" />
                <span className="text-sm text-slate-400">Wealth Building</span>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-72 w-72 rounded-full border border-purple-500/20 animate-[spin_20s_linear_infinite]" />
              <div className="absolute h-80 w-80 rounded-full border border-blue-500/10 animate-[spin_25s_linear_infinite_reverse]" />
              <div className="absolute h-64 w-64 rounded-full border border-amber-500/10 animate-[spin_30s_linear_infinite]" />
            </div>
            
            {/* Profile card with image placeholder */}
            <div className="relative z-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
              {/* Image placeholder */}
              <div className="relative mx-auto mb-6 h-48 w-48 overflow-hidden rounded-2xl border-4 border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-blue-500/20 transition-all duration-300 hover:border-purple-500/50">
                {/* Placeholder state - replace src with actual image */}
                <div className="flex h-full w-full flex-col items-center justify-center text-white/40">
                  <Camera className="h-12 w-12 mb-2" />
                  <span className="text-xs text-center px-4">Add Devyn&apos;s photo here</span>
                </div>
                {/* Uncomment and update src when you have the image:
                <Image
                  src="/devyn-thompson.jpg"
                  alt="Devyn Thompson - Financial Advisor"
                  fill
                  className="object-cover"
                />
                */}
              </div>
              
              <div className="text-center">
                <h3 className="font-serif text-2xl font-semibold text-white">Devyn Thompson</h3>
                <p className="mt-1 text-sm text-slate-400">Financial Advisor | CCA</p>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="rounded-xl bg-white/5 p-4 text-center transition-all duration-300 hover:bg-white/10">
                  <p className="text-sm text-slate-400">Specializing in</p>
                  <p className="font-medium text-white">Life Insurance & Wealth Building</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/5 p-4 text-center transition-all duration-300 hover:bg-white/10">
                    <p className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">100+</p>
                    <p className="text-xs text-slate-500">Clients Served</p>
                  </div>
                  <div className="rounded-xl bg-white/5 p-4 text-center transition-all duration-300 hover:bg-white/10">
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">5+</p>
                    <p className="text-xs text-slate-500">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
