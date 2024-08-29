export interface RegistrationPayload {
  email: string
  password: string
}

export interface ActivationPayload {
  registrationToken: string
}

export interface LoginPayload {
  email: string
  password: string
}

export interface ForgotPasswordPayload {
  email: string
}

export interface ResetPasswordPayload {
  resetPasswordToken: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  user: {
    id: number
    email: string
    confirmed: boolean
  }
}
