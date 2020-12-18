import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost1(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
      
    }
  }
`

const BlogPost = props => {
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        const alt = node.data.target.fields.title["en-US"]
        const url = node.data.target.fields.file["en-US"].url
        return <img alt={alt} src={url} />
      },
    },
  }

  return (
    <Layout>
      <SEO title={props.data.contentfulBlogPost1.title} />
      <Link to="/blog/">Visit the Blog Page</Link>
      <div className="content">
        <h1>{props.data.contentfulBlogPost1.title}</h1>
        <span className="meta">
          Posted on {props.data.contentfulBlogPost1.publishedDate}
        </span>
        {props.data.contentfulBlogPost1.featuredImage && (
          <Img
            className="featured"
            fluid={props.data.contentfulBlogPost1.featuredImage.fluid}
            alt={props.data.contentfulBlogPost1.title}
          />
        )}
       
       
      </div>
    </Layout>
  )
}

export default BlogPost