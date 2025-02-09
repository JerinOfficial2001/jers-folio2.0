import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getEnquiry = () => {
  return GET_API(API_PATHS.ENQUIRY).then((response) => {
    return response.data;
  });
};
export const getEnquiryById = (id: any) => {
  return GET_API(API_PATHS.ENQUIRY + "/" + id).then((response) => {
    return response.data;
  });
};
export const postEnquiry = (payload: any) => {
  return POST_API(API_PATHS.ENQUIRY, payload).then((response) => {
    return response.data;
  });
};
export const updateEnquiryById = (payload: any, id: any) => {
  return PUT_API(API_PATHS.ENQUIRY, { params: id, payload }).then(
    (response) => {
      return response.data;
    }
  );
};
