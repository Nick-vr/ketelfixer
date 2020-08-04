import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Banner = () => {
  const data = useStaticQuery(graphql`
    query {
      bannerImage: file(relativePath: { eq: "banner-test.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3400, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return <Img fluid={data.bannerImage.childImageSharp.fluid} alt="Banner" />
}

export default Banner
