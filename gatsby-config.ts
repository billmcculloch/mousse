import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `MOUSSE`,
    siteUrl: `https://www.moussemusic.com`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen

  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-netlify",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Open Sans`,
            file: `https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap`,
          },
        ],
      },
    },
  ],
};

export default config;
