module.exports = {
  pathPrefix: "for-the-north-nextjs",
  plugins: [
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