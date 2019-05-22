module.exports = {
  pathPrefix: "/for-the-north-nextjs",
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "components": "src/components"
        },
        extensions: [
          "js"
        ],
      }
    }
  ]
}