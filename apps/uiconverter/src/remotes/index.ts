import type { AxiosInstance, AxiosRequestConfig } from 'axios';
import axios from 'axios';

const API_BASEURL = 'https://api.figma.com/v1';
const axiosInstance = axios.create({
  baseURL: API_BASEURL,
});

export interface HttpClient extends AxiosInstance {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T = unknown>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}
export const http: HttpClient = axiosInstance;

http.interceptors.request.use((config) => {
  console.log(accessToken);
  if (accessToken) {
    config.headers['X-Figma-Token'] = accessToken;
    http.defaults.headers.common['X-Figma-Token'] = accessToken;
  } else {
    throw new Error('Figma API Key가 존재하지 않습니다. ');
  }
  return config;
});
