import { createContext, ReactNode, useState } from 'react'
import { IMenuItem, TopLevelCategory } from '../interfaces'

export interface IAppContext {
	menu: IMenuItem[]
	firstCategory: TopLevelCategory
	setMenu?: (newMenu: IMenuItem[]) => void
}

interface ISidebareContext {
	stateSidebar: boolean
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: TopLevelCategory.Introduction })
export const SideBarContext = createContext<ISidebareContext>({ stateSidebar: false })

export const AppContextProvider = ({
	menu,
	firstCategory,
	children,
}: IAppContext & { children: ReactNode }): JSX.Element => {
	const [menuState, setMenuState] = useState<IMenuItem[]>(menu)

	return <AppContext.Provider value={{ menu: menuState, firstCategory }}>{children}</AppContext.Provider>
}
