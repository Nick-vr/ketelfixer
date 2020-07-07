import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import IndexBanner from '../components/indexBanner'
import img from '../images/engineer.png'

const Banner = styled.div`
  text-align: center;
  background-color: darkgray;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <IndexBanner />
    </Banner>
    <h1>Onze diensten</h1>
    <img src={img} width="200px" height="1000px" alt="yeet" />
  </Layout>
)

export default IndexPage
