import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { LoginResponse } from 'kg-calculator-typings'


export default class AxiosService {
  private static axiosInstance: AxiosInstance | undefined

  static init(baseUrl: string) {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
      })
      this.axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${localStorage.getItem('access-token')}`
        return config
      })
      this.axiosInstance.interceptors.response.use(
        (config) => config,
        async (error) => {
          const originalRequest = error.config
          if (error.response && error.response.status === 401 && error.config && !error.config._isRetry) {
            originalRequest._isRetry = true
            try {
              const response = await axios.get<LoginResponse>(`${baseUrl}/auth/refresh`, { withCredentials: true })
              localStorage.setItem('access-token', response.data.accessToken)
              return this.axiosInstance?.request(originalRequest)
            } catch (error) {
              console.log('Не авторизован')
            }
          }
          throw error
        },
      )
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

  static patch<ResponseType = any>(url: string, config?: AxiosRequestConfig) {
    if (!this.axiosInstance) {
      throw new Error('Axios instance not initialized')
    }

    return this.axiosInstance.patch<ResponseType>(url, config).then((response) => response.data)
  }

  static put<ResponseType = any>(url: string, config?: AxiosRequestConfig) {
    if (!this.axiosInstance) {
      throw new Error('Axios instance not initialized')
    }

    return this.axiosInstance.put<ResponseType>(url, config).then((response) => response.data)
  }

  static delete<ResponseType = any>(url: string, config?: AxiosRequestConfig) {
    if (!this.axiosInstance) {
      throw new Error('Axios instance not initialized')
    }

    return this.axiosInstance.delete<ResponseType>(url, config).then((response) => response.data)
  }
}
