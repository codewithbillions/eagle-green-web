import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const name = "damilare"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name={name} />
  </React.StrictMode>
);


