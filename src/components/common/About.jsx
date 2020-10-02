import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const About = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          parlament: file(relativePath: { regex: "images/parlament.png/" }) {
            childImageSharp {
              fixed(width: 458) {
                ...GatsbyImageSharpFixed_withWebp_noBase64
              }
            }
          }
        }
      `}
      render={({ parlament }) => (
        <div id="about" className="continer flex flex-grow justify-center">
          <div className="hidden md:block m-8">
            <Img fixed={parlament.childImageSharp.fixed} />
          </div>
          <div>
            <p className="text-blue-800 m-8 max-w-md align-middle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
              arcu, tempus nec urna non, lacinia vehicula dolor. Integer
              pellentesque leo tristique nibh tristique posuere.
            </p>
          </div>
        </div>
      )}
    />
  );
};

export default About;
