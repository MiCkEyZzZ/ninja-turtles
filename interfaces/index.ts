import { ReactNode } from 'react'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { UrlObject } from 'url'
import { ParsedUrlQuery } from 'querystring'

/* Меню начало */

export interface PageItem {
	_id: string
	title: string
	alias: string
	category: string
}

export interface MenuItem {
	_id: {
		secondCategory: string
	}
	pages: PageItem[]
}

/* Меню начало */

/* Sidebar Type Start */

export enum TopLevelCategory {
	Introduction,
	Characters,
	Locations,
	Episodes,
	Libraries,
}

export interface IMenuItem {
	id: number
	title: string
	path: string
}

export interface PageItem {
	alias: string
	title: string
	_id: string
	category: string
}

/* Sidebar Type End */

/* Markdown Type Start */

export enum DocType {
	SNIPPET = 'snippet',
	DOC = 'doc',
}

interface ICredentials {
	title: string
	seoTitle: string
	description: string
	publishedAt: string
	image: string
}

export interface ISnippet extends ParsedUrlQuery {
	slug: string
}
export interface IDocs extends ICredentials {
	cont: MDXRemoteSerializeResult
}

export type FrontMatterDoc = {
	frontMatter: IDocs
	mdxSource: MDXRemoteSerializeResult
}

export type FrontMatterSnippet = {
	frontMatter: ISnippet
	mdxSource: MDXRemoteSerializeResult
}

export type DocByType<T> = T extends DocType.DOC ? IDocs : ISnippet

export type FrontMatterDocType<T> = T extends DocType.DOC ? FrontMatterDoc : FrontMatterSnippet

/* Markdown Type End */

export interface IRestQuery {
	endpoint: string
	request: string
}

/* Ready */
export interface IHeader {
	navigation: Navigation[]
	onToggle: () => void
}

export interface IFooter {
	footerLinks: Navigation[]
	moreLinks: Navigation[]
	quickLinks: Navigation[]
}

export interface ActiveLinkProps {
	activeClassName?: string
	href: string | UrlObject
	children: ReactNode
}

export interface IPopover {
	theme: string | undefined
	onClose: () => void
	setTheme: (theme: string) => void
}

/* Card Type Start */

export interface ICharacters {
	characters: CharacterType[]
}

export interface ICharacter {
	character: CharacterType
}

export type CharacterType = {
	id: number
	title: string
	image: string
	status: string
	species: string
	lastAppearance: string
	firstAppearance: string
}

/* Card Type End */

export interface ILayout {
	children: ReactNode
	title?: string
	description?: string
	image?: string
}

export interface DocProps {
	slug: string
	content: MDXRemoteSerializeResult
	description: string
	title: string
	date: string
	coverImage: string
}

export interface IAside {
	links: Links[]
}

type Links = {
	id: number
	name: string
	path: string
}

type Navigation = {
	id: number
	title: string
	path: string
}

/* Alert Type */
export interface IAlert {
	title: string
	description: string
}

/* Testimonials Type */
export interface ITestimonials {
	testimonials: TypeTestimonial[]
}

export interface ITestimonial {
	testimonial: TypeTestimonial
}

export interface TypeTestimonial {
	id: number
	name: string
	position: string
	message: string
	image?: string
}
