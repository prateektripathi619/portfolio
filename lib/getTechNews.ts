export async function getTechNews() {
  const apiKey = process.env.NEWS_API_KEY;
  const res = await fetch(
    `https://gnews.io/api/v4/top-headlines?topic=technology&country=in&max=6&apikey=${apiKey}`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch tech news");
  }

  const data = await res.json();
  return data.articles;
}
