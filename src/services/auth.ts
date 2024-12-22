import { POST_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";
import { setEncryptedCookie } from "@/utils/encryptedCookies";
import Cookies from "js-cookie";

export const register = (payload: any) => {
  return POST_API(API_PATHS.REGISTER, {
    ...payload,
  });
};

export const login = (payload: any) => {
  return POST_API(
    API_PATHS.LOGIN,
    {
      ...payload,
    },
    {}
  ).then((response) => {
    const { token, expireTime } = response.data;
    setEncryptedCookie("token", token);
    setEncryptedCookie("expireTime", expireTime);
    return response.data;
  });
};

export const logout = () => {
  return POST_API(API_PATHS.LOGOUT, {}).then((response) => {
    Cookies.remove("token");
    Cookies.remove("expireTime");
    return response.data;
  });
};

// export const getCurrentUser = () => {
//   const encryptedToken = Cookies.get("token");
//   const encryptedExpireTime = Cookies.get("expireTime");
//   if (encryptedToken && encryptedExpireTime) {
//     const token = decryptData(encryptedToken);
//     const expireTime = decryptData(encryptedExpireTime);
//     return { token, expireTime };
//   }
//   return JSON.parse(localStorage.getItem("user") || "{}");
// };
