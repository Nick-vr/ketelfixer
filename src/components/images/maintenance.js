import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  width: 350px;
`

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
    <StyledFigure>
      <Img
        fixed={data.maintenanceImage.childImageSharp.fixed}
        alt="Onderhoud & Keuringen IMG"
      />
    </StyledFigure>
  )
}

export default Maintenance
