import React, { DetailedHTMLProps, LinkHTMLAttributes, ReactNode } from 'react'

interface ExternalLink extends DetailedHTMLProps<LinkHTMLAttributes<HTMLLinkElement>, HTMLLinkElement> {
	href: string
	children?: ReactNode
	className?: string
}

const ExternalLink = ({ href, children, className, title }: ExternalLink): JSX.Element => {
	return (
		<a href={href} target="_blank" title={title} rel="noopener noreferrer" className={className}>
			{children}
		</a>
	)
}

export default ExternalLink
