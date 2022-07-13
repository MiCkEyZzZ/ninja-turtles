import React from 'react'
import type { NextPage } from 'next'

import { Layout } from '../layouts/layout'
import { Hero, Showcase, Notify, Testimonials } from '../components'
import Greeting from '../components/greeting'

const items = [
	{
		id: 1,
		title: 'Леонардо',
		image: '../assets/1.jpg',
		status: 'Живой',
		species: 'Черепаха мутант',
		lastAppearance: 'Канализация Нью-Йорка',
		firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс',
	},
	{
		id: 2,
		title: 'Шредер',
		image: '../assets/5.jpg',
		status: 'Живой',
		species: 'Человек',
		lastAppearance: 'Нью-Йорк',
		firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс',
	},
	{
		id: 3,
		title: 'Донателло',
		image: '../assets/2.jpg',
		status: 'Живой',
		species: 'Черепаха мутант',
		lastAppearance: 'Канализация Нью-Йорка',
		firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс',
	},
	{
		id: 4,
		title: 'Микеланджело',
		image: '../assets/3.jpg',
		status: 'Живой',
		species: 'Черепаха мутант',
		lastAppearance: 'Канализация Нью-Йорка',
		firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс',
	},
	{
		id: 5,
		title: 'Сплинтер',
		image: '../assets/6.jpg',
		status: 'Живой',
		species: 'Крыса мутант',
		lastAppearance: 'Канализация Нью-Йорка',
		firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс',
	},
	{
		id: 6,
		title: 'Рафаэль',
		image: '../assets/4.jpg',
		status: 'Живой',
		species: 'Черепаха мутант',
		lastAppearance: 'Канализация Нью-Йорка',
		firstAppearance: 'Приключения TMNT Бесплатный мини-Комикс',
	},
]

