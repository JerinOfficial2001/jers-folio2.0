import axiosInstance from "@/utils/axios-client";
import { getDecryptedCookie } from "@/utils/encryptedCookies";
import axios, { AxiosResponse } from "axios";

export const GET_API = async (
  endpoint: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.get(`${endpoint}`);
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
    const response = await axiosInstance.post(`${endpoint}`, data, {
      headers: options
        ? options
        : {
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
  data: any,
  options = {}
): Promise<AxiosResponse<any>> => {
  const params = data?.params ? "/" + data?.params : "";
  // const query=data?.query?'?'+Object.keys(data?.query)
  try {
    const response = await axiosInstance.put(
      `${endpoint}${params}`,
      data?.payload,
      {
        headers: options
          ? options
          : {
              "Content-Type": "application/json",
            },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};

export const DELETE_API = async (
  endpoint: string
): Promise<AxiosResponse<any>> => {
  try {
    const response = await axiosInstance.delete(`${endpoint}`, {});
    return response;
  } catch (error) {
    throw error;
  }
};
