import React from 'react'
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()

  return (
    <section className="max-w-screen-2xl mx-auto pt-20 sm:pt-24 lg:pt-32 text-center px-3 sm:px-6 md:px-8">
      <h1 className="text-gray-750 translate-y-0 delay-200 transition-all ease-in-out delay-200 font-extrabold text-4xl sm:text-5xl lg:text-5xl5 tracking-tight text-center dark:text-gray-0">
        Черепашки-ниндзя API
      </h1>
      <p className="mt-6 text-lg text-gray-750 text-center max-w-5xl mx-auto dark:text-slate-400">
        API предоставляет вам лучший опыт разработки со всеми функциями, необходимыми для готовой версии продукта
      </p>
      <div className="flex flex-row mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
        <button
          onClick={() => router.push('/docs/introduction')}
          className="bg-primary hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-sky-300 text-white-900 dark:text-gray-0 font-semibold h-12 px-6 rounded-lg w-full flex items-center dark:ring-0 justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/5 dark:hover:bg-sky-400"
        >
          Документация
        </button>
        <button className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="flex-none text-slate-300 dark:text-slate-400"
            aria-hidden="true"
          >
            <path d="m19 19-3.5-3.5"></path>
            <circle cx="11" cy="11" r="6"></circle>
          </svg>
          <span className="flex-auto">Быстрый поиск...</span>
          <kbd className="font-sans font-semibold dark:text-slate-500">
            <abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">
              Ctrl{' '}
            </abbr>{' '}
            K
          </kbd>
        </button>
      </div>
    </section>
  )
}

export default Hero
