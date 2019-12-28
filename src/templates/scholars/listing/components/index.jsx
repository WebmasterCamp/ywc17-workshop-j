import React, { useState, useEffect } from 'react'

import { Link } from 'gatsby'

import { FaTimes } from 'react-icons/fa'

import {
  Box,
  Button,
  Flex,
  Icon,
  Checkbox,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
  Breadcrumb,
  BreadcrumbItem,
  Text,
  Tag,
  TagLabel,
  TagIcon,
  Heading,
  Stack as ChakraStack,
} from '@chakra-ui/core'

import Stack from '../../../../core/components/stack'
import Card from './card'
import Collapse from './collapse'

import { searchFunction } from '../services/functions/search'

const ScholarComponent = props => {
  const [input, setInput] = useState({
    query: '',
    ongoing: false,
    countries: [],
    departments: [],
    education_levels: [],
    scholarship_types: [],
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

  const compareModalHandler = () => {}

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
            <Text fontFamily='Prompt'>หน้าแรก</Text>
          </Link>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <Text color='#F98770' fontFamily='Prompt'>
            ทุนทั้งหมด
          </Text>
        </BreadcrumbItem>
      </Breadcrumb>
      <Flex height='100%' flex={1}>
        <Box width={6 / 24} p={6} zIndex={0}>
          <Flex
            height='100%'
            flexDirection='column'
            // justifyContent='space-between'
          >
            <Box>
              <Heading size='lg' pb={4} fontFamily='Prompt'>
                ตัวช่วยในการค้นหา
              </Heading>
              <Flex pt={4} pb={6} justifyContent='center'>
                <Checkbox
                  isChecked={input.ongoing}
                  onChange={() =>
                    setInput(prev => ({ ...prev, ongoing: !prev.ongoing }))
                  }>
                  <Heading size='sm' fontFamily='Prompt'>
                    กำลังเปิดรับสมัคร
                  </Heading>
                </Checkbox>
              </Flex>
              <Stack space={4} flexWrap='wrap'>
                <InputGroup
                  boxShadow='0px 3px 6px #00000029'
                  borderRadius='4px'>
                  <Input
                    fontFamily='Prompt'
                    placeholder='ค้นหา'
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
                  title='ประเทศ'
                  options={props.pageContext.countries.map(o => ({
                    key: o.id,
                    name: o.name,
                  }))}
                  onSelect={val =>
                    setInput(prev => ({ ...prev, countries: val }))
                  }
                />
                <Collapse
                  title='สาขาวิชา'
                  options={props.pageContext.departments.map(o => ({
                    key: o.id,
                    name: o.name,
                  }))}
                  onSelect={val =>
                    setInput(prev => ({ ...prev, departments: val }))
                  }
                />
                <Collapse
                  title='ระดับการศึกษา'
                  options={props.pageContext.education_levels.map(o => ({
                    key: o.id,
                    name: o.name,
                  }))}
                  onSelect={val =>
                    setInput(prev => ({ ...prev, education_levels: val }))
                  }
                />
                <Collapse
                  title='ประเภททุน'
                  options={props.pageContext.scholarship_types.map(o => ({
                    key: o.id,
                    name: o.name,
                  }))}
                  onSelect={val =>
                    setInput(prev => ({ ...prev, scholarship_types: val }))
                  }
                />
              </Stack>
            </Box>
            <Flex flexDirection='column'>
              <Flex justifyContent='center' mt={4}>
                {isCompareMode ? (
                  <Link
                    to={`/scholars/comparing/${compareModePool
                      .map(({ id }) => id)
                      .join('/')}`}>
                    <Button
                      color='white'
                      bg='#F98770'
                      borderRadius={30}
                      px='30px'
                      mx='10px'
                      fontWeight='bold'
                      isDisabled={compareModePool.length < 2}>
                      เปรียบเทียบ
                    </Button>
                  </Link>
                ) : null}
                <Button
                  color='white'
                  bg='#F98770'
                  borderRadius={30}
                  px='30px'
                  mx='10px'
                  onClick={() => setIsCompareMode(prev => !prev)}
                  fontWeight='bold'>
                  {isCompareMode ? 'CANCEL' : 'COMPARE'}
                </Button>
              </Flex>
            </Flex>
            {isCompareMode ? (
              <ChakraStack py={2} mb='30px' mt={4}>
                {compareModePool.map(pool => (
                  <Tag
                    color='white'
                    bg='#F98770'
                    fontSize='11px'
                    borderRadius='10px'
                    py={0}
                    maxWidth='fit-content'>
                    <TagLabel>{pool.name}</TagLabel>
                    <TagIcon
                      onClick={() => comparePoolHandler(pool)}
                      icon={FaTimes}
                      cursor='pointer'
                    />
                  </Tag>
                ))}
              </ChakraStack>
            ) : null}
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
                  countries={props.pageContext.countries}
                  departments={props.pageContext.departments}
                  education_levels={props.pageContext.education_levels}
                  scholarship_types={props.pageContext.scholarship_types}
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
