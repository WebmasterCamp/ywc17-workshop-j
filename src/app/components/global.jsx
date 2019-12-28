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
          color: #707070;
          font-family: 'Prompt', -apple-system, BlinkMacSystemFont, 'Segoe UI',
          'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei',
          'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
          'Segoe UI Emoji', 'Segoe UI Symbol';
        }
      `}
    />
  )
}

export default GlobalComponent
