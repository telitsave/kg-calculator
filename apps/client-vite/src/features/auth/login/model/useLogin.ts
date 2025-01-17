import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ApiDefaultError, LoginPayload, LoginResponse } from 'kg-calculator-typings'

const useLogin = () => {
  return useMutation<LoginResponse, AxiosError<ApiDefaultError>, LoginPayload>({
    mutationKey: ['login'],
    mutationFn: api.auth.login,
    onSuccess(data) {
      localStorage.setItem('access-token', data.accessToken)
      localStorage.setItem('user-data', JSON.stringify(data.user))
      window.location.reload()
    },
  })
}

export default useLogin
