import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path, { join } from 'path'
import matter from 'gray-matter'
import { MDXRemote } from 'next-mdx-remote'

import { ISnippet } from '../../interfaces'
import SnippetsLayout from '../../layouts/snippets'
import components from '../../components/MDXComponents'

const AboutPage = ({ about }: { about: ISnippet }): JSX.Element => {
	return (
		<SnippetsLayout snippet={about}>
			<div className="grid grid-cols-1 grid-rows-1 px-3 sm:px-6 md:px-6 lg:px-8 overflow-hidden">
				<div className="max-w-screen-md min-h-[65rem] lg:prose-xl w-screen m-auto py-16 px-6 text-slate-900 dark:text-gray-0">
					<MDXRemote {...about.content} components={components} />
				</div>
			</div>
		</SnippetsLayout>
	)
}

const DOCS_PATH = join(process.cwd(), 'data/snippets')

export const getStaticProps: GetStaticProps = async (props) => {
	const folderPath = path.join(process.cwd(), 'data/snippets')
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const filePath = path.join(folderPath, `${props.params.about}.mdx`)
	const rawFileSource = fs.readFileSync(filePath)

	const { content, data } = matter(rawFileSource)

	return {
		props: {
			about: {
				...data,
				content,
			},
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { about: 'about-us' } }],
		fallback: false,
	}
}

export default AboutPage
