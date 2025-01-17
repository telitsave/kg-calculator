import type {
  ActivationPayload,
  ForgotPasswordPayload,
  LoginPayload,
  LoginResponse,
  RegistrationPayload,
  ResetPasswordPayload,
} from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const registration = (payload: RegistrationPayload) => {
  return AxiosService.post('/auth/registration', {
    data: payload,
    withCredentials: false,
  })
}

export const login = (payload: LoginPayload) => {
  return AxiosService.post<LoginResponse>('/auth/login', {
    data: payload,
    withCredentials: false,
  })
}

export const activate = (payload: ActivationPayload) => {
  return AxiosService.post('/auth/activate', {
    data: payload,
    withCredentials: false,
  })
}

export const logout = () => {
  return AxiosService.get('/auth/logout', {
    withCredentials: false,
  })
}

export const forgotPassword = (payload: ForgotPasswordPayload) => {
  return AxiosService.post('/auth/forgotPassword', {
    data: payload,
    withCredentials: false,
  })
}

export const resetPassword = (payload: ResetPasswordPayload) => {
  return AxiosService.post('/auth/resetPassword', {
    data: payload,
    withCredentials: false,
  })
}
