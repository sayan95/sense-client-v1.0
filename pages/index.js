// dependency imports
import React, { Fragment, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import {wrapper} from '../redux/store';

// application component imports
import SenseMainLayout from '../layouts/sense-main-layout';
import MainHeaderContent from '../components/app-component/sense-index-page-components/main-header-content/main-header-content';
import { useSelector } from 'react-redux';

// custom styles (jss)


// sense main landing page 
const index = () => {

  return (
    <Fragment>
      <SenseMainLayout 
        pageTitle='home' 
        pageDescription='This is the main landing page'
        mainHeaderContent={MainHeaderContent}
      >
        <div style={{ position:'relative', height:'1020px', zIndex: 1000, border: '1px solid red' }}>
        
        </div>
      </SenseMainLayout>
    </Fragment>
  )
}



export default wrapper.withRedux(index);

