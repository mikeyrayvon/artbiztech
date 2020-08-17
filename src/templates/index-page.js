import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
// eslint-disable-next-line
import Img from 'gatsby-image/withIEPolyfill'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title
}) => (
  <div>
    <Link to='/'>{title}</Link>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.array,
  about: PropTypes.object,
  team: PropTypes.object,
  clients: PropTypes.array
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
        about={frontmatter.about}
        team={frontmatter.team}
        clients={frontmatter.clients}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        intro {
          heading
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        about {
          heading
          text
        }
        team {
          heading
          description
          members {
            name
            title
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        clients {
          company
          logo {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`
