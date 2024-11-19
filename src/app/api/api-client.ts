// import { BASE_URL } from '@env';
// import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

// console.log('🚀 ~ file: api-client.ts:8 ~ BASE_URL:', BASE_URL);
// const axiosInstance = axios.create({
//     baseURL: ${BASE_URL}/api/v1,
// });

// export const request = async (options: AxiosRequestConfig) => {
//     const token = await AsyncStorage.getItem('token'); //TODO: Need to do this as custom hook

//     //* check if the token is null or not
//     if (token !== null) {
//         //* if not null - set Bearer token
//         axiosInstance.defaults.headers.common.Authorization = Bearer ${token};
//     }

//     if (options.data instanceof FormData) {
//         axiosInstance.defaults.headers.common.Accept = 'multipart/form-data';
//     }

//     const onSuccess = (response: AxiosResponse) => response.data;
//     const onError = (response: any) => {
//         throw new Error(response?.response?.data?.message);
//     };

//     //* options will contain the request type and data
//     return axiosInstance(options).then(onSuccess).catch(onError);
// };