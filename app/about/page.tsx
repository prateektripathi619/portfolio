import CallToAction from "@/components/shared/call-to-action"

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Team Valioux</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300 mb-6">
              Team Valioux is a professional esports organization founded with a vision to excel in competitive gaming
              while fostering talent and creating a supportive community.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Our Mission</h2>
            <p className="text-zinc-300 mb-6">
              At Team Valioux, our mission is to build a world-class esports organization that not only competes at the
              highest level but also nurtures emerging talent and creates opportunities for players, content creators,
              and staff to thrive in the gaming industry.
            </p>
            <p className="text-zinc-300">
              We believe in fostering a positive, inclusive environment where passion for gaming meets professional
              excellence. Our teams are built on the foundations of respect, dedication, and continuous improvement.
            </p>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Core Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Excellence</h4>
                  <p className="text-zinc-400">
                    Striving for the highest standards in competition and content creation
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Community</h4>
                  <p className="text-zinc-400">Building a supportive network of players, creators, and fans</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Innovation</h4>
                  <p className="text-zinc-400">Embracing new strategies, technologies, and approaches</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2"></span>
                <div>
                  <h4 className="font-bold mb-1">Integrity</h4>
                  <p className="text-zinc-400">Maintaining honesty, fairness, and sportsmanship in all endeavors</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section-container bg-zinc-950">
        <h2 className="section-title text-center">The Story of Valioux</h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-300 mb-6">
            Founded by Ege and Jason from Germany, Team Valioux emerged from a passion for competitive Fortnite and a
            vision to create an organization that would develop and showcase top talent in the European Fortnite scene.
          </p>
          <p className="text-zinc-300 mb-6">
            Starting with a focus on competitive Fortnite, we've built a structured approach with three distinct team
            tiers: our Pro Team featuring top EU players, our Academy Team for established competitors, and our Talents
            Team for promising up-and-comers.
          </p>
          <p className="text-zinc-300">
            Today, Team Valioux continues to grow under the management of Deevl, competing in major tournaments,
            producing engaging content, and building a community that celebrates the passion and excitement of
            competitive Fortnite.
          </p>
        </div>
      </section>

      <section className="section-container">
        <h2 className="section-title text-center">Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ege",
              role: "Founder",
              description: "25, Self-employed in gastronomy and betting shops. From Germany.",
            },
            { name: "Jason", role: "Founder", description: "22, Works as a heating engineer. From Germany." },
            {
              name: "Deevl",
              role: "Manager",
              description: "14, Still in school, from Switzerland. Manages a bit of everything.",
            },
          ].map((leader) => (
            <div key={leader.name} className="valioux-card p-6 text-center">
              <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold">{leader.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-bold mb-1">{leader.name}</h3>
              <p className="text-zinc-400 mb-3">{leader.role}</p>
              <p className="text-sm text-zinc-300">{leader.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CallToAction
        title="Join the Valioux Family"
        description="Whether you're a player, content creator, or fan, there's a place for you in our community."
        buttonText="Get Involved"
        buttonLink="/contact"
        secondaryButtonText="Our Teams"
        secondaryButtonLink="/teams"
      />
    </div>
  )
}
