import Cookies from "js-cookie";

// Get environment variables
const TOKEN_KEY = import.meta.env.VITE_ACCESS_TOKEN_KEY;
const EXPIRES_IN = parseInt(import.meta.env.VITE_ACCESS_TOKEN_EXPIRES_IN, 10);
const DOMAIN = import.meta.env.VITE_DOMAIN;

export const setAccessToken = (accessToken: string) => {
  Cookies.set(TOKEN_KEY, accessToken, {
    expires: EXPIRES_IN,
    domain: DOMAIN,
    sameSite: "None",
    secure: true,
  });
};

export const getAccessToken = (): string | undefined => {
  return Cookies.get(TOKEN_KEY);
};

export const removeAccessToken = () => {
  Cookies.remove(TOKEN_KEY, {
    domain: DOMAIN,
    sameSite: "None",
    secure: true,
  });
};
