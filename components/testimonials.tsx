import React, { FC, memo, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { ru } from '../locales/ru'
import { en } from '../locales/en'

import { generateArray } from '../lib/generateArray'
import useToggle from '../hooks/useToggle'
import { TypeTestimonial, ITestimonials } from '../interfaces'
import { Testimonial } from './index'

const Testimonials: FC<ITestimonials> = memo(({ testimonials }): JSX.Element => {
	const router = useRouter()
	const [isOpen, toggleIsOn] = useToggle()
	const [testimonial, setTestimonial] = useState<TypeTestimonial[][]>([])

	const t = router.locale === 'ru' ? ru : en

	useEffect(() => {
		const result = generateArray(testimonials)
		setTestimonial(result)
	}, [])

	const getTestimonials = useCallback((items: TypeTestimonial[]) => {
		return (
			<>
				{items.map((item: TypeTestimonial) => (
					<Testimonial key={item.id} testimonial={item} />
				))}
			</>
		)
	}, [])

	const getUnitTestimonials = useCallback(() => {
		return (
			<>
				{testimonial.map(
					(items, index: number): JSX.Element => (
						<ul key={index} className="space-y-8 sm:block">
							{getTestimonials(items)}
						</ul>
					),
				)}
			</>
		)
	}, [testimonial])

	return (
		<section className="relative w-full mx-auto px-3 sm:px-6 md:px-8 focus:outline-none">
			<h2 className="sr-only">Рекомендации</h2>
			<div
				className={
					!isOpen
						? 'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] m-auto overflow-hidden max-w-screen-2xl'
						: 'grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 m-auto max-w-screen-2xl'
				}
			>
				{getUnitTestimonials()}
			</div>
			<div
				className={
					!isOpen
						? 'flex absolute bottom-0 justify-center inset-x-0 pt-32 pb-8 bg-gradient-to-t from-gray-0 pointer-events-none dark:from-gray-900'
						: 'inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-gray-0 pt-32 pb-8 pointer-events-none dark:from-gray-900 sticky -mt-52 transition-opacity duration-300 opacity-100'
				}
			>
				<button
					type="button"
					className={
						!isOpen
							? 'relative bg-primary hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-sky-300 dark:highlight-white/5 text-sm text-white-900 dark:text-gray-0 font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-sky-500 dark:hover:bg-sky-400 pointer-events-auto'
							: 'relative bg-primary hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 dark:focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:focus:ring-offset-sky-300 dark:highlight-white/5 text-sm text-white-900 dark:text-gray-0 font-semibold h-12 px-6 rounded-lg flex items-center dark:bg-sky-500 dark:hover:bg-sky-400 transition-transform translate-y-14 pointer-events-auto'
					}
					onClick={toggleIsOn}
				>
					{!isOpen ? `${t.testimonials.buttonMore}` : `${t.testimonials.buttonLes}`}
				</button>
			</div>
		</section>
	)
})

export default Testimonials
