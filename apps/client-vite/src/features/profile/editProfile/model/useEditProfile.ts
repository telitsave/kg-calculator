import api from '@shared/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'
import type { ApiDefaultError, UpdateProfilePayload } from 'kg-calculator-typings'

const useEditProfile = () => {
  const queryClient = useQueryClient()

  return useMutation<
    void,
    AxiosError<ApiDefaultError>,
    {
      profileId: number
    } & UpdateProfilePayload
  >({
    mutationKey: ['editProfile'],
    mutationFn: ({
      profileId,
      ...payload
    }: {
      profileId: number
    } & UpdateProfilePayload) => api.profiles.updateProfile(profileId, payload),
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: ['profiles'],
      })
    },
  })
}

export default useEditProfile
