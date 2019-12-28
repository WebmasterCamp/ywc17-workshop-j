import React from 'react'

import { Link } from 'gatsby'

import Img from 'gatsby-image'

import { database } from '../../../../../content/database/scholarship'

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
            <Text fontFamily='Prompt'>หน้าแรก</Text>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Link to='/scholars'>
            <Text fontFamily='Prompt'>ทุนทั้งหมด</Text>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Text color='#F98770' fontFamily='Prompt'>เปรียบเทียบทุนการศึกษาต่อ</Text>
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
          <Box textAlign='center'>
            <Box w='150px' h='150px' mx='auto' mb={4}>
              <Img fluid={data.image} />
            </Box>
            <Text fontWeight='bold'>{data.name}</Text>
          </Box>
        ))}

        <Box>วันรับสมัครทุน</Box>
        {props.pageContext.data.map(
          data =>
            (
              <Box>
                {data.start_date} - {data.due_date}
              </Box>
            )
        )}

        <Box>หลักสูตร</Box>
        {props.pageContext.data.map(
          data => <Box>{data.duration}</Box>
        )}

        <Box>ประเภททุน</Box>
        {props.pageContext.data.map(
          data =>
            (
              <Box>
                {
                  database.scholarship_types.filter(
                    o => o.id === data.scholarship_type
                  )[0].name
                }
              </Box>
            )
        )}

        <Box>จำนวนเปิดรับ</Box>
        {props.pageContext.data.map(
          data => <Box>{data.amount}</Box>
        )}

        <Box>คุณสมบัติ</Box>
        {props.pageContext.data.map(data => (
          <Box>
            {data.qualifications.map(qualification => (
              <Box>- {qualification}</Box>
            ))}
          </Box>
        ))}
      </Grid>
    </Box>
  )
}

export default ComparingComponent
