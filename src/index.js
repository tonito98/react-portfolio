import React from 'react';
import ReactDOM from 'react-dom/client';

// Bootstrap CSS
// import "bootstrap/dist/css/bootstrap.min.css";
import "../src/custom.scss";

// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle";
import {BrowserRouter} from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>

  </React.StrictMode>
);


