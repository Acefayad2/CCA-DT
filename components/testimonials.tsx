"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Donovan Piggee",
    role: "PHP Agency Event Attendee",
    content: "I'd like to thank Devyn Thompson for inviting me and Joshua Hibbert to a PHP agency (People Help People) Financial networking event and workshop. It was a great opportunity to expand our knowledge about financial literacy and life skills within the finance department. It was a pleasure being taught by Chris Hart and Simisola Ajimatanrareje, who led an engaging and insightful presentation. It was great being able to connect with professionals, I'm excited to learn more!",
    rating: 5,
    accent: "purple",
  },
  {
    id: 2,
    name: "Client Name",
    role: "Business Owner",
    content: "Devyn helped us understand our options and find the perfect coverage for our family. Her expertise and patience made all the difference.",
    rating: 5,
    accent: "blue",
  },
  {
    id: 3,
    name: "Client Name",
    role: "Parent & Professional",
    content: "Working with Devyn was a game-changer. She took the time to explain everything clearly and helped us secure our children's future.",
    rating: 5,
    accent: "yellow",
  },
]

function TestimonialCard({
  testimonial,
}: {
  testimonial: (typeof testimonials)[0]
}) {
  return (
    <Card
      className={`group relative flex h-[280px] w-[280px] shrink-0 flex-col overflow-hidden border-border bg-card transition-all duration-500 hover:border-primary/30 hover:shadow-xl hover:-translate-y-1`}
    >
      <div
        className={`absolute top-0 left-0 right-0 h-1 ${
          testimonial.accent === "purple"
            ? "bg-gradient-to-r from-purple-500 to-purple-600"
            : testimonial.accent === "blue"
              ? "bg-gradient-to-r from-blue-500 to-blue-600"
              : "bg-gradient-to-r from-amber-500 to-amber-600"
        }`}
      />
      <div
        className={`absolute -right-2 -top-2 transition-all duration-500 group-hover:scale-110 ${
          testimonial.accent === "purple"
            ? "text-purple-500/10 group-hover:text-purple-500/20"
            : testimonial.accent === "blue"
              ? "text-blue-500/10 group-hover:text-blue-500/20"
              : "text-amber-500/10 group-hover:text-amber-500/20"
        }`}
      >
        <Quote className="h-16 w-16" />
      </div>
      <CardContent className="relative flex flex-1 flex-col overflow-hidden p-4">
        <div className="mb-2 flex gap-0.5">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star
              key={i}
              className="h-3.5 w-3.5 fill-secondary text-secondary"
            />
          ))}
        </div>
        <p className="line-clamp-6 flex-1 text-xs text-muted-foreground leading-relaxed italic">
          &ldquo;{testimonial.content}&rdquo;
        </p>
        <div className="mt-3 shrink-0">
          <p className="font-semibold text-xs text-foreground">
            {testimonial.name}
          </p>
          <p className="text-[10px] text-muted-foreground">
            {testimonial.role}
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

export function Testimonials() {
  const duplicated = [...testimonials, ...testimonials]

  return (
    <section
      id="testimonials"
      className="relative bg-background py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-20 right-10 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 md:px-6">
        <div className="mb-12 sm:mb-16 text-center">
          <p className="mb-3 text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </p>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground text-balance">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 sm:mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed px-4">
            Hear from families and individuals who have transformed their
            financial future with CCA (Consistent, Compassionate Activists).
          </p>
        </div>

        <div className="relative -mx-4 sm:-mx-6 md:-mx-6 overflow-hidden">
          <div className="flex w-max gap-4 [animation:slide-left_30s_linear_infinite]">
            {duplicated.map((testimonial, i) => (
              <TestimonialCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center px-4">
          <p className="text-sm sm:text-base text-muted-foreground">
            Ready to share your story?{" "}
            <a
              href="#contact"
              className="font-semibold text-primary underline-offset-4 hover:underline transition-colors duration-300"
            >
              Get started today
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
