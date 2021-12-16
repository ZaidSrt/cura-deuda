//React
import React from 'react';
import ReactDOM from 'react-dom';
//Style
import './sass/index.sass'
// import './index.css';
//Router
import AppRouter from './routers/Router';

ReactDOM.render(
  <AppRouter />,
  document.getElementById('root')
);