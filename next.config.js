const nextConfig = {
	reactStrictMode: true,
}

module.exports = {
	webpack(config, { isServer }) {
		if (!isServer) {
			config.resolve.fallback.fs = false
		}

		config.module.rules.push({
			loader: '@svgr/webpack',
			issuer: /\.[jt]sx?$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [
						{
							name: 'preset-default',
							params: {
								override: {
									removeViewBox: false,
								},
							},
						},
					],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		})

		return config
	},
	i18n: {
		locales: ['ru', 'en-Us', 'fr', 'de', 'it', 'es', 'hi', 'zh'],
		defaultLocale: 'ru',
		domains: [
			{
				domain: 'ninjaturtlesapi.com',
				defaultLocale: 'en-US',
			},
			{
				domain: 'ninjaturtlesapi.nl',
				defaultLocale: 'nl-NL',
			},
			{
				domain: 'ninjaturtlesapi.fr',
				defaultLocale: 'fr',
				// an optional http field can also be used to test
				// locale domains locally with http instead of https
				http: true,
			},
		],
	},
	reloadOnPrerender: process.env.NODE_ENV === 'development',
	nextConfig,
}
