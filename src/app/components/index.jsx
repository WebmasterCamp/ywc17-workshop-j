import React from 'react'

import { Box, CSSReset, ThemeProvider } from '@chakra-ui/core'

import Global from './global'
import Helmet from './helmet'

import Header from '../../core/components/header'

const AppComponent = props => {
  const { children } = props

  return (
    <ThemeProvider>
      <CSSReset />
      <Global />
      <Helmet />
      <Box as='main' height='100%' overflow='auto'>
        <Header />
        {children}
      </Box>
    </ThemeProvider>
  )
}

export default AppComponent
