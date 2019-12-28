import React from 'react'

import { Link } from 'gatsby'

import { Flex, Image, Box, Button } from '@chakra-ui/core'

const HeaderComponent = props => {
  return (
    <Box bg='#5A6C73'>
      <Flex
        align='center'
        justifyContent='space-between'
        py={4}
        bg='#5A6C73'
        zIndex={1}
        width='100%'
        maxWidth={1200}
        mx='auto'>
        <Link to='/'>
          <Image size='sm' src='/logo.png' height='40px' width='auto' />
        </Link>
        <Flex align='center' justifyContent='center'>
          <Box px={4} color='white'>
            <Link to='/scholars'>ค้นหาทุน</Link>
          </Box>
          <Box px={4} color='white'>
            บทความ
          </Box>
          <Box px={4} color='white'>
            เกี่ยวกับเรา
          </Box>
          <Button bg='#F98770' color='white' ml={2}>
            เข้าสู่ระบบ
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}

export default HeaderComponent
