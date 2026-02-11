export default function MDXContent({ html }: { html: string }) {
  return (
    <div
      className="prose prose-stone max-w-none prose-headings:font-bold prose-headings:text-stone-800 prose-p:leading-relaxed prose-p:text-stone-600 prose-li:text-stone-600 prose-custom"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
