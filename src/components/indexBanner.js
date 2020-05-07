import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

const IndexBanner = () => {
  const data = useStaticQuery(graphql`
    query {
      indexBannerImage: file(relativePath: { eq: "banner-test.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3400, maxHeight: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img fluid={data.indexBannerImage.childImageSharp.fluid} alt="Banner" />
  );
};

export default IndexBanner;
