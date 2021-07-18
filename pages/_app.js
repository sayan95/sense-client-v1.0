import {useEffect, Fragment} from 'react';
import App from 'next/app';
import {wrapper} from '../redux/store';
import PropTypes from 'prop-types';
import Head from 'next/head';
import theme from '../Theme/theme';
import {AnimatePresence, LazyMotion, m, domAnimation} from 'framer-motion';

// material ui imports
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';


/**
 *  Custom app component
 *  Application entry point
 *  Critical zone - issue may occur at any time
 * 
 */
const SenseApp = (props) => {
  const { Component, pageProps, router } = props;
  

  // side effects on roo level
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);


  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>

      {/* Mui theme provider */}
      <ThemeProvider theme={theme}>

        {/* Global css style provider */}
        <CssBaseline />

        {/* Applies page changes transition effect */}
        <AnimatePresence>
          <LazyMotion features={domAnimation}>
            <m.div key={router.route} initial={false}
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              exit={{ opacity: 0 }}
              transition = {{ duration: 1}}
            >
              <Component {...pageProps} />
            </m.div>
          </LazyMotion>
        </AnimatePresence>

      </ThemeProvider>

    </Fragment>
  );
}

// props validation
SenseApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};



export default wrapper.withRedux(SenseApp);