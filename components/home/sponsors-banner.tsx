import Link from "next/link"

export default function SponsorsBanner() {
  return (
    <section className="py-12 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-8">Our Partners</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((sponsor) => (
            <div
              key={sponsor}
              className="h-24 bg-zinc-900 rounded-md flex items-center justify-center border border-zinc-800 hover:border-purple-500 transition-colors"
            >
              <div className="text-zinc-500 font-medium">Partner {sponsor}</div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/partners" className="text-purple-400 hover:text-purple-300 transition-colors">
            Become a Partner
          </Link>
        </div>
      </div>
    </section>
  )
}
