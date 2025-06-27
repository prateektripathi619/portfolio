import { Briefcase, GraduationCap } from "lucide-react"

export default function Experience() {
  const workExperience = [
    {
      title: "Junior Research Fellow (Programmer)",
      company: "NIT Raipur",
      period: "2024 - Present",
      description:
        "Developing a cutting-edge FinTech product for a government-funded startup using Next.js and Express.js, focusing on scalable architecture and seamless user experience.",
    },
    {
      title: "Freelance UI/UX Designer & Frontend Developer",
      company: "Self-Employed",
      period: "2024 – 2025",
      description:
        "Collaborated with diverse clients to design and develop intuitive user interfaces. Created wireframes, interactive prototypes, and implemented responsive front-end solutions using modern frameworks like React and Tailwind CSS.",
    }
    ,
    {
      title: "Web Developer Intern",
      company: "InternPe",
      period: "Mar 2023 – Sep 2024",
      description:
        "Developed and maintained an Airline Reservation System and other web applications for startups. Utilized HTML, CSS, JavaScript, and CMS platforms to deliver responsive and user-friendly websites.",
    },
  ];

  const education = [
    {
      degree: "Bachelor's in Software Engineering",
      institution: "Savitribai Phule Pune University",
      period: "2020 - 2024",
      description:
        "Focused on core software development principles, including algorithms, data structures, object-oriented programming, and full-stack web development.",
    },
  ];

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
