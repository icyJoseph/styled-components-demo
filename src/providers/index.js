import React, { useState, createContext, useMemo, useContext } from "react";
import { ThemeProvider } from "styled-components";
import themeSheet, { LIGHT, DARK } from "styles/theme";
import GlobalStyle from "styles/globalStyle";

const ThemeChangeContext = createContext({});

const toggler = current => (current === LIGHT ? DARK : LIGHT);

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(LIGHT);

  const toggle = () => setMode(toggler);

  const value = useMemo(() => ({ mode, toggle }), [mode]);
  const theme = useMemo(() => ({ ...themeSheet[mode] }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ThemeChangeContext.Provider value={value}>
        {children}
      </ThemeChangeContext.Provider>
    </ThemeProvider>
  );
};

export const useChangeTheme = () => {
  return useContext(ThemeChangeContext);
};
