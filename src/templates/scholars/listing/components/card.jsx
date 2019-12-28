import React from 'react'

import { Link } from 'gatsby'

import { Box  } from '@chakra-ui/core'

const CardComponent = props => {
  return (
    <Box width={1 / 4} shadow='0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'>
      {props.data.id}
    </Box>
  )
}

export default CardComponent
