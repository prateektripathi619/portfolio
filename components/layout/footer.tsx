import Link from "next/link"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold gradient-text">
              Prateek Tripathi
            </Link>
            <p className="text-zinc-400 text-sm mt-2">Designing and building digital experiences</p>
          </div>

          <div className="flex space-x-6">
            <Link href="https://github.com/yourusername" className="text-zinc-400 hover:text-white transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="https://twitter.com/yourusername" className="text-zinc-400 hover:text-white transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="mailto:your.email@example.com" className="text-zinc-400 hover:text-white transition-colors">
              <Mail size={20} />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-zinc-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
