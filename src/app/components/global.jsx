import React from 'react'

import { css, Global as EmotionGlobal } from '@emotion/core'

const GlobalComponent = props => {
  return (
    <EmotionGlobal
      styles={css`
        html,
        body,
        #___gatsby,
        #gatsby-focus-wrapper {
          height: 100%;
        }
      `}
    />
  )
}

export default GlobalComponent
