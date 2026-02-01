import { SITE_KNOWLEDGE } from "@/lib/site-knowledge"

const CONTACT_BLOCK = `
**Contact CCA**
- **Phone:** (301) 266-6365
- **Email:** devyn@ccafinancial.com
- Serving: Local Community & Beyond
- Free consultation; Devyn will get back to you within 24 hours.
- Reach out via the contact form on the site to get started.
`.trim()

// Keyword groups that map to relevant knowledge sections
const KEYWORD_MAP: Record<string, string[]> = {
  contact: ["contact", "phone", "email", "call", "reach", "number", "how to get in touch", "where are you", "address", "speak to", "301", "devyn@"],
  services: ["services", "offer", "products", "iul", "annuity", "annuities", "whole life", "term life", "insurance", "life insurance", "what do you offer", "offerings"],
  about: ["about", "devyn", "who is", "founder", "mission", "values", "cca stands for", "consistent compassionate", "tell me about", "what is cca"],
  financial_literacy: ["financial literacy", "classes", "teachers", "education", "school", "teach", "workshop", "learn about money", "educator", "partner with teachers"],
  join_team: ["join", "career", "agent", "job", "work for", "team", "opportunity", "hire", "apply", "employment"],
  process: ["process", "how it works", "steps", "get started", "consultation", "breakdown", "free breakdown", "first step", "how do i start"],
  testimonials: ["testimonials", "reviews", "clients", "experiences", "what people say", "feedback"],
  pricing: ["price", "cost", "pricing", "how much", "fee", "expensive"],
}

// Full knowledge for general/broad questions
const fullKnowledge = SITE_KNOWLEDGE

function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ")
}

function getRelevantSection(query: string): string | null {
  const q = normalize(query)

  // Greetings - return a friendly intro
  if (/^(hi|hello|hey|good morning|good afternoon|good evening|howdy)[\s!.]*$/i.test(q) || q === "hi" || q === "hello") {
    return "Hi! I'm the CCA assistant. I can help with questions about our services (IUL, annuities, whole life, term life, financial literacy classes), teacher partnerships, contact info, or how to get started. What would you like to know?"
  }

  // Contact - high priority for direct contact questions
  if (KEYWORD_MAP.contact.some((k) => q.includes(k))) {
    return CONTACT_BLOCK
  }

  // Pricing - we don't have specific pricing, direct to contact
  if (KEYWORD_MAP.pricing.some((k) => q.includes(k))) {
    return `We don't list specific pricing on the site—every situation is different. For a personalized quote or breakdown, please contact Devyn for a free consultation:\n\n${CONTACT_BLOCK}`
  }

  // Services
  if (KEYWORD_MAP.services.some((k) => q.includes(k))) {
    const start = fullKnowledge.indexOf("## Services")
    const end = fullKnowledge.indexOf("## How It Works") || fullKnowledge.length
    return fullKnowledge.slice(start, end).trim()
  }

  // Financial literacy & teachers
  if (KEYWORD_MAP.financial_literacy.some((k) => q.includes(k))) {
    const literacyStart = fullKnowledge.indexOf("5. **Financial Literacy Classes**")
    const literacyEnd = fullKnowledge.indexOf("### Free Financial Breakdowns")
    const literacySection = fullKnowledge.slice(literacyStart, literacyEnd).trim()
    return `${literacySection}\n\n${CONTACT_BLOCK}`
  }

  // About
  if (KEYWORD_MAP.about.some((k) => q.includes(k))) {
    const start = fullKnowledge.indexOf("## About Devyn Thompson")
    const end = fullKnowledge.indexOf("## Services")
    return fullKnowledge.slice(start, end).trim()
  }

  // Join the team
  if (KEYWORD_MAP.join_team.some((k) => q.includes(k))) {
    const start = fullKnowledge.indexOf("## Join the Team")
    const end = fullKnowledge.indexOf("## Contact")
    return fullKnowledge.slice(start, end).trim()
  }

  // Process / how it works
  if (KEYWORD_MAP.process.some((k) => q.includes(k))) {
    const start = fullKnowledge.indexOf("## How It Works")
    const end = fullKnowledge.indexOf("## Testimonials")
    return fullKnowledge.slice(start, end).trim()
  }

  // Testimonials
  if (KEYWORD_MAP.testimonials.some((k) => q.includes(k))) {
    const start = fullKnowledge.indexOf("## Testimonials")
    const end = fullKnowledge.indexOf("## Join the Team")
    return fullKnowledge.slice(start, end).trim()
  }

  return null
}

function buildResponse(query: string): string {
  const section = getRelevantSection(query)

  if (section) {
    return section
  }

  // General fallback - return a summary and suggest contact
  const greeting = "Here's what I can help you with based on our site:\n\n"
  const summary = [
    "**CCA (Consistent, Compassionate Activists)** helps families build and protect wealth through life insurance, annuities, and financial planning.",
    "**Services:** IUL, Annuities, Whole Life, Term Life, and Financial Literacy Classes.",
    "**Contact:** Phone (301) 266-6365 | Email devyn@ccafinancial.com",
  ].join("\n\n")
  const footer = "\n\nIf you have a specific question, try asking about our services, contact info, how to get started, or teacher partnerships. Or reach out directly—we offer free consultations!"

  return greeting + summary + footer
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const messages = body.messages as Array<{ role: string; content?: string; parts?: Array<{ type: string; text?: string }> }>
    const lastMessage = messages?.filter((m) => m.role === "user").pop()
    const text = lastMessage?.content ?? lastMessage?.parts?.find((p) => p.type === "text")?.text ?? ""

    if (!text.trim()) {
      return Response.json({ error: "No message provided" }, { status: 400 })
    }

    const response = buildResponse(text)

    return Response.json({ message: response })
  } catch (err) {
    console.error("Chat API error:", err)
    return Response.json(
      { error: "Something went wrong. Please try again or contact Devyn at (301) 266-6365." },
      { status: 500 }
    )
  }
}
