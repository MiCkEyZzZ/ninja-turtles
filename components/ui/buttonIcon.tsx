import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import {
	LanguageIcon,
	GithubIcon,
	RssIcon,
	SearchIcon,
	NavigateIcon,
	CloseIcon,
	DarkIcon,
	LightIcon,
	BurgerIcon,
} from '../../public/assets/index'

const icons = {
	language: LanguageIcon,
	github: GithubIcon,
	rss: RssIcon,
	search: SearchIcon,
	navigation: NavigateIcon,
	close: CloseIcon,
	dark: DarkIcon,
	light: LightIcon,
	burger: BurgerIcon,
}

type IconName = keyof typeof icons

interface IButton extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	className: string
	styleIcon?: string
	icon: IconName
	children?: JSX.Element | JSX.Element[]
}

const ButtonIcon = ({ className, styleIcon, icon, children, ...props }: IButton): JSX.Element => {
	const IconComps = icons[icon]

	return (
		<button className={className} {...props}>
			<IconComps className={styleIcon} />
			{children}
		</button>
	)
}

export default ButtonIcon
