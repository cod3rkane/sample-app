import App from 'next/app';
import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { IntlProvider } from 'react-intl';
import '@formatjs/intl-pluralrules/polyfill-locales';

import createStore from '../store';

const theme = {
  colors: {
    primary: '#0070f3',
  },
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { req } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;

    return {
      pageProps,
      locale,
      messages,
    };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps,
      store,
      locale,
      messages,
    } = this.props;

    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={locale} messages={messages[locale]}>
            <Component {...pageProps} />
          </IntlProvider>
        </ThemeProvider>
      </Provider>
    );
  }
}

MyApp.defaultProps = {
  messages: {},
  locale: 'en',
};

export default withRedux(createStore)(withReduxSaga(MyApp));
