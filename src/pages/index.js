/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'
import { Construction } from '@styled-icons/material-sharp/Construction'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectsBox from '../components/projectsBox'

import Banner from '../components/images/banner'
import Maintenance from '../components/images/maintenance'
import Renewing from '../components/images/renewing'
import Renovation from '../components/images/renovation'

const StyledPlumbing = styled(Plumbing)`
  color: #b87333;
  width: 60px;
`

const StyledConstruction = styled(Construction)`
  color: #b87333;
  width: 60px;
`

const Section = styled.section`
  position: relative;
  margin-top: 60px;
`

const ServiceSection = styled(Section)`
  font-family: 'Roboto Slab', serif;
  svg {
    display: block;
    margin: 30px auto;
  }

  h1 {
    font-size: 2rem;
    text-align: center;
    text-transform: uppercase;

    ::after {
      content: '';
      width: 60px;
      height: 5px;
      background-color: #b87333;
      position: absolute;
      top: 160px;
      left: calc(50% - 30px);
    }
  }
`
const ProjectSection = styled(ServiceSection)``

const DienstenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;

  @media (min-width: 1280px) {
    flex-direction: row;
    justify-content: center;
  }

  figure {
    margin: 40px;
  }
`

const AboutSection = styled(Section)`
  background: rgb(184, 115, 51, 0.5);
  padding: 50px;

  h2 {
    font-size: 1.8rem;
    margin-bottom: 40px;
    ::after {
      content: '';
      width: 120px;
      height: 5px;
      background-color: #b87333;
      position: absolute;
      top: 90px;
      left: 50px;
    }
  }

  p {
    margin: 20px 0;
    font-weight: 100;
    text-align: justify;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />

    {/* ONZE DIENSTEN section */}
    <ServiceSection>
      <StyledPlumbing />
      <h1>Onze diensten</h1>
      <DienstenWrapper>
        <Maintenance />
        <Renewing />
        <Renovation />
      </DienstenWrapper>
    </ServiceSection>
    {/* End ONZE DIENSTEN section */}

    {/* OVER ONS section */}
    <AboutSection>
      <h2>Over ons</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non ea
        itaque tenetur nulla, adipisci soluta molestiae voluptatem nisi
        necessitatibus aliquid debitis enim perferendis consequatur fugit
        dolorum quisquam veniam vitae?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat non ea
        itaque tenetur nulla, adipisci soluta molestiae voluptatem nisi
        necessitatibus aliquid debitis enim perferendis consequatur fugit
        dolorum quisquam veniam vitae?
      </p>
    </AboutSection>
    {/* End OVER ONS section */}

    {/* ONZE PROJECTEN section */}
    <ProjectSection>
      <StyledConstruction />
      <h1>Onze projecten</h1>
      <ProjectsBox />
    </ProjectSection>
    {/* End ONZE PROJECTEN section */}
  </Layout>
)
export default IndexPage
