import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const Wrapper = styled.div`
  /* background-color: blue; */
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-flow: wrap;
  margin: 80px 0 200px;
`

const ProjectsBox = () => {
  const data = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          extension: { regex: "/(jpg)/" }
          relativeDirectory: { eq: "projects" }
        }
      ) {
        edges {
          node {
            base
            childImageSharp {
              fixed(width: 350, height: 260, quality: 100) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Wrapper>
      {data.allFile.edges.map((image, index) => (
        <Img
          key={index}
          fixed={image.node.childImageSharp.fixed}
          alt={`${image.node.base.split('-')[1].split('.')[0]} foto`}
          style={{ margin: '20px' }}
        />
      ))}
    </Wrapper>
  )
}

export default ProjectsBox
