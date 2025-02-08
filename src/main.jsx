import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import AuthProvider from './context/AuthProvider.jsx';
import { BrowserRouter as Router } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Router basename="/Tasktrack">
        <App />
      </Router>
    </AuthProvider>
  </StrictMode>
);
