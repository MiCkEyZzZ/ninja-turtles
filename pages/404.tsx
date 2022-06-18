import React from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter()

  return (
    <div className="flex w-screen h-screen justify-center items-center flex-col text-center px-4">
      <div className="flex w-full max-w-md items-center flex-col sm:flex-row">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight sm:pr-6 sm:mr-6 sm:border-r sm:border-slate-900/10 sm:dark:border-slate-400 dark:text-slate-200">
          404
        </h1>
        <h2 className="mt-2 text-lg text-slate-700 dark:text-slate-400 sm:mt-0">Страница не может быть найдена.</h2>
      </div>
      <div className="flex w-full max-w-md items-center mt-14">
        <button
          type="button"
          className="bg-primary hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-sky-300 text-white-900 font-semibold h-12 px-6 rounded-lg w-full flex items-center dark:ring-0 justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/5 dark:hover:bg-sky-400"
          onClick={() => router.push('/')}
        >
          Вернуться на главная
        </button>
      </div>
    </div>
  )
}

export default NotFound
