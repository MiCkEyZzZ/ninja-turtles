import React, { FC, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { ActiveLink, ExternalLink } from './index'
import { IHeader } from '../types'
import {
  DarkIcon,
  GithubIcon,
  LanguageIcon,
  LightIcon,
  Logo,
  NavigateIcon,
  RssIcon,
  SearchIcon,
} from '../public/assets'

const Header: FC<IHeader> = ({ navigation, onToggle }) => {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const router = useRouter()

  const isFixed = router.asPath.includes('/docs')

  useEffect(() => setMounted(true), [])

  return (
    <header
      className={
        !isFixed
          ? 'mx-auto w-full bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border-b'
          : 'fixed mx-auto w-full bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border-b z-10'
      }
    >
      <div className="max-w-screen-2xl flex flex-row justify-between md:container md:mx-auto h-16 items-center px-3 sm:px-6 md:px-8">
        <div className="flex items-center pt-4">
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
        </div>
        <div className="flex items-center">
          <button
            type="button"
            className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300"
          >
            <span className="sr-only">Search</span>
            <SearchIcon />
          </button>
          <div className="-my-1 ml-2 -mr-1 md:hidden">
            <button
              type="button"
              className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              onClick={onToggle}
            >
              <span className="sr-only">Navigation</span>
              <NavigateIcon />
            </button>
          </div>
          <div className="hidden md:flex flex-row items-center ml-5">
            <nav className="text-sm leading-6 font-semibold text-gray-750 dark:text-slate-200">
              <ul className="flex space-x-8">
                {navigation.map((nav) => {
                  return (
                    <li key={nav.id} className="flex items-center dark:text-slate-100">
                      <ActiveLink activeClassName="text-primary dark:text-sky-400" href={nav.path}>
                        <a className="flex-auto hover:text-primary dark:hover:text-sky-400">{nav.title}</a>
                      </ActiveLink>
                    </li>
                  )
                })}
              </ul>
            </nav>
            <div className="flex ml-5">
              <ul className="flex">
                <li className="px-3 flex items-center">
                  <button
                    className="border-0 bg-transparent"
                    onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
                  >
                    <span className="hidden">dark/light</span>
                    {mounted && resolvedTheme === 'dark' ? (
                      <DarkIcon className="h-5 w-5 fill-slate-700 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" />
                    ) : (
                      <LightIcon className="h-5 w-5 fill-slate-400 dark:fill-slate-100 hover:fill-primary dark:hover:fill-sky-400" />
                    )}
                  </button>
                </li>
                <li className="px-3 flex-row items-center">
                  <Link href="/languages/language-selection">
                    <a>
                      <LanguageIcon className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" />
                    </a>
                  </Link>
                </li>
                <li className="px-3 flex-row items-center">
                  <span className="hidden">github link</span>
                  <ExternalLink href="https://github.com/MiCkEyZzZ/ninja-turtles-api">
                    <GithubIcon className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" />
                  </ExternalLink>
                </li>
                <li className="pl-3">
                  <span className="hidden">rss</span>
                  <ExternalLink href="/rss.xml">
                    <RssIcon className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" />
                  </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
