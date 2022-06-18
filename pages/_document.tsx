import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class TurtlesDocument extends Document {
  render() {
    return (
      <Html className="dark" lang="ru">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://mc.yandex.ru" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
