import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Character } from '../types'

const Card: FC<Character> = ({ character }) => {
  const { id, image, title, species, status, lastAppearance, firstAppearance } = character

  return (
    <figure
      key={id}
      className="flex flex-col sm:flex-row lg:h-auto md:max-h-52 p-8 sm:pt-0 sm:pb-0 sm:pl-0 sm:pr-0 lg:h-64 bg-gray-0 dark:bg-slate-800 border dark:border-slate-800 rounded-xl overflow-hidden"
    >
      <div className="flex relative z-10 overflow-hidden rounded-lg sm:rounded-none flex-none mx-auto sm:mr-auto w-24 h-24 sm:w-48 sm:h-auto">
        <Image
          className="w-24 h-24 sm:w-full md:w-48 object-cover rounded-full sm:rounded-none md:rounded-none mx-auto"
          src={image}
          alt="Leonardo"
          priority={true}
        />
      </div>
      <div className="sm:w-full pt-6 md:pt-2 pb-3 md:pb-2 sm:px-4 lg:px-4 text-back dark:text-gray-200">
        <div className="pb-3">
          <blockquote>
            <h1 className="flex-auto text-xl font-semibold">
              <Link href="#">
                <a className="font-bold hover:text-primary dark:hover:text-sky-400">{title}</a>
              </Link>
            </h1>
            <div className="flex flex-row items-center mt-2">
              <span className="relative flex h-2 w-2 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-100"></span>
              </span>
              <span className="w-full flex-none text-sm font-medium">
                {status} - {species}
              </span>
            </div>
          </blockquote>
        </div>
        <div>
          <figcaption className="font-medium">
            <div className="w-full flex-none text-sm font-medium text-slate-700 dark:text-slate-500">
              <span>Последнее местоположение:</span>
            </div>
            <div className="flex-auto text-sm mt-1 font-bold hover:text-primary dark:hover:text-sky-400">
              <Link href="#">
                <a>{lastAppearance}</a>
              </Link>
            </div>
          </figcaption>
          <figcaption className="font-medium pt-3">
            <div className="w-full flex-none text-sm font-medium text-slate-700 dark:text-slate-500">
              <span>Первое появление:</span>
            </div>
            <div className="flex-auto text-sm mt-1 font-bold hover:text-primary dark:hover:text-sky-400">
              <Link href="#">
                <a>{firstAppearance}</a>
              </Link>
            </div>
          </figcaption>
        </div>
      </div>
    </figure>
  )
}

export default Card
