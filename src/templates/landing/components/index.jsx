import React from 'react'

import Img from 'gatsby-image'

import { Link } from 'gatsby'

import { FaSearch } from 'react-icons/fa'

import {
  Box,
  Flex,
  Stack as ChakraStack,
  Input,
  Image,
  Button,
  Heading,
  Text,
} from '@chakra-ui/core'
import styled from '@emotion/styled'

import Stack from '../../../core/components/stack'

const GatsbyImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  border-radius: 0px;
  height: ${props => props.height || 'auto'};
`

const LandingComponent = props => {
  return (
    <React.Fragment>
      <Box pt={48}>
        <Heading size='xl'>
          พบกับทุนมากมายที่เหมาะสำหรับคุณ ค้นหาตอนนี้เลย!
        </Heading>
        <Box
          bg='#E7E3E4'
          boxShadow='0px 3px 6px #00000029'
          width={8 / 24}
          p={6}
          my={4}>
          <Stack flexWrap='wrap' space={4}>
            <Input
              placeholder='ค้นหาทุน'
              size='md'
              borderRadius='4px'
              boxShadow='0px 3px 6px #00000029'
            />
            <Input
              placeholder='สาขา'
              size='md'
              borderRadius='4px'
              boxShadow='0px 3px 6px #00000029'
            />
            <Input
              placeholder='ระดับการศึกษา'
              size='md'
              borderRadius='4px'
              boxShadow='0px 3px 6px #00000029'
            />
          </Stack>
          <Flex justifyContent='center'>
            <Link to='/scholars'>
              <Button color='white' bg='#F98770' borderRadius={30}>
                <Flex alignItems='center'>
                  <Text pr={2}>ค้นหาทุน</Text>
                  <FaSearch />
                </Flex>
              </Button>
            </Link>
          </Flex>
        </Box>
      </Box>
      <Box pt={64}>
        <Heading size='lg' textAlign='center'>
          ทุนประเทศที่น่าสนใจ
        </Heading>
        <Flex justifyContent='center' pt={6}>
          <Box width={18 / 24}>
            <Flex justifyContent='center'>
              {props.pageContext.data.map(data => (
                <Box width={1 / 4} position='relative'>
                  <Link to='/scholars'>
                    <GatsbyImage fluid={data.image} />
                    <Box position='absolute' left={0} right={0} top={0} py={5}>
                      <Heading size='md' textAlign='center'>
                        {data.title}
                      </Heading>
                    </Box>
                  </Link>
                </Box>
              ))}
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box pt={48}>
        <Flex justifyContent='center'>
          <Box width={18 / 24}>
            <Heading size='xl' textAlign='center'>
              หมดกังวลเรื่องทุนเรียนต่อ เพราะ บอกทุน จะอยู่กับคุณตลอดเส้นทางฝัน
            </Heading>
            <Box pt={8}>
              <Flex flexWrap='wrap'>
                <Flex flexWrap='wrap' width={1 / 2} p={8} justifyContent='center'>
                  <Image width='125px' src='/conversation.svg' />
                  <Heading width='100%' size='md' textAlign='center' pt={2}>
                    บอก… เรื่องน่ารู้สำหรับคนอยากเรียนต่อ
                  </Heading>
                  <Text width='100%' textAlign='center'>
                    เรื่องต้องรู้ สำหรับผู้อยากเรียนต่อ ทั้งรีวิว ฮาวทู ไลฟ์ไตล์
                    เคล็ดลับการ ยื่นสมัครทุน และเรื่องราวสนุก ๆ อีกมากมาย
                    ที่บอกบุญคัดสรรมาบอกคุณ
                  </Text>
                </Flex>
                <Flex flexWrap='wrap' width={1 / 2} p={8} justifyContent='center'>
                  <Image width='125px' src='/heart.svg' />
                  <Heading width='100%' size='md' textAlign='center' pt={2}>
                    บอก… ว่าทุนไหนที่ใช่คุณ
                  </Heading>
                  <Text width='100%' textAlign='center'>
                    เหมาะกับทุนไหน เราบอกได้ ด้วยฟีลเตอร์ของบอกบุญ
                    คุณจึงสามารถค้นพบทุนที่เหมาะสม กับคุณได้อย่างง่ายแค่ปลายนิ้ว
                  </Text>
                </Flex>
                <Flex flexWrap='wrap' width={1 / 2} p={8} justifyContent='center'>
                  <Image width='125px' src='/contract.svg' />
                  <Heading width='100%' size='md' textAlign='center' pt={2}>
                    บอก... วิธีจัดการกับเอกสารสุดยุ่งยาก
                  </Heading>
                  <Text width='100%' textAlign='center'>
                    ไม่ต้องจัดการเอกสารที่ยุ่งยากเองอีกต่อไป
                    ด้วยบริการจัดการเอกสารสำหรับการเรียนต่อ จาก agency
                    ผู้เชี่ยวชาญที่น่าเชื่อถือ
                  </Text>
                </Flex>
                <Flex flexWrap='wrap' width={1 / 2} p={8} justifyContent='center'>
                  <Image width='125px' src='/clock.svg' />
                  <Heading width='100%' size='md' textAlign='center' pt={2}>
                    บอก… ว่าถึงเวลาต้องทำอะไร
                  </Heading>
                  <Text width='100%' textAlign='center'>
                    เพราะเราแจ้งเตือนทุกความ เคลื่อนไหวเกี่ยวกับทุนที่คุณสนใจ
                    คุณจึงไม่พลาดทุกกิจกรรมและคว้า โอกาสไว้ได้ก่อนใคร
                  </Text>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Box>
    </React.Fragment>
  )
}

export default LandingComponent
