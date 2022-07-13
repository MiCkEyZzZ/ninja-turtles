const siteConfig = {
	title: 'The Ninja Turtles API',
	shortTitle: 'The Ninja Turtles API',
	description: 'The Ninja Turtles API',
	siteUrl: 'https://ninjaturtlesapi.com',
	image: '',
	userTwitter: 'ninjaturtlesapi',
	themeColor: '#aaca4eff',
	backgroundColor: '#ffffff',
	github: {
		website: 'https://github.com/MiCkEyZzZ/ninja-turtles',
		api: 'https://github.com/MiCkEyZzZ/ninja-turtles-api',
	},
	author: {
		name: 'Mikhail Zhuravlev',
		website: 'https://github.com/MiCkEyZzZ',
	},
	navigation: [
		{ id: 1, title: 'Документация', path: '/docs/introduction' },
		{ id: 2, title: 'О нас', path: '/about/about-us' },
		{ id: 3, title: 'Поддержать', path: '/support/support-us' },
	],
	footer: [
		{ id: 1, title: 'Вконтакте', path: '/' },
		{ id: 2, title: 'Яндекс Дзен', path: '/' },
		{ id: 3, title: 'Telegram', path: '/' },
		{ id: 4, title: 'Хабр', path: '/' },
		{ id: 5, title: 'Stack Overflow', path: '/' },
	],
	support: {
		kofi: 'https://ko-fi.com/mikhailzhuravlev',
		buyMeACoffee: 'https://buymeacoffee.com/mikhailfzhw',
	},
	moreLinks: [
		{ id: 1, title: 'Конфиденциальность', path: '/privacy/privacy-policy' },
		{ id: 2, title: 'Условия', path: '/terms/terms-of-use' },
	],
	quickLinks: [
		{
			id: 1,
			title: 'Введение',
			path: '/docs/introduction',
			pages: [{ title: 'GraphQL' }, { title: 'REST' }, { title: 'Информация и Пагинация' }],
		},
		{ id: 2, title: 'Персонажи', path: '/docs/characters' },
		{ id: 3, title: 'Местоположение', path: '/docs/locations' },
		{ id: 4, title: 'Серии', path: '/docs/episodes' },
		{ id: 5, title: 'Библиотеки', path: '/docs/libraries' },
	],
	sitebar: [
		{
			id: 1,
			name: 'Введение',
			path: '/docs/introduction',
			pages: [
				{ id: 1, name: 'GraphQL', path: '/docs/graph' },
				{ id: 2, name: 'REST', path: '/docs/rest' },
				{ id: 3, name: 'Информация и пагинация', path: '/docs/info_pagination' },
			],
		},
		{
			id: 2,
			name: 'Персонажи',
			path: '/docs/characters',
			pages: [
				{ id: 1, name: 'Схема персонажа', path: '/docs/characters/schema' },
				{ id: 2, name: 'Получить всех персонажей', path: '/docs/characters/all' },
				{ id: 3, name: 'Получить персонажа', path: '/docs/characters/single' },
				{ id: 4, name: 'Получить несколько персонажей', path: '/docs/characters/multiple' },
				{ id: 5, name: 'Фильтр персонажей', path: '/docs/characters/filter' },
			],
		},
		{
			id: 3,
			name: 'Местоположение',
			path: '/docs/locations',
			pages: [
				{ id: 1, name: 'Схема местоположения', path: '/docs/locations/schema' },
				{ id: 2, name: 'Получить все местоположения', path: '/docs/locations/all' },
				{ id: 3, name: 'Получить местоположение', path: '/docs/locations/single' },
				{ id: 4, name: 'Получить несколько местоположений', path: '/docs/locations/multiple' },
				{ id: 5, name: 'Фильтр местоположений', path: '/docs/locations/filter' },
			],
		},
		{
			id: 4,
			name: 'Серии',
			path: '/docs/episodes',
			pages: [
				{ id: 1, name: 'Схема серии', path: '/docs/episodes/schema' },
				{ id: 2, name: 'Получить все серии', path: '/docs/episodes/all' },
				{ id: 3, name: 'Получить серию', path: '/docs/episodes/single' },
				{ id: 4, name: 'Получить несколько серий', path: '/docs/episodes/multiple' },
				{ id: 5, name: 'Фильтр серий', path: '/docs/episodes/filter' },
			],
		},
		{
			id: 5,
			name: 'Библиотеки',
			path: '/docs/libraries',
			pages: [
				{ id: 1, name: 'JavaScript', path: '/docs/libraries/javascript' },
				{ id: 2, name: 'Go', path: '/docs/libraries/golang' },
				{ id: 3, name: 'Python', path: '/docs/libraries/python' },
				{ id: 4, name: 'Ruby', path: '/docs/libraries/ruby' },
				{ id: 5, name: 'PHP', path: '/docs/libraries/php' },
			],
		},
	],
	langs: [
		{ id: 2, title: 'English', href: '/', locale: 'en' },
		{ id: 3, title: 'Español', href: '/', locale: 'es' },
		{ id: 4, title: 'Français', href: '/', locale: 'fr' },
		{ id: 5, title: 'Italiano', href: '/', locale: 'it' },
		{ id: 6, title: 'Deutsch', href: '/', locale: 'de' },
		{ id: 7, title: '日本語', href: '/', locale: 'zh' },
		{ id: 8, title: 'Русский', href: '/', locale: 'ru' },
		{ id: 9, title: 'Türkçe', href: '/', locale: 'tu' },
		{ id: 10, title: '繁體中文', href: '/', locale: 'jp' },
		{ id: 11, title: 'हिन्दी', href: '/', locale: 'hi' },
	],
}

export default siteConfig
