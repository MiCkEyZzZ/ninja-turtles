import React, { FC } from 'react'

import { Container } from '../components'
import { ILayout } from '../interfaces'

export const Layout: FC<ILayout> = ({ children }): JSX.Element => <Container>{children}</Container>
