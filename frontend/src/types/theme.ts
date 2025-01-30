import { themeNames } from "../const/theme";

export type ThemeStyle = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  spacing: string[];
  heights: { [key: string]: string };
  widths: { [key: string]: string };
  backgrounds: { [key: string]: string };
  fonts: Array<{ [key: string]: string }>;
  fontSizes: {
    sm: string;
    m: string;
    l: string;
    xl: string;
  };
  fontWeights: { [key: string]: number };
  radii: { [key: string]: string };
};

export type ThemeName = (typeof themeNames)[number];

/**
 * Type guard for ColorThemeName
 *
 * @param {unknown} val
 * @return {*}  {val is ColorThemeName}
 */
export const isThemeName = (val: unknown): val is ThemeName =>
  themeNames.includes(val as ThemeName);
