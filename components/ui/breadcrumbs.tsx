import React, { FC } from 'react'

import { ButtonIcon } from 'components'

interface IBreadcrumbs {
	title: string
}

const Breadcrumbs: FC<IBreadcrumbs> = ({ title }): JSX.Element => {
	return (
		<div className="flex fixed top-16 w-screen items-center p-4 bg-gray-0 dark:bg-gray-750 border-b border-slate-900/10 lg:hidden dark:border-slate-50/[0.06]">
			<ButtonIcon
				type="button"
				className="text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
				aria-label="Кнопка открытия меню документации"
				title="Кнопка открытия меню документации"
				icon={'burger'}
			>
				<span className="sr-only">Навигация</span>
			</ButtonIcon>
			<ol className="ml-4 flex text-sm leading-6 whitespace-nowrap min-w-0">
				<li className="font-semibold text-slate-900 truncate dark:text-slate-200">{title}</li>
			</ol>
		</div>
	)
}

export default Breadcrumbs
