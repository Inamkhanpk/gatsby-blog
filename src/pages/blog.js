import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  image:{
    height:500,
    width:500,
    [theme.breakpoints.down('md')]: {
      height:200,
      width:200,
    },
  }
}));

const Blog = () => {
  const classes = useStyles();
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost1(sort: { fields: publishedDate, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              publishedDate(formatString: "Do MMMM, YYYY")
              featuredImage {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )
  return (
    <Layout>
      <SEO title="Blog" />

      <Grid container  >

    <Grid item xs={12}>
      <Grid container justify="center" >
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      </Grid>
    </Grid>

       <Grid item xs={12}>
        {data.allContentfulBlogPost1.edges.map(edge => {
          return (
            <div key={edge.node.id} >
               
               <Grid container  >
               <Grid item xs={12}>
             <Grid container justify="center" >
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              </Grid>
            </Grid>


            <Grid item xs={12}>
             <Grid container justify="center" >
              <div >
                <span>Posted on {edge.node.publishedDate}</span>
              </div>
              </Grid>
            </Grid>
              
              
            <Grid item xs={12}>
             <Grid container justify="center" >
              <div>
              {edge.node.featuredImage && (
                <Img
                 fluid={edge.node.featuredImage.fluid}
                  alt={edge.node.title}
                  className={classes.image}
                />
              )}
              </div>
               </Grid>
               </Grid>
              

               <Grid item xs={12}>
             <Grid container justify="center" >
              <p >
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              </Grid>
               </Grid>
              
               <Grid item xs={12}>
             <Grid container justify="center" >
              <div >
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
              </Grid>
              </Grid>
             
             </Grid>
            </div>
          )
        })}
        </Grid>
        </Grid>
      
    </Layout>
  )
}

export default Blog