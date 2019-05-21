module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-module-resolver",
      options: {
        root: './src',
        aliases: {
          components: '/components'
        },
        static: {
          root: './public',
          alias: './static'
        }
      },
      extensions: [
        'js'
      ]
    }
  ]
}