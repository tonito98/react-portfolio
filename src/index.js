import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/custom.scss";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle";



import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


