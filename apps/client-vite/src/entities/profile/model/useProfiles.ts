import { useCallback, useEffect, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Profile } from 'kg-calculator-typings'
import { useIntl } from 'react-intl'
import useCookie from 'react-use-cookie'
import api from '@shared/api'


const useProfiles = () => {
  const intl = useIntl()
  const { data, isFetched } = useQuery({
    queryKey: ['profiles'],
    queryFn: api.profiles.getProfiles,
  })
  const [currentProfile, setCurrentProfile, deleteProfileCookie] = useCookie('profileId')

  const setCookie = useCallback(
    (value: string) => {
      if (import.meta.env.PROD) {
        setCurrentProfile(value, {
          domain: `${import.meta.env.VITE_COOKIE_DOMAIN}`,
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
        name: intl.formatMessage({ defaultMessage: 'Нет профиля' }),
        userId: -1,
      }
    )
  }, [data, intl, currentProfile])

  const handleSetProfile = useCallback(
    (profileId: string) => {
      if (selectedProfile.id !== Number(profileId)) {
        setCookie(profileId)
        window.location.reload()
      }
    },
    [selectedProfile.id, setCookie],
  )

  useEffect(() => {
    if (isFetched && (!selectedProfile || selectedProfile.id === -1) && data && data.length > 0) {
      if (!currentProfile || selectedProfile.id === -1) {
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
