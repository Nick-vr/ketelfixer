import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Header from './header';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
${reset}
html,
  body {
    box-sizing: border-box;
    font-family: 'PT Sans', sans-serif;
  }
  html {
    font-size: 17px;
  }
  @media (max-width: 900px) {
  html { font-size: 15px; }
  }
  @media (max-width: 400px) {
    html { font-size: 13px; }
  }
  h1 {
    font-size: 2.5rem;
  }
  h2 {
    font-size: 2rem;
  }
  h3 {
    font-size: 1.5rem;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }
  a {
    text-decoration: none;
    color: #FFF;
    outline: none;
  }
  input, textarea, button {
    font-family: inherit;
  }
`;

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
