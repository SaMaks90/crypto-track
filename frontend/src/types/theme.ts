import { themeNames } from "../const/theme";

export type ThemeStyle = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    border: string;
  };
  fonts: Array<string>;
  fontSizes: {
    sm: number;
    m: number;
    l: number;
    xl: number;
  };
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
