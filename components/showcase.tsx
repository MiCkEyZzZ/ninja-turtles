import React, { FC, useState, useEffect } from 'react'

import { ICharacters } from '../interfaces'
import { Card, SkeletonLoader } from './index'

const Showcase: FC<ICharacters> = ({ characters }): JSX.Element => {
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		setTimeout(() => setIsLoaded(true), 1000)
	}, [])

	return (
		<section className="w-full">
			<h2 className="sr-only">Демонстрация карточекперсонажей</h2>
			<div className="max-w-screen-2xl m-auto px-3 sm:px-6 md:px-6 lg:px-0">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 md:grid-rows-2 lg-grid-rows-2 gap-6 sm:gap-6 md:gap-6 lg:gap-8 pb-20 lg:pb-32">
					{isLoaded
						? characters.map((character) => {
								return <Card key={character.id} character={character} />
						  })
						: Array(6)
								.fill('')
								.map((_, index) => <SkeletonLoader key={index} />)}
				</div>
			</div>
		</section>
	)
}

export default Showcase
