import { ThemeStyle, ThemeName } from "../types/theme";

export const defaultThemeName: ThemeName = "light";

export const lightTheme: ThemeStyle = {
  colors: {
    primary: "#222",
    secondary: "#757575",
    background: "",
    text: "",
    border: "",
  },
  heights: { baseHeader: "100px", screen: "100vh", full: "100%" },
  widths: { full: "100%" },
  spacing: ["4px", "8px", "16px", "24px", "32px", "40px"],
  backgrounds: {
    header: "#bfbfbf",
    button: "#004585",
    themeModeSwitch: "#757575",
    themeModeBall: "#bfbfbf",
  },
  fonts: [],
  fontSizes: {
    sm: "12px",
    m: "14px",
    l: "16px",
    xl: "22px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  radii: {
    full: "50%",
    fifty: "50px",
  },
};

export const darkTheme: ThemeStyle = {
  colors: {
    primary: "#dcdcdc",
    secondary: "#dcdcdc",
    background: "",
    text: "",
    border: "",
  },
  heights: { baseHeader: "100px", screen: "100vh", full: "100%" },
  widths: { full: "100%" },
  spacing: ["4px", "8px", "16px", "24px", "32px", "40px"],
  backgrounds: {
    header: "#292929",
    button: "#004585",
    themeModeSwitch: "#111",
    themeModeBall: "#fff",
  },
  fonts: [],
  fontSizes: {
    sm: "12px",
    m: "14px",
    l: "16px",
    xl: "22px",
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  radii: {
    full: "50%",
    fifty: "50px",
  },
};

export const themeNameStyleMap: { [key in ThemeName]: ThemeStyle } = {
  light: lightTheme,
  dark: darkTheme,
};

export const defaultThemeStyle = themeNameStyleMap[defaultThemeName];
