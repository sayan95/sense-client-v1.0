// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';


// app component imports
import SiteContactBar from './site-contact-bar';
import MainHeaderSection from './main-header-section';
import NavigationBar from './navigation-bar';


/**
 *  Sense welcome page main header area
 *  LCP component for the page
 *  performance optimization may require
 */
const SenseMainHeader = props => {

    return (
        <Fragment>
            {/* site contact bar */}
            <SiteContactBar/>
            
            {/* navigation bar */}
            <NavigationBar/>

            {/* main header area */}
            <MainHeaderSection/>
        </Fragment>
    )
}

// props validation
SenseMainHeader.propTypes = {}

export default SenseMainHeader
