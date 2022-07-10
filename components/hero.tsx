import React from 'react'
import { useRouter } from 'next/router'

import { Button, ButtonIcon } from '.'

const Hero = (): JSX.Element => {
	const router = useRouter()

	return (
		<section className="w-full">
			<div className="max-w-screen-2xl text-center py-20 sm:py-20 md:py-32 lg:py-32 px-3 m-auto sm:px-6 md:px-8">
				<h1 className="text-gray-750 translate-y-0 delay-200 transition-all ease-in-out font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center dark:text-gray-0">
					Черепашки-ниндзя API
				</h1>
				<p className="mt-6 text-lg text-slate-600 text-center max-w-5xl mx-auto dark:text-slate-400 tracking-wide clear-both">
					Добро пожаловать в API, который предоставит вам лучший опыт разработки для создания готовой версии продукта.
				</p>
				<div className="flex-row mt-6 sm:mt-10 flex justify-center space-x-6 text-sm">
					<Button
						className="bg-primary hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-sky-300 text-white-900 dark:text-gray-0 font-semibold h-12 px-6 rounded-lg w-full flex items-center dark:ring-0 justify-center sm:w-auto dark:bg-sky-500 dark:highlight-white/5 dark:hover:bg-sky-400"
						onClick={() => router.push('/docs/introduction')}
						aria-label="Кнопка позволяющая перейти на страницу с документацией"
						title="Кнопка начать"
					>
						<span className="sr-only">Кнопка позволяющая перейти на страницу с документацией</span>
						Начать
					</Button>
					<ButtonIcon
						className="hidden sm:flex items-center w-72 text-left space-x-3 px-4 h-12 bg-white ring-1 ring-slate-900/10 hover:ring-slate-300 focus:outline-none focus:ring-2 focus:ring-primary shadow-sm rounded-lg text-slate-400 dark:bg-slate-800 dark:ring-0 dark:text-slate-300 dark:highlight-white/5 dark:hover:bg-slate-700"
						aria-label="Кнопка открытия модального окна для осуществления поиска по сайту"
						styleIcon={'flex-none text-slate-300 dark:text-slate-400'}
						icon={'search'}
					>
						<span className="flex-auto font-normal text-slate-300 dark:text-slate-400">Быстрый поиск...</span>
						<kbd className="font-sans font-semibold dark:text-slate-500">
							<abbr title="Control" className="no-underline text-slate-300 dark:text-slate-500">
								Ctrl{' '}
							</abbr>{' '}
							K
						</kbd>
					</ButtonIcon>
				</div>
			</div>
		</section>
	)
}

export default Hero
