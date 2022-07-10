import React, { FC, useState } from 'react'

import { IRestQuery } from '../../interfaces'
import { CopyIcon, DoneIcon } from '../../public/assets'

const RestQuery: FC<IRestQuery> = ({ request, endpoint }): JSX.Element => {
	const [copied, setCopied] = useState(false)

	const copyClickHandler = () => {
		setCopied(true)
		setTimeout(() => setCopied(false), 2000)
	}

	return (
		<div className="max-w-2xl px-5 py-5 items-center ring-1 ring-gray-200 dark:ring-1 dark:ring-slate-800 rounded-lg bg-inherit dark:bg-slate-800">
			<pre>
				<code className="relative flex flex-row items-center text-gray-800 dark:text-gray-200">
					<span className="font-bold mr-5">{request}</span>
					{endpoint}
					<button
						className="absolute right-0 flex justify-center ml-5 fill-gray-800 dark:fill-gray-200 hover:fill-primary hover:dark:fill-sky-400"
						onClick={copyClickHandler}
						aria-label="Кнопка для копирования ссылки"
					>
						{copied ? <DoneIcon className="w-6 h-6 text-2xl" /> : <CopyIcon className="w-6 h-6 text-2xl" />}
					</button>
				</code>
			</pre>
		</div>
	)
}

export default RestQuery
