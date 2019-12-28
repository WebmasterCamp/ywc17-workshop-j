const _ = require('lodash')
const fs = require('fs')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const { database } = require('./content/database/scholarship')

exports.createPages = async ({ graphql, actions }) => {
  // Define createPage functions
  const { createPage } = actions

  createPage({
    path: '/scholars',
    component: path.resolve(
      './src/templates/scholars/listing/components/index.jsx'
    ),
    context: {
      scholarships: database.scholarships,
      countries: database.countries,
      departments: database.departments,
      education_levels: database.education_levels,
      scholarship_types: database.scholarship_types,
    },
  })

  const res = await graphql(`
    query LandingQuery {
      jp: file(relativePath: {eq: "landing.jp.png"}) {
        childImageSharp {
          fluid (maxWidth: 300, quality: 80) {
            base64
            aspectRatio
            src
            srcSet
            srcSetWebp
            tracedSVG
            srcWebp
          }
        }
      }
      cn: file(relativePath: {eq: "landing.cn.png"}) {
        childImageSharp {
          fluid (maxWidth: 300, quality: 80) {
            base64
            aspectRatio
            src
            srcSet
            srcSetWebp
            tracedSVG
            srcWebp
          }
        }
      }
      us: file(relativePath: {eq: "landing.us.png"}) {
        childImageSharp {
          fluid (maxWidth: 300, quality: 80) {
            base64
            aspectRatio
            src
            srcSet
            srcSetWebp
            tracedSVG
            srcWebp
          }
        }
      }
      en: file(relativePath: {eq: "landing.en.png"}) {
        childImageSharp {
          fluid (maxWidth: 300, quality: 80) {
            base64
            aspectRatio
            src
            srcSet
            srcSetWebp
            tracedSVG
            srcWebp
          }
        }
      }
    }
  `)

  createPage({
    path: '/',
    component: path.resolve(
      `./src/templates/landing/components/index.jsx`
    ),
    context: {
      data: [
        {
          title: 'ทุนอังกฤษ',
          image: res.data.en.childImageSharp.fluid,
        },
        {
          title: 'ทุนอเมริกา',
          image: res.data.us.childImageSharp.fluid,
        },
        {
          title: 'ทุนจีน',
          image: res.data.cn.childImageSharp.fluid,
        },
        {
          title: 'ทุนญี่ปุ่น',
          image: res.data.jp.childImageSharp.fluid,
        },
      ]
    }
  })

  await Promise.all(database.scholarships.map(async data => {
    const res = await graphql(`
      query Scholarship3Query {
        image: file(relativePath: {eq: "scholarship.${data.id}.png"}) {
          childImageSharp {
            fluid (maxWidth: 200, quality: 80) {
              base64
              aspectRatio
              src
              srcSet
              srcSetWebp
              tracedSVG
              srcWebp
            }
          }
        }
      }
    `)

    createPage({
      path: `/scholars/${data.id}`,
      component: path.resolve(
        `./src/templates/scholars/viewing/components/index.jsx`
      ),
      context: {
        data: {
          image: res.data.image.childImageSharp.fluid,
          ...data,
        },
      },
    })
  }))

  await Promise.all(database.scholarships.map(async data1 => {
    await Promise.all(database.scholarships.map(async data2 => {
      if (_.union([data1, data2]).length === 2) {
        const res12 = await graphql(`
          query Scholarship12Query {
            image1: file(relativePath: {eq: "scholarship.${data1.id}.png"}) {
              childImageSharp {
                fluid {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcSetWebp
                  tracedSVG
                  srcWebp
                }
              }
            }
            image2: file(relativePath: {eq: "scholarship.${data2.id}.png"}) {
              childImageSharp {
                fluid (maxWidth: 200, quality: 80) {
                  base64
                  aspectRatio
                  src
                  srcSet
                  srcSetWebp
                  tracedSVG
                  srcWebp
                }
              }
            }
          }
        `)

        createPage({
          path: `/scholars/comparing/${data1.id}/${data2.id}`,
          component: path.resolve(
            `./src/templates/scholars/comparing/components/index.jsx`
          ),
          context: {
            data: [
              {
                image: res12.data.image1.childImageSharp.fluid,
                ...data1,
              },
              {
                image: res12.data.image2.childImageSharp.fluid,
                ...data2,
              },
            ],
          },
        })

        await Promise.all(database.scholarships.map(async data3 => {
          if (_.union([data1, data2, data3]).length === 3) {
            const res3 = await graphql(`
              query Scholarship3Query {
                image3: file(relativePath: {eq: "scholarship.${data3.id}.png"}) {
                  childImageSharp {
                    fluid (maxWidth: 200, quality: 80) {
                      base64
                      aspectRatio
                      src
                      srcSet
                      srcSetWebp
                      tracedSVG
                      srcWebp
                    }
                  }
                }
              }
            `)

            createPage({
              path: `/scholars/comparing/${data1.id}/${data2.id}/${data3.id}`,
              component: path.resolve(
                `./src/templates/scholars/comparing/components/index.jsx`
              ),
              context: {
                data: [
                  {
                    image: res12.data.image1.childImageSharp.fluid,
                    ...data1,
                  },
                  {
                    image: res12.data.image2.childImageSharp.fluid,
                    ...data2,
                  },
                  {
                    image: res3.data.image3.childImageSharp.fluid,
                    ...data3,
                  },
                ],
              },
            })
          }
        }))
      }
    }))
  }))

  return true
}

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (!stage.startsWith('develop')) {
    actions.setWebpackConfig({
      resolve: {
        alias: {
          react: `preact/compat`,
          'react-dom': `preact/compat`,
          'react-dom/server': `preact/compat`,
        },
      },
    })
  }
}
