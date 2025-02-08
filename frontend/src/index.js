import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // If you have CSS to import

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <h1>Welcome to the Event Tracker App!</h1>
  </React.StrictMode>
);
