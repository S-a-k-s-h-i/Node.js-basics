import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Heading from './Heading';
import Para from './Para';
import List from './List';
import App from './App';

ReactDOM.render(
  <App/>,
  // <>
  // <Heading/>
  // <Para/>
  // <List/>
  // </>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
