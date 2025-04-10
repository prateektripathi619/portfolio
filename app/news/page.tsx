import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "Team Valioux Signs New Valorant Roster",
    date: "March 1, 2024",
    excerpt: "We're excited to announce our new professional Valorant roster joining the Valioux family.",
    slug: "new-valorant-roster",
    category: "Team Announcement",
  },
  {
    title: "Upcoming Tournament: Spring Invitational",
    date: "February 25, 2024",
    excerpt: "Team Valioux will be participating in the Spring Invitational tournament next month.",
    slug: "spring-invitational",
    category: "Tournament",
  },
  {
    title: "Partnership Announcement: Gaming Gear Pro",
    date: "February 18, 2024",
    excerpt:
      "We're thrilled to announce our new partnership with Gaming Gear Pro, a leading gaming peripherals company.",
    slug: "gaming-gear-partnership",
    category: "Partnership",
  },
  {
    title: "League of Legends Team Advances to Playoffs",
    date: "February 10, 2024",
    excerpt:
      "Our League of Legends team has secured their spot in the regional playoffs after a strong regular season.",
    slug: "lol-playoffs-qualification",
    category: "Competition",
  },
  {
    title: "New Content Creator Joins Team Valioux",
    date: "February 5, 2024",
    excerpt:
      "We're excited to welcome StreamQueen to our content creator roster, bringing her unique entertainment style to Team Valioux.",
    slug: "new-content-creator",
    category: "Team Announcement",
  },
  {
    title: "Rocket League Team Finishes Second in Winter Cup",
    date: "January 28, 2024",
    excerpt: "Our Rocket League team put up an impressive performance, finishing second in the Winter Cup tournament.",
    slug: "rocket-league-winter-cup",
    category: "Competition",
  },
]

export default function NewsPage() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">News & Events</h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Stay up to date with the latest announcements, tournament results, and team updates.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <div className="flex items-center gap-2 bg-zinc-900 p-2 rounded-md border border-zinc-800">
            <select className="bg-transparent border-none text-zinc-300 focus:outline-none">
              <option value="all">All Categories</option>
              <option value="team-announcement">Team Announcements</option>
              <option value="tournament">Tournaments</option>
              <option value="partnership">Partnerships</option>
              <option value="competition">Competition Results</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item) => (
            <article key={item.slug} className="valioux-card group">
              <div className="h-48 bg-zinc-800 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-400/20 group-hover:opacity-75 transition-opacity"></div>
                <div className="absolute top-4 left-4">
                  <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md">{item.category}</span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-zinc-400 text-sm mb-2">
                  <Calendar className="h-4 w-4 mr-1" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                  <Link href={`/news/${item.slug}`}>{item.title}</Link>
                </h3>
                <p className="text-zinc-300 mb-4">{item.excerpt}</p>
                <Link
                  href={`/news/${item.slug}`}
                  className="text-purple-400 hover:text-purple-300 flex items-center transition-colors"
                >
                  Read More
                  <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button className="valioux-button-secondary">Load More</button>
        </div>
      </section>
    </div>
  )
}
