import React, {
  useContext,
  useState,
  useCallback,
  useMemo,
  memo,
  createContext,
} from 'react';
import {TYPOGRAPHY_DICT} from '../constants/typographyThemes';

const Context = createContext({
  typographyThemeKey: TYPOGRAPHY_DICT.THEME_NORMAL.key,
  setTypographyTheme: () => {},
});

export const ThemeProvider = memo(props => {
  const [typographyThemeKey, setTypographyTheme] = useState(
    props.initialTypographyTheme,
  );
  const setTypographyThemeCb = useCallback(themeKey => {
    setTypographyTheme(TYPOGRAPHY_DICT[themeKey].key);
  }, []);

  const memoizedValue = useMemo(() => {
    return {
      typographyThemeKey,
      setTypographyTheme: setTypographyThemeCb,
    };
  }, [typographyThemeKey, setTypographyThemeCb]);

  return (
    <Context.Provider value={memoizedValue}>{props.children}</Context.Provider>
  );
});

export const useTheme = () => useContext(Context);
