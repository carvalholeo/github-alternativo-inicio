import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import DarkModeProvider from './contexts/DarkModeContext';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <StrictMode>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </StrictMode>);
