import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'pretty'

async function generate() {
	const prettierConfig = await prettier.resolveConfig('./.prettier.js')
	const pages = await globby([
		'pages/*.tsx',
		'mdx/**/*.mdx',
		'!mdx/*.mdx',
		'!pages/_*.tsx',
		'!pages/api',
		'!pages/404.tsx',
	])

	const sitemap = ``
}

generate()
