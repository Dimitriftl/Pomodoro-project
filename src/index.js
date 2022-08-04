import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css'
import App from './App';
import Home from './pages/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>
);

