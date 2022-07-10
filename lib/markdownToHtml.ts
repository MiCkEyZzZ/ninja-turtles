import { remark } from 'remark'
import html from 'remark-html'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import prism from 'remark-prism'

export default async function markdownToHtml(source: any) {
	const file = await remark().use(html, { sanitize: false }).use(prism).use(remarkGfm).use(rehypeSlug).process(source)

	return file.toString()
}
