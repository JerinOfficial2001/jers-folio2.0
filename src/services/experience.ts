import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getExperiences = () => {
  return GET_API(API_PATHS.EXPERIENCE + "s").then((response) => {
    return response.data;
  });
};
export const getExperienceById = (id: any) => {
  return GET_API(API_PATHS.EXPERIENCE + "/" + id).then((response) => {
    return response.data;
  });
};
export const createExperience = (payload: any) => {
  return POST_API(API_PATHS.EXPERIENCE, payload).then((response) => {
    return response.data;
  });
};
export const updateExperienceById = (payload: any, id: any) => {
  return PUT_API(API_PATHS.EXPERIENCE, { params: id, payload }).then(
    (response) => {
      return response.data;
    }
  );
};
export const deleteExperienceById = (id: any) => {
  return DELETE_API(API_PATHS.EXPERIENCE + "/" + id).then((response) => {
    return response.data;
  });
};
