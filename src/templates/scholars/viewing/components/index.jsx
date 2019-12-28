import React from 'react'

import { Link } from 'gatsby'

import Img from 'gatsby-image'

import {
  Icon,
  Box,
  Text,
  Breadcrumb,
  BreadcrumbItem,
  Flex,
  Heading,
  Grid,
} from '@chakra-ui/core'

const ScholariewingComponent = props => {
  const { data } = props.pageContext
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
          <Text color='#F98770'>{data.name}</Text>
        </BreadcrumbItem>
      </Breadcrumb>
      <Box bg='white' p={12} mt={6}>
        <Flex>
          <Box w='150px' h='150px'>
            {data.image ? <Img fluid={data.image} /> : null}
          </Box>
          <Box flex={1} px={12}>
            <Heading size='lg' color='#F98770' mb={4}>
              {data.name}
            </Heading>
            <Grid templateColumns={'50% 25% 25%'} gap={6} mb={4}>
              <Flex>
                <Text fontWeight='bold' mr={2}>ระดับการศึกษา: </Text>
                <Text>ปริญญาตรี</Text>
              </Flex>
              <Flex>
                <Text fontWeight='bold' mr={2}>ระยะเวลา: </Text>
                <Text>4 ปี</Text>
              </Flex>
              <Flex>
                <Text fontWeight='bold' mr={2}>จำนวนทุน: </Text>
                <Text>-</Text>
              </Flex>
            </Grid>
            <Grid templateColumns={'50% 50%'} gap={6} mb={4}>
              <Box>
                <Text fontWeight='bold' mr={2}>ผลการเรียน: </Text>
                <Text>- ผลการเรียน 4.00 ขึ้นไป (4 เทอม)</Text>
                <Text>- ผลสอบ SHK4 180 ขึ้นไป</Text>
              </Box>
              <Flex>
                <Text fontWeight='bold' mr={2}>ระยะเวลา: </Text>
                <Text>4 ปี</Text>
              </Flex>
            </Grid>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}

export default ScholariewingComponent
