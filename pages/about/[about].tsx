import React, { FC } from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { MDXProvider } from '@mdx-js/react'
// @ts-ignore
import MDX from '@mdx-js/runtime'

import Layout from '../../layouts/layout'
import { IAbout } from '../../types'

const components = {
  h1: (props: any) => <h1 className="prose lg:prose-xl">{props.children}</h1>,
  h2: (props: any) => <h2 className="prose lg:prose-xl">{props.children}</h2>,
  h3: (props: any) => <h3 className="prose lg:prose-xl">{props.children}</h3>,
  h4: (props: any) => <h4 className="prose lg:prose-xl">{props.children}</h4>,
  p: (props: any) => <p className="prose prose-p-{3}">{props.children}</p>,
}

const About: FC<IAbout> = ({ meta, content }) => {
  return (
    <Layout meta={meta}>
      <div className="overflow-hidden md:mb-0 pt-16 min-h-[65rem]">
        <section className="flex justify-center w-full items-center">
          <div className="flex flex-row">
            <div className="flex flex-col px-0 pt-0 pb-5">
              <div className="lg:prose-xl w-screen max-w-screen-md m-auto text-slate-900 dark:text-gray-0">
                <MDXProvider components={components}>
                  <MDX>{content}</MDX>
                </MDXProvider>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const folderPath = path.join(process.cwd(), 'mdx')
  // @ts-ignore
  const { about } = params

  const filePath = path.join(folderPath, `${about}.mdx`)
  const rawFileSource = fs.readFileSync(filePath)

  const { content, data } = matter(rawFileSource)

  return {
    props: {
      ...data,
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { about: 'about-us' } }],
    fallback: false,
  }
}

export default About
