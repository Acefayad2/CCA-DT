import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { JoinTeam } from "@/components/join-team"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <About />
      <Process />
      <JoinTeam />
      <Contact />
      <Footer />
    </main>
  )
}
