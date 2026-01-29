import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 py-16">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="group flex items-center gap-3 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 text-white font-bold text-lg transition-all duration-300 group-hover:from-amber-400 group-hover:to-amber-500">
                CCA
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold text-white">CCA</span>
                <span className="text-xs text-slate-300">Turning Awareness Into Action</span>
              </div>
            </Link>
            <p className="mt-3 text-sm text-slate-300">
              Devyn Thompson | Licensed Financial Advisor
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-8">
            <Link
              href="#services"
              className="text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Testimonials
            </Link>
            <Link
              href="#about"
              className="text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              About
            </Link>
            <Link
              href="#join-team"
              className="text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Join the Team
            </Link>
            <Link
              href="#contact"
              className="text-sm text-slate-300 transition-all duration-300 hover:text-amber-400 hover:translate-y-[-2px]"
            >
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-12 border-t border-slate-700 pt-8 text-center">
          <p className="text-sm text-slate-300">
            &copy; {new Date().getFullYear()} CCA - Turning Awareness Into Action. All rights reserved.
          </p>
          <p className="mt-3 text-xs text-slate-400 max-w-2xl mx-auto">
            Insurance products and services offered through licensed professionals. Not all products available in all states. This is not financial advice. Please consult with a licensed professional for your specific situation.
          </p>
        </div>
      </div>
    </footer>
  )
}
