import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getContact = () => {
  return GET_API(API_PATHS.CONTACTS).then((response) => {
    return response.data;
  });
};
export const getContactById = (id: any) => {
  return GET_API(API_PATHS.CONTACTS + "/" + id).then((response) => {
    return response.data;
  });
};
export const createContact = (payload: any) => {
  return POST_API(API_PATHS.CONTACTS, payload).then((response) => {
    return response.data;
  });
};
export const updateContactById = (payload: any, id: any) => {
  return PUT_API(API_PATHS.CONTACTS, { params: id, payload }).then(
    (response) => {
      return response.data;
    }
  );
};
