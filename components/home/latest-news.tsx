import Link from "next/link"
import { Calendar, ArrowRight } from "lucide-react"

const newsItems = [
  {
    title: "Team Valioux Signs New Valorant Roster",
    date: "March 1, 2024",
    excerpt: "We're excited to announce our new professional Valorant roster joining the Valioux family.",
    slug: "new-valorant-roster",
  },
  {
    title: "Upcoming Tournament: Spring Invitational",
    date: "February 25, 2024",
    excerpt: "Team Valioux will be participating in the Spring Invitational tournament next month.",
    slug: "spring-invitational",
  },
  {
    title: "Partnership Announcement: Gaming Gear Pro",
    date: "February 18, 2024",
    excerpt:
      "We're thrilled to announce our new partnership with Gaming Gear Pro, a leading gaming peripherals company.",
    slug: "gaming-gear-partnership",
  },
]

export default function LatestNews() {
  return (
    <section className="section-container">
      <div className="flex justify-between items-center mb-8">
        <h2 className="section-title mb-0">Latest News</h2>
        <Link href="/news" className="text-purple-400 hover:text-purple-300 flex items-center transition-colors">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsItems.map((item) => (
          <article key={item.slug} className="valioux-card group">
            <div className="h-48 bg-zinc-800 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-400/20 group-hover:opacity-75 transition-opacity"></div>
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
    </section>
  )
}
