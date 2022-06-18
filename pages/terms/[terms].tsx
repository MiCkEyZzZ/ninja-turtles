import React, { FC } from 'react'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXProvider } from '@mdx-js/react'

// @ts-ignore
import MDX from '@mdx-js/runtime'

import Layout from '../../layouts/layout'
import { ITerms } from '../../types'

const components = {
  h1: (props: any) => <h1 style={{ color: 'red' }}>{props.children}</h1>,
  p: (props: any) => <p style={{ color: 'green' }}>{props.children}</p>,
}

const Terms: FC<ITerms> = ({ meta, content }) => {
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

export const getStaticProps: GetStaticProps = async (props) => {
  const folderPath = path.join(process.cwd(), 'mdx')
  // @ts-ignore
  const filePath = path.join(folderPath, `${props.params.terms}.mdx`)
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
    paths: [{ params: { terms: 'terms-introduction' } }],
    fallback: false,
  }
}

export default Terms
