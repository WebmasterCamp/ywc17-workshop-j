import React from 'react'

import { Box, Flex, CSSReset, ThemeProvider } from '@chakra-ui/core'

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
      <Flex as='main' flexDirection='column' height='100%' overflow='auto'>
        <Header />
        <Flex bg='#F7FAFC' flex={1} justifyContent='center' zIndex={0}>
          <Box width='100%' maxWidth={1200}>{children}</Box>
        </Flex>
      </Flex>
    </ThemeProvider>
  )
}

export default AppComponent
