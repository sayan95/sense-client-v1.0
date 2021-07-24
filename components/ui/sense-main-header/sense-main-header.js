// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';


// app component imports
import SiteContactBar from './site-contact-bar';
import NavigationBar from './navigation-bar';
import MainHeaderContentSection from './main-header-content-section';


/**
 *  Sense welcome page main header area
 *  LCP component for the page
 *  performance optimization may require
 */
const SenseMainHeader = () => {

    // states from global store
    const mainHeaderContent = useSelector(state => state.senseMainHeaderBackground.backgroundContent);
    const MainHeaderContent = mainHeaderContent;
    
    // jsx content
    return (
        <Fragment>
            {/* site contact bar */}
            <SiteContactBar/>
            
            {/* navigation bar */}
            <NavigationBar/>

            {/* main header area */}
            <MainHeaderContentSection>
                {mainHeaderContent && <MainHeaderContent/>}
            </MainHeaderContentSection>
        </Fragment>
    )
}

// props validation
SenseMainHeader.propTypes = {}

export default SenseMainHeader
