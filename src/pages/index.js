import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import IndexBanner from '../components/indexBanner';

const Banner = styled.div`
  text-align: center;
  background-color: darkgray;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner>
      <IndexBanner />
    </Banner>
    <h1>Onze services</h1>
    <p>peep</p>
  </Layout>
);

export default IndexPage;
