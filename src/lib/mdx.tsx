import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

export async function renderMDX(source: string) {
  const compiled = await compile(source, { outputFormat: "function-body" });
  const { default: MDXContent } = await run(String(compiled), {
    ...(runtime as any),
    baseUrl: import.meta.url,
  });
  return MDXContent;
}
