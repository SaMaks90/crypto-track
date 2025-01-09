export const themeNames = ["light", "dark"] as const;

export const defaultThemeName: (typeof themeNames)[number] = "light";

export const themeCookieName = "themeName";
