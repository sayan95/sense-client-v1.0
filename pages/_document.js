// dependency imports
import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';

// Material ui component imports
import { ServerStyleSheets } from '@material-ui/core/styles';


// custom application _document
export default class SenseDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>

          {/* app image preloading */}
          <link rel='preload' as='image' href='/images/sense-header-bg-1.png'/>

          {/* external font stylesheet */}
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"/>
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
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};
