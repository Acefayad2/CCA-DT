import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 sm:gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <Image
                src="/logo CCA.PNG"
                alt="CCA - Consistent Compassionate Activists"
                width={72}
                height={72}
                className="h-14 w-14 sm:h-16 sm:w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white">CCA</span>
                <span className="text-xs text-slate-300">Consistent • Compassionate • Activists</span>
              </div>
            </Link>
            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              Devyn Thompson | Licensed Financial Advisor
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
            <Link
              href="#services"
              className="text-xs sm:text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-xs sm:text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Testimonials
            </Link>
            <Link
              href="#about"
              className="text-xs sm:text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              About
            </Link>
            <Link
              href="#join-team"
              className="text-xs sm:text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Join the Team
            </Link>
            <Link
              href="#contact"
              className="text-xs sm:text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 sm:mt-12 border-t border-slate-700 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-slate-300 px-4">
            &copy; {new Date().getFullYear()} CCA (Consistent, Compassionate Activists). All rights reserved.
          </p>
          <p className="mt-3 text-[10px] sm:text-xs text-slate-400 max-w-2xl mx-auto px-4">
            Insurance products and services offered through licensed professionals. Not all products available in all states. This is not financial advice. Please consult with a licensed professional for your specific situation.
          </p>
        </div>
      </div>
    </footer>
  )
}
