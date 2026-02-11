export const metadata = { title: "About — Korean From Seoul" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-indigo-950">About</h1>
      <div className="prose prose-slate prose-indigo max-w-none">
        <p>
          <strong>Korean From Seoul</strong> is a blog dedicated to helping you learn Korean naturally. 
          Based in Seoul, we share practical tips, grammar explanations, useful vocabulary, and cultural 
          insights to make your Korean learning journey smoother and more enjoyable.
        </p>
        <p>
          Whether you&apos;re a complete beginner or looking to refine your skills, you&apos;ll find 
          something useful here. We believe in learning through real-world examples and everyday 
          conversations — not just textbook drills.
        </p>
        <h2>Why &ldquo;From Seoul&rdquo;?</h2>
        <p>
          Seoul is the cultural and linguistic heart of Korea. The Korean spoken here is the standard, 
          and living in the city means being immersed in the language every day. We bring that 
          first-hand experience directly to you.
        </p>
        <p>
          Got questions or suggestions? Feel free to reach out through our social channels!
        </p>
      </div>
    </div>
  );
}
