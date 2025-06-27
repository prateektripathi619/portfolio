"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/#projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Contact", href: "/contact" },
  { name: "TechNews", href: "/news" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold gradient-text">PrateekDev.in</span>
          </Link>
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:flex md:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-zinc-300 hover:text-white transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link href="/#contact" className="portfolio-button-primary">
            Get In Touch
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            className="text-zinc-300 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-zinc-300 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Link
                href="/#contact"
                className="portfolio-button-primary w-full block text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
