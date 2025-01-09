import { getCookie, setCookie } from "cookies-next";
import { OptionsType } from "cookies-next";
import { themeCookieName } from "../../const/theme";
import { ThemeName, isThemeName } from "../../types/theme";

/**
 * Set color theme cookie to persist color theme config
 * @param {ThemeName} value
 * @param {OptionsType} [options]
 */
export const setThemeCookie = (value: ThemeName, options?: OptionsType) => {
  setCookie(themeCookieName, value, options);
};

/**
 * @param {OptionsType} [options]
 * @return {string}  {string}
 */
export const getThemeCookie = (options?: OptionsType): string => {
  const themeCookie = getCookie(themeCookieName, options);
  return isThemeName(themeCookie) ? themeCookie : "";
};
