import React from 'react'

import { Link } from 'gatsby'

import { Flex, Image, Box, Button } from '@chakra-ui/core'

const HeaderComponent = props => {
  return (
    <Flex
      align='center'
      justifyContent='space-between'
      px={8}
      py={4}
      bg='#5A6C73'
      zIndex={1}>
      <Image size='sm' src='/logo.png' height='40px' width='auto' />
      <Flex align='center' justifyContent='center'>
        <Box px={4} color='white'>
          <Link to='/'>Home</Link>
        </Box>
        <Box px={4} color='white'>
          <Link to='/scholars'>
            Scholars
          </Link>
        </Box>
        <Button bg='#F98770' color='white' ml={2}>Login</Button>
      </Flex>
    </Flex>
  )
}

export default HeaderComponent
