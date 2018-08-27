import withRedux from 'next-redux-wrapper';
import App, { Container } from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { Provider as ThemeProvider } from 'rebass';
import initStore from '../store';

const theme = {
  fonts: {
    sans: '"Avenir Next", Helvetica, sans-serif'
  },
  fontSizes: [12, 16, 24, 36, 48, 72],
  colors: {
    blue: '#00a4db'
  }
};

export default withRedux(initStore, { debug: false })(
  class MyApp extends App {
    static async getInitialProps({ Component, ctx }) {
      let pageProps = {};

      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }

      return { pageProps };
    }

    render() {
      const { Component, pageProps, store } = this.props;
      return (
        <Container>
          <ThemeProvider theme={theme}>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </ThemeProvider>
        </Container>
      );
    }
  }
);
