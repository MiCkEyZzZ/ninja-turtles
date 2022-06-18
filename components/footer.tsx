import React, { FC } from 'react'
import Link from 'next/link'

import { ActiveLink, ExternalLink } from './index'
import { IFooter } from '../types'
import { OutIcon } from '../public/assets'

const Footer: FC<IFooter> = ({ footerLinks, moreLinks, quickLinks }) => {
  const year = new Date()

  return (
    <footer className="py-8 text-sm leading-6 bg-slate-50 dark:bg-zinc-850 border-gray-150 dark:border-gray-800 border-t">
      <div className="max-w-screen-2xl flex flex-col md:flex-col lg:flex-row mx-auto lg:justify-between px-3 sm:px-6 md:px-8">
        <div className="flex flex-col lg:w-3/12 pt-6 lg:pt-0 lg:my-5 lg:my-0 lg:h-60 order-2 lg:order-1 border-t border-slate-200 dark:border-slate-200/10 lg:border-none">
          <div>
            <h2 className="text-xl font-extrabold text-gray-900 dark:text-gray-0">Черепашки</h2>
          </div>
          <div className="w-96 text-sm leading-6 text-slate-700 dark:text-slate-500">
            <p className="mt-3 text-sm">Авторское право © {year.getFullYear()} - Mickey_Zzz.</p>
            <p className="mt-1 text-sm">Сделано с ❤ 🙌 в Кунгуре, Россия</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center item-center lg:w-1/10 pb-8 md:pb-8 lg:pb-0 space-y-3 md:space-y-0 sm:space-y-8 lg:space-y-0 lg:flex lg:space-y-0 order-1 lg:order-2">
          <div className="flex-none w-full md:w-36 space-y-10 mx-auto md:mx-0 lg:md:mx-auto sm:space-y-8 lg:flex lg:space-y-0 lg:h-60 mr-0 md:mr-1">
            <ul className="mt-1 md:mt-3 space-y-1 text-slate-700 dark:text-slate-500">
              <li className="font-semibold text-slate-900 dark:text-slate-100">Документация</li>
              {quickLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={item.path}>
                      <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">{item.title}</a>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex-none w-full md:w-36 space-y-10 mx-auto sm:space-y-8 lg:flex lg:space-y-0 lg:h-60 mr-0 md:mr-1">
            <ul className="mt-1 md:mt-3 space-y-1 text-slate-700 fill-slate-700 dark:text-slate-500">
              <li className="font-semibold text-slate-900 dark:text-slate-100">Каналы</li>
              {footerLinks.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex flex-row items-center hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400"
                  >
                    <ExternalLink href={item.path}>{item.title}</ExternalLink>
                    <span className="ml-2">
                      <OutIcon className="h-4 w-4" />
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className="flex-none w-full md:w-36 space-y-10 mx-auto sm:space-y-8 lg:flex lg:space-y-0 lg:h-60 mr-0 md:mr-0">
            <ul className="mt-1 md:mt-3 space-y-1 text-slate-700 dark:text-slate-500">
              <li className="font-semibold text-slate-900 dark:text-slate-100">Дополнительно</li>
              {moreLinks.map((item) => {
                return (
                  <li key={item.id}>
                    <ActiveLink activeClassName="text-primary dark:text-sky-400" href={item.path}>
                      <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">{item.title}</a>
                    </ActiveLink>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
