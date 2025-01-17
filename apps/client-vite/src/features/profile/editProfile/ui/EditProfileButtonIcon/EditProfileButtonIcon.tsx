import { FC, memo } from 'react'
import { ActionIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { Profile } from 'kg-calculator-typings'
import { FaEdit } from 'react-icons/fa'
import EditProfileModal from '../EditProfileModal'


interface Props {
  profile: Profile
}

const EditProfileButtonIcon: FC<Props> = memo(({ profile }) => {
  const [opened, { open, close }] = useDisclosure()

  return (
    <>
      <ActionIcon variant="transparent" onClick={open}>
        <FaEdit size={16} />
      </ActionIcon>
      <EditProfileModal opened={opened} onClose={close} profile={profile} />
    </>
  )
})

export default EditProfileButtonIcon
