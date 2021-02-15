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
  plugins: [
    `gatsby-plugin-sass`,
    {
        resolve: `gatsby-source-filesystem`,
          options: {
            name: `src`,
            path: `${__dirname}/src/`,
          },
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `8urwtin6d2ax`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `W3zQUq7mswG6ucSpB70n-CEvVs4mhQgehz4cyuFlQSA`,
      },
    },
  ]
}
