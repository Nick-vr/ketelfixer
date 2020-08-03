/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'
import { Construction } from '@styled-icons/material-sharp/Construction'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexBanner from '../components/indexBanner'
import MaintenanceIMG from '../images/maintenance.jpg'

const Banner = styled.div`
  text-align: center;
  /* background-color: darkgray; */
`

const StyledPlumbing = styled(Plumbing)`
  color: #b87333;
  width: 60px;
`

const StyledConstruction = styled(Construction)`
  color: #b87333;
  width: 60px;
`

const Section = styled.section`
  font-family: 'Roboto Slab', serif;
`

const Wrapper = styled.div`
  width: 400px;
  height: 200px;
  background-color: lightgrey;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <IndexBanner />

    <Section>
      {/* ONZE DIENSTEN */}
      <Wrapper>
        <StyledPlumbing />
        <h1>Onze diensten</h1>
      </Wrapper>
      {/* ONZE DIENSTEN */}

      {/* ONZE PROJECTEN */}
      <Wrapper>
        <StyledConstruction />
        <h1>Onze projecten</h1>
      </Wrapper>
      {/* ONZE PROJECTEN */}
    </Section>
  </Layout>
)

export default IndexPage