const testimonials = [
	{
		id: 1,
		name: 'Евгений Белинский',
		position: 'Full Stack Web Developer',
		message:
			'Я плохо разбирался во внешнем интерфейсе, пока не открыл для себя Черепашки-нидзя. Я узнал гораздо больше о дизайне и самом CSS после того, как начал работать с Tailwind. Создание веб-страниц теперь в 5 раз быстрее.',
		image: '../assets/user-4.jpeg',
	},
	{
		id: 2,
		name: 'Игорь Комаров',
		position: 'Developer',
		message:
			'Я пишу CSS уже более 20 лет, и вплоть до 2017 года способ, которым я его писал, часто менялся. Это не совпадение, что Tailwind был выпущен в том же году. Это может показаться неправильным, но потратьте на это время, и вы поймете, что семантический CSS был 20-летней ошибкой.',
		image: '../assets/user-5.jpeg',
	},
	{
		id: 3,
		name: 'Анна Швецова',
		position: 'Developer and Educator',
		message: 'Переходите к концу. Используйте @tailwindcss.',
		image: '../assets/user-12.jpg',
	},
	{
		id: 4,
		name: 'Дмитрий Горбунов',
		position: 'QA-инженер',
		message:
			'Если бы мне пришлось рекомендовать способ начать программировать сегодня, это был бы HTML + CSS с попутным ветром + CSS.',
		image: '../assets/user-10.jpg',
	},
	{
		id: 8,
		name: 'Андрей Коваленко',
		position: 'Senior Program Manager at Тиньков Банк',
		message:
			'Я работаю с CSS уже более десяти лет, и попутный ветер просто облегчает мне жизнь. Это все еще CSS, и вы используете flex, grid и т.д., Но просто быстрее писать и поддерживать.',
		image: '../assets/user-13.jpg',
	},
	{
		id: 5,
		name: 'Кристина Тай',
		position: 'QA-инженер',
		message: 'Я чувствую себя идиотом из-за того, что до сих пор не использовал CSS Tailwind.',
		image: '../assets/user-6.jpg',
	},
	{
		id: 7,
		name: 'Александр Печёрских',
		position: 'QA-инженер',
		message:
			'Если бы мне пришлось рекомендовать способ начать программировать сегодня, это был бы HTML + CSS с попутным ветром + CSS.',
		image: '../assets/user-10.jpg',
	},
	{
		id: 6,
		name: 'Дмитрий Никулин',
		position: 'Senior Program Manager at Тиньков Банк',
		message:
			'Я работаю с CSS уже более десяти лет, и попутный ветер просто облегчает мне жизнь. Это все еще CSS, и вы используете flex, grid и т.д., Но просто быстрее писать и поддерживать.',
		image: '../assets/user-13.jpg',
	},
	{
		id: 9,
		name: 'Евгения Морозова',
		position: 'QA-инженер',
		message: 'Я чувствую себя идиоткой из-за того, что до сих пор не использовал Черепашки.',
		image: '../assets/user-6.jpg',
	},
	{
		id: 10,
		name: 'Александр Печёрских',
		position: 'QA-инженер',
		message:
			'Если бы мне пришлось рекомендовать способ начать программировать сегодня, это был бы HTML + CSS с попутным ветром + CSS.',
		image: '../assets/user-10.jpg',
	},
	{
		id: 11,
		name: 'Дмитрий Никулин',
		position: 'Senior Program Manager at Тиньков Банк',
		message:
			'Я работаю с CSS уже более десяти лет, и попутный ветер просто облегчает мне жизнь. Это все еще CSS, и вы используете flex, grid и т.д., Но просто быстрее писать и поддерживать.',
		image: '../assets/user-13.jpg',
	},
	{
		id: 12,
		name: 'Евгения Морозова',
		position: 'QA-инженер',
		message: 'Я чувствую себя идиотом из-за того, что до сих пор не использовал CSS Tailwind.',
		image: '../assets/user-6.jpg',
	},
	{
		id: 13,
		name: 'Александр Печёрских',
		position: 'QA-инженер',
		message:
			'Если бы мне пришлось рекомендовать способ начать программировать сегодня, это был бы HTML + CSS с попутным ветром + CSS.',
		image: '../assets/user-10.jpg',
	},
	{
		id: 14,
		name: 'Дмитрий Никулин',
		position: 'Senior Program Manager at Тиньков Банк',
		message:
			'Я работаю с CSS уже более десяти лет, и попутный ветер просто облегчает мне жизнь. Это все еще CSS, и вы используете flex, grid и т.д., Но просто быстрее писать и поддерживать.',
		image: '../assets/user-13.jpg',
	},
	{
		id: 15,
		name: 'Евгения Морозова',
		position: 'QA-инженер',
		message: 'Я чувствую себя идиотом из-за того, что до сих пор не использовал CSS Tailwind.',
		image: '../assets/user-6.jpg',
	},
	{
		id: 16,
		name: 'Александр Печёрских',
		position: 'QA-инженер',
		message:
			'Если бы мне пришлось рекомендовать способ начать программировать сегодня, это был бы HTML + CSS с попутным ветром + CSS.',
		image: '../assets/user-10.jpg',
	},
	{
		id: 17,
		name: 'Дмитрий Никулин',
		position: 'Senior Program Manager at Тиньков Банк',
		message:
			'Я работаю с CSS уже более десяти лет, и попутный ветер просто облегчает мне жизнь. Это все еще CSS, и вы используете flex, grid и т.д., Но просто быстрее писать и поддерживать.',
		image: '../assets/user-13.jpg',
	},
	{
		id: 18,
		name: 'Евгения Морозова',
		position: 'QA-инженер',
		message: 'Я чувствую себя идиотом из-за того, что до сих пор не использовал CSS Tailwind.',
		image: '../assets/user-6.jpg',
	},
]

const Homepage: NextPage = (): JSX.Element => {
	return (
		<Layout>
			<div className="grid lg:grid-cols-1 lg:auto-rows-auto justify-items-center overflow-hidden">
				<Hero />
				<Showcase characters={items} />
				<Greeting />
				<Testimonials testimonials={testimonials} />
				<Notify />
			</div>
		</Layout>
	)
}

export default Homepage
