import { useProfiles } from '@entities/profile'
import api from '@shared/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteProfile = () => {
  const { profiles = [], selectedProfile, setCurrentProfile, deleteProfileCookie } = useProfiles()
  const queryClient = useQueryClient()

  return useMutation({
    mutationKey: ['deleteProfile'],
    mutationFn: (profileId: number) => api.profiles.deleteProfile(profileId),
    onSuccess(_, profileId) {
      if (profiles.length === 1) {
        deleteProfileCookie()
        window.location.reload()
      }
      if (selectedProfile.id === profileId) {
        if (profiles[0].id !== profileId) {
          setCurrentProfile(profiles[0].id.toString())
        } else {
          setCurrentProfile(profiles[1].id.toString())
        }
      }
      queryClient.invalidateQueries({
        queryKey: ['profiles'],
      })
    },
  })
}

export default useDeleteProfile
