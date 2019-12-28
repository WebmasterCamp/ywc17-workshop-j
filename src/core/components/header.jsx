import React from 'react'

import { Link } from 'gatsby'

import { Flex, Avatar, Box, Button  } from '@chakra-ui/core'

const HeaderComponent = props => {
  return (
    <Flex
      align='center'
      justifyContent='space-between'
      px={8}
      py={4}
      shadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
    >
      <Avatar name='Logo' size='xs' />
      <Flex align='center' justifyContent='center'>
        <Box px={4}>
          <Link to='/'>Home</Link>
        </Box>
        <Box px={4}>
          <Link to='/scholars'>Scholars</Link>
        </Box>
        <Button>Login</Button>
      </Flex>
    </Flex>
  )
}

export default HeaderComponent
