// dependency imports
import React, { Fragment, useEffect } from 'react';
import {wrapper} from '../redux/store';
import { useDispatch } from 'react-redux';

// redux imports
import {setBackgroundContent, setBackgroundImage} from '../redux/ui-store/sense-main-header-store/actions/sense-main-header-background-actions';

// application component imports
import SenseMainLayout from '../layouts/sense-main-layout';
import MainHeaderContent from '../components/app-component/sense-index-page-components/main-header-content/main-header-content';
import Services from '../components/app-component/sense-index-page-components/main-header-content/services';

/**
 *  Sense main landing page
 *  This is the initial page for app showcase
 *  
 */
const index = () => {
  const dispatch = useDispatch();

  // side effect
  useEffect(async () => {
    setMainHeaderContent();
    setMainHeaderBackgroundImage();
  }, []);

  // helper methods
  // sets main header content for index page
  const setMainHeaderContent = () =>{
    dispatch(setBackgroundContent(MainHeaderContent))
  }

  // sets main header background image
  const setMainHeaderBackgroundImage = () => {
    dispatch(setBackgroundImage('/images/sense-header-bg1.png'))
  }

  // jsx page content
  return (
    <Fragment>
      <SenseMainLayout  
        pageTitle='welcome to sense' 
        pageDescription='This is the main landing page'
      >

        {/* Sense service section */}
        <Services/>


      </SenseMainLayout>
    </Fragment>
  )
}



export default index;

