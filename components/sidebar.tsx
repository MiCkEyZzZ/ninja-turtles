import React, { FC } from 'react'

import ActiveLink from './ui/activeLink'
import { IAside } from '../types'

const Sidebar: FC<IAside> = ({ links }) => {
  return (
    <aside className="fixed top-16 right-0 w-72 h-screen pt-20 px-5 bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border z-10">
      <ul className="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800">
        {links.map((link) => {
          return (
            <li key={link.id} className="">
              <ActiveLink
                activeClassName="block border-l pl-4 -ml-px text-primary border-current font-semibold dark:text-sky-400"
                href={link.path}
              >
                <a className="block pl-4 text-gray-750 dark:text-gray-0">{link.name}</a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
