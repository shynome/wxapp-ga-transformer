import React from 'react';
import App from 'next/app';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline, NoSsr } from '@material-ui/core';
import { theme } from './theme';

class MyApp extends App {

  render() {
    const { Component, pageProps, } = this.props;

    return (
      <NoSsr>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </NoSsr>
    );
  }
}

export default MyApp;
