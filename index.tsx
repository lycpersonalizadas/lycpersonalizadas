import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Declare the global gtag helper function for TypeScript
declare global {
  interface Window {
    sendGtagEvent: (method: string) => void;
  }
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);