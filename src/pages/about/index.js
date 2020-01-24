/* Vendor imports */
import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

/* App imports */
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import style from './index.module.less'

export const aboutPropTypes = {
  data: PropTypes.shape({
    profilePhoto: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        fluid: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired,
  }),
}

class About extends React.Component {
  static propTypes = aboutPropTypes

  render() {
    let { profilePhoto } = this.props.data

    return (
      <Layout>
        <SEO
          title="About"
          description="A brief summary of this site"
          path="about"
        />
        <div className={style.container}>
          <div className={style.photo}>
            <Img fluid={profilePhoto.childImageSharp.fluid} />
          </div>
          <div className={style.content}>
            <h1>Srdjan Rakic</h1>
            <h2>Software Developer</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              cursus venenatis arcu, cursus pretium enim lacinia nec. Duis
              viverra sagittis neque. Fusce non luctus urna. Vivamus suscipit
              metus ac posuere egestas. Nunc a pulvinar purus. Vivamus nisi mi,
              fringilla quis lacus et, sagittis mollis massa. Cras tempus massa
              quis lobortis laoreet. Pellentesque metus odio, sagittis nec
              venenatis non, maximus congue eros. Suspendisse pellentesque purus
              sit amet ante commodo, et molestie mauris aliquet. Proin non nibh
              libero. Fusce at nulla euismod, condimentum augue quis, convallis
              justo.
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export const query = graphql`
  {
    profilePhoto: file(name: { eq: "profile-photo" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default About
