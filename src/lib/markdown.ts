import { remark } from "remark";
import remarkGfm from "remark-gfm";
import html from "remark-html";

export async function markdownToHtml(md: string): Promise<string> {
  const result = await remark().use(remarkGfm).use(html).process(md);
  return result.toString();
}
