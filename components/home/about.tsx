import Image from "next/image"
import Link from "next/link"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="section-container">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h2 className="section-title">About Me</h2>
          <p className="text-zinc-300 mb-6">
            I'm a passionate designer and developer with over 5 years of experience creating digital products and
            experiences. I combine technical expertise with creative problem-solving to build solutions that are both
            functional and beautiful.
          </p>
          <p className="text-zinc-300 mb-6">
            My journey in tech began with a degree in Computer Science, followed by work at various agencies and
            startups where I honed my skills across the full development stack. I'm particularly interested in the
            intersection of design and technology, creating systems that are intuitive, accessible, and delightful to
            use.
          </p>
          <p className="text-zinc-300 mb-8">
            When I'm not coding or designing, you'll find me exploring photography, reading about emerging tech trends,
            or hiking in the mountains. I believe in continuous learning and am always looking to expand my skillset.
          </p>
          <Link href="/resume.pdf" className="portfolio-button-primary inline-flex items-center">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Link>
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-blue-400/30 rounded-lg filter blur-xl"></div>
            <div className="portfolio-card p-2 relative z-10">
              <div className="w-64 h-64 md:w-80 md:h-80 relative overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Your Name"
                  width={400}
                  height={400}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
