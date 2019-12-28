import React from 'react'

import { Link } from 'gatsby'

import Img from 'gatsby-image'

import {
  Icon,
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Breadcrumb,
  BreadcrumbItem,
  Grid,
} from '@chakra-ui/core'

const ComparingComponent = props => {
  return (
    <Box>
      <Breadcrumb
        mt={6}
        mb={2}
        spacing='2px'
        separator={<Icon color='gray.300' name='chevron-right' />}>
        <BreadcrumbItem>
          <Link to='/'>
            <Text>หน้าแรก</Text>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='/scholars'>
            <Text>ทุนทั้งหมด</Text>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Text color='#F98770'>เปรียบเทียบทุนการศึกษาต่อ</Text>
        </BreadcrumbItem>
      </Breadcrumb>
      <Heading color='#F98770' size='lg'>
        เปรียบเทียบทุนศึกษาต่อ
      </Heading>
      <Grid
        templateColumns={`0.6fr repeat(${props.pageContext.data.length}, 1fr)`}
        gap={6}>
        <Box></Box>
        {props.pageContext.data.map(data => (
          <Box>
            <Img fluid={data.image} />
          </Box>
        ))}

        <Box></Box>
        <Box>2 สิงหาคม - 20 สิงหาคม 2562</Box>
        <Box>2 สิงหาคม - 20 สิงหาคม 2562</Box>

        <Box>วันรับสมัครทุน</Box>
        <Box>2 สิงหาคม - 20 สิงหาคม 2562</Box>
        <Box>2 สิงหาคม - 20 สิงหาคม 2562</Box>

        <Box>หลักสูตร</Box>
        <Box>4-6 เดือน</Box>
        <Box>4-6 เดือน</Box>

        <Box>ประเภททุน</Box>
        <Box>Lorem ipsum dolor sit amet,</Box>
        <Box>Lorem ipsum dolor sit amet,</Box>

        <Box>จำนวนเปิดรับ</Box>
        <Box>Lorem ipsum dolor sit amet,</Box>
        <Box>Lorem ipsum dolor sit amet,</Box>

        <Box>คุณสมบัติ</Box>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod
          temporin cididunt ut labore et dolore magnaaliqua. Ut enim ad minim
          veniam,quisnostrud e xercitationullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Box>
        <Box>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod
          temporin cididunt ut labore et dolore magnaaliqua. Ut enim ad minim
          veniam,quisnostrud e xercitationullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </Box>
      </Grid>
    </Box>
  )
}

export default ComparingComponent
