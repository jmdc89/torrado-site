/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'David Torral WebSite',
    author: 'JMDC'
  },
  /* Your site config here */
  plugins: [`gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
      }
  ]
}
