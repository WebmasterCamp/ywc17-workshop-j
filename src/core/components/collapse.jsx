import React from 'react'

import { Box, Collapse, Flex, Icon, Text, useDisclosure } from '@chakra-ui/core'

const CollapseComponent = props => {
  const { title, children } = props

  const { isOpen, onToggle } = useDisclosure()

  console.log(isOpen)

  return (
    <Box bg='white' border='1px solid' borderRadius='0.25rem' borderColor='gray.200' px={4} py={2}>
      <Flex alignItems='center' onClick={onToggle}>
        <Icon name={isOpen ? 'chevron-down' : 'chevron-right'} color='gray.500' />
        <Text pl={2}>{title}</Text>
      </Flex>
      <Collapse py={2} isOpen={isOpen}>
        {children}
      </Collapse>
    </Box>
  )
}

export default CollapseComponent
