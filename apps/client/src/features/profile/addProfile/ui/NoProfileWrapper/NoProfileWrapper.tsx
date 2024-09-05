import { FC, memo, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import useCookie from 'react-use-cookie'
import { useProfiles } from 'entities/profile'
import AddProfileModal from '../AddProfileModal'


const NoProfileWrapper: FC = memo(() => {
  const { profiles = [], isLoaded } = useProfiles()
  const [opened, { open, close }] = useDisclosure(false)
  const [currentProfile] = useCookie('profileId')
  const accessToken = localStorage.getItem('access-token')

  useEffect(() => {
    if (accessToken && (!currentProfile || (isLoaded && profiles.length === 0))) {
      open()
    } else {
      close()
    }
  }, [accessToken, isLoaded, currentProfile, profiles.length])

  return <AddProfileModal opened={opened} onClose={close} />
})

export default NoProfileWrapper
