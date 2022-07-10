import React, { FC, useEffect, useRef } from 'react'
import Link from 'next/link'

import { IPopover } from '../interfaces'
import { LanguageIcon, RssIcon } from '../public/assets'
import { ButtonIcon, ExternalLink } from '.'

const Popover: FC<IPopover> = ({ theme, setTheme, onClose }): JSX.Element => {
	const menuRef = useRef<HTMLDivElement>(null)

	const handleClickOutside = (event: MouseEvent): void => {
		if (menuRef.current === event.target) {
			onClose()
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside)

		return () => document.removeEventListener('click', handleClickOutside)
	}, [])

	return (
		<div id="headlessui-portal-root">
			<div>
				<div className="fixed z-50 inset-0 md:hidden">
					<div
						ref={menuRef}
						className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"
						id="headlessui-dialog-overlay-9"
						aria-hidden="true"
					></div>
					<div className="fixed top-4 right-4 w-full max-w-sm bg-gray-0 rounded-lg shadow-lg p-6 text-base font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400 dark:highlight-white/5">
						<ButtonIcon
							type="button"
							className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
							onClick={() => onClose()}
							aria-label="Кнопка закрытия модального окна меню"
							title="Кнопка закрытия модального окна меню"
							icon={'close'}
							styleIcon="w-2.5 h-2.5 overflow-visible"
						>
							<span className="sr-only">Кнопка закрытия меню</span>
						</ButtonIcon>
						<ul className="space-y-6">
							<li>
								<Link href="/docs/introduction">
									<a className="hover:text-primary dark:hover:text-sky-400">Документация</a>
								</Link>
							</li>
							<li>
								<Link href="/about/about-us">
									<a className="hover:text-primary dark:hover:text-sky-400">О нас</a>
								</Link>
							</li>
							<li>
								<Link href="/support/support-us">
									<a className="hover:text-primary dark:hover:text-sky-400">Поддержать</a>
								</Link>
							</li>
							<li>
								<ExternalLink
									href="https://github.com/MiCkEyZzZ/ninja-turtles-api"
									className="hover:text-primary dark:hover:text-sky-400"
								>
									GitHub
								</ExternalLink>
							</li>
						</ul>
						<div className="flex flex-row mt-6 pt-6 border-t border-slate-200 dark:border-slate-200/10">
							<div className="flex items-center justify-between py-1 mr-2">
								<div className="relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200 hover:bg-primary dark:hover:bg-sky-400">
									<ButtonIcon
										className="border-0 bg-transparent"
										onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
										aria-label="Смена темы оформления сайта"
										title="Смена темы оформления сайта"
										icon={theme === 'dark' ? 'dark' : 'light'}
										styleIcon={
											theme === 'dark'
												? 'w-5 h-5 fill-slate-700 dark:fill-slate-100'
												: 'w-5 h-5 fill-slate-700 dark:fill-slate-100'
										}
									>
										<span className="sr-only">dark/light</span>
									</ButtonIcon>
								</div>
							</div>
							<div className="flex items-center justify-between py-1 mr-2">
								<div className="relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200 hover:bg-primary dark:hover:bg-sky-400">
									<Link href="/languages/language-selection">
										<span className="cursor-pointer">
											<LanguageIcon className="w-5 h-5 fill-slate-700 dark:fill-slate-100" />
										</span>
									</Link>
								</div>
							</div>
							<div className="flex items-center justify-between py-1">
								<div className="relative flex items-center ring-1 ring-slate-900/10 hover:ring-lime-300 rounded-lg shadow-sm p-2 text-slate-700 font-semibold dark:bg-slate-600 dark:ring-0 dark:highlight-white/5 dark:text-slate-200 hover:bg-primary dark:hover:bg-sky-400">
									<ExternalLink href="/rss.xml">
										<RssIcon className="h-5 w-5 fill-slate-700 dark:fill-slate-100" />
									</ExternalLink>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Popover
