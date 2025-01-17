import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ApiDefaultError, RegistrationPayload } from 'kg-calculator-typings'
import api from '@shared/api'


const useRegistration = () => {
  // eslint-disable-next-line
  return useMutation<any, AxiosError<ApiDefaultError>, RegistrationPayload>({
    mutationKey: ['registration'],
    mutationFn: api.auth.registration,
  })
}

export default useRegistration
