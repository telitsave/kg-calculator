import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useProfiles } from 'entities/profile'
import api from 'shared/api'


export const useDeleteProfile = () => {
  const { profiles = [], selectedProfile, setCurrentProfile } = useProfiles()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteProfile'],
    mutationFn: (profileId: number) => api.profiles.deleteProfile(profileId),
    onSuccess(_, profileId) {
      if (selectedProfile.id === profileId) {
        setCurrentProfile(profiles[0].id.toString())
      }
      queryClient.invalidateQueries({
        queryKey: ['profiles'],
      })
    },
  })
}

export default useDeleteProfile
