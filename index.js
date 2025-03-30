import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure the path to your App component is correct
import './components/Count/counter.css'; // If you have global styles

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) ;