import React from "react"
import { Link } from "gatsby"

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
  },
  heading:{
    [theme.breakpoints.down('md')]: {
      fontSize:'1.2rem'
    },
  }
}));



export default function IndexPage() {
  const classes = useStyles();
return(
  <Layout>
    <SEO title="Home" />
    <Grid container  >
    <Grid item xs={12}>
      <Grid container justify="center" >

    <h1 className={classes.heading} >Welcome to my new Gatsby site.</h1>
      </Grid>
    </Grid>
   
    <Grid item xs={12}>
      <Grid container justify="center" >
    <Link  to="/blog/">Visit the Blog Page</Link> 
    </Grid>
    </Grid>

    </Grid>
    
  </Layout>
)
}


