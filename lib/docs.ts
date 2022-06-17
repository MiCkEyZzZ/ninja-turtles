import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const docDirectory = join(process.cwd(), 'mdx')

export function getDocBySlug(post: any) {
    const realSlug = post.replace(/\.mdx$/, '')
    const fullPath = join(docDirectory, `${realSlug}.mdx`)
    const docContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(docContents)

    return { slug: realSlug, meta: data, content }
}

export function getAllDocs () {
    const posts = fs.readdirSync(docDirectory)
    const doc = posts.map(post => getDocBySlug(post))

    return doc
}
