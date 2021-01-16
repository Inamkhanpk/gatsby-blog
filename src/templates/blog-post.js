import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Grid from '@material-ui/core/Grid';
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image:{
    height:500,
    width:500,
    [theme.breakpoints.down('md')]: {
      height:200,
      width:200,
    },
  },
  heading:{
    [theme.breakpoints.down('md')]: {
      fontSize:'1.2rem'
    },
  }
}));


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
  const classes = useStyles();
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
      

      <Grid container>


      <Grid item xs={12}>
        <Grid container justify="center" >
      <Link to="/blog/">Visit the Blog Page</Link>
      </Grid>
        </Grid>
      

        <Grid item xs={12}>
        <Grid container justify="center" >
        <h1 className={classes.heading}>{props.data.contentfulBlogPost1.title}</h1>
        </Grid>
        </Grid>
        
        <Grid item xs={12}>
        <Grid container justify="center" >
        <span >
          Posted on {props.data.contentfulBlogPost1.publishedDate}
        </span>
        </Grid>
        </Grid>
        
        <Grid item xs={12}>
        <Grid container justify="center" >
        <div>
        {props.data.contentfulBlogPost1.featuredImage && (
          <Img
            fluid={props.data.contentfulBlogPost1.featuredImage.fluid}
            alt={props.data.contentfulBlogPost1.title}
            className={classes.image}
          />
        )}
        </div>
        </Grid>
        </Grid>
       
       
      </Grid>
    </Layout>
  )
}

export default BlogPost