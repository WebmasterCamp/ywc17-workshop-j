import React, { useEffect, useState } from 'react'

import { Box, Collapse, Checkbox, Heading, Flex, Icon, Stack, Text, useDisclosure } from '@chakra-ui/core'

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
    <Box bg='white' border='1px solid' borderColor='gray.200' px={4} py={3} boxShadow='0px 3px 6px #00000029' borderRadius='4px'>
      <Flex alignItems='center' onClick={onToggle}>
        <Icon name={isOpen ? 'chevron-down' : 'chevron-right'} color='gray.500' />
        <Heading size='sm' pl={2} fontFamily='Prompt'>{title}</Heading>
      </Flex>
      <Collapse py={2} isOpen={isOpen}>
        <Stack space={2}>
          {options.map(option => {
            return (
              <Checkbox
                fontFamily='Prompt'
                key={`option-${option.key}`}
                onChange={() => selectHandler(option.key)}
                isChecked={selected.includes(option.key)}>
                {option.name}
              </Checkbox>
            )
          })}
        </Stack>
      </Collapse>
    </Box>
  )
}

export default CollapseComponent
