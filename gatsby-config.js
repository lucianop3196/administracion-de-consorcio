module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Municipalidad de Lincoln",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `data`,
        path: `${__dirname}/data`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
