import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { markdownToHtml } from "@/lib/markdown";
import MDXContent from "@/components/MDXContent";
import Link from "next/link";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const { meta } = getPostBySlug(slug);
  return { title: `${meta.title} — Korean From Seoul` };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { meta, content } = getPostBySlug(slug);
  const html = await markdownToHtml(content);

  return (
    <article className="mx-auto max-w-3xl px-6 py-16">
      <Link href="/posts" className="mb-8 inline-flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-800 transition-colors">
        ← Back to posts
      </Link>
      <header className="mb-10">
        <time className="text-sm font-medium text-indigo-600">{meta.date}</time>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-indigo-950 sm:text-4xl">
          {meta.title}
        </h1>
        {meta.tags && meta.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {meta.tags.map((tag) => (
              <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>
      <MDXContent html={html} />
    </article>
  );
}
