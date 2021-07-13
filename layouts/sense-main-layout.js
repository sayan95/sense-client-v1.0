// dependency imports
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import SenseMainHeader from '../components/app-component/sense-main-header/sense-main-header';

/**
 *  Sense main layout component
 *  Wraps all the pages present in the front spa
 */
const SenseMainLayout = (props) => {
    const {pageTitle, pageDescription, children} = props;
    
    return (
        <Fragment>
            <Head>
                <title>Sense {pageTitle ? `- ${pageTitle}` : undefined}</title>
                <meta name='description' content={pageDescription}/>
            </Head>

            <Fragment>
                <SenseMainHeader/>
                {children}
            </Fragment>
        </Fragment>
    )
}

// props validation
SenseMainLayout.propTypes = {
    pageTitle: PropTypes.string,
    pageDescription: PropTypes.string.isRequired
}

export default SenseMainLayout;
