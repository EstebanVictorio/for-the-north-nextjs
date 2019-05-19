module.exports = {
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