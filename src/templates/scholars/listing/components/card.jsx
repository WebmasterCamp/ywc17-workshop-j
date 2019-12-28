import { times } from 'lodash'
import React from 'react'

import { FaStar } from 'react-icons/fa'

import { Link } from 'gatsby'

import { Box, Checkbox, Flex, Icon, Heading, Text, Tag } from '@chakra-ui/core'

const CardComponent = props => {
  const {compare, data, onSelect, ...database} = props

  return (
    <Box p={2} width={1 / 3}>
      <Box p={4} boxShadow='0px 3px 6px #00000029' bg='white'>
        <Flex align='flex-start'>
          <Heading size='md' mb='5px'>
            <Link to={`/scholars/${data.id}`} fontFamily='Montserrat' fontWeight='bold'>
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
        <Text mb='5px' fontFamily='Prompt'>
          สาขา: {database.departments.filter(o => o.id === data.department)[0].name}
        </Text>
        <Flex py={2} alignItems='center'>
          {times(data.rating, () => { 
            return (
              <Box><FaStar color='#ECC94B' /></Box>
            )
          })}
        </Flex>
        <Tag
          fontSize='14px'
          fontFamily='Prompt'
          size='small'
          px='10px'
          bg={data.ongoing ? '#F98770' : '#EFF0F2'}
          borderRadius={10}
          fontWeight='bold'
          color={data.ongoing ? 'white' : '#707070'}>
          {data.ongoing ? 'เปิดรับสมัคร' : 'ปิดรับสมัครแล้ว'}
        </Tag>
        <Text pt={12} fontFamily='Prompt'>{database.countries.filter(o => o.id === data.country)[0].name}</Text>
        <Text fontFamily='Prompt'>รับสมัครถึง {data.due_date}</Text>
      </Box>
    </Box>
  )
}

export default CardComponent
