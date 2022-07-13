import React, { FC, useEffect, useState, KeyboardEvent, memo } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useTheme } from 'next-themes'

import { IHeader } from '../interfaces'
import { ActiveLink, ButtonIcon, ExternalLink } from './index'
import { GithubIcon, LanguageIcon, LogoIcon, RssIcon } from '../public/assets/index'

const Header: FC<IHeader> = memo(({ navigation, onToggle }): JSX.Element => {
	const [mounted, setMounted] = useState(false)
	const { resolvedTheme, setTheme } = useTheme()

	const router = useRouter()

	const isFixed = router.asPath.includes('/docs')

	const handleTabLinkKey = (key: KeyboardEvent) => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault()
			router.push('/languages/language-selection')
		}
	}

	useEffect(() => setMounted(true), [])

	const navigateLinks = () => {
		return (
			<>
				{navigation.map((nav) => {
					return (
						<li key={nav.id} className="flex items-center dark:text-slate-100 outline-offset-0">
							<ActiveLink activeClassName="text-primary dark:text-sky-400" href={nav.path}>
								<a className="flex-auto hover:text-primary dark:hover:text-sky-400">{nav.title}</a>
							</ActiveLink>
						</li>
					)
				})}
			</>
		)
	}

	return (
		<header
			className={
				!isFixed
					? 'mx-auto w-full bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border-b z-10'
					: 'fixed mx-auto w-full bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border-b z-10'
			}
		>
			<div className="max-w-screen-2xl flex flex-row justify-between md:container md:mx-auto h-16 items-center px-3 sm:px-6 md:px-0">
				<div className="flex items-center">
					<Link href="/" title="Главный логотип и ссылка на главную страницу">
						<a className="flex h-max pt-3 px-2 outline-offset-1" title="Логотип сайта">
							<LogoIcon />
						</a>
					</Link>
				</div>
				<div className="flex items-center">
					<ButtonIcon
						type="button"
						className="text-slate-500 hover:text-slate-600 w-8 h-8 -my-1 flex items-center justify-center md:hidden dark:hover:text-slate-300"
						aria-label="Кнопка открытия модального окна для осуществления поиска по сайту"
						title="Кнопка открытия модального окна для осуществления поиска по сайту"
						icon={'search'}
					>
						<span className="sr-only">Поиск</span>
					</ButtonIcon>
					<div className="-my-1 ml-2 -mr-1 md:hidden">
						<ButtonIcon
							type="button"
							className="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
							onClick={onToggle}
							aria-label="Кнопка для открытия меню"
							title="Кнопка для открытия меню"
							icon={'navigation'}
						>
							<span className="sr-only">Навигация</span>
						</ButtonIcon>
					</div>
					<div className="hidden md:flex flex-row items-center ml-5">
						<nav
							className="text-sm leading-6 font-semibold text-gray-750 dark:text-slate-200"
							aria-label="Навигация по сайту"
						>
							<ul className="flex space-x-8">{navigateLinks()}</ul>
						</nav>
						<div className="flex ml-5">
							<ul className="flex">
								<li className="px-3 flex items-center outline-offset-0">
									<ButtonIcon
										type="button"
										className="border-0 bg-transparent"
										onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
										aria-label="Смена темы оформления сайта"
										title="Смена темы оформления сайта"
										icon={mounted && resolvedTheme === 'dark' ? 'dark' : 'light'}
										styleIcon={
											mounted && resolvedTheme === 'dark'
												? 'h-5 w-5 fill-slate-700 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400'
												: 'h-5 w-5 fill-slate-400 dark:fill-slate-100 hover:fill-primary dark:hover:fill-sky-400'
										}
									>
										<span className="sr-only">dark/light</span>
									</ButtonIcon>
								</li>
								<li
									tabIndex={0}
									onKeyDown={(key: KeyboardEvent) => handleTabLinkKey(key)}
									className="px-3 flex-row items-center outline-offset-0"
								>
									<Link
										tabIndex={0}
										href="/languages/language-selection"
										title="Ссылка для перехода на страницу смены языка"
										aria-label="Ссылка для перехода на страницу смены языка"
									>
										<span className="cursor-pointer">
											<LanguageIcon className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" />
										</span>
									</Link>
								</li>
								<li className="px-3 flex-row items-center outline-offset-0">
									<span className="sr-only">github ссылка</span>
									<ExternalLink
										href="https://github.com/MiCkEyZzZ/ninja-turtles-api"
										title="Ссылка для перехода на официальную страницу Github"
										aria-label="Ссылка для перехода на официальную страницу Github"
									>
										<GithubIcon className="h-5 w-5 fill-slate-400 dark:fill-slate-500 hover:fill-primary dark:hover:fill-sky-400" />
									</ExternalLink>
								</li>
								<li className="pl-3 outline-offset-0">
									<span className="sr-only">rss</span>
									<ExternalLink
										href="/rss.xml"
										title="Ссылка для получения карты сайта RSS"
										aria-label="Ссылка для получения карты сайта RSS"
									>
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
})

export default Header
