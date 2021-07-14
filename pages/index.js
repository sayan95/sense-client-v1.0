// dependency imports
import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/styles';

// application component imports
import SenseMainLayout from '../layouts/sense-main-layout';
import MainHeaderContent from '../components/app-component/sense-index-page-components/main-header-content/main-header-content';

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
        mainHeaderContent={MainHeaderContent}
      />
    </Fragment>
  )
}

export default index;

