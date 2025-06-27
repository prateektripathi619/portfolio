import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Github, ArrowLeft } from "lucide-react"


const projects = [
  {
    title: "FINAGER - Financial Tracking Management & Taxation Automation",
    description:
      "A comprehensive system designed to streamline financial tracking, automate taxation workflows, and enhance reporting efficiency for institutions and enterprises.",
    image: "/FINAGER.png?height=600&width=800",
    tags: [
      "Node.js",
      "Express",
      "Next.js",
      "Docker",
      "Kubernetes",
      "AWS",
      "Apache Kafka",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Swachhta App - Nagar Nigam Raipur",
    description:
      "A civic cleanliness management platform developed for Nagar Nigam Raipur, featuring a React Native mobile app for supervisors and a Next.js web admin panel. It utilizes YOLO for image-based task verification, Express.js for backend services, FCM for real-time notifications, and AWS for scalable infrastructure.",
    image: "/swapcht.png?height=600&width=800",
    tags: ["React Native", "Next.js", "YOLO", "Express", "FCM", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI-Based Metallurgical Detection System",
    description:
      "An AI-powered web application developed for the Metallurgical Department to detect material defects using binary image segmentation. Integrated user authentication and image analysis workflow. Built with Next.js for the frontend and Express.js for the backend.",
    image: "/MetaAI.png?height=600&width=800",
    tags: ["Next.js", "Express", "AI", "Binary Segmentation", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Ticketing Automation System",
    description:
      "An AI-powered support and incident management system that leverages BERT for natural language understanding to intelligently categorize and route incoming tickets. Includes automation rules, notification triggers, and a modern dashboard for seamless team coordination and faster resolution cycles.",
    image: "/Ticketting.png?height=600&width=800",
    tags: ["Node.js", "Express", "React", "MongoDB", "Automation", "BERT"],
    liveUrl: "#",
    githubUrl: "#",
  },

  {
    title: "E-commerce Platform using Microservices",
    description:
      "A scalable e-commerce solution architected using microservices for high availability and modularity. Each domain—products, orders, payments, users—is developed as an independent service. Utilizes Docker, Kubernetes, and event-driven communication for seamless deployment and scaling.",
    image: "/ecommerce.png?height=600&width=800",
    tags: [
      "Microservices",
      "Docker",
      "Kubernetes",
      "Node.js",
      "Next ",
      "MongoDB",
      "Apache Kafka",
      "GSAP",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Music Player",
    description:
      "A modern and responsive music player built with Next.js featuring playlist management, real-time audio controls, waveform visualization, and support for various audio formats.",
    image: "/Music.png?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Howler.js", "Audio APIs"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Movie Application",
    description:
      "A feature-rich mobile application built with React Native that fetches real-time movie data from the TMDB API, providing details like trailers, ratings, cast, and search functionality. Built with Appwrite for backend services and MongoDB for database management.",
    image: "/movie.png?height=600&width=800",
    tags: [
      "React Native",
      "TMDB API",
      "Appwrite",
      "MongoDB",
      "Mobile UI",
      "REST",
    ],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website showcasing creative work with a custom CMS for easy updates.",
    image: "/portfolio.png?height=600&width=800",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "EmailJS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Blog Platform",
    description:
      "A content management system for publishing and managing blog posts with user authentication.",
    image: "/Blog.png?height=600&width=800",
    tags: ["React", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

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
