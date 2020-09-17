import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  width: 350px;
`

const StyledFigcaption = styled.figcaption`
  font-size: 1.1rem;
  text-align: center;
  letter-spacing: 2px;
  margin-top: 20px;
`

const Renovation = () => {
  const data = useStaticQuery(graphql`
    query {
      renovationImage: file(relativePath: { eq: "bathroom.jpg" }) {
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
        fixed={data.renovationImage.childImageSharp.fixed}
        alt="Badkamer Renovatie IMG"
      />
      <StyledFigcaption>Badkamer Renovatie</StyledFigcaption>
    </StyledFigure>
  )
}

export default Renovation
