import { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';

import { ThemeProvider } from '../contexts/ThemeContext';

import GlobalStyle from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Provider session={pageProps.session}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </ThemeProvider>
  );
}

export default MyApp
