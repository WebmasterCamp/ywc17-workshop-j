import React, { useState, useEffect } from 'react'

import { Link } from 'gatsby'

import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  Text,
} from '@chakra-ui/core'

import Card from './card'
import Collapse from './collapse'

import { searchFunction } from '../services/functions/search'

const ScholarComponent = props => {
  const [input, setInput] = useState({
    query: '',
    countries: [],
  })

  const [isScholarSearching, setIsScholarSearching] = useState(true)
  const [scholarResult, setScholarResult] = useState([])

  const [isCompareMode, setIsCompareMode] = useState(false)
  const [compareModePool, setCompareModePool] = useState([])

  const comparePoolHandler = pool => {
    if (compareModePool.map(o => o.id).includes(pool.id)) {
      setCompareModePool(compareModePool.filter(o => o.id !== pool.id))
    } else {
      setCompareModePool([...compareModePool, pool])
    }
  }

  useEffect(() => {
    setIsScholarSearching(true)

    searchFunction(input).then(res => {
      setScholarResult(res)
      setIsScholarSearching(false)
    })
  }, [input])

  return (
    <Flex height='100%' flex={1} flexDirection='column'>
      <Breadcrumb
        px={6}
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
          <Text color='#F98770'>ทุนทั้งหมด</Text>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex height='100%' flex={1}>
        <Box width={6 / 24} p={6} zIndex={0}>
          <Flex
            height='100%'
            flexDirection='column'
            justifyContent='space-between'>
            <Box>
              <Text>ตัวช่วยในการค้นหา</Text>
              <Stack space={4} py={4}>
                <InputGroup>
                  <Input
                    placeholder='Search'
                    onChange={e => {
                      const text = e.target.value
                      setInput(prev => ({ ...prev, query: text }))
                    }}
                  />
                  <InputRightElement
                    children={<Icon name='search' color='gray.500' />}
                  />
                </InputGroup>
                <Collapse
                  title='Country'
                  options={props.pageContext.countries.map(o => ({
                    key: o.id,
                    name: o.name,
                  }))}
                  onSelect={val =>
                    setInput(prev => ({ ...prev, countries: val }))
                  }
                />
                <Collapse
                  title='ระดับการศึกษา'
                  options={props.pageContext.education_levels.map(o => ({
                    key: o.id,
                    name: o.name,
                  }))}
                  onSelect={val => console.log(val)} // TODO
                />
              </Stack>
            </Box>
            <Flex flexDirection='column'>
              {isCompareMode ? (
                <Text textAlign='center' fontWeight='bold' pb={4}>
                  {compareModePool.length} Selected
                </Text>
              ) : null}
              <Button
                alignSelf='center'
                color='white'
                bg='#F98770'
                borderRadius={30}
                px={30}
                onClick={() => setIsCompareMode(prev => !prev)}
                fontWeight='bold'>
                {isCompareMode ? 'CANCEL' : 'COMPARE'}
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Flex width={18 / 24} flexWrap='wrap' p={6}>
          {isScholarSearching ? (
            <Spinner />
          ) : (
            <React.Fragment>
              {scholarResult.map(data => (
                <Card
                  data={data}
                  onSelect={comparePoolHandler}
                  compare={{
                    mode: isCompareMode,
                    pool: compareModePool.map(pool => pool.id),
                  }}
                />
              ))}
            </React.Fragment>
          )}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default ScholarComponent
