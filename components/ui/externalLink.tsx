import React, { FC } from 'react'

import { IExternalLink } from '../../types'

const ExternalLink: FC<IExternalLink> = ({ href, children, className }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  )
}

export default ExternalLink
