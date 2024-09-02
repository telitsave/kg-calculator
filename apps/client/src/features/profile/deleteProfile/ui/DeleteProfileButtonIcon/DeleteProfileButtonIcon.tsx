import { FC, memo } from 'react'
import { ActionIcon } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { Profile } from 'kg-calculator-typings'
import { FaTrash } from 'react-icons/fa6'
import DeleteProfileConfirmModal from '../DeleteProfileConfirmModal'


interface Props {
  className?: string
  profile: Profile
}

const DeleteProfileButtonIcon: FC<Props> = memo(({ className, profile }) => {
  const [opened, { open, close }] = useDisclosure()

  return (
    <>
      <ActionIcon className={className} variant="transparent" onClick={open}>
        <FaTrash size={16} />
      </ActionIcon>
      <DeleteProfileConfirmModal opened={opened} onClose={close} profile={profile} />
    </>
  )
})

export default DeleteProfileButtonIcon
