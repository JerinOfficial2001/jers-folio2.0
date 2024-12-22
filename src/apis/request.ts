import axios, { AxiosResponse } from "axios";

const API_BASE_URL =
  process.env.NODE_ENV == "production"
    ? process.env.NEXT_PUBLIC_API_BASE_URL
    : process.env.NEXT_PUBLIC_API_LOCAL_URL;

export const GET_API = async (
  endpoint: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const POST_API = async (
  endpoint: string,
  data: any,
  options = {}
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.post(`${API_BASE_URL}${endpoint}`, data, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export const PUT_API = async (
  endpoint: string,
  data: any
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.put(`${API_BASE_URL}${endpoint}`, data, {});
    return response;
  } catch (error) {
    throw error;
  }
};

export const DELETE_API = async (
  endpoint: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axios.delete(`${API_BASE_URL}${endpoint}`, {});
    return response;
  } catch (error) {
    throw error;
  }
};
