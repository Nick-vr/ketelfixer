/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'
import { Construction } from '@styled-icons/material-sharp/Construction'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/images/indexBanner'
import Maintenance from '../components/images/maintenance'
import ProjectIMG from '../images/1.jpg'

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

const DienstenWrapper = styled.div`
  margin-top: 150px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    {/* ONZE DIENSTEN section */}
    <Section>
      <StyledPlumbing />
      <h1>Onze diensten</h1>
      <DienstenWrapper>
        <Maintenance />
      </DienstenWrapper>
    </Section>
    {/* End ONZE DIENSTEN section */}

    {/* ONZE PROJECTEN section */}
    <Section>
      <StyledConstruction />
      <h1>Onze projecten</h1>
      <img src={ProjectIMG} alt="img" />
    </Section>
    {/* End ONZE PROJECTEN section */}
  </Layout>
)

export default IndexPage
