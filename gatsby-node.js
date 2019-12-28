const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const { database } = require('./content/database/scholarship')

exports.createPages = async ({ graphql, actions }) => {
  // Define createPage functions
  const { createPage } = actions

  createPage({
    path: '/scholars',
    component: path.resolve('./src/templates/scholars/listing/components/index.jsx'),
    context: {
      data: database,
    },
  })

  database.map(data => {
    createPage({
      path: `/scholars/${data.id}`,
      component: path.resolve(`./src/templates/scholars/viewing/components/index.jsx`),
      context: {
        data
      },
    })
  })

  return true
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === `MarkdownRemark`) {
//     const value = createFilePath({ node, getNode })
//     createNodeField({
//       name: `slug`,
//       node,
//       value,
//     })
//   }
// }

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (!stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          react: `preact/compat`,
          "react-dom": `preact/compat`,
          "react-dom/server": `preact/compat`,
        },
      },
    })
  }
}
