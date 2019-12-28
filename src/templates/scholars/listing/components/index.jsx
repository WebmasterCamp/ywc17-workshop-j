import React from 'react'

import { Box, Button, Flex, Heading, Icon, Input, InputGroup, InputRightElement, Stack } from '@chakra-ui/core'

import Collapse from '../../../../core/components/collapse'

import Card from './card'

const ScholarComponent = props => {
  return (
    <React.Fragment>
      <Flex height='100%'>
        <Box width={6 / 24} position='sticky' p={6} zIndex={0}>
          <Flex flexDirection='column' justifyContent='space-between'>
            <Box>
              <Heading size='xl'>Filter</Heading>
              <Stack space={4} py={4}>
                <InputGroup>
                  <Input placeholder='Search' />
                  <InputRightElement children={<Icon name='search' color='gray.500' />} />
                </InputGroup>
                <Collapse title='Country'>
                  OK
                </Collapse>
              </Stack>
            </Box>
            <Button>yeet</Button>
          </Flex>
        </Box>
        <Box width={18 / 24} p={6}>
          {props.pageContext.data.map(data => (
            <Card data={data} />
          ))}
        </Box>
      </Flex>
    </React.Fragment>
  )
}

export default ScholarComponent
