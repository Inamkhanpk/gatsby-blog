const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const response = await graphql(`
    query {
      allContentfulBlogPost1 {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
  response.data.allContentfulBlogPost1.edges.forEach(edge => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}