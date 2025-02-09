import { getDecryptedCookie } from "./encryptedCookies";

export const isAuthenticated = () => {
  try {
    const token = getDecryptedCookie("jersfolioV2-token");
    return token ? true : false;
  } catch (error) {
    return false;
  }
};
