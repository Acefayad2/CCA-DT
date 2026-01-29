"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star, Camera } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Client Name",
    role: "Business Owner",
    content: "Add your testimonial here. Devyn helped us understand our options and find the perfect coverage for our family. Her expertise and patience made all the difference.",
    rating: 5,
    accent: "purple",
  },
  {
    id: 2,
    name: "Client Name",
    role: "Parent & Professional",
    content: "Add your testimonial here. Working with Devyn was a game-changer. She took the time to explain everything clearly and helped us secure our children's future.",
    rating: 5,
    accent: "blue",
  },
  {
    id: 3,
    name: "Client Name",
    role: "Retiree",
    content: "Add your testimonial here. I was overwhelmed by retirement planning until I met Devyn. She created a personalized strategy that gave me peace of mind.",
    rating: 5,
    accent: "yellow",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            Hear from families and individuals who have transformed their financial future with CCA.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className={`group relative overflow-hidden border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-2`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1 ${
                testimonial.accent === 'purple' ? 'bg-gradient-to-r from-purple-500 to-purple-600' :
                testimonial.accent === 'blue' ? 'bg-gradient-to-r from-blue-500 to-blue-600' :
                'bg-gradient-to-r from-amber-500 to-amber-600'
              }`} />
              
              <div className={`absolute -right-4 -top-4 transition-all duration-500 group-hover:scale-110 ${
                testimonial.accent === 'purple' ? 'text-purple-500/10 group-hover:text-purple-500/20' :
                testimonial.accent === 'blue' ? 'text-blue-500/10 group-hover:text-blue-500/20' :
                'text-amber-500/10 group-hover:text-amber-500/20'
              }`}>
                <Quote className="h-24 w-24" />
              </div>
              <CardContent className="relative p-8">
                <div className="mb-6 flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-secondary text-secondary transition-all duration-300"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    />
                  ))}
                </div>
                
                <p className="mb-8 text-muted-foreground leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                
                <div className="flex items-center gap-4">
                  {/* Testimonial image placeholder */}
                  <div className={`relative h-14 w-14 overflow-hidden rounded-full border-2 bg-muted transition-all duration-300 group-hover:scale-105 ${
                    testimonial.accent === 'purple' ? 'border-purple-500/30 group-hover:border-purple-500' :
                    testimonial.accent === 'blue' ? 'border-blue-500/30 group-hover:border-blue-500' :
                    'border-amber-500/30 group-hover:border-amber-500'
                  }`}>
                    <div className="flex h-full w-full items-center justify-center text-muted-foreground/40">
                      <Camera className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Add more testimonials CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Ready to share your story?{" "}
            <a href="#contact" className="font-semibold text-primary underline-offset-4 hover:underline transition-colors duration-300">
              Get started today
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
