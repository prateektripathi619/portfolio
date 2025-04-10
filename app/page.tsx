import Hero from "@/components/home/hero"
import About from "@/components/home/about"
import Projects from "@/components/home/projects"
import Skills from "@/components/home/skills"
import Experience from "@/components/home/experience"
import Contact from "@/components/home/contact"
import CallToAction from "@/components/shared/call-to-action"

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <CallToAction
        title="Interested in working together?"
        description="I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision."
        buttonText="Get In Touch"
        buttonLink="/#contact"
      />
    </div>
  )
}
