import { getCookie, setCookie, deleteCookie } from "cookies-next";
import { authTokenCookieName } from "../../const/auth";

export const getAuthToken = async (): Promise<string | null> => {
  const authToken = await getCookie(authTokenCookieName);
  return authToken ? authToken : null;
};

export const setAuthToken = (token: string): void => {
  setCookie(authTokenCookieName, token);
};

export const deleteAuthToken = (): void => {
  deleteCookie(authTokenCookieName);
};
