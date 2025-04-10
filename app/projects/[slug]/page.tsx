import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Github, ExternalLink } from "lucide-react"

// This would typically come from a database or CMS
const projectDetails = {
  "e-commerce-platform": {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and payment processing.",
    longDescription: `
      This e-commerce platform was built to provide small businesses with an affordable, customizable online store solution. 
      The project features a responsive design, product management system, shopping cart, secure checkout process, and 
      integration with popular payment gateways.
      
      Key features include:
      - User authentication and account management
      - Product catalog with categories, filtering, and search
      - Shopping cart with persistent storage
      - Checkout process with address validation
      - Payment processing with Stripe
      - Order management and tracking
      - Admin dashboard for inventory and order management
    `,
    image: "/placeholder.svg?height=600&width=800",
    gallery: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Express", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    challenges: `
      One of the main challenges was implementing a secure and seamless checkout process. This required careful 
      integration with the Stripe API, handling payment intents, and ensuring proper error handling. Another challenge 
      was optimizing the product catalog for performance, especially when dealing with a large number of products and 
      filter combinations.
    `,
    solutions: `
      To address the checkout security, I implemented a server-side validation system and used Stripe's recommended 
      security practices. For the performance issues, I implemented pagination, lazy loading, and database indexing 
      to ensure fast load times even with large catalogs.
    `,
  },
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  // In a real app, you would fetch this data from an API or CMS
  const project = projectDetails[params.slug as keyof typeof projectDetails] || {
    title: "Project Not Found",
    description: "This project does not exist or has been removed.",
    longDescription: "",
    image: "/placeholder.svg?height=600&width=800",
    gallery: [],
    tags: [],
    liveUrl: "#",
    githubUrl: "#",
    challenges: "",
    solutions: "",
  }

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">{project.title}</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">{project.description}</p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <Link href="/projects" className="inline-flex items-center text-purple-400 hover:text-purple-300 mb-8">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Projects
        </Link>

        <div className="portfolio-card overflow-hidden mb-8">
          <div className="relative h-80 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
            <div className="text-zinc-300 space-y-4">
              {project.longDescription.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Challenges</h2>
            <div className="text-zinc-300 space-y-4">
              {project.challenges.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Solutions</h2>
            <div className="text-zinc-300 space-y-4">
              {project.solutions.split("\n\n").map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div>
            <div className="portfolio-card p-6 mb-6">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>

              <div className="mb-4">
                <h4 className="text-sm font-medium text-zinc-400 mb-2">Technologies</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="text-xs bg-purple-900/50 text-purple-200 px-2 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href={project.liveUrl}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Live Demo
                </Link>
                <Link
                  href={project.githubUrl}
                  className="flex items-center text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Github className="h-4 w-4 mr-2" />
                  View Source Code
                </Link>
              </div>
            </div>

            {project.gallery.length > 0 && (
              <div className="portfolio-card p-6">
                <h3 className="text-xl font-bold mb-4">Gallery</h3>
                <div className="space-y-4">
                  {project.gallery.map((image, index) => (
                    <div key={index} className="relative h-40 w-full rounded-md overflow-hidden">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} screenshot ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
