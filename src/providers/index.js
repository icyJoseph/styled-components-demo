import React, { useState, createContext, useMemo, useContext } from "react";
import { ThemeProvider } from "styled-components";
import themeSheet, { LIGHT, DARK } from "styles/theme";

const ThemeChangeContext = createContext({});

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState(LIGHT);

  const setLight = () => setMode(LIGHT);
  const setDark = () => setMode(DARK);

  const value = useMemo(() => ({ setLight, setDark }), []);
  const theme = useMemo(() => ({ ...themeSheet[mode] }), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <ThemeChangeContext.Provider value={value}>
        {children}
      </ThemeChangeContext.Provider>
    </ThemeProvider>
  );
};

export const useChangeTheme = () => {
  return useContext(ThemeChangeContext);
};
