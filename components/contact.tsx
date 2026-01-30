"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  return (
    <section id="contact" className="relative bg-gradient-to-br from-purple-900 via-slate-900 to-slate-900 py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-1/2 right-1/4 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-6">
        <div className="grid gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-amber-400">
              Get In Touch
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white text-balance">
              Ready to Start{" "}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-amber-400 bg-clip-text text-transparent">
                Planning?
              </span>
            </h2>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-slate-400 leading-relaxed">
              Take the first step toward financial security. Reach out for a free consultation and let&apos;s discuss how Devyn can help you and your family.
            </p>

            <div className="mt-8 sm:mt-12 space-y-4 sm:space-y-6">
              <a href="tel:3012666365" className="group flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-purple-500/20 transition-all duration-300 group-hover:bg-purple-500 group-hover:scale-110">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-300">Phone</p>
                  <p className="text-base sm:text-lg font-medium text-white">(301) 266-6365</p>
                </div>
              </a>
              <div className="group flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-blue-500/20 transition-all duration-300 group-hover:bg-blue-500 group-hover:scale-110">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400 transition-colors duration-300 group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-300">Email</p>
                  <p className="text-base sm:text-lg font-medium text-white break-all">devyn@ccafinancial.com</p>
                </div>
              </div>
              <div className="group flex items-center gap-3 sm:gap-4 transition-all duration-300 hover:translate-x-2">
                <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-amber-500/20 transition-all duration-300 group-hover:bg-amber-500 group-hover:scale-110">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-amber-400 transition-colors duration-300 group-hover:text-slate-900" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-slate-300">Serving</p>
                  <p className="text-base sm:text-lg font-medium text-white">Local Community & Beyond</p>
                </div>
              </div>
            </div>

            {/* Tagline */}
            <div className="mt-8 sm:mt-12 rounded-xl sm:rounded-2xl border border-white/10 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-amber-500/10 p-4 sm:p-6 backdrop-blur-sm">
              <p className="text-center font-serif text-lg sm:text-xl font-semibold text-white">
                &ldquo;Turning Awareness Into Action&rdquo;
              </p>
              <p className="mt-2 text-center text-xs sm:text-sm text-slate-300">
                CCA — Consistent • Compassionate • Activists. Your Partner in Financial Success.
              </p>
            </div>
          </div>

          <div className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/5 p-4 sm:p-6 md:p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.07]">
            {isSubmitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center py-8 sm:py-12">
                <div className="mb-4 sm:mb-6 flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-bounce">
                  <CheckCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-semibold text-white">Message Sent!</h3>
                <p className="mt-3 text-sm sm:text-base text-slate-400 max-w-sm px-4">
                  Thank you for reaching out. Devyn will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm sm:text-base text-white">
                      First Name
                    </Label>
                    <Input
                      id="firstName"
                      placeholder="Jane"
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm sm:text-base text-white">
                      Last Name
                    </Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      required
                      className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm sm:text-base text-white">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="jane@example.com"
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm sm:text-base text-white">
                    Phone (Optional)
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(301) 266-6365"
                    className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm sm:text-base text-white">
                    How Can Devyn Help?
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your goals or questions..."
                    rows={4}
                    required
                    className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 transition-all duration-300 focus:border-purple-500 focus:ring-purple-500 text-sm sm:text-base"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/25 border-0 text-sm sm:text-base"
                  disabled={isSubmitting}
                  size="lg"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      Request Free Consultation
                      <Send className="h-4 w-4" />
                    </span>
                  )}
                </Button>
                <p className="text-center text-xs text-slate-400 px-2">
                  Your privacy is important. Your information will never be shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
