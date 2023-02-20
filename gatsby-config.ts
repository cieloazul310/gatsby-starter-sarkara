import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Gatsby Sarkara',
    description: 'Gatsby theme for Chakra UI',
    siteUrl: 'https://cieloazul310.github.io/gatsby-starter-sarkara/',
  },
  pathPrefix: '/gatsby-starter-sarkara',
  plugins: [
    `@chakra-ui/gatsby-plugin`,
    `@cieloazul310/gatsby-theme-sarkara`,
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#ED8936`,
        showSpinner: false,
      },
    },
  ],
};

export default config;
