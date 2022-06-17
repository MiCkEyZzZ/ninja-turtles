import React, { FC } from 'react'
import Link from 'next/link'

import { IPopover } from '../types'

const Popover: FC<IPopover> = ({ theme, setTheme, setMenu }) => {
    return (
        <>
            <div id="headlessui-portal-root">
                <div>
                    <div className="fixed z-50 inset-0 md:hidden" id="headlessui-dialog-1" role="dialog" aria-modal="true">
                        <div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80" id="headlessui-dialog-overlay-9" aria-hidden="true"></div>
                        <div className="fixed top-4 right-4 w-full max-w-xs bg-gray-0 rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
                            <button
                                type="button"
                                className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
                                onClick={() => setMenu(false)}
                            ><span className="sr-only">Close navigation</span>
                                <svg viewBox="0 0 10 10" className="w-2.5 h-2.5 overflow-visible" aria-hidden="true"><path d="M0 0L10 10M10 0L0 10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></path></svg>
                            </button>
                            <ul className="space-y-6">
                                <li>
                                    <Link href="/mdx/installation">
                                        <a className='hover:text-primary dark:hover:text-sky-400'>Документация</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="https://tailwindui.com">
                                        <a className="hover:text-primary dark:hover:text-sky-400">О нас</a>
                                    </Link></li>
                                <li>
                                    <Link href="/blog">
                                        <a className="hover:text-primary dark:hover:text-sky-400">Поддержать</a>
                                    </Link>
                                </li>
                                <li>
                                    <a href="https://github.com/MiCkEyZzZ/ninja-turtles-api" className="hover:text-primary dark:hover:text-sky-400">GitHub</a>
                                </li>
                            </ul>
                            <div className="flex flex-row mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
                                <div className="flex items-center justify-between py-1 mr-2">
                                    <div className="relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200 hover:bg-primary dark:hover:bg-sky-400">
                                        <button
                                            className='border-0 bg-transparent'
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                        >
                                            <span className='hidden'>dark/light</span>
                                            {theme === 'dark' ? <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-slate-700 dark:fill-slate-100" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                                </svg>
                                                : <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-slate-700 dark:fill-slate-100" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                                                </svg>
                                            }
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-1 mr-2">
                                    <div className='relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200 hover:bg-primary dark:hover:bg-sky-400'>
                                        <Link href='/language'>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-slate-700 dark:fill-slate-100" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clipRule="evenodd" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between py-1">
                                    <div className='relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200 hover:bg-primary dark:hover:bg-sky-400'>
                                        <Link href='/language'>
                                            <a>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-slate-700 dark:fill-slate-100" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M5 3a1 1 0 000 2c5.523 0 10 4.477 10 10a1 1 0 102 0C17 8.373 11.627 3 5 3z" />
                                                    <path d="M4 9a1 1 0 011-1 7 7 0 017 7 1 1 0 11-2 0 5 5 0 00-5-5 1 1 0 01-1-1zM3 15a2 2 0 114 0 2 2 0 01-4 0z" />
                                                </svg>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Popover
