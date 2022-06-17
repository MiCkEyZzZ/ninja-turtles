import React, { FC } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'

import logo from '../public/logo.svg'
import { ActiveLink } from './index'
import { IHeader } from '../types'

const Header: FC<IHeader> = ({ navigation, onToggle }) => {
    const router = useRouter()
    const { theme, setTheme } = useTheme()

    const isFixed = router.asPath.includes('/docs')

    return (
        <>
            <header className={!isFixed
                ? 'mx-auto w-full bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border-b'
                : 'fixed mx-auto w-full bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border-b z-10'}>
                <div className='max-w-screen-2xl flex flex-row justify-between md:container md:mx-auto h-16 items-center px-3 sm:px-6 md:px-8'>
                    <div className='flex items-center pt-4'>
                        <Link href='/'>
                            <a>
                                <Image src={logo} width='80' height='50' alt='logo' />
                            </a>
                        </Link>
                    </div>
                    <div className='flex items-center'>
                        <button type="button" className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300">
                            <span className="sr-only">Search</span>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2"
                                 strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="m19 19-3.5-3.5"></path>
                                <circle cx="11" cy="11" r="6"></circle>
                            </svg>
                        </button>
                        <div className="-my-1 ml-2 -mr-1 md:hidden">
                            <button
                                type="button"
                                className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                                onClick={onToggle}>
                                <span className="sr-only">Navigation</span>
                                <svg width="24" height="24" fill="none" aria-hidden="true">
                                    <path
                                        d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                                        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                        <div className='hidden md:flex flex-row items-center ml-5'>
                            <nav>
                                <ul className='flex flex-row items-center space-x-8'>
                                    {navigation.map((nav) => {
                                        return (
                                            <li key={nav.title} className='flex items-center text-slate-700 dark:text-slate-100'>
                                                <ActiveLink activeClassName='text-primary dark:text-sky-400' href={nav.path}>
                                                    <a className='flex-auto text-sm font-semibold hover:text-primary dark:hover:text-sky-400'>{nav.title}</a>
                                                </ActiveLink>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </nav>
                            <div className='flex ml-5'>
                                <ul className='flex'>
                                    <li className='px-3 flex items-center'>
                                        <button
                                            className='border-0 bg-transparent'
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        >
                                            <span className='hidden'>dark/light</span>
                                            {theme === 'dark'
                                                ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-700 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                                  </svg>
                                                : <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-400 dark:fill-slate-100 hover:fill-primary dark:hover:fill-sky-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                                  </svg>
                                            }
                                        </button>
                                    </li>
                                    <li className='px-3 flex-row items-center'>
                                        <Link href='/languages/language-selection'>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </li>
                                    <li className='px-3 flex-row items-center'>
                                        <span className='hidden'>github link</span>
                                        <a href="https://github.com/MiCkEyZzZ/ninja-turtles-api" target="_blank" rel="noreferrer">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M12 2.247a10 10 0 00-3.162 19.487c.5.088.687-.212.687-.475 0-.237-.012-1.025-.012-1.862-2.513.462-3.163-.613-3.363-1.175a3.636 3.636 0 00-1.025-1.413c-.35-.187-.85-.65-.013-.662a2.001 2.001 0 011.538 1.025 2.137 2.137 0 002.912.825 2.104 2.104 0 01.638-1.338c-2.225-.25-4.55-1.112-4.55-4.937a3.892 3.892 0 011.025-2.688 3.594 3.594 0 01.1-2.65s.837-.262 2.75 1.025a9.427 9.427 0 015 0c1.912-1.3 2.75-1.025 2.75-1.025a3.593 3.593 0 01.1 2.65 3.869 3.869 0 011.025 2.688c0 3.837-2.338 4.687-4.563 4.937a2.368 2.368 0 01.675 1.85c0 1.338-.012 2.413-.012 2.75 0 .263.187.575.687.475A10.005 10.005 0 0012 2.247z" />
                                            </svg>
                                        </a>
                                    </li>
                                    <li className='pl-3'>
                                        <span className='hidden'>rss</span>
                                        <a href='/rss.xml' target='_blank'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                                                <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header
