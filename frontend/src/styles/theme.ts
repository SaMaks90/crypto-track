import { ThemeStyle, ThemeName } from "../types/theme";

export const defaultThemeName: ThemeName = "light";

export const lightTheme: ThemeStyle = {
  colors: {
    primary: "#00f3d0",
    secondary: "#ff4081",
    background: "#111111",
    text: "#ffffff",
    border: "#444444",
  },
  fonts: [],
  fontSizes: {
    sm: 12,
    m: 14,
    l: 16,
    xl: 22,
  },
};

export const darkTheme: ThemeStyle = {
  colors: {
    primary: "#00f3d0",
    secondary: "#ff4081",
    background: "#111111",
    text: "#ffffff",
    border: "#444444",
  },
  fonts: [],
  fontSizes: {
    sm: 12,
    m: 14,
    l: 16,
    xl: 22,
  },
};

export const themeNameStyleMap: { [key in ThemeName]: ThemeStyle } = {
  light: lightTheme,
  dark: darkTheme,
};

export const defaultThemeStyle = themeNameStyleMap[defaultThemeName];
