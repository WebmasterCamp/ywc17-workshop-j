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
  Image,
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
        <Flex mb={6}>
          <Box w='150px' h='150px'>
            {data.image ? <Img fluid={data.image} /> : null}
          </Box>
          <Box flex={1} px={12}>
            <Heading size='lg' color='#F98770' mb={4}>
              {data.name}
            </Heading>
            <Grid templateColumns={'50% 25% 25%'} gap={6} mb={4}>
              <Flex>
                <Text fontWeight='bold' mr={2}>
                  ระดับการศึกษา:{' '}
                </Text>
                <Text>ปริญญาตรี</Text>
              </Flex>
              <Flex>
                <Text fontWeight='bold' mr={2}>
                  ระยะเวลา:{' '}
                </Text>
                <Text>4 ปี</Text>
              </Flex>
              <Flex>
                <Text fontWeight='bold' mr={2}>
                  จำนวนทุน:{' '}
                </Text>
                <Text>-</Text>
              </Flex>
            </Grid>
            <Grid templateColumns={'50% 50%'} gap={6} mb={4}>
              <Box>
                <Text fontWeight='bold' mr={2}>
                  ผลการเรียน:{' '}
                </Text>
                <Text>- ผลการเรียน 4.00 ขึ้นไป (4 เทอม)</Text>
                <Text>- ผลสอบ SHK4 180 ขึ้นไป</Text>
              </Box>
              <Flex>
                <Text fontWeight='bold' mr={2}>
                  ระยะเวลา:{' '}
                </Text>
                <Text>4 ปี</Text>
              </Flex>
            </Grid>
          </Box>
        </Flex>
        <Box mb={6}>
          <Image src='/bar.png' mx='auto'/>
          <Image src='/step.png' mx='auto' />
        </Box>
        <Box mb={6}>
          <Text fontWeight='bold' mr={2}>
            เกี่ยวกับมหาวิทยาลัย:
          </Text>
          <Text>
            มหาวิทยาลัยซีหนาน หรือ Southwest University คือ
            มหาวิทยาลัยเอกชนชื่อดังใน ประเทศจีน มีนักศึกษาทั้งหมด 80,000 คน
            ประกอบไปด้วย ปริญญาเอก 66 สาขา ปริญญาโท 159 สาขา และปริญญาตรี 97
            สาขา จาการจัดลำดับโดย Best Colleges มหาวิทยาลัยซีหนาน
            ถูกจัดอยู่ในอันดับที่ 92 ในสาขาศิลปศาสตร์ (Liberal Arts)
          </Text>
        </Box>
        <Box mb={6}>
          <Text fontWeight='bold' mr={2}>
            ที่ตั้ง:
          </Text>
          <Text>
            มหาวิทยาลัยซีหนาน ตั้งอยู่ในเขตเป่ยเป้ย มหานครฉงซิ่ง
            ซึ่งอยู่ในภูมิภาคตะวันตก เฉียงใต้ สาธารณรัฐประชาชนจีน
            มีการคมนาคมที่สะดวกและมีวิทยาเขตตั้งอยู่ใน
            หลากหลายพื้นที่โดยวิทยาเขตหลักจะตั้งอยู่ที่ใจกลางเมือง
            รายล้อมด้วยแหล่งช็อปปิ้ง และมีวิทยาเขตใหม่ ซึ่งตั้งอยู่ในชานเมือง
            มีอาณาเขตกว้างขวาง และรายล้อมไปด้วย พรรณไม้นานาชนิด
            จนได้ขึ้นชื่อว่าเป็น 1 ใน ‘มหาวิทยาลัยที่สวยที่สุด’ ของประเทศจีน
          </Text>
        </Box>
        <Box mb={6}>
          <Text fontWeight='bold' mr={2}>
            ค่าครองชีพ:
          </Text>
          <Text>
            หากเปรียบเทียบค่าครองชีพสำหรับเมืองฉงซิ่งกับกรุงเทพมหานคร
            เมืองฉงซิ่งนั้นจะมีค่าครองชีพที่สูงกว่าเล็กน้อย โดยราคาอาหารบริเวณ
            มหาวิทยาลัย จะเริ่มต้นที่ 10 หยวน (ประมาณ 43 บาท)
            แต่สำหรับค่าโดยสารนั้นจะถูกกว่า โดยมีค่ารถเมล์แพงสุดที่ 2 หยวน (8
            บาท) และค่ารถไฟฟ้าแพงสุดที่ 6 หยวน (25 บาท)
          </Text>
        </Box>
        <Box mb={6}>
          <Text fontWeight='bold' mr={2}>
            การขอวีซ่า (อัพเดตข้อมูลล่าสุด: 28/12/19):
          </Text>
          <Box>
            เนื่องจากรัฐบาลจีนมีนโยบายที่จะเปิดรับนักศึกษาต่างชาติเป็นจำนวนมาก
            จึงทำให้การขอวีซ่าเพื่อศึกษาต่อในประเทศจีนนั้นเป็นเรื่องที่ง่าย โดย
            วีซ่าสำหรับนักเรียนต่างชาตินั้นจะแบ่งออกเป็น 2 ประเภท คือ
            <Box pl='50px'>
              1. วีซ่า X1
              <Box pl='50px'>
                วีซ่าสำหรับนักเรียนต่างชาติ ที่จะศึกษาในประเทศจีนเป็นเวลามากกว่า
                180 วัน
                <br />
                เอกสารที่ต้องเตรียม:
                <Box pl='50px'>
                  พาสปอร์ต (ต้องไม่หมดอายุตลอดระยะเวลาที่อาศัยในจีน)
                  ที่มีหน้าว่างเพียงพอ ใบสมัครขอวีซ่า พร้อมรูปถ่ายขนาด 2 นิ้ว
                  จำนวน 2 รูป จดหมายตอบรับเข้าศึกษาตัวจริง พร้อมสำเนา
                  ที่ออกโดยมหาวิทยาลัยใประเทศจีน หลักฐานการเปลี่ยนชื่อ - นามสกุล
                  (ถ้ามี) ใบสมัครขอวีซ่าสำหรับเรียนต่อในประเทศจีน ตัวจริง
                  พร้อมสำเนา โดยใช้แบบฟอร์ม JW201 หรือ JW202
                  ขึ้นอยู่กับประเภทของทุนที่ได้รับ โดยมหาวิทยาลัยจะระบุมาให้
                  หากศึกษาในประเทศจีนมากกว่า 6 เดือน ต้องยื่นใบรับรองแพทย์
                  ที่ออกโดยหน่วยงานสาธารณสุขของรัฐ ทั้งตัวจริงและสำเนา
                </Box>
              </Box>
            </Box>
            <Box pl='50px'>
              2. วีซ่า X2
              <Box pl='50px'>
                วีซ่าสำหรับนักเรียนต่างชาติ
                ที่จะศึกษาในประเทศจีนเป็นเวลาน้อยกว่า 180 วัน
                <br />
                เอกสารที่ต้องเตรียม:
                <Box pl='50px'>
                  พาสปอร์ต (ต้องไม่หมดอายุตลอดระยะเวลาที่อาศัยในจีน)
                  ที่มีหน้าว่างเพียงพอ ใบสมัครขอวีซ่า พร้อมรูปถ่ายขนาด 2 นิ้ว
                  จำนวน 2 รูป จดหมายตอบรับเข้าศึกษาตัวจริง พร้อมสำเนา
                  ที่ออกโดยมหาวิทยาลัยใประเทศจีน
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ScholariewingComponent
