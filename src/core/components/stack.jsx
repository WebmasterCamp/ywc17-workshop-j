
import React, { Children } from 'react'
import { Box, Flex } from '@chakra-ui/core'

const StackComponent = React.forwardRef((props, ref) => {
  const { children, space, ...flexProps } = props
  return (
    <Flex {...flexProps}>
      {Children.map(props.children, child => (
        <React.Fragment>
          {child !== null && child !== undefined ? (
            <Box width='100%' pb={space}>
              {child}
            </Box>
          ) : null}
        </React.Fragment>
      ))}
    </Flex>
  )
})

export default StackComponent
