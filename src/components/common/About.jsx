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
        <div className="continer flex flex-row justify-center mt-2">
          <div className="hidden md:block ml-40 lg:ml-0 w-1/2 relative">
            <div className="right-0 absolute">
              <Img
                className="p-5 m-5 max-w-md mx-auto "
                fixed={parlament.childImageSharp.fixed}
              />
            </div>
          </div>
          <div className="md:w-1/2 md:relative">
            <p className="text-third md:max-w-xs lg:max-w-lg xl:max-w-sm md:absolute left-0 p-5 mt-5 md:pt-10 lg:pt-20">
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
