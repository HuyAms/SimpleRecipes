/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Simple Recipes',
    description: 'Nice and clean recipes site',
    author: '@huytrinh',
    person: {name: 'john', age: 32},
    simpleData: ['item1', 'item2'],
    complexData: [{name: 'john', age: 32}, {name: 'susan', age: 23}]
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
    },
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `project`,
        path: `${__dirname}/src`,
      },
    },
  ],
}
