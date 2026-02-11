import { getAllPosts } from "@/lib/posts";
import PostCard from "@/components/PostCard";

export const metadata = { title: "Posts — Korean From Seoul" };

export default function PostsPage() {
  const posts = getAllPosts();

  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-stone-800">All Posts</h1>
      {posts.length === 0 ? (
        <p className="text-stone-400">No posts yet.</p>
      ) : (
        <div className="grid gap-4">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </div>
  );
}
