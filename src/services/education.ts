import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getEducations = () => {
  return GET_API(API_PATHS.EDUCATION + "s").then((response) => {
    return response.data;
  });
};
export const getEducationById = (id: any) => {
  return GET_API(API_PATHS.EDUCATION + "/" + id).then((response) => {
    return response.data;
  });
};
export const createEducation = (payload: any) => {
  return POST_API(API_PATHS.EDUCATION, payload).then((response) => {
    return response.data;
  });
};
export const updateEducationById = (payload: any, id: any) => {
  return PUT_API(API_PATHS.EDUCATION, { params: id, payload }).then(
    (response) => {
      return response.data;
    }
  );
};
export const deleteEducationById = (id: any) => {
  return DELETE_API(API_PATHS.EDUCATION + "/" + id).then((response) => {
    return response.data;
  });
};
