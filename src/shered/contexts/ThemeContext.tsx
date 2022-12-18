import {createContext, ReactNode, FunctionComponent, useState, useCallback, useMemo, useContext} from 'react';
import {ThemeProvider} from '@mui/material';
import {LightTheme, DarkTheme} from '../themes/';
import {Box} from '@mui/system';

interface IThemeContextData {
  themeName: 'light' | 'dark';
  toggleTheme: () => void;
}


const ThemeContext = createContext({} as IThemeContextData);

interface IThemeProviderProps {
  children: ReactNode;
}


export const AppThemeProvider: FunctionComponent<IThemeProviderProps> = ({children}) => {
  const [themeName, setThemeName] = useState<'light' | 'dark'>('light');
  const toggleTheme = useCallback(
    () => {
      setThemeName(themeName === 'light' ? 'dark' : 'light');
    },
    [themeName],
  );

  const theme = useMemo(() => {
    if (themeName === 'light') return LightTheme;
    return DarkTheme;
  }, [themeName]);



  return (
    <ThemeContext.Provider value={{themeName, toggleTheme}}>
      <ThemeProvider theme={theme}>
        <Box width="100vw" height="100vh" bgcolor={theme.palette.background.default}>
          {children}
        </Box>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useAppThemeContext = () => {
  return useContext(ThemeContext);
};