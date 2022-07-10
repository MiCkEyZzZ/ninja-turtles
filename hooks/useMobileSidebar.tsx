import { Dispatch, useEffect, useState } from 'react'

export const useMobileSidebar = (navRef: HTMLAnchorElement) => {
	const [isOpen, setIsOpen] = useState<boolean | Dispatch<boolean>>(false)

	const handleClose = () => setIsOpen(false)

	useEffect(() => {
		const anchors = navRef.current.querySelectorAll('a')

		anchors.forEach((anchor): void => anchor.addEventListener('click', handleClose))

		return () => anchors.forEach((anchor): void => anchor.removeEventListener('click', handleClose))
	}, [navRef])

	return { isOpen, setIsOpen }
}
