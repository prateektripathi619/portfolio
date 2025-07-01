import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "FINAGER - Financial Tracking Management & Taxation Automation",
    description:
      "A comprehensive system designed to streamline financial tracking, automate taxation workflows, and enhance reporting efficiency for institutions and enterprises.",
    image: "/FINAGER.png?height=600&width=800",
    tags: ["Node.js", "Express", "Next.js", "Docker", "Kubernetes", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/prateektripathi619/FINAGER-Front-end",
    featured: true,
  },
  {
    title: "Swachhta App - Nagar Nigam Raipur",
    description:
      "A civic cleanliness management platform developed for Nagar Nigam Raipur, featuring a React Native mobile app for supervisors and a Next.js web admin panel. It utilizes YOLO for image-based task verification, Express.js for backend services, FCM for real-time notifications, and AWS for scalable infrastructure.",
    image: "/swapcht.png?height=600&width=800",
    tags: ["React Native", "Next.js", "YOLO", "Express", "FCM", "AWS"],
    liveUrl: "#",
    githubUrl: "https://github.com/prateektripathi619/supervisor.cleaners.com",
    featured: true,
  },
  {
    title: "Ticketing Automation System",
    description:
      "An AI-powered support and incident management system that leverages BERT for natural language understanding to intelligently categorize and route incoming tickets. Includes automation rules, notification triggers, and a modern dashboard for seamless team coordination and faster resolution cycles.",
    image: "/Ticketting.png?height=600&width=800",
    tags: ["Node.js", "Express", "React", "MongoDB", "Automation", "BERT"],
    liveUrl: "#",
    githubUrl: "https://github.com/prateektripathi619/BSP-Ticket",
    featured: true,
  },
  {
    title: "E-commerce Platform (Microservices Architecture)",
    description:
      "A scalable and resilient e-commerce application built using a microservices architecture. Services like authentication, inventory, payments, and order management operate independently for high availability and performance.",
    image: "/placeholder.svg?height=600&width=800",
    tags: ["Next.js", "Node.js", "MongoDB", "Kafka", "Docker", "Microservices"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

export default function Projects() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <section id="projects" className="section-container bg-zinc-950">
      <h2 className="section-title text-center">Featured Projects</h2>
      <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12">
        Here are some of my recent projects. Each one was carefully crafted to
        solve specific problems and deliver exceptional user experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <div
            key={index}
            className="portfolio-card group h-full flex flex-col"
          >
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
              <p className="text-zinc-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full"
                  >
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
                <Link
                  href={project.githubUrl}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/projects" className="portfolio-button-primary">
          View All Projects
        </Link>
      </div>
    </section>
  );
}
