/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    'gatsby-transformer-remark',
    `gatsby-plugin-image`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/projects/`,
      },  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `featured`,
        path: `${__dirname}/src/images/featured`,
      },  
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `thumbs`,
        path: `${__dirname}/src/images/thumbs`,
      },  
    },
  ],
  siteMetadata: {
    title: 'pMitev',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 pMitev',
    contact: 'pmitev89@gmail.com'
  }
}
