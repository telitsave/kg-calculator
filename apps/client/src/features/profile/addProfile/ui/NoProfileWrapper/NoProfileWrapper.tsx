import { FC, memo, useEffect } from 'react'
import { useDisclosure } from '@mantine/hooks'
import { useProfiles } from 'entities/profile'
import AddProfileModal from '../AddProfileModal'


const NoProfileWrapper: FC = memo(() => {
  const { selectedProfile, isLoaded } = useProfiles()
  const [opened, { open, close }] = useDisclosure(false)
  const accessToken = localStorage.getItem('access-token')

  useEffect(() => {
    if (accessToken && isLoaded && selectedProfile.id === -1) {
      open()
    }
  }, [accessToken, isLoaded, selectedProfile.id])

  return <AddProfileModal opened={opened} onClose={close} />
})

export default NoProfileWrapper
