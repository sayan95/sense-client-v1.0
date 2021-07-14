// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// app component imports
import SiteContactBar from './site-contact-bar';
import NavigationBar from './navigation-bar';
import MainHeaderContentSection from './main-header-content-section';


/**
 *  Sense welcome page main header area
 *  LCP component for the page
 *  performance optimization may require
 */
const SenseMainHeader = props => {
    const {mainHeaderContent} = props;
    return (
        <Fragment>
            {/* site contact bar */}
            <SiteContactBar/>
            
            {/* navigation bar */}
            <NavigationBar/>

            {/* main header area */}
            <MainHeaderContentSection content={mainHeaderContent}/>
        </Fragment>
    )
}

// props validation
SenseMainHeader.propTypes = {
    mainHeaderContent: PropTypes.element.isRequired
}

export default SenseMainHeader
