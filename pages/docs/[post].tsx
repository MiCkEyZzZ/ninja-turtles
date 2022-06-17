import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import markdownToHtml from '../../lib/markdown'
import Layout from '../../layouts/layout'
import { Aside } from '../../components'
import { IPost } from '../../types'

const items = [
    { id: 1,name: 'Введение', path: '/docs/introduction' },
    { id: 2,name: 'Персонажи', path: '/docs/characters' },
    { id: 3,name: 'Местоположение', path: '/docs/locations' },
    { id: 4,name: 'Серии', path: '/docs/episodes' },
    { id: 5,name: 'Библиотеки', path: '/docs/libraries' }
]

const Post: FC<IPost> = ({ meta, cont }) => {
    return (
        <Layout meta={meta}>
            <div className='overflow-hidden md:mb-0 pt-32 min-h-[65rem]'>
                <section className='flex justify-center w-full items-center'>
                    <div className='flex flex-row'>
                        <div className='flex flex-col px-0 pt-0 pb-5'>
                            <div className='flex flex-col md:flex-row justify-between w-full max-w-screen-2xl items-center md:px-0 md:py-0'>
                                <article
                                    className="lg:prose-xl max-w-3xl m-auto text-slate-900 dark:text-gray-0"
                                    dangerouslySetInnerHTML={{ __html: cont }}
                                />
                            </div>
                        </div>
                        <Aside links={items} />
                    </div>
                </section>
            </div>
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const docDirectory = path.join(process.cwd(), 'mdx')
    const { post } = params as any
    const realSlug = post.replace(/\.mdx$/, '')
    const fullPath = path.join(docDirectory, `${realSlug}.mdx`)
    const docContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(docContents)

    const cont = await markdownToHtml(content || '')

    return {
        props: {
            ...data,
            cont
        },
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: [
            { params: { post: "introduction" } },
            { params: { post: "characters" } },
            { params: { post: "locations" } },
            { params: { post: "episodes" } },
            { params: { post: "libraries" } },
        ],
        fallback: false
    }
}

export default Post
