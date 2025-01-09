import { defaultThemeName } from "../const/theme";
import { getThemeCookie, setThemeCookie } from "../utils/cookie/theme";
import { useAppDispatch, useAppSelector } from "../stores/hooks";
import {
  selectTheme,
  ThemeState,
  updateTheme,
} from "../stores/slices/themeSlice";
import { themeNameStyleMap } from "../styles/theme";
import { ThemeName, ThemeStyle, isThemeName } from "../types/theme";

/**
 * Custom hook for handling color themes
 */
const useTheme = () => {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector(selectTheme);

  /**
   * Set color theme cookie and state
   * @param {ThemeName} themeName
   */
  const setTheme = (themeName: ThemeName) => {
    setThemeCookie(themeName);
    dispatch(updateTheme(themeName));
  };

  /**
   * Initialize color theme cookie and state
   * @return {void}
   */
  const initTheme = (): void => {
    const currentThemeCookie = getThemeCookie();

    if (!currentThemeCookie || !isThemeName(currentThemeCookie)) {
      setTheme(defaultThemeName);
      return;
    }

    dispatch(updateTheme(currentThemeCookie));
  };

  /**
   * @return {*} ThemeState
   */
  const getCurrentThemeState = (): ThemeState => currentTheme;

  /**
   * @return {*} {ThemeStyle}
   */
  const getCurrentThemeStyle = (): ThemeStyle =>
    themeNameStyleMap[currentTheme.theme];

  return {
    setTheme,
    initTheme,
    getCurrentThemeState,
    getCurrentThemeStyle,
  };
};

export default useTheme;
