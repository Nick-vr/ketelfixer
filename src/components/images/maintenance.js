import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Maintenance = () => {
  const data = useStaticQuery(graphql`
    query {
      maintenanceImage: file(relativePath: { eq: "maintenance.jpg" }) {
        childImageSharp {
          fixed(width: 350, height: 230, quality: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <Img
      fixed={data.maintenanceImage.childImageSharp.fixed}
      alt="Maintenance IMG"
    />
  )
}

export default Maintenance
