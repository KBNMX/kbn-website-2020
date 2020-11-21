module.exports = {
  siteMetadata: {
    title: `Këbabs, Falafel y Tacos Árabes`,
    description: `En KëbabNation se disfruta un ambiente familiar mientras experimentas sabores nuevos del tamaño de tu apetito. Siempre delicios.`,
    author: `@edbarrios`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        minify: false, // Breaks styles if not set to false
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `common`,
        path: `../common/src/assets/`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `../common/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'roboto mono:100,300,400,500,700,900',
          `Poppins:300,400,500,600,700`,
          `Lato:300,400,700`,
          `Open Sans:300,400,600,700,800`,
          `Raleway:500,600`,
          `Heebo:300,400,500,600,700,800`,
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
