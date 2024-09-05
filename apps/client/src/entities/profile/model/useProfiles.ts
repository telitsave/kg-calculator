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

  const setCookie = useCallback(
    (value: string) => {
      if (process.env.NODE_ENV === 'production') {
        setCurrentProfile(value, {
          domain: `${process.env.COOKIE_DOMAIN}`,
        })
      } else {
        setCurrentProfile(value)
      }
    },
    [setCurrentProfile],
  )

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
        setCookie(profileId)
        window.location.reload()
      }
    },
    [selectedProfile.id, setCurrentProfile],
  )

  useEffect(() => {
    if (isFetched && (!selectedProfile || selectedProfile.id === -1) && data && data.length > 0) {
      if (!currentProfile) {
        setCookie(data[0].id.toString())
        window.location.reload()
      }
    }
  }, [isFetched, data, selectedProfile, currentProfile, setCookie])

  return {
    profiles: data,
    isLoaded: isFetched,
    selectedProfile,
    setCurrentProfile: handleSetProfile,
    deleteProfileCookie,
    setCookie,
  }
}

export default useProfiles
