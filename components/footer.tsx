import React from 'react'
import Link from 'next/link'

import { ActiveLink } from './index'

const Footer = () => {
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
            <p className="mt-1 text-sm">Сделано с ❤️ 🙌 в Кунгуре, Россия</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center item-center lg:w-1/10 pb-8 md:pb-8 lg:pb-0 space-y-3 md:space-y-0 sm:space-y-8 lg:space-y-0 lg:flex lg:space-y-0 order-1 lg:order-2">
          <div className="flex-none w-full md:w-36 space-y-10 mx-auto md:mx-0 lg:md:mx-auto sm:space-y-8 lg:flex lg:space-y-0 lg:h-60 mr-0 md:mr-1">
            <ul className="mt-1 md:mt-3 space-y-1 text-slate-700 dark:text-slate-500">
              <li className="font-semibold text-slate-900 dark:text-slate-100">Документация</li>
              <li>
                <Link href="/docs/introduction">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Введение</a>
                </Link>
              </li>
              <li>
                <Link href="/docs/characters">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Персонажи</a>
                </Link>
              </li>
              <li>
                <Link href="/docs/locations">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Местоположение</a>
                </Link>
              </li>
              <li>
                <Link href="/docs/episodes">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Серии</a>
                </Link>
              </li>
              <li>
                <Link href="/docs/libraries">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Библиотеки</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex-none w-full md:w-36 space-y-10 mx-auto sm:space-y-8 lg:flex lg:space-y-0 lg:h-60 mr-0 md:mr-1">
            <ul className="mt-1 md:mt-3 space-y-1 text-slate-700 fill-slate-700 dark:text-slate-500">
              <li className="font-semibold text-slate-900 dark:text-slate-100">Каналы</li>
              <li className="flex flex-row items-center hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400">
                <Link href="/">
                  <a>Вконтакте</a>
                </Link>
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </span>
              </li>
              <li className="flex flex-row items-center hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400">
                <Link href="/">
                  <a>Яндекс Дзен</a>
                </Link>
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </span>
              </li>
              <li className="flex flex-row items-center hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400">
                <Link href="/">
                  <a>Telegram</a>
                </Link>
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </span>
              </li>
              <li className="flex flex-row items-center hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400">
                <Link href="/">
                  <a>Хабр</a>
                </Link>
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </span>
              </li>
              <li className="flex flex-row items-center hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400">
                <Link href="/">
                  <a>Stack Overflow</a>
                </Link>
                <span className="ml-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex-none w-full md:w-36 space-y-10 mx-auto sm:space-y-8 lg:flex lg:space-y-0 lg:h-60 mr-0 md:mr-0">
            <ul className="mt-1 md:mt-3 space-y-1 text-slate-700 dark:text-slate-500">
              <li className="font-semibold text-slate-900 dark:text-slate-100">Дополнительно</li>
              <li>
                <ActiveLink activeClassName="text-primary dark:text-sky-400" href="/privacy/privacy-introduction">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Конфиденциальность</a>
                </ActiveLink>
              </li>
              <li>
                <ActiveLink activeClassName="text-primary dark:text-sky-400" href="/terms/terms-introduction">
                  <a className="text-fill-slate-300 hover:text-primary dark:hover:text-sky-400">Условия</a>
                </ActiveLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
