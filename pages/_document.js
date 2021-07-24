// dependency imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Material ui component imports
import { ServerStyleSheets } from '@material-ui/core/styles';


// custom application _document
class SenseDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* app image preloading */}
          <link rel='preload' as='image' href='/images/sense-header-bg1.png'/>
          <link rel='preload' as='image' href='/images/sense-header-bg2.png'/>

          {/* external font stylesheet */}
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={true}/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:100, 200,300,400,500,700&display=swap"/>
          <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet"></link>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

SenseDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      enhanceComponent: (Component) => Component,
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
  
};

export default SenseDocument;