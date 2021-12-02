import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';

/* Import Styles: Tailwind CSS - Custom CSS */
import './assets/css/index.css';
import './assets/css/styles.css';
import "animate.css"

/* Import Icons - FontAwesome */
import "@fortawesome/fontawesome-free/css/all.min.css";

/* Import Fonts */


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
