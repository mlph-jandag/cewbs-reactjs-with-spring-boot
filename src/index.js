import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './slices/store'

import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import { transitions, positions, Provider as AlertProvider, types } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

// optional configuration
const options = {
  position: positions.BOTTOM_CENTER,
  timeout: 4000,
  offset: '30px',
  transition: transitions.FADE,
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
