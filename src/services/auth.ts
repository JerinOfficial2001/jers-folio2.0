import { POST_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";
import { useGlobalStore } from "@/store/GlobalStore";

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
    {
      withCredentials: true,
    }
  ).then((response) => {
    return response.data;
  });
};

export const logout = () => {
  return POST_API(
    API_PATHS.LOGOUT,

    {
      withCredentials: true,
    }
  ).then((response) => {
    return response.data;
  });
};

export const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user") || "{}");
};
