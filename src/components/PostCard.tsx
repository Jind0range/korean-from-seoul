import Link from "next/link";
import type { PostMeta } from "@/lib/posts";

export default function PostCard({ post }: { post: PostMeta }) {
  return (
    <Link href={`/posts/${post.slug}`} className="group block rounded-xl border border-slate-200 p-6 transition-all hover:border-indigo-300 hover:shadow-md">
      <time className="text-xs font-medium text-indigo-600">{post.date}</time>
      <h3 className="mt-2 text-lg font-semibold text-slate-900 group-hover:text-indigo-700 transition-colors">
        {post.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-slate-500">{post.summary}</p>
      {post.tags && post.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700">
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
