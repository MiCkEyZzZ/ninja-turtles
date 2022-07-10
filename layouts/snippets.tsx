import React, { PropsWithChildren } from 'react'

import { Container } from '../components'
import { ISnippet } from '../interfaces'

export default function SnippetsLayout({ children, snippet }: PropsWithChildren<{ snippet: ISnippet }>) {
	return (
		<Container title={`${snippet.title}`} description={`${snippet.description}`}>
			<article>{children}</article>
		</Container>
	)
}
