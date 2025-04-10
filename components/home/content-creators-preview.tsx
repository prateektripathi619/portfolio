import Link from "next/link"
import { Twitch, Youtube } from "lucide-react"

const creators = [
  {
    name: "ValiGamer",
    role: "Streamer",
    platforms: ["twitch", "youtube"],
    specialty: "FPS Games",
  },
  {
    name: "NightOwl",
    role: "Content Creator",
    platforms: ["youtube"],
    specialty: "Game Analysis",
  },
  {
    name: "ProCoach",
    role: "Coach & Streamer",
    platforms: ["twitch"],
    specialty: "Strategy & Coaching",
  },
  {
    name: "DesignMaster",
    role: "Graphic Designer",
    platforms: [],
    specialty: "Visual Content",
  },
]

export default function ContentCreatorsPreview() {
  return (
    <section className="section-container bg-zinc-950">
      <h2 className="section-title text-center">Content Creators</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {creators.map((creator) => (
          <div key={creator.name} className="valioux-card p-6 text-center">
            <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold">{creator.name.charAt(0)}</span>
            </div>
            <h3 className="text-xl font-bold mb-1">{creator.name}</h3>
            <p className="text-zinc-400 mb-3">{creator.role}</p>
            <p className="text-sm text-zinc-300 mb-4">{creator.specialty}</p>

            <div className="flex justify-center space-x-3">
              {creator.platforms.includes("twitch") && (
                <Link href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                  <Twitch size={20} />
                </Link>
              )}
              {creator.platforms.includes("youtube") && (
                <Link href="#" className="text-red-500 hover:text-red-400 transition-colors">
                  <Youtube size={20} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/creators" className="valioux-button-primary">
          Meet All Creators
        </Link>
      </div>
    </section>
  )
}
