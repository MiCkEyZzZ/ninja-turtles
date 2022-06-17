import type { NextPage } from 'next'

import Layout from '../layouts/layout'
import { Hero, Showcase, Notify } from '../components'
import leonardo from '../public/1.jpg'
import shredder from '../public/5.jpg'
import donatello from '../public/2.jpg'
import microcandela from '../public/3.jpg'
import splinter from '../public/6.jpg'
import raphael from '../public/4.jpg'

const items = [
    { id: 1, title: 'Леонардо', image: leonardo, status: 'Живой', species: 'Черепаха мутант', lastAppearance: 'Канализация Нью-Йорка', firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс' },
    { id: 2, title: 'Шредер', image: shredder, status: 'Живой', species: 'Человек', lastAppearance: 'Нью-Йорк', firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс' },
    { id: 3, title: 'Донателло', image: donatello, status: 'Живой', species: 'Черепаха мутант', lastAppearance: 'Канализация Нью-Йорка', firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс' },
    { id: 4, title: 'Микеланджело', image: microcandela, status: 'Живой', species: 'Черепаха мутант', lastAppearance: 'Канализация Нью-Йорка', firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс' },
    { id: 5, title: 'Сплинтер', image: splinter, status: 'Живой', species: 'Крыса мутант', lastAppearance: 'Канализация Нью-Йорка', firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс' },
    { id: 6, title: 'Рафаэль', image: raphael, status: 'Живой', species: 'Черепаха мутант', lastAppearance: 'Канализация Нью-Йорка', firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс' },
]

const Homepage: NextPage = () => {
  return (
      <Layout meta={'Главная страница'}>
        <div className='space-y-20 overflow-hidden md:mb-0 md:space-y-25'>
          <Hero />
          <Showcase characters={items} />
          <Notify />
        </div>
      </Layout>
  )
}

export default Homepage
