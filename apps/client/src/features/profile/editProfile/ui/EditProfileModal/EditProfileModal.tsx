import { FC, memo } from 'react'
import { Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import type { Profile } from 'kg-calculator-typings'
import EditProfileForm from '../EditProfileForm'


interface Props {
  opened: boolean
  profile: Profile

  onClose: () => void
}

const EditProfileModal: FC<Props> = memo(({ opened, profile, onClose }) => {
  const isMobile = useMediaQuery('(max-width: 50em)')

  return (
    <Modal title="Редактирование профиля" opened={opened} onClose={onClose} centered fullScreen={isMobile}>
      <EditProfileForm profile={profile} onEditProfileSuccess={onClose} />
    </Modal>
  )
})

export default EditProfileModal
