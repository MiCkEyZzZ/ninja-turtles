import type { NextPage } from 'next'

import Layout from '../layouts/layout'
import { Hero, Showcase, Notify } from '../components'

const Homepage: NextPage = () => {
  return (
      <Layout meta={'Главная страница'}>
        <div className='space-y-20 overflow-hidden md:mb-0 md:space-y-25'>
          <Hero />
          <Showcase />
          <Notify />
        </div>
      </Layout>
  )
}

export default Homepage
