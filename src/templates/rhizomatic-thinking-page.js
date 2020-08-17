import React from 'react'
import PropTypes from 'prop-types'
// eslint-disable-next-line
import { Link, graphql } from 'gatsby'

//import Layout from '../components/Layout'

const RhizomaticThinkingPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div>{frontmatter.title}</div>
  )
}

RhizomaticThinkingPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default RhizomaticThinkingPage

export const rhizomaticThinkingPageQuery = graphql`
  query RhizomaticThinkingPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
