import Link from "next/link"
import { ArrowRight } from "lucide-react"

const teams = [
  {
    name: "Pro Team",
    requirements: "TOP 200 EU Player",
    bgClass: "from-purple-900/50 to-black",
  },
  {
    name: "Academy Team",
    requirements: "10k PR or more",
    bgClass: "from-blue-900/50 to-black",
  },
  {
    name: "Talents Team",
    requirements: "3-5k PR",
    bgClass: "from-indigo-900/50 to-black",
  },
]

export default function TeamsOverview() {
  return (
    <section className="section-container">
      <h2 className="section-title text-center">Our Fortnite Teams</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teams.map((team) => (
          <div key={team.name} className="valioux-card group">
            <div className={`h-40 bg-gradient-to-br ${team.bgClass} flex items-center justify-center`}>
              <h3 className="text-2xl font-bold">{team.name}</h3>
            </div>
            <div className="p-6">
              <div className="mb-6">
                <p className="text-zinc-300 font-medium">Requirements:</p>
                <p className="text-purple-400">{team.requirements}</p>
              </div>
              <Link
                href={`/teams?division=${team.name.toLowerCase().replace(" ", "-")}`}
                className="flex items-center text-purple-400 hover:text-purple-300 transition-colors group"
              >
                View Roster
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/teams" className="valioux-button-primary">
          View All Teams
        </Link>
      </div>
    </section>
  )
}
