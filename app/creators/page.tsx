import Link from "next/link"
import { Twitch, Youtube, Instagram, Twitter } from "lucide-react"

const creators = [
  {
    name: "ValiGamer",
    role: "Streamer",
    platforms: ["twitch", "youtube", "twitter", "instagram"],
    specialty: "FPS Games",
    description:
      "Professional Valorant player turned content creator, specializing in gameplay tutorials and esports analysis.",
  },
  {
    name: "NightOwl",
    role: "Content Creator",
    platforms: ["youtube", "twitter"],
    specialty: "Game Analysis",
    description: "In-depth game analysis and strategy guides for competitive players looking to improve their skills.",
  },
  {
    name: "ProCoach",
    role: "Coach & Streamer",
    platforms: ["twitch", "youtube", "twitter"],
    specialty: "Strategy & Coaching",
    description:
      "Former professional player now coaching and creating educational content for aspiring esports athletes.",
  },
  {
    name: "DesignMaster",
    role: "Graphic Designer",
    platforms: ["instagram", "twitter"],
    specialty: "Visual Content",
    description:
      "Creating stunning graphics, team logos, and visual content for Team Valioux and the broader esports community.",
  },
  {
    name: "StreamQueen",
    role: "Variety Streamer",
    platforms: ["twitch", "twitter", "instagram"],
    specialty: "Entertainment",
    description: "Entertaining variety streamer known for high-energy gameplay and community interaction.",
  },
  {
    name: "TechGuru",
    role: "Tech Specialist",
    platforms: ["youtube", "twitter"],
    specialty: "Gaming Hardware",
    description: "Reviews and guides on the latest gaming hardware, setups, and optimization techniques.",
  },
]

export default function CreatorsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Content Creators</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Meet the talented creators who bring Team Valioux content to life across multiple platforms.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creators.map((creator) => (
            <div key={creator.name} className="valioux-card group">
              <div className="p-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-400 rounded-full mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold">{creator.name.charAt(0)}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{creator.name}</h3>
                <p className="text-purple-400 mb-4">{creator.role}</p>
                <p className="text-zinc-300 mb-4">{creator.description}</p>

                <div className="flex items-center mb-6">
                  <span className="text-sm font-medium text-zinc-400 mr-2">Specialty:</span>
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full">{creator.specialty}</span>
                </div>

                <div className="flex space-x-4">
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
                  {creator.platforms.includes("twitter") && (
                    <Link href="#" className="text-blue-400 hover:text-blue-300 transition-colors">
                      <Twitter size={20} />
                    </Link>
                  )}
                  {creator.platforms.includes("instagram") && (
                    <Link href="#" className="text-pink-500 hover:text-pink-400 transition-colors">
                      <Instagram size={20} />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
