import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
export default class TurtlesDocument extends Document {
	render() {
		return (
			<Html className="dark" lang="ru">
				<Head>
					<link href="/assets/favicon.ico" rel="icon" />
					<link href="/static/site.webmanifest" rel="manifest" />
					<link rel="preconnect" href="https://mc.yandex.ru" />
					<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap"
						rel="stylesheet"
					/>
				</Head>
				<body className="bg-white dark:bg-black text-white dark:text-black">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}
