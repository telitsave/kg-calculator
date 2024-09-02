import { useMutation } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ApiDefaultError, CreateProfilePayload, CreateProfileResponse } from 'kg-calculator-typings'
import useCookie from 'react-use-cookie'
import api from 'shared/api'


const useAddProfile = () => {
  const [, setCurrentProfile] = useCookie('profileId')
  return useMutation<CreateProfileResponse, AxiosError<ApiDefaultError>, CreateProfilePayload>({
    mutationKey: ['addProfile'],
    mutationFn: (payload: CreateProfilePayload) => api.profiles.addProfile(payload),
    onSuccess(data) {
      setCurrentProfile(data.id.toString())
      window.location.reload()
    },
  })
}

export default useAddProfile
