import React from 'react'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXProvider } from '@mdx-js/react'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import MDX from '@mdx-js/runtime'

import siteConfig from '../../config/siteConfig'
import { ISnippet } from '../../interfaces'
import SnippetsLayout from '../../layouts/snippets'

const components = {
	h1: (props: any) => (
		<h1 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
			{props.children}
		</h1>
	),
	h2: (props: any) => (
		<h2 className="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
			{props.children}
		</h2>
	),
	h3: (props: any) => <h3 style={{ color: 'red' }}>{props.children}</h3>,
	h4: (props: any) => <h4 style={{ color: 'red' }}>{props.children}</h4>,
	p: (props: any) => <p style={{ color: 'green' }}>{props.children}</p>,
}

const LanguagesPage = ({ language }: { language: ISnippet }): JSX.Element => {
	return (
		<SnippetsLayout snippet={language}>
			<div className="grid grid-cols-1 grid-rows-1 px-3 sm:px-6 md:px-6 lg:px-8 overflow-hidden">
				<div className="flex flex-col max-w-screen-md min-h-[65rem] lg:prose-xl w-screen m-auto py-16 px-6 text-slate-900 dark:text-gray-0">
					<MDXProvider components={components}>
						<MDX>{language.content}</MDX>
					</MDXProvider>
					<ul className="flex flex-wrap mt-5">
						{siteConfig.langs.map((lang) => {
							return (
								<li key={lang.id} className="w-1/4 py-5">
									<Link href={lang.href} locale={lang.locale}>
										<a className="text-lg text-slate-900 hover:text-primary dark:text-gray-0 dark:hover:text-sky-400 font-bold">
											{lang.title}
										</a>
									</Link>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</SnippetsLayout>
	)
}

export const getStaticProps: GetStaticProps = async (props) => {
	const folderPath = path.join(process.cwd(), 'data/snippets')
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const filePath = path.join(folderPath, `${props.params.languages}.mdx`)
	const rawFileSource = fs.readFileSync(filePath)

	const { content, data } = matter(rawFileSource)

	return {
		props: {
			language: {
				...data,
				content,
			},
		},
	}
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [{ params: { languages: 'language-selection' } }],
		fallback: false,
	}
}

export default LanguagesPage
