import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ApiDefaultError, ForgotPasswordPayload } from 'kg-calculator-typings'
import api from 'shared/api'


const useForgotPassword = () => {
  return useMutation<void, AxiosError<ApiDefaultError>, ForgotPasswordPayload>({
    mutationKey: ['forgotPassword'],
    mutationFn: api.auth.forgotPassword,
  })
}

export default useForgotPassword
