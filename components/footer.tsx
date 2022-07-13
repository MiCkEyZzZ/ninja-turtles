import React, { FC, memo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ru } from '../locales/ru'
import { en } from '../locales/en'

import { IFooter } from '../interfaces'
import { OutIcon } from '../public/assets'
import { ActiveLink, ExternalLink } from './index'
import { getCurrentYear } from '../lib/getCurrentYear'

const Footer: FC<IFooter> = memo(({ footerLinks, moreLinks, quickLinks }): JSX.Element => {
	const router = useRouter()
	const year = getCurrentYear()
	const t = router.locale === 'ru' ? ru : en

	const documentBlockLinks = () => {
		return (
			<>
				{quickLinks.map((item) => {
					return (
						<li
							key={item.id}
							className="flex flex-row items-center text-sm leading-6 hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400"
						>
							<Link href={item.path}>
								<a>{item.title}</a>
							</Link>
						</li>
					)
				})}
			</>
		)
	}

	const chanelBlockLinks = () => {
		return (
			<>
				{footerLinks.map((item) => {
					return (
						<li
							key={item.id}
							className="flex flex-row items-center text-sm leading-6 hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400"
						>
							<ExternalLink href={item.path}>{item.title}</ExternalLink>
							<span className="ml-2">
								<OutIcon className="h-4 w-4" />
							</span>
						</li>
					)
				})}
			</>
		)
	}

	const moreBlockLinks = () => {
		return (
			<>
				{moreLinks.map((item) => {
					return (
						<li
							key={item.id}
							className="flex flex-row items-center text-sm leading-6 hover:text-primary dark:hover:text-sky-400 hover:fill-primary dark:hover:fill-sky-400"
						>
							<ActiveLink activeClassName="text-primary dark:text-sky-400" href={item.path}>
								<a>{item.title}</a>
							</ActiveLink>
						</li>
					)
				})}
			</>
		)
	}

	return (
		<footer className="w-full text-sm leading-6 bg-slate-50 dark:bg-zinc-850 border-gray-150 dark:border-gray-800 border-t">
			<div className="grid grid-rows-1 sm:grid-rows-1 md:grid-rows-1 md:grid-cols-2 gap-y-5 md:gap-y-0 lg:gap-x-80 max-w-screen-2xl mx-auto px-3 sm:px-6 md:px-0 py-8">
				<div className="grid grid-rows-1 sm:grid-rows-2 md:grid-rows-5 lg:w-7/12 order-2 md:order-1">
					<div>
						<h2 className="text-xl font-extrabold text-gray-750 dark:text-gray-0">{t.footer.title}</h2>
					</div>
					<div className="text-sm leading-6 font-semibold text-slate-500 dark:text-slate-400">
						<small className="text-sm leading-6">
							{t.footer.copyright} © <time dateTime={year.toString()}>{year}</time> - Mickey_Zzz.
						</small>
						<address className="not-italic">
							<p className="text-sm leading-6">
								{t.footer.made} ❤️ 🙌 {t.footer.place}
							</p>
						</address>
					</div>
				</div>
				<div className="grid grid-cols-2 sm:grid-cols-3 grid-rows-1 md:grid-rows-1 lg:gap-2 items-stretch order-1 md:order-2">
					<div className="row-auto">
						<ul className="mt-1 md:mt-3 space-y-2 font-semibold text-slate-500 dark:text-slate-400">
							<li className="text-gray-750 font-semibold dark:text-slate-100">{t.footer.docs.title}</li>
							{documentBlockLinks()}
						</ul>
					</div>
					<div className="row-auto mb-3 sm:mb-0">
						<ul className="mt-1 md:mt-3 space-y-2 fill-slate-700 font-semibold text-slate-500 dark:text-slate-400">
							<li className="text-gray-750 font-semibold dark:text-slate-100">{t.footer.channels.title}</li>
							{chanelBlockLinks()}
						</ul>
					</div>
					<div className="row-auto">
						<ul className="mt-1 md:mt-3 space-y-2 font-semibold text-slate-500 dark:text-slate-400">
							<li className="text-gray-750 font-semibold dark:text-slate-100">{t.footer.more.title}</li>
							{moreBlockLinks()}
						</ul>
					</div>
				</div>
			</div>
		</footer>
	)
})

export default Footer
