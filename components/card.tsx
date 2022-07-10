import React, { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { ICharacter } from '../interfaces'

const Card: FC<ICharacter> = ({ character }): JSX.Element => {
	const { image, title, species, status, lastAppearance, firstAppearance } = character

	return (
		<figure className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 grid-rows-1 lg:grid-rows-1 bg-gray-0 dark:bg-slate-800 border dark:border-slate-800 rounded-xl overflow-hidden">
			<div className="grid h-auto relative">
				<Image
					className="flex w-24 h-24 md:w-48 md:h-auto rounded-none mx-auto object-cover"
					width="384"
					height="312"
					src={image}
					alt={title}
				/>
			</div>
			<div className="grid lg:grid-cols-1 lg:grid-auto-rows-auto py-8 md:py-3 lg:py-2 px-5 lg:px-3 text-back dark:text-gray-200">
				<div className="pb-0">
					<blockquote>
						<h1 className="flex-auto text-xl font-semibold p-0 m-0 text-gray-750 dark:text-gray-0">
							<Link href="#">
								<a className="font-bold hover:text-primary dark:hover:text-sky-400 px-0 outline-offset-4">{title}</a>
							</Link>
						</h1>
						<div className="flex flex-row items-center mt-2 px-0">
							<dl className="relative flex h-2 w-2 mr-3">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-green-100"></span>
							</dl>
							<span className="w-full flex-none text-sm font-medium">
								{status} - {species}
							</span>
						</div>
					</blockquote>
				</div>
				<div>
					<figcaption className="font-medium">
						<div className="w-full flex-none text-sm font-medium px-0 text-slate-500 dark:text-slate-400">
							<span>Последнее местоположение:</span>
						</div>
						<div className="flex-auto text-sm mt-1 font-bold hover:text-primary dark:hover:text-sky-400">
							<Link href="#">
								<a className="px-0 py-1 outline-offset-4">{lastAppearance}</a>
							</Link>
						</div>
					</figcaption>
					<figcaption className="font-medium pt-3">
						<div className="w-full flex-none text-sm font-medium px-0 text-slate-500 dark:text-slate-400">
							<span>Первое появление:</span>
						</div>
						<div className="flex-auto text-sm mt-1 font-bold hover:text-primary dark:hover:text-sky-400">
							<Link href="#">
								<a className="px-0 py-1 outline-offset-4">{firstAppearance}</a>
							</Link>
						</div>
					</figcaption>
				</div>
			</div>
		</figure>
	)
}

export default Card
