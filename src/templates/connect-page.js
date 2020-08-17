import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const ConnectPageTemplate = ({
  title
}) => (
  <div>
    <Link to='/'>{title}</Link>
  </div>
)

ConnectPageTemplate.propTypes = {
  title: PropTypes.string,
}

const ConnectPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <ConnectPageTemplate
        title={frontmatter.title}
      />
    </Layout>
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
