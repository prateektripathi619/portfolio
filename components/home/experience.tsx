import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const workExperience = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Lead the development of web applications using React and Next.js. Implemented responsive designs, optimized performance, and mentored junior developers.",
    },
    {
      title: "UI/UX Designer & Developer",
      company: "Creative Agency",
      period: "2018 - 2021",
      description:
        "Designed and developed user interfaces for various clients. Created wireframes, prototypes, and implemented frontend solutions using modern frameworks.",
    },
    {
      title: "Web Developer",
      company: "Startup Hub",
      period: "2016 - 2018",
      description:
        "Built and maintained websites and web applications for startups. Worked with HTML, CSS, JavaScript, and various CMS platforms.",
    },
  ]

  const education = [
    {
      degree: "Master's in Computer Science",
      institution: "Tech University",
      period: "2014 - 2016",
      description:
        "Specialized in Human-Computer Interaction and Web Technologies. Thesis on improving user experience in web applications.",
    },
    {
      degree: "Bachelor's in Software Engineering",
      institution: "State University",
      period: "2010 - 2014",
      description:
        "Studied software development principles, algorithms, data structures, and web development fundamentals.",
    },
  ]

  return (
    <section id="experience" className="section-container bg-zinc-950">
      <h2 className="section-title text-center">Experience & Education</h2>
      <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12">
        My professional journey and educational background that have shaped my skills and expertise.
      </p>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <div className="flex items-center mb-8">
            <Briefcase className="h-6 w-6 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </div>

          <div className="relative border-l border-zinc-800 pl-8 space-y-8">
            {workExperience.map((job, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-zinc-900"></div>
                <div className="portfolio-card p-6">
                  <h4 className="text-lg font-bold">{job.title}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-purple-400">{job.company}</p>
                    <p className="text-sm text-zinc-400">{job.period}</p>
                  </div>
                  <p className="text-zinc-300">{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center mb-8">
            <GraduationCap className="h-6 w-6 text-purple-400 mr-3" />
            <h3 className="text-2xl font-bold">Education</h3>
          </div>

          <div className="relative border-l border-zinc-800 pl-8 space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-10 mt-1.5 h-5 w-5 rounded-full border-2 border-purple-500 bg-zinc-900"></div>
                <div className="portfolio-card p-6">
                  <h4 className="text-lg font-bold">{edu.degree}</h4>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-purple-400">{edu.institution}</p>
                    <p className="text-sm text-zinc-400">{edu.period}</p>
                  </div>
                  <p className="text-zinc-300">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
