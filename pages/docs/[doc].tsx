import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'

import { IDocs } from '../../interfaces'
import DocsLayout from '../../layouts/docs'
import markdownToHtml from '../../lib/markdownToHtml'
import matter from 'gray-matter'
import path from 'path'
import { MDXProvider } from '@mdx-js/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MDX from '@mdx-js/runtime'

const components = {}

const Doc = ({ doc }: { doc: IDocs }): JSX.Element => {
	return (
		<DocsLayout doc={doc}>
			<div className="grid grid-cols-1 grid-rows-1 px-3 sm:px-6 md:px-6 lg:px-8 overflow-hidden">
				<div className="md:max-w-screen-md min-h-[65rem] lg:prose-xl w-screen m-auto py-16 text-slate-900 dark:text-gray-0">
					<MDXProvider components={components}>
						<MDX>{doc.content}</MDX>
					</MDXProvider>
				</div>
			</div>
		</DocsLayout>
	)
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
	const docDirectory = path.join(process.cwd(), 'data/content')
	const { doc } = params as any
	const realSlug = doc.replace(/\.mdx$/, '')
	const fullPath = path.join(docDirectory, `${realSlug}.mdx`)
	const docContents = fs.readFileSync(fullPath, 'utf8')
	const { data, content } = matter(docContents)

	const cont = await markdownToHtml(content || '')

	return {
		props: {
			doc: {
				...data,
				cont,
			},
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [
			{ params: { doc: 'introduction' } },
			{ params: { doc: 'characters' } },
			{ params: { doc: 'locations' } },
			{ params: { doc: 'episodes' } },
			{ params: { doc: 'libraries' } },
		],
		fallback: true,
	}
}

export default Doc
