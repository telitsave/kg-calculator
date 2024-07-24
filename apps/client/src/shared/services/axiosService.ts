import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

export default class AxiosService {
  private static axiosInstance: AxiosInstance | undefined

  static init(baseUrl: string) {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: baseUrl,
      })
    }
  }

  static get<ResponseType = any>(url: string, config?: AxiosRequestConfig) {
    if (!this.axiosInstance) {
      throw new Error('Axios instance not initialized')
    }

    return this.axiosInstance.get<ResponseType>(url, config).then((response) => response.data)
  }

  static post<ResponseType = any>(url: string, config?: AxiosRequestConfig) {
    if (!this.axiosInstance) {
      throw new Error('Axios instance not initialized')
    }

    return this.axiosInstance.post<ResponseType>(url, config).then((response) => response.data)
  }
}
