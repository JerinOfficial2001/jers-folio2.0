import { DELETE_API, GET_API, POST_API, PUT_API } from "@/apis/request";
import { API_PATHS } from "@/constants/api-paths";

export const getActivePortfolio = () => {
  return GET_API(API_PATHS.PORTFOLIOS + "s").then((response) => {
    return response.data;
  });
};
export const getPortfolioBuilds = () => {
  return GET_API(API_PATHS.PORTFOLIOS).then((response) => {
    return response.data || response;
  });
};
export const getPortfolioById = (id: any) => {
  return GET_API(API_PATHS.PORTFOLIOS + "/" + id).then((response) => {
    return response.data;
  });
};
export const getPortfolioByUserName = (username: any) => {
  return GET_API(API_PATHS.PORTFOLIOS + "/" + username).then((response) => {
    if (response.data) {
      return response.data;
    } else {
      window.location.href = "/";
    }
  });
};
export const publishPortfolio = (payload: any) => {
  return PUT_API(API_PATHS.PORTFOLIOS + "/publish", { payload }).then(
    (response) => {
      return response.data;
    }
  );
};
export const updatePortfolioBuild = (payload: any, id: any) => {
  return PUT_API(API_PATHS.PORTFOLIOS, { params: id, payload }).then(
    (response) => {
      return response.data;
    }
  );
};
export const deleteSkillById = (id: any) => {
  return DELETE_API(API_PATHS.PORTFOLIOS + "/" + id).then((response) => {
    return response.data;
  });
};
