import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    
    margin:'auto'   ,
    color:'white'
  },
 
}));

const Header = ({ siteTitle }) => {
  const classes = useStyles()
  return(
    <div>
    <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.root}>
          {siteTitle}
        </Link>
        </Toolbar>
      </AppBar>
      
   </div>
  )
}


export default Header;
