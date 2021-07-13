import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import path from 'path';

const AboutImg = ({ filename, alt }) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              publicURL
              extension
              relativePath
              name
              childImageSharp {
                fixed(width: 350) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) return null;

      if (path.extname(filename) === '.svg') {
        return <img src={image.node.publicURL} alt={alt} width="100%" />;
      }

      const imageFixed = image.node.childImageSharp.fixed;
      return <Img className="rounded shadow-lg" alt={alt} fixed={imageFixed} />;
    }}
  />
);

AboutImg.propTypes = {
  filename: PropTypes.string,
  alt: PropTypes.string,
};

export default AboutImg;
