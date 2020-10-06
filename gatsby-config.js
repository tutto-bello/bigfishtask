const tailwindcss = require(`tailwindcss`);
const autoprefixer = require(`autoprefixer`);
const cssnano = require(`cssnano`);
const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    siteUrl: `https://bigfishtask.netlify.app`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`hu`, `en`, `fr`, `de`],
        defaultLanguage: `en`,
        redirect: false
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/assets`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BigFischTask`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2C7A7B`,
        theme_color: `#2C7A7B`,
        display: `standalone`,
        icon: `assets/fav.svg` // This path is relative to the root of the site.
      }
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          tailwindcss(tailwindConfig),
          autoprefixer,
          ...(process.env.NODE_ENV === `production` ? [cssnano] : [])
        ]
      }
    },
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-netlify`,
      options: {
        headers: {}, // option to add more headers. `Link` headers are transformed by the below criteria
        allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
        mergeSecurityHeaders: true, // boolean to turn off the default security headers
        mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
        mergeCachingHeaders: true, // boolean to turn off the default caching headers
        transformHeaders: headers => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
        generateMatchPathRewrites: true // boolean to turn off automatic creation of redirect rules for client only paths
      }
    }
  ]
};
