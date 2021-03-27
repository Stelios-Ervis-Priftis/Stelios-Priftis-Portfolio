/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const path = require("path")

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
    if (page.componentPath === `${__dirname}/src/pages/projects/projects.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/projects",
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

    // if the page component is the success page component
    if (page.componentPath === `${__dirname}/src/pages/success/success.js`) {
      deletePage(page)

      // create a new page but with '/' as path
      createPage({
        ...page,
        path: "/success",
      })
    }

    resolve()
  })
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")

    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const projectTemplate = path.resolve("./src/templates/project.js")

  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMarkdownRemark.edges.forEach(edge => {
    const slug = edge.node.fields.slug

    createPage({
      component: projectTemplate,
      path: `/projects/${slug}`,
      context: {
        slug: slug,
      },
    })
  })
}
