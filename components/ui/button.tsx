import { ButtonHTMLAttributes, ReactNode } from 'react'
import { DetailedHTMLProps } from 'react'

interface IButton
	extends Omit<
		DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
		'onAnimationStart' | 'onDragStart' | 'onDragEnd' | 'onDrag' | 'ref'
	> {
	children: ReactNode
	arrow?: 'right' | 'top' | 'down' | 'left'
}

const Button = ({ children, className, ...props }: IButton): JSX.Element => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

export default Button
