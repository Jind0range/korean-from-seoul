import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

const BASE_URL = "https://koreanfromseoul.com";

export default function Home() {
  const posts = getAllPosts();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Korean From Seoul",
    url: BASE_URL,
    description: "Learn Korean naturally — tips, grammar, vocabulary, and culture from the heart of Seoul.",
    inLanguage: "en",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-6 py-16">
        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-stone-800 sm:text-5xl">
            Korean<span className="text-rose-500"> From Seoul</span>
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-stone-500">
            Learn Korean naturally — tips, grammar, vocabulary, and culture from the heart of Seoul.
          </p>
        </section>

        {/* Latest Posts */}
        <section>
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-widest text-stone-400">
            Latest Posts
          </h2>
          {posts.length === 0 ? (
            <p className="text-stone-400">No posts yet. Check back soon!</p>
          ) : (
            <div className="grid gap-4">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
