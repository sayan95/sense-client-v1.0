// dependency imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';

// application component imports
import SenseMainLayout from '../layouts/sense-main-layout';

// custom styles (jss)
const useStyles = makeStyles(theme => ({
  
}));


// sense main landing page 
const index = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <SenseMainLayout 
        pageTitle='home' 
        pageDescription='This is the main landing page'
      />
    </Fragment>
  )
}

export default index;

