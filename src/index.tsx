import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/styles.scss';
import App from './App';

import AuthContextProvider from 'contexts/auth-context';
import NavigationContextProvider from 'contexts/navigation-context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthContextProvider>
        <NavigationContextProvider>
            <App />
        </NavigationContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
