import { useCallback, useState } from 'react'

export default function useToggle(initialValue = false): [boolean, () => void] {
	const [value, setValue] = useState<boolean>(initialValue)

	const toggle = useCallback((): void => {
		setValue((v) => !v)
	}, [])

	return [value, toggle]
}
