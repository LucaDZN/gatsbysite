/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Contact Page`,
  },
  plugins: [
      {
        resolve: `gatsby-plugin-sass`,
        options: {
          postCssPlugins: [require("tailwindcss")],
        },
      },
    `gatsby-plugin-react-helmet`
  ],
}



