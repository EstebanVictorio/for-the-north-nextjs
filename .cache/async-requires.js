// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-about-js": () => import("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/about.js" /* webpackChunkName: "component---src-pages-about-js" */),
  "component---src-pages-basics-js": () => import("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/basics.js" /* webpackChunkName: "component---src-pages-basics-js" */),
  "component---src-pages-index-js": () => import("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-posts-js": () => import("/Users/estebanburgueno/Projects/for-the-north-nextjs/src/pages/posts.js" /* webpackChunkName: "component---src-pages-posts-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/estebanburgueno/Projects/for-the-north-nextjs/.cache/data.json")

