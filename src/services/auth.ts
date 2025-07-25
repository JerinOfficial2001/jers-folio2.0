import { POST_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";
import { setEncryptedCookie } from "@/utils/encryptedCookies";
import Cookies from "js-cookie";

export const register = (payload: any) => {
  return POST_API(API_PATHS.REGISTER, payload, {
    "Content-Type": "multipart/form-data",
  }).then((response) => {
    const { token, expireTime } = response.data;
    setEncryptedCookie("jersfolioV2-token", token);
    setEncryptedCookie("expireTime", expireTime);
    return response.data;
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
    const { token, expiresAt } = response.data;
    setEncryptedCookie("jersfolioV2-token", token);
    setEncryptedCookie("expireTime", expiresAt);
    return response.data;
  });
};

export const logout = (): any => {
  // return POST_API(API_PATHS.LOGOUT, {}).then((response) => {
  Cookies.remove("jersfolioV2-token");
  Cookies.remove("expireTime");
  window.location.reload();
  return { message: "Logged out successfully" };
  // return response.data;
  // });
};

export const uploadImage = (file: any, id: any, image_name: string) => {
  return POST_API(
    API_PATHS.UPLOAD_IMAGE,
    { params: id, file, image_name },
    {
      "Content-Type": "multipart/form-data",
    }
  ).then((response) => {
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
