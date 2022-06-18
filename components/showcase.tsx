import React, { FC } from 'react'

import { IShowcase } from '../types'
import { Card } from './index'

const Showcase: FC<IShowcase> = ({ characters }) => {
  return (
    <section className="max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 sm:max-w-lg sm:mx-auto md:grid-col-2 lg:max-w-fit lg:gap-6 lg:grid-cols-3">
        {characters.map((character) => {
          return <Card key={character.id} character={character} />
        })}
      </div>
    </section>
  )
}

export default Showcase
