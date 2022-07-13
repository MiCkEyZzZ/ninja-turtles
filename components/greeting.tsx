import React, { FC, memo } from 'react'
import { useRouter } from 'next/router'

import { ru } from '../locales/ru'
import { en } from '../locales/en'

const Greeting: FC = memo(() => {
	const router = useRouter()
	const t = router.locale === 'ru' ? ru : en

	return (
		<section className="text-center px-3 pb-20 lg:pb-32">
			<h2 className="text-4xl tracking-tight font-extrabold sm:text-5xl text-slate-900 dark:text-gray-0 translate-y-0 delay-200 transition-all ease-in-out">
				{t.greeting.title}
			</h2>
			<figure>
				<blockquote>
					<p className="mt-6 max-w-5xl mx-auto text-lg font-normal text-slate-700 dark:text-slate-250">
						Я написал
						<a
							href="https://adamwathan.me/css-utility-classes-and-separation-of-concerns/"
							className="font-semibold text-primary dark:text-sky-400"
						>
							&nbsp;несколько тысяч слов
						</a>{' '}
						о том, почему традиционные “семантические имена классов” являются причиной того, что CSS трудно
						поддерживать, но правда в том, что вы никогда не поверите мне, пока не попробуете это на самом деле. Если вы
						сможете подавить позыв к рвоте достаточно долго, чтобы дать ему шанс, я действительно думаю, вы будете
						удивляться, как вы когда-либо работали с CSS каким-либо другим способом.
					</p>
				</blockquote>
				<figcaption className="mt-6 flex items-center justify-center space-x-4 text-left">
					<img src="/assets/user-1.jpg" alt="" className="w-14 h-14 rounded-full" loading="lazy" />
					<div>
						<div className="text-base font-semibold text-slate-900 dark:text-gray-0">{t.greeting.author}</div>
						<div className="mt-0.5 text-sm font-semibold text-slate-500 dark:text-slate-400 leading-6">
							{t.greeting.position}
						</div>
					</div>
				</figcaption>
			</figure>
		</section>
	)
})

export default Greeting
