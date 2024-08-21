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
