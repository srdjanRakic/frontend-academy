/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import PostList from '../../components/course-list'
import Config from '../../../config'

const Archive = ({ data, pageContext }) => {
  const { archivePage } = pageContext

  return (
    <Layout title="Archive">
      <SEO
        title={`Archive | Page ${archivePage}`}
        description="Old posts"
        path={Config.pages.archive}
      />
      <PostList posts={data.allMarkdownRemark.edges} />
    </Layout>
  )
}

Archive.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    archivePage: PropTypes.number.isRequired,
  }).isRequired,
}

export const query = graphql`
  query($postPaths: [String!]) {
    allMarkdownRemark(
      filter: {
        frontmatter: { path: { in: $postPaths } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            tags
            date(formatString: "MMMM DD, YYYY")
            excerpt
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`

export default Archive
