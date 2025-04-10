import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-transparent"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-400/20 rounded-full filter blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center">
          <p className="text-purple-400 mb-4 animate-fade-in">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in animate-delay-100">
            <span className="gradient-text">Prateek Tripathi</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-zinc-300 mb-8 animate-fade-in animate-delay-200">
            Designer & Developer
          </h2>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-10 animate-fade-in animate-delay-300">
            I create engaging digital experiences through thoughtful design and clean code. Specializing in web
            development, UI/UX design, and creative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animate-delay-400">
            <Link href="/#projects" className="portfolio-button-primary">
              View My Work
            </Link>
            <Link href="/#contact" className="portfolio-button-secondary">
              Contact Me
            </Link>
          </div>

          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="/#about" aria-label="Scroll down">
              <ArrowDown className="h-6 w-6 text-zinc-400" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
