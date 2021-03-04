module.exports = {
  siteMetadata: {
    title: `Square`,
    description: `A simple friends list application built with React using Gatsby`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-layout`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `square_friends`,
        short_name: `square`,
        start_url: `/`,
        background_color: `#0073FF`,
        theme_color: `#0073FF`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
