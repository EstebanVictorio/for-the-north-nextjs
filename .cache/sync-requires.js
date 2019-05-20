const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-about-js": hot(preferDefault(require("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/about.js"))),
  "component---src-pages-basics-js": hot(preferDefault(require("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/basics.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/index.js"))),
  "component---src-pages-posts-js": hot(preferDefault(require("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/posts.js")))
}

