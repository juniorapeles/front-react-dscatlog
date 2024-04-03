import React from 'react';
import ReactDOM from 'react-dom'; // Importe o ReactDOM desta forma

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render( // Use ReactDOM.render para renderizar o aplicativo
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
