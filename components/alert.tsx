import React, { FC, memo } from 'react'

import { IAlert } from 'interfaces'

const Alert: FC<IAlert> = memo(({ title, description }): JSX.Element => {
	return (
		<div className="text-slate-100 bg-slate-800">
			<div className="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
				<div className="text-center sm:px-16 sm:pr-16">
					<p className="text-sm font-medium text-white">
						<span className="hidden md:inline order-1">{title} </span>
						<span className="order-2">
							<a href="https://pobeda.onf.ru/" rel="noreferrer" target="_blank" className="text-white underline">
								{description}
							</a>
						</span>
					</p>
				</div>
			</div>
		</div>
	)
})

export default Alert
