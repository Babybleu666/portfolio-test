
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/gmk/Documents/book/react_and_gatsby/myproject/shake-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/gmk/Documents/book/react_and_gatsby/myproject/shake-portfolio/src/pages/404.js")),
  "component---src-pages-blog-js": preferDefault(require("/Users/gmk/Documents/book/react_and_gatsby/myproject/shake-portfolio/src/pages/blog.js")),
  "component---src-pages-blog-microcms-post-slug-js": preferDefault(require("/Users/gmk/Documents/book/react_and_gatsby/myproject/shake-portfolio/src/pages/blog/{MicrocmsPost.slug}.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/gmk/Documents/book/react_and_gatsby/myproject/shake-portfolio/src/pages/index.js")),
  "component---src-pages-work-js": preferDefault(require("/Users/gmk/Documents/book/react_and_gatsby/myproject/shake-portfolio/src/pages/work.js"))
}

