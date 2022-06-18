import React, { FC } from 'react'

import ActiveLink from './activeLink'
import { IAside } from '../types'

const Sidebar: FC<IAside> = ({ links }) => {
  return (
    <aside className="fixed top-16 right-0 w-72 h-screen pt-20 px-8 bg-gray-0 dark:bg-gray-750 border-gray-150 dark:border-gray-800 border z-10">
      <ul className="flex flex-col w-52 mr-0 py-0">
        {links.map((link) => {
          return (
            <li key={link.id} className="my-2">
              <ActiveLink activeClassName="text-primary dark:text-sky-400" href={link.path}>
                <a className="text-slate-900 dark:text-gray-0 hover:text-primary dark:hover:text-sky-400">
                  {link.name}
                </a>
              </ActiveLink>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
