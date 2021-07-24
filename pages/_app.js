import {useEffect, Fragment} from 'react';
import {wrapper} from '../redux/store';
import PropTypes from 'prop-types';
import Head from 'next/head';
import theme from '../Theme/theme';
import {AnimatePresence} from 'framer-motion';

// material ui imports
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

// app component imports
import SenseLazyAnimate from '../components/others/sense-lazy-animate';


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

  
  // global _app jsx 
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
          <SenseLazyAnimate
            key={router.route} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition = {{ duration: .5}}
          >
            <Component {...pageProps} />
          </SenseLazyAnimate>
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

//server side rendering
SenseApp.getInitialProps = wrapper.getInitialAppProps(store => async ({Component, ctx}) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
})



export default wrapper.withRedux(SenseApp);