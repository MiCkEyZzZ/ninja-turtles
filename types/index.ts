import React from 'react'
import { UrlObject } from 'url'

export interface IPost {
  meta: string
  cont: string
}

export interface IAbout {
  meta: string
  content: string
}

export interface ILanguages {
  meta: string
  content: string
}

export interface IPrivacy {
  meta: string
  content: string
}

export interface ISupport {
  meta: string
  content: string
}

export interface ITerms {
  meta: string
  content: string
}

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
  children: any
}

export interface IAside {
  links: Links[]
}

export interface IPopover {
  theme: string | undefined
  setTheme: Function
  setMenu: Function
}

export interface IShowcase {
  characters: CharacterType[]
}

type Navigation = {
  id: number
  title: string
  path: string
}

export interface Character {
  character: CharacterType
}

type Links = {
  id: number
  name: string
  path: string
}

export type CharacterType = {
  id: number
  title: string
  image: any
  status: string
  species: string
  lastAppearance: string
  firstAppearance: string
}

export interface ILayout {
  children: any
  meta: any
}

export interface IExternalLink {
  href: string
  children: React.ReactNode
  className?: string
}
