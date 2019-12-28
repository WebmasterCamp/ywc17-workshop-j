import React from 'react'

import { Link } from 'gatsby'

import { Box, Checkbox, Flex, Heading, Text, Tag } from '@chakra-ui/core'

const CardComponent = props => {
  const {compare, data, onSelect, ...database} = props

  return (
    <Box p={2} width={1 / 3}>
      <Box p={4} boxShadow='0px 3px 6px #00000029' bg='white'>
        <Flex align='flex-start'>
          <Heading size='md' mb='5px'>
            <Link to={`/scholars/${data.id}`}>
              {data.name}
            </Link>
          </Heading>
          <Box mx='auto' />
          {compare.mode ? (
            <Checkbox
              onChange={() => onSelect(data)}
              isChecked={compare.pool.includes(data.id)}
              isDisabled={!compare.pool.includes(data.id) && compare.pool.length >= 3} />
          ) : null}
        </Flex>
        <Text mb='5px'>
          สาขา : {database.departments.filter(o => o.id === data.department)[0].name}
        </Text>
        <Tag
          fontSize='14px'
          size='small'
          px='10px'
          mb='50px'
          bg='#F98770'
          borderRadius={10}
          color='white'>
          เปิดรับสมัคร
        </Tag>
        <Text>ญี่ปุ่น</Text>
        <Text>รับสมัครถึง 31 มีนาคม 2563</Text>
      </Box>
    </Box>
  )
}

export default CardComponent
