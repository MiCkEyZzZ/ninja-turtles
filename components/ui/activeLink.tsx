import React, { Children, FC, ReactElement, cloneElement } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { ActiveLinkProps } from '../../interfaces'

const ActiveLink: FC<ActiveLinkProps> = ({ children, ...props }): JSX.Element => {
	const router = useRouter()

	const child = Children.only(children) as ReactElement
	let className = child.props ? child.props.className : ''

	if (router.asPath === props.href && props.activeClassName) {
		className = `${className} ${props.activeClassName}`
	}

	delete props.activeClassName

	return <Link href={props.href}>{cloneElement(child, { className })}</Link>
}

export default ActiveLink
