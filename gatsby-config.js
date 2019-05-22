module.exports = {
  pathPrefix: "/for-the-north-nextjs",
  plugins: [
      {
        resolve: `gatsby-plugin-styled-components`,
        options: {
          ssr: true,
          displayName: false,
        },
      },
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