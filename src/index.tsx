import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { ThemeProvider } from './Context/themes/ContextTheme';
import { ThemeProviderApplication } from './Context/contextApplication/ContextTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <ThemeProviderApplication>
        <App />
      </ThemeProviderApplication>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
