import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXProvider } from '@mdx-js/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MDX from '@mdx-js/runtime'

import { ISnippet } from '../../interfaces'
import SnippetsLayout from '../../layouts/snippets'

const components = {
	h1: (props: any) => <h1 style={{ color: 'red' }}>{props.children}</h1>,
	p: (props: any) => <p style={{ color: 'green' }}>{props.children}</p>,
}

const TermsPage = ({ term }: { term: ISnippet }): JSX.Element => {
	return (
		<SnippetsLayout snippet={term}>
			<div className="grid grid-cols-1 grid-rows-1 px-3 sm:px-6 md:px-6 lg:px-8 overflow-hidden">
				<div className="md:max-w-screen-md min-h-[65rem] lg:prose-xl w-screen m-auto py-16 text-slate-900 dark:text-gray-0">
					<MDXProvider components={components}>
						<MDX>{term.content}</MDX>
					</MDXProvider>
				</div>
			</div>
		</SnippetsLayout>
	)
}

export const getStaticProps: GetStaticProps = async (props) => {
	const folderPath = path.join(process.cwd(), 'data/snippets')
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const filePath = path.join(folderPath, `${props.params.terms}.mdx`)
	const rawFileSource = fs.readFileSync(filePath)

	if (!rawFileSource) {
		return { notFound: true }
	}

	const { content, data } = matter(rawFileSource)

	return {
		props: {
			term: {
				...data,
				content,
			},
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { terms: 'terms-of-use' } }],
		fallback: false,
	}
}

export default TermsPage
