import React, { PropsWithChildren, useState } from 'react'

import { Breadcrumbs, Container, MobilSidebar, Sidebar } from '../components'
import { AppContextProvider, IAppContext } from '../context/app.context'
import { IDocs } from '../interfaces'
import siteConfig from '../config/siteConfig'

const DocsLayout = ({ children, doc }: PropsWithChildren<{ doc: IDocs }>, props: IAppContext): JSX.Element => {
	const [stateSidebar, setStateSideBar] = useState(true)

	return (
		<>
			<Breadcrumbs title="Введение" />
			<AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
				<Container title={`${doc.title}`} description={`${doc.description}`}>
					<article className="lg:prose-xl max-w-3xl m-auto text-slate-900 dark:text-gray-0">{children}</article>
				</Container>
				<Sidebar links={siteConfig.sitebar} />
				{stateSidebar && <MobilSidebar setStateSideBar={setStateSideBar} />}
			</AppContextProvider>
		</>
	)
}

export default DocsLayout
