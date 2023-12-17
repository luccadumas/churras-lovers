// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import theme from '@/styles/theme';
import { AuthProvider } from '@/contexts/auth';
import AuthChecker from '@/components/AuthChecker';

import GlobalStyle from '../styles/global';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <AuthChecker>
          <Component {...pageProps} />
        </AuthChecker>
        <GlobalStyle />
        <ToastContainer />
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
