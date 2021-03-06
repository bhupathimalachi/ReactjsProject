import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import axios from 'axios';
import reportWebVitals from './reportWebVitals';
import GetExampleForW3School2 from './component.js/GetExampleForW3School2';
import GetExampleFunctionLevel from './component.js/GetExampleFunctionLevel';
ReactDOM.render(
  <React.StrictMode>
    <GetExampleFunctionLevel/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
