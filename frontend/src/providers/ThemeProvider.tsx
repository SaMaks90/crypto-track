import { useEffect, ReactNode } from "react";
import { ThemeProvider as ThemeProviderStyledComponents } from "styled-components";
import useTheme from "../hooks/useTheme";

interface IThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: IThemeProviderProps): ReactNode => {
  const { initTheme, getCurrentThemeStyle } = useTheme();

  useEffect(() => {
    initTheme();
  }, [initTheme]);

  return (
    <ThemeProviderStyledComponents theme={getCurrentThemeStyle()}>
      {children}
    </ThemeProviderStyledComponents>
  );
};

export default ThemeProvider;
