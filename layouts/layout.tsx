import React, { FC, useEffect, useState } from 'react'
import Head from 'next/head'
import { useTheme } from 'next-themes'

import siteConfig from '../config/siteConfig'
import { Header, Footer, Popover } from '../components'
import { ILayout } from '../types'

const Layout: FC<ILayout> = ({ children, ...customMeta }) => {
  const { title, description, themeColor } = siteConfig
  const { theme, setTheme } = useTheme()
  const [menu, setMenu] = useState(false)
  const meta = {
    title: `${title} - Главная страница`,
    description: `${description}`,
    cardImage: '',
    type: 'website',
    themeColor,
    ...customMeta,
  }

  const onToggle = () => {
    setMenu(!menu)
    document.body.style.overflow = 'hidden'
  }

  useEffect(() => {
    if (menu) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [menu])

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta name="description" content="Generated by create next app" />
        <meta name="robots" content="follow, index" />
        <link href="/assets/favicon.ico" rel="icon" />
        <meta content={meta.description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.cardImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="ninjaturtlesapi" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.cardImage} />
        <meta content={meta.themeColor} name="theme-color" />
        <meta content={meta.themeColor} name="msapplication-TileColor" />
        <title>{meta.title}</title>
      </Head>
      <Header navigation={siteConfig.navigation} onToggle={onToggle} />
      <main>{children}</main>
      <Footer quickLinks={siteConfig.quickLinks} footerLinks={siteConfig.footer} moreLinks={siteConfig.moreLinks} />
      {menu && <Popover theme={theme} setTheme={setTheme} setMenu={setMenu} />}
    </>
  )
}

export default Layout
