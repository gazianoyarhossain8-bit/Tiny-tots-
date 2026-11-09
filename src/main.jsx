import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import eruda from 'eruda';

// Initialize Eruda First
eruda.init();

console.log('Eruda Console Initialized');

// Start React Application
async function startApp() {
  try {

    const { default: App } = await import('./App.jsx');

    const rootElement = document.getElementById('root');

    if (!rootElement) {
      throw new Error('Root element not found!');
    }

    createRoot(rootElement).render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    console.log('React App Loaded Successfully');

  } catch (error) {

    console.error('React Error:', error);

  }
}

startApp();