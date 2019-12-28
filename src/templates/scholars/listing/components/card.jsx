import React from 'react'

import { Link } from 'gatsby'

import { Box, Button, Checkbox, Heading, Text, Tag } from '@chakra-ui/core'

const CardComponent = props => {
  return (
    <Box p={2} width={1 / 3}>
      <Box p={4} boxShadow='0px 3px 6px #00000029' bg='white'>
        <Heading size='md' mb='5px'>
          <Link to={`/scholars/${props.data.id}`}>
            {props.data.name}
          </Link>
        </Heading>
        <Text color='blue.500' mb='5px'>
          สาขา : ไม่จำกัด
        </Text>
        <Tag
          fontSize='14px'
          size='small'
          px='10px'
          mb='50px'
          bg='#2A69AC'
          borderRadius={10}
          color='white'>
          เปิดรับสมัคร
        </Tag>
        <Text>ญี่ปุ่น</Text>
        <Text>รับสมัครถึง 31 มีนาคม 2563</Text>
        <Box>
          {props.compare.mode ? (
            <Checkbox
              onChange={() => props.onSelect(props.data)}
              isSelected={props.compare.pool.includes(props.data.id)}
              isDisabled={!props.compare.pool.includes(props.data.id) && props.compare.pool.length >= 3}>
                Select
            </Checkbox>
          ) : null}
        </Box>
      </Box>
    </Box>
  )
}

export default CardComponent
