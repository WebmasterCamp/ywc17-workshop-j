import React from 'react'

import Img from 'gatsby-image'

import { FaSearch } from 'react-icons/fa'

import { Box, Flex, Stack as ChakraStack, Input, Button, Heading, Text } from '@chakra-ui/core'

import Stack from '../../../core/components/stack'

// const GatsbyImage = styled(Img)`
// position: absolute;
// top: 0;
// left: 0;
// width: 100%;
// z-index: -1;
// border-radius: 0px;
// height: ${(props: IGatsbyImage) => props.height || 'auto'};
// `

const LandingComponent = props => {
  return (
    <React.Fragment>
      <Box pt={40}>
        <Heading size='xl'>พบกับทุนมากมายที่เหมาะสำหรับคุณ ค้นหาตอนนี้เลย!</Heading>
        <Box bg='#E7E3E4' boxShadow='0px 3px 6px #00000029' width={8 / 24} p={6} my={4}>
          <Stack flexWrap='wrap' space={4}>
            <Input placeholder='ค้นหาทุน' size='md' borderRadius='4px' boxShadow='0px 3px 6px #00000029' />
            <Input placeholder='สาขา' size='md' borderRadius='4px' boxShadow='0px 3px 6px #00000029' />
            <Input placeholder='ระดับการศึกษา' size='md' borderRadius='4px' boxShadow='0px 3px 6px #00000029' />
          </Stack>
          <Flex justifyContent='center'>
            <Button
              color='white'
              bg='#F98770'
              borderRadius={30}>
              <Flex alignItems='center'>
                <Text pr={2}>ค้นหาทุน</Text>
                <FaSearch />
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Box>
      <Box pt={20}>
        <Heading size='lg' textAlign='center'>ทุนประเทศที่น่าสนใจ</Heading>
        <Flex justifyContent='center'>
          <Box width={18 / 24}>
            <Flex justifyContent='center'>
              {props.pageContext.data.map(data => (
                <Box width={1 / 4} position='relative'>
                  {/* <GatsbyImage fluid={data.image} /> */}
                  <Box></Box>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default LandingComponent
