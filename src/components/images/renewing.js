import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const StyledFigure = styled.figure`
  width: 350px;
`

const Renewing = () => {
  const data = useStaticQuery(graphql`
    query {
      renewingImage: file(relativePath: { eq: "boiler.jpg" }) {
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
        fixed={data.renewingImage.childImageSharp.fixed}
        alt="Vernieuwen Ketels IMG"
      />
    </StyledFigure>
  )
}

export default Renewing
