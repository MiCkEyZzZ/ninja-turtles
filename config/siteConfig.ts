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
		{ id: 1, name: 'Введение', path: '/docs/introduction' },
		{ id: 2, name: 'Персонажи', path: '/docs/characters' },
		{ id: 3, name: 'Местоположение', path: '/docs/locations' },
		{ id: 4, name: 'Серии', path: '/docs/episodes' },
		{ id: 5, name: 'Библиотеки', path: '/docs/libraries' },
	],
	langs: [
		{ id: 1, title: 'العربية', href: '/', locale: 'ar' },
		{ id: 2, title: 'English', href: '/', locale: 'en' },
		{ id: 3, title: 'Español', href: '/', locale: 'es' },
		{ id: 4, title: 'Français', href: '/', locale: 'fr' },
		{ id: 5, title: 'Italiano', href: '/', locale: 'it' },
		{ id: 6, title: 'Deutsch', href: '/', locale: 'de' },
		{ id: 7, title: '日本語', href: '/', locale: 'ch' },
		{ id: 8, title: 'Русский', href: '/', locale: 'ru' },
		{ id: 9, title: 'Türkçe', href: '/', locale: 'tu' },
		{ id: 10, title: '繁體中文', href: '/', locale: 'jp' },
		{ id: 11, title: 'हिन्दी', href: '/', locale: 'hi' },
	],
}

export default siteConfig
