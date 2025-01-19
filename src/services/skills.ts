import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getSkills = () => {
  return GET_API(API_PATHS.SKILLS + "s").then((response) => {
    return response.data;
  });
};
export const getSkillById = (id: any) => {
  return GET_API(API_PATHS.SKILLS + "/" + id).then((response) => {
    return response.data;
  });
};
export const createSkill = (payload: any) => {
  return POST_API(API_PATHS.SKILLS, payload).then((response) => {
    return response.data;
  });
};
export const updateSkillById = (payload: any, id: any) => {
  return PUT_API(API_PATHS.SKILLS, { params: id, payload }).then((response) => {
    return response.data;
  });
};
export const deleteSkillById = (id: any) => {
  return DELETE_API(API_PATHS.SKILLS + "/" + id).then((response) => {
    return response.data;
  });
};
