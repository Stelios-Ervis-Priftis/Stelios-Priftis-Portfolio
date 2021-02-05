/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

exports.onCreatePage = ({ page, actions }) => {
  const { deletePage, createPage } = actions

  return new Promise(resolve => {
    // if the page component is the index page component
    if (page.componentPath === `${__dirname}/src/pages/index/index.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/",
      })
    }

    // if the page component is the about page component
    if (page.componentPath === `${__dirname}/src/pages/about/about.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/about",
      })
    }

    // if the page component is the blog page component
    if (page.componentPath === `${__dirname}/src/pages/blog/blog.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/blog",
      })
    }

    // if the page component is the contact page component
    if (page.componentPath === `${__dirname}/src/pages/contact/contact.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/contact",
      })
    }

    resolve()
  })
}
