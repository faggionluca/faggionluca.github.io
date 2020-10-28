import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Typography from 'typography'
import twinPeaksTheme from 'typography-theme-twin-peaks'
import { ThemeProvider } from 'styled-components';
import { theme } from './global-components';
import { Head } from './typography-inject';
import 'animate.css';

const typography = new Typography(twinPeaksTheme);

typography.injectStyles();

document.documentElement.classList.add('fullPage');
document.body.classList.add('fullPage');
document.getElementById('root').classList.add('fullPage');

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Head/>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
