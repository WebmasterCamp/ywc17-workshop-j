import React, { useEffect, useState } from 'react'

import { Box, Collapse, Checkbox, Flex, Icon, Stack, Text, useDisclosure } from '@chakra-ui/core'

const CollapseComponent = props => {
  const { title, onSelect, options } = props

  const { isOpen, onToggle } = useDisclosure()

  const [selected, setSelected] = useState([])

  const selectHandler = key => {
    if (selected.includes(key)) {
      setSelected(selected.filter(o => o !== key))
    } else {
      setSelected([...selected, key])
    }
  }

  useEffect(() => {
    onSelect(selected)
  }, [selected])

  return (
    <Box bg='white' border='1px solid' borderRadius='0.25rem' borderColor='gray.200' px={4} py={2}>
      <Flex alignItems='center' onClick={onToggle}>
        <Icon name={isOpen ? 'chevron-down' : 'chevron-right'} color='gray.500' />
        <Text pl={2}>{title}</Text>
      </Flex>
      <Collapse py={2} isOpen={isOpen}>
        <Stack space={2}>
          {options.map(option => {
            return (
              <Checkbox key={`option-${option.key}`} onChange={() => selectHandler(option.key)} isChecked={selected.includes(option.key)}>{option.name}</Checkbox>
            )
          })}
        </Stack>
      </Collapse>
    </Box>
  )
}

export default CollapseComponent
