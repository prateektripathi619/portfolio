import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website showcasing creative work with a custom CMS for easy updates.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather information with location-based forecasts and interactive maps.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["JavaScript", "Weather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description: "A content management system for publishing and managing blog posts with user authentication.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Recipe App",
    description: "A mobile-responsive application for discovering, saving, and sharing recipes.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["React Native", "Firebase", "Redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">My Projects</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              A collection of my work across web development, design, and creative coding.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <Link href="/" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="portfolio-card group h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-zinc-400 mb-4 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.liveUrl}
                    className="text-purple-400 hover:text-purple-300 flex items-center transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href={project.githubUrl} className="text-zinc-400 hover:text-white transition-colors">
                    <Github className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
