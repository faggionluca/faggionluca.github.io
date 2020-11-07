import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from 'styled-components';
import { theme } from './global-vars';
import 'animate.css';
import { faArtstation, faGithubSquare, faCuttlefish, faJs, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBook, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { faEye, faStar } from '@fortawesome/free-regular-svg-icons';

library.add(
  faGithubSquare,
  faArtstation,
  faCuttlefish,
  faJs,
  faPython,
  faJava,
  faBook,
  faCodeBranch,
  faStar,
  faEye
);


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister(); 
