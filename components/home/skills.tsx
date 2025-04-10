export default function Skills() {
  const skillCategories = [
    {
      name: "Frontend Development",
      skills: [
        { name: "HTML/CSS", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React", level: 80 },
        { name: "Next.js", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      name: "Backend Development",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Express", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "SQL", level: 60 },
        { name: "API Design", level: 80 },
      ],
    },
    {
      name: "Design",
      skills: [
        { name: "UI/UX Design", level: 85 },
        { name: "Figma", level: 80 },
        { name: "Adobe XD", level: 75 },
        { name: "Photoshop", level: 70 },
        { name: "Illustration", level: 65 },
      ],
    },
    {
      name: "Other",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Responsive Design", level: 90 },
        { name: "Performance Optimization", level: 75 },
        { name: "Accessibility", level: 80 },
        { name: "SEO", level: 70 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title text-center">Skills & Expertise</h2>
      <p className="text-zinc-300 text-center max-w-2xl mx-auto mb-12">
        I've developed a diverse set of skills throughout my career, allowing me to build complete, polished products
        from concept to deployment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="portfolio-card p-6">
            <h3 className="text-xl font-bold mb-6 gradient-text">{category.name}</h3>
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-zinc-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-zinc-800 rounded-full h-2.5">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-400 h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
