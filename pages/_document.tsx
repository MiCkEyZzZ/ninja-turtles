import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';

export default class TurtlesDocument extends Document {
    render() {
        return (
            <Html className="dark" lang='ru'>
              <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin='true' />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
              </Head>
              <body className="bg-white dark:bg-black text-white dark:text-black">
                <Main />
                <NextScript />
              </body>
            </Html>
        )
    }
}
