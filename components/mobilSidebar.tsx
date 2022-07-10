import React, { FC } from 'react'
import { ButtonIcon, ExternalLink } from '.'

interface IMobileSidebarProps {
	setStateSideBar: (arg0: boolean) => void
}

const MobilSidebar: FC<IMobileSidebarProps> = ({ setStateSideBar }): JSX.Element => {
	return (
		<div className="fixed z-50 inset-0 overflow-y-auto lg:hidden">
			<div className="fixed inset-0 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80"></div>
			<div className="relative bg-gray-0 w-96 max-w-[calc(100%-3rem)] p-6 dark:bg-gray-750">
				<ButtonIcon
					tabIndex={0}
					type="button"
					className="absolute z-10 top-5 right-5 w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
					onClick={() => setStateSideBar(false)}
					aria-label="Кнопка закрытия меню документации"
					title="Кнопка закрытия меню документации"
					icon={'close'}
					styleIcon="w-2.5 h-2.5 overflow-visible"
				>
					<span className="sr-only">Закрытие меню навигации</span>
				</ButtonIcon>
				<nav className="lg:text-sm lg:leading-6 relative">
					<ul>
						<li className="mt-12 lg:mt-8">
							<h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Введение</h5>
							<ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/graphql"
									>
										GraphQL
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/rest"
									>
										REST
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/info-pagination"
									>
										Информация и пагинация
									</a>
								</li>
							</ul>
						</li>
						<li className="mt-12 lg:mt-8">
							<h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Персонажи</h5>
							<ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/schema-character"
									>
										Схема персонажа
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/hover-focus-and-other-states"
									>
										Получить всех персонажей
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/responsive-design"
									>
										Получить одного персонажа
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/dark-mode"
									>
										Получить несколько персонажей
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/reusing-styles"
									>
										Фильтр персонажей
									</a>
								</li>
							</ul>
						</li>
						<li className="mt-12 lg:mt-8">
							<h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Местоположение</h5>
							<ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/configuration"
									>
										Схема местоположения
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/content-configuration"
									>
										Получить все местоположения
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/theme"
									>
										Получить одно местоположение
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/screens"
									>
										Получить несколько местоположений
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/customizing-colors"
									>
										Фильтр местоположений
									</a>
								</li>
							</ul>
						</li>
						<li className="mt-12 lg:mt-8">
							<h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Серии</h5>
							<ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/preflight"
									>
										Схема серии
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/preflight"
									>
										Получить все серии
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/preflight"
									>
										Получить одну серию
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/preflight"
									>
										Получить несколько серий
									</a>
								</li>
								<li>
									<a
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/preflight"
									>
										Фтльтр серий
									</a>
								</li>
							</ul>
						</li>
						<li className="mt-12 lg:mt-8">
							<h5 className="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200">Библиотеки</h5>
							<ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-700">
								<li>
									<ExternalLink
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/optimizing-for-production"
									>
										JavaScript
									</ExternalLink>
								</li>
								<li>
									<ExternalLink
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/aspect-ratio"
									>
										Go
									</ExternalLink>
								</li>
								<li>
									<ExternalLink
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/container"
									>
										Python
									</ExternalLink>
								</li>
								<li>
									<ExternalLink
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/columns"
									>
										Ruby
									</ExternalLink>
								</li>
								<li>
									<ExternalLink
										className="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
										href="/docs/break-after"
									>
										PHP
									</ExternalLink>
								</li>
							</ul>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	)
}

export default MobilSidebar
