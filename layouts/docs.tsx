import React, { PropsWithChildren } from 'react'

import { Breadcrumbs, Container } from '../components'
import { AppContextProvider, IAppContext } from '../context/app.context'
import { IDocs } from '../interfaces'

const DocsLayout = ({ children, doc }: PropsWithChildren<{ doc: IDocs }>, props: IAppContext): JSX.Element => {
	return (
		<>
			<Breadcrumbs title="Введение" />
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Container title={`${doc.title}`} description={`${doc.description}`}>
					<article className="lg:prose-xl max-w-3xl m-auto text-slate-900 dark:text-gray-0">{children}</article>
				</Container>
			</AppContextProvider>
		</>
	)
}

export default DocsLayout
