/* eslint-disable import/no-extraneous-dependencies */
import React from 'react'
import styled from 'styled-components'
import { Plumbing } from '@styled-icons/material-sharp/Plumbing'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexBanner from '../components/indexBanner'

const Banner = styled.div`
  text-align: center;
  background-color: darkgray;
`

const StyledPlumbing = styled(Plumbing)`
  color: #b87333;
  width: 60px;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <IndexBanner />
    </Banner>
    <StyledPlumbing />
    <h1>Onze diensten</h1>
  </Layout>
)

export default IndexPage
