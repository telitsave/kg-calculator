import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'
import type { LoginResponse } from 'kg-calculator-typings'
import CookieHelper from '../helpers/cookieHelper'


export default class AxiosService {
  private static axiosInstance: AxiosInstance | undefined

  static init(baseUrl: string) {
    if (!this.axiosInstance) {
      this.axiosInstance = axios.create({
        baseURL: baseUrl,
        withCredentials: true,
      })
      this.axiosInstance.interceptors.request.use((config) => {
        const accessToken = localStorage.getItem('access-token')
        const abortController = new AbortController()

        let shouldCheckToken = false
        if (config.method?.toLowerCase() === 'get') {
          shouldCheckToken = config.withCredentials === undefined || config.withCredentials
        } else {
          shouldCheckToken = config.data?.withCredentials === undefined || config.data.withCredentials
        }

        if (shouldCheckToken && !accessToken) {
          abortController.abort('No access token')
        }

        config.headers.Authorization = `Bearer ${accessToken}`
        config.signal = abortController.signal
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
              CookieHelper.deleteCookie('profileId')
              window.location.reload()
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
