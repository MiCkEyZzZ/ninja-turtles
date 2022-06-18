import { UrlObject } from 'url'
import React from 'react'

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
  navigation: Navigation[]
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
  characters: Character[]
}

type Navigation = {
  id: number
  title: string
  path: string
}

type Links = {
  id: number
  name: string
  path: string
}

type Character = {
  id: number
  title: string
  image: any
  status: string
  species: string
  lastAppearance: string
  firstAppearance: string
}

export interface ILayout {
  children: React.ReactNode
  meta: any
}
