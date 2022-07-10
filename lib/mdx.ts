import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import remarkSlug from 'remark-slug'
import remarkAutolinkHeadings from 'remark-autolink-headings'

import { DocByType, DocType, FrontMatterDocType } from '../interfaces'

const typeToPath = {
	[DocType.DOC]: 'doc',
	[DocType.SNIPPET]: 'snippet',
}

const root = process.cwd()

export const getFiles = async (type: DocType) => {
	return fs.readdirSync(join(root, typeToPath[type]))
}

export const getFileBySlug = async <T extends DocType>(type: T, slug: string): Promise<FrontMatterDocType<T>> => {
	const source = fs.readFileSync(join(root, typeToPath[type], `${slug}.mdx`), 'utf8')
	const parsedFile = matter(source)
	const data = parsedFile.data
	const content = parsedFile.content

	const mdxSource = await serialize(content, {
		mdxOptions: {
			remarkPlugins: [remarkSlug, remarkAutolinkHeadings],
		},
	})

	if (type === DocType.DOC) {
		const result = {
			mdxSource,
			frontMatter: {
				...data,
			},
		}

		return result as unknown as FrontMatterDocType<T>
	}

	return {
		mdxSource,
		frontMatter: {
			...data,
		},
	} as unknown as FrontMatterDocType<T>
}

export const getAllFilesFrontMatter = async <T extends DocType>(type: T): Promise<Array<DocByType<T>>> => {
	const files = fs.readdirSync(join(root, typeToPath[type]))

	const docs = files.map((docSlug: string) => {
		const source = fs.readFileSync(join(root, typeToPath[type], docSlug), 'utf-8')
		const parsedFile = matter(source)

		return parsedFile.data as DocByType<T>
	})

	return docs
}
