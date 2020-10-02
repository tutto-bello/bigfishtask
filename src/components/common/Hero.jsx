import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          hero: file(relativePath: { regex: "/images/hero.jpg/" }) {
            childImageSharp {
              fluid(quality: 100, maxWidth: 1442) {
                ...GatsbyImageSharpFluid_withWebp_tracedSVG
              }
            }
          }
        }
      `}
      render={({ hero }) => (
        <BackgroundImage
          Tag="section"
          id="hero"
          fluid={hero.childImageSharp.fluid}
        >
          <div className="container mx-auto h-full">
            <div className="flex flex-wrap text-left">
              <div className="w-full lg:w-1/2 p-5 mt-20 mb-20 md:text-left justify-center">
                <h1 className="text-5xl font-bold text-primary leading-none">
                  Welcome to Budapest!
                </h1>
                <p className="text-white font-bold text-2xl pt-8  md:max-w-xs">
                  Budapest Things to do - detailed info about things to do:
                  sightseeing, events, restaurants, nightlife, shopping, pubs,
                  bars, casinos and more...
                </p>
                <div className="mt-10 mx-8">
                  <button
                    type="submit"
                    className="bg-primary text-blue-800 pl-20 pr-20 pt-2 pb-2 rounded-full uppercase font-bold m-auto"
                  >
                    Start booking!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </BackgroundImage>
      )}
    />
  );
};

export default Hero;