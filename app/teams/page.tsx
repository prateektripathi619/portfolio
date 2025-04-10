import Link from "next/link"
import { Filter } from "lucide-react"

const teams = [
  {
    division: "Pro Team",
    requirements: "TOP 200 EU Player",
    players: [
      { name: "Player1", role: "IGL", country: "Germany" },
      { name: "Player2", role: "Fragger", country: "France" },
      { name: "Player3", role: "Support", country: "Sweden" },
      // Add actual players when available
    ],
  },
  {
    division: "Academy Team",
    requirements: "10k PR or more",
    players: [
      { name: "Player4", role: "IGL", country: "Poland" },
      { name: "Player5", role: "Fragger", country: "Denmark" },
      { name: "Player6", role: "Support", country: "Netherlands" },
      // Add actual players when available
    ],
  },
  {
    division: "Talents Team",
    requirements: "3-5k PR",
    players: [
      { name: "Player7", role: "IGL", country: "Germany" },
      { name: "Player8", role: "Fragger", country: "Sweden" },
      { name: "Player9", role: "Support", country: "Denmark" },
      // Add actual players when available
    ],
  },
]

export default function TeamsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Fortnite Teams</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Meet the professional Fortnite players representing Team Valioux across our divisions.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Team Rosters</h2>
          <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-md border border-zinc-800">
            <Filter className="h-5 w-5 text-zinc-400" />
            <select className="bg-transparent border-none text-zinc-300 focus:outline-none">
              <option value="all">All Divisions</option>
              <option value="pro-team">Pro Team</option>
              <option value="academy-team">Academy Team</option>
              <option value="talents-team">Talents Team</option>
            </select>
          </div>
        </div>

        <div className="space-y-12">
          {teams.map((team, index) => (
            <div key={index} className="valioux-card overflow-hidden">
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-6">
                <h3 className="text-2xl font-bold">Fortnite - {team.division}</h3>
                <p className="text-zinc-300 mt-2">
                  Requirements: <span className="text-white font-medium">{team.requirements}</span>
                </p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                        Player
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                        Role
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                        Country
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-zinc-300 uppercase tracking-wider">
                        Profile
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-800">
                    {team.players.map((player, playerIndex) => (
                      <tr key={playerIndex} className="hover:bg-zinc-800/50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-400 flex items-center justify-center mr-3">
                              <span className="font-bold">{player.name.charAt(0)}</span>
                            </div>
                            <div className="font-medium">{player.name}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">{player.role}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-zinc-300">{player.country}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <Link
                            href={`/teams/player/${player.name.toLowerCase()}`}
                            className="text-purple-400 hover:text-purple-300 transition-colors"
                          >
                            View Profile
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
