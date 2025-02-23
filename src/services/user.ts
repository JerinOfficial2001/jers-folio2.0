import { DELETE_API, GET_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getUser = () => {
  return GET_API(API_PATHS.USER).then((response) => {
    return response.data.data;
  });
};
export const deleteAccount = () => {
  return DELETE_API(API_PATHS.USER).then((response) => {
    return response.data;
  });
};
export const updateUser = (payload: any, id: any) => {
  return PUT_API(
    API_PATHS.USER,
    { params: id, payload },
    {
      "Content-Type": "multipart/form-data",
    }
  ).then((response) => {
    return response.data.data;
  });
};
