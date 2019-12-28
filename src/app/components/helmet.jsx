import React from 'react'

import { Helmet as ReactHelmet } from 'react-helmet'

const Helmet = props => {
  return (
    <ReactHelmet
      htmlAttributes={{ lang: 'en' }}
      defaultTitle={`BorkThun`}
      titleTemplate={`%s · BorkThun`}
      link={[
        {
          href: `/static/icon.png`,
          rel: 'shortcut icon',
        },
        {
          href: `/static/icon.png`,
          rel: 'apple-touch-icon',
        },
      ]}
    />
  )
}

export default Helmet
