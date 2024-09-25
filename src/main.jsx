// src/main.jsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { StoreContextProvider } from './context/StoreContext.jsx'; // Import StoreContextProvider

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </React.StrictMode>
);

