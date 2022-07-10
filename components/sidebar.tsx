import React, { FC } from 'react'
import { useContext } from 'react'

import ActiveLink from './ui/activeLink'
import { IAside, PageItem } from '../interfaces'
import { AppContext } from '../context/app.context'

const Sidebar: FC<IAside> = ({ links }): JSX.Element => {
	const { menu, setMenu } = useContext(AppContext)

	const buildFirstLevel = () => {
		return (
			<>
				{links.map((link) => (
					<li key={link.id} className="mt-12 lg:mt-1">
						<h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">{link.name}</h5>
						{buildSecondLevel()}
					</li>
				))}
			</>
		)
	}

	const buildSecondLevel = () => {
		return (
			<ul className="space-y-6 space-x-0 lg:space-y-2 lg:space-x-0 lg:p-0 lg:m-0 border-l border-slate-100 dark:border-slate-700">
				{links.map((l) => (
					<li key={l.id} className="lg-p-0 lg-m-0 lg-space-x-0">
						<ActiveLink
							activeClassName="flex border-l pl-4 -ml-px text-primary hover:text-primary dark:text-sky-400 border-primary dark:border-sky-400 font-semibold dark:text-sky-400"
							href={l.path}
						>
							<a className="flex border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 dark:text-slate-400 text-sm">
								{l.name}
							</a>
						</ActiveLink>
					</li>
				))}
			</ul>
		)
	}

	return (
		<aside className="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto">
			<nav className="fixed top-16 right-0 w-72 h-screen pt-20 px-0 bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border z-10 lg:text-sm lg:leading-6">
				<ul>{buildFirstLevel()}</ul>
			</nav>
		</aside>
	)
}

export default Sidebar
