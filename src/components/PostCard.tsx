import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block rounded-xl border border-stone-200 bg-white p-6 transition-all hover:border-rose-300 hover:shadow-md hover:shadow-rose-100/50">
      <time className="text-xs font-medium text-rose-500">{post.date}</time>
      <h3 className="mt-2 text-lg font-semibold text-stone-800 group-hover:text-rose-600 transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-stone-500">{post.summary}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-rose-50 px-2.5 py-0.5 text-xs font-medium text-rose-600">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
