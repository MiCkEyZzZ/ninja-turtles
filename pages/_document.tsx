import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class TurtlesDocument extends Document {
    render() {
        return (
            <Html className="dark" lang='ru'>
                <Head />
                <body className="bg-white dark:bg-black text-white dark:text-black">
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}
