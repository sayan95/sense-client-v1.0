// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

// app component imports
import SenseMainHeader from '../components/app-component/sense-main-header/sense-main-header';


/**
 *  Sense main layout component
 *  Wraps all the pages present in the front spa
 */
const SenseMainLayout = (props) => {
    const {pageTitle, pageDescription, children} = props;
    
    return (
        <Fragment>
            {/* Customer document heaed */}
            <Head>
                <title>Sense {pageTitle ? `- ${pageTitle}` : undefined}</title>
                <meta name='description' content={pageDescription}/>
            </Head>

            <Fragment>
                {/* Sense main header */}
                <SenseMainHeader/>

                {/* dynamic page content */}
                {children}

                {/* Sense main footer */}
            </Fragment>
        </Fragment>
    )
}

// props validation
SenseMainLayout.propTypes = {
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string.isRequired,
}

export default SenseMainLayout;
