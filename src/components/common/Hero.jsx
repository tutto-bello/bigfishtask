import React from "react";
import { graphql, StaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import { useIntl } from "gatsby-plugin-intl";

const Hero = () => {
  const intl = useIntl();

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
          <div className="container mx-auto h-full mt-12 lg:mt-0 md:pt-10 xl:mt-12">
            <div className="flex flex-wrap text-left">
              <div className="w-full p-5 mt-8 mb-10 md:text-left justify-center">
                <h1 className="text-5xl font-bold text-primary leading-none xl:mt-10">
                  {intl.formatMessage({ id: "hero.title" })}
                </h1>
                <p className="text-white font-bold text-md pt-10 max-w-xs md:max-w-lg xl:mt-10">
                  {intl.formatMessage({ id: "hero.description" })}
                </p>
                <div className="mt-12 md:max-w-xs xl:w-56 md:mb-24">
                  <button
                    type="submit"
                    className="bg-primary hover:bg-white text-blue-800 w-full  pt-3 pb-3 rounded-full uppercase font-bold m-auto xl:mt-6 xl:mb-20"
                  >
                    {intl.formatMessage({ id: "hero.button" })}
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
