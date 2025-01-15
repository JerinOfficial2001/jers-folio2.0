import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getProjectsByType = (type: any) => {
  return GET_API(`${API_PATHS.PROJECT}s/${type}`).then((response) => {
    return response.data;
  });
};
export const getProjectById = (id: any) => {
  return GET_API(API_PATHS.PROJECT + "/" + id).then((response) => {
    return response.data;
  });
};
export const createProject = (payload: any) => {
  return POST_API(API_PATHS.PROJECT, payload, {
    "Content-Type": "multipart/form-data",
  }).then((response) => {
    return response.data;
  });
};
export const updateProjectById = (payload: any, id: any) => {
  return PUT_API(
    API_PATHS.PROJECT,
    { params: id, payload },
    {
      "Content-Type": "multipart/form-data",
    }
  ).then((response) => {
    return response.data;
  });
};
export const updateProjectVisibility = (payload: any, id: any) => {
  return PUT_API(API_PATHS.PROJECT + "/visibility", {
    params: id,
    payload,
  }).then((response) => {
    return response.data;
  });
};
export const deleteProjectById = (id: any) => {
  return DELETE_API(API_PATHS.PROJECT + "/" + id).then((response) => {
    return response.data;
  });
};
