import { useCallback, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Profile } from 'kg-calculator-typings'
import useCookie from 'react-use-cookie'
import api from 'shared/api'


const useProfiles = () => {
  const { data, isFetched } = useQuery({
    queryKey: ['profiles'],
    queryFn: api.profiles.getProfiles,
  })
  const [currentProfile, setCurrentProfile, deleteProfileCookie] = useCookie('profileId')

  const selectedProfile = useMemo<Profile>(() => {
    return (
      data?.find((it) => it.id === Number(currentProfile)) || {
        id: -1,
        name: 'Нет профиля',
        userId: -1,
      }
    )
  }, [data, currentProfile])

  const handleSetProfile = useCallback(
    (profileId: string) => {
      if (selectedProfile.id !== Number(profileId)) {
        setCurrentProfile(profileId)
        window.location.reload()
      }
    },
    [selectedProfile.id, setCurrentProfile],
  )

  useEffect(() => {
    if (isFetched && (!selectedProfile || selectedProfile.id === -1) && data && data.length > 0) {
      setCurrentProfile(data[0].id.toString())
    }
  }, [isFetched, data, currentProfile])

  return {
    profiles: data,
    isLoaded: isFetched,
    selectedProfile,
    setCurrentProfile: handleSetProfile,
    deleteProfileCookie,
  }
}

export default useProfiles
