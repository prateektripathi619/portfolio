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
            I’m Prateek — a full-stack developer and creative technologist who
            blends code with design to craft seamless digital experiences. With
            over a year of hands-on experience and a strong foundation in
            Computer Science, I build products that are fast, functional, and
            beautifully intuitive.
          </p>
          <p className="text-zinc-300 mb-6">
            Currently, I’m working as a{" "}
            <span className="font-semibold text-white">
              Junior Research Fellow at NIT Raipur (NITRR)
            </span>
            , where I dive deeper into advanced computing and real-world
            problem-solving. My journey has taken me through startups, agencies,
            and now research — equipping me with a 360° view of software
            development. I thrive at the intersection of design and technology,
            creating user-first systems that not only perform — but leave an
            impression.
          </p>

          <p className="text-zinc-300 mb-8">
            When I'm not coding or designing, you'll find me exploring
            photography, reading about emerging tech trends, or hiking in the
            mountains. I believe in continuous learning and am always looking to
            expand my skillset.
          </p>
          <Link
            href="/PrateekTripathi.pdf"
            className="portfolio-button-primary inline-flex items-center"
          >
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
                  src="/profile.jpg"
                  alt="Prateek Tripathi"
                  width={400}
                  height={600}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
