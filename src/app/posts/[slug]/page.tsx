import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import MDXContent from "@/components/MDXContent";
import Link from "next/link";
import type { Metadata } from "next";

const BASE_URL = "https://koreanfromseoul.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  const url = `${BASE_URL}/posts/${slug}`;

  return {
    title: meta.title,
    description: meta.summary,
    openGraph: {
      type: "article",
      title: meta.title,
      description: meta.summary,
      url,
      siteName: "Korean From Seoul",
      images: [{ url: `${BASE_URL}/og-image.png`, width: 1200, height: 630, alt: meta.title }],
      publishedTime: meta.date,
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.summary,
      images: [`${BASE_URL}/og-image.png`],
    },
    alternates: { canonical: url },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const html = await markdownToHtml(content);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.summary,
    datePublished: meta.date,
    url: `${BASE_URL}/posts/${slug}`,
    author: { "@type": "Person", name: "Korean From Seoul" },
    publisher: {
      "@type": "Organization",
      name: "Korean From Seoul",
      url: BASE_URL,
    },
    inLanguage: "en",
    ...(meta.tags?.length ? { keywords: meta.tags.join(", ") } : {}),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/posts" className="mb-8 inline-flex items-center gap-1 text-sm text-rose-500 hover:text-rose-600 transition-colors">
          ← Back to posts
        </Link>
        <header className="mb-10">
          <time className="text-sm font-medium text-rose-500">{meta.date}</time>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-800 sm:text-4xl">
            {meta.title}
          </h1>
          {meta.tags && meta.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {meta.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>
        <MDXContent html={html} />
      </article>
    </>
  );
}
