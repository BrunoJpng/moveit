import { createContext, ReactNode } from 'react';

import { ThemeProvider as StyledComponentThemeProvider, DefaultTheme } from 'styled-components';

import GlobalStyle from '../styles/global';
import light from '../styles/themes/light';
import dark from '../styles/themes/dark';

import usePersistedState from '../utils/usePersistedState';

interface ThemeContextData {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledComponentThemeProvider theme={theme} >
        <GlobalStyle />
        {children}
      </StyledComponentThemeProvider>
    </ThemeContext.Provider>
  );
}