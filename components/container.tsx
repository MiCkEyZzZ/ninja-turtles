import React, { FC, useEffect, useState, KeyboardEvent, useRef } from 'react'
import Head from 'next/head'
import { useTheme } from 'next-themes'

import siteConfig from '../config/siteConfig'
import { ILayout } from '../interfaces'
import { Header, Footer, Popover } from './index'

const Container: FC<ILayout> = (props): JSX.Element => {
	const { title, description, themeColor, image } = siteConfig
	const { children, ...customMeta } = props
	const { theme, setTheme } = useTheme()
	const [menu, setMenu] = useState(false)
	const [isSkipLinkDisplayed, setIsSkipLinkDisplayed] = useState(false)
	const bodyRef = useRef<HTMLDivElement>(null)

	const meta = {
		title: customMeta.title || title,
		description: customMeta.description || description,
		image: customMeta.image || image,
		type: 'website',
		themeColor,
	}

	const handleOpenMenu = (): void => {
		setMenu(true)
		document.body.style.overflow = 'hidden'
	}

	const handleCloseMenu = (): void => {
		setMenu(false)
		document.body.style.overflow = 'visible'
	}

	const skipContentAction = (key: KeyboardEvent): void => {
		if (key.code === 'Space' || key.code === 'Enter') {
			key.preventDefault()
			bodyRef.current?.focus()
		}
		setIsSkipLinkDisplayed(false)
	}

	useEffect(() => {
		if (menu) document.body.style.overflow = 'hidden'
		else document.body.style.overflow = 'visible'
	}, [menu])

	return (
		<div className="wrapper antialiased">
			<Head>
				<meta charSet="utf-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta name="robots" content="follow, index" />
				<meta name="description" content={meta.description} />
				<meta property="og:type" content={meta.type} />
				<meta property="og:site_name" content="The Ninja Turtles API" />
				<meta property="og:description" content={meta.description} />
				<meta property="og:title" content={meta.title} />
				<meta property="og:image" content={meta.image} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="ninjaturtlesapi" />
				<meta name="twitter:title" content={meta.title} />
				<meta name="twitter:description" content={meta.description} />
				<meta name="twitter:image" content={meta.image} />
				<meta content={meta.themeColor} name="theme-color" />
				<meta content={meta.themeColor} name="msapplication-TileColor" />
				<title>{meta.title}</title>
			</Head>
			<a
				tabIndex={1}
				className={
					!isSkipLinkDisplayed
						? 'block fixed top-0 left-24 h-0 overflow-hidden bg-primary text-black rounded px-0 py-0 z-20'
						: 'block fixed top-5 left-24 h-auto overflow-hidden bg-primary text-black rounded px-3 py-1 z-20'
				}
				onFocus={() => setIsSkipLinkDisplayed(true)}
				onKeyDown={skipContentAction}
			>
				Перейти к основному содержанию
			</a>
			<Header navigation={siteConfig.navigation} onToggle={handleOpenMenu} />
			<main ref={bodyRef} tabIndex={0} className="outline-0">
				{children}
			</main>
			<Footer quickLinks={siteConfig.quickLinks} footerLinks={siteConfig.footer} moreLinks={siteConfig.moreLinks} />
			{menu && <Popover theme={theme} setTheme={setTheme} onClose={handleCloseMenu} />}
		</div>
	)
}

export default Container
