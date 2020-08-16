import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

//import Layout from '../components/Layout'

const ConnectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <div>{frontmatter.title}</div>
  )
}

ConnectPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default ConnectPage

export const connectPageQuery = graphql`
  query ConnectPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`
