/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mergify Mastery`,
        short_name: `Mergify`,
        description: `Mergify Workshop on Merge Queues Automation`,
        start_url: `/`,
        background_color: `#06101B`,
        theme_color: `#06101B`,
        display: `standalone`,
        icon: `static/images/mergify-logo.png`,
        icons: [
          {
            src: `static/images/mergify-logo-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`
          },
          {
            src: `static/images/mergify-logo.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
      }
    },
    `gatsby-plugin-offline`,
  ],
}
