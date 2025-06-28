"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const NewsPage = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchNews = async () => {
    try {
      const res = await fetch(
        `https://gnews.io/api/v4/search?q=AI+OR+Machine+Learning+OR+Programming+OR+Coding+OR+Artificial+Intelligence&lang=en&country=in&max=30&apikey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`
      );

      const data = await res.json();
      console.log("Fetched Data:", data);

      if (
        !res.ok ||
        !data.articles ||
        !Array.isArray(data.articles) ||
        data.articles.length === 0
      ) {
        throw new Error("No articles found");
      }

      const formatted = data.articles.map((article: any, index: number) => ({
        title: article.title,
        date: new Date(article.publishedAt).toLocaleDateString("en-IN", {
          day: "numeric",
          month: "long",
          year: "numeric",
        }),
        excerpt: article.description,
        slug: `gnews-${index}`,
        category: article.source?.name || "Tech News",
        url: article.url,
        image: article.image || "/default-news.jpg",
      }));

      setNewsItems(formatted);
    } catch (err: any) {
      console.error("Failed to fetch news:", err);
      setError(err.message || "Failed to load news.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="flex flex-col gap-16 pb-16">
      <section className="pt-20 pb-12 bg-gradient-to-br from-purple-900/50 to-black">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            News & Updates
          </h1>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xl text-zinc-300">
              Stay updated with the latest in programming, AI/ML, and future
              tech trends.
            </p>
          </div>
        </div>
      </section>

      <section className="section-container">
        <h2 className="text-2xl font-bold mb-8">Latest Announcements</h2>

        {loading && newsItems.length === 0 ? (
          <p className="text-zinc-400">Loading latest news...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article key={index} className="valioux-card group">
                <div className="h-48 bg-zinc-800 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-blue-400/20 group-hover:opacity-75 transition-opacity"></div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-md">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-zinc-400 text-sm mb-2">
                    <Calendar className="h-4 w-4 mr-1" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                    <Link href={item.url} target="_blank">
                      {item.title}
                    </Link>
                  </h3>
                  <p className="text-zinc-300 mb-4">{item.excerpt}</p>
                  <Link
                    href={item.url}
                    target="_blank"
                    className="text-purple-400 hover:text-purple-300 flex items-center transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default NewsPage;
