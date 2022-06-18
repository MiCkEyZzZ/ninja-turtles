import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import prism from 'remark-prism'

export default async function markdownToHtml(markdown: any) {
  const file = await remark().use(prism).use(remarkGfm).use(html, { sanitize: false }).use(rehypeSlug).process(markdown)

  return file.toString()
}
