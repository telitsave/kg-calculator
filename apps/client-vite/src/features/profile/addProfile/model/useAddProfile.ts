import { useProfiles } from '@entities/profile'
import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'
import axios, { type AxiosError } from 'axios'
import type { ApiDefaultError, CreateProfilePayload, CreateProfileResponse, LoginResponse } from 'kg-calculator-typings'

const useAddProfile = () => {
  const { setCookie } = useProfiles()
  return useMutation<CreateProfileResponse, AxiosError<ApiDefaultError>, CreateProfilePayload>({
    mutationKey: ['addProfile'],
    mutationFn: (payload: CreateProfilePayload) => api.profiles.addProfile(payload),
    async onSuccess(data) {
      const response = await axios.get<LoginResponse>(`${process.env.REACT_APP_SERVER_URL}/auth/refresh`, {
        withCredentials: true,
      })
      localStorage.setItem('access-token', response.data.accessToken)
      setCookie(data.id.toString())
      window.location.reload()
    },
  })
}

export default useAddProfile
