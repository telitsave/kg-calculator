import { FC, memo, useCallback } from 'react'
import { Button, Flex, Modal, Stack, Text } from '@mantine/core'
import type { Profile } from 'kg-calculator-typings'
import useDeleteProfile from '../../model/useDeleteProfile'


interface Props {
  opened: boolean
  profile: Profile

  onClose: () => void
}

const DeleteProfileConfirmModal: FC<Props> = memo(({ opened, profile, onClose }) => {
  const { mutate: deleteProfile } = useDeleteProfile()

  const handleDeleteButtonClick = useCallback(() => {
    deleteProfile(profile.id, {
      onSuccess() {
        onClose()
      },
    })
  }, [onClose, deleteProfile, profile.id])

  return (
    <Modal opened={opened} onClose={onClose} title="Удалить профиль" centered>
      <Stack>
        <Text>
          Вы действительно хотите удалить профиль{' '}
          <Text component="span" fw={700}>
            {profile.name}
          </Text>
          ?
        </Text>
        <Text>Данные профиля будут утеряны навсегда.</Text>
        <Flex justify="flex-end" gap="md">
          <Button onClick={onClose}>Отмена</Button>
          <Button onClick={handleDeleteButtonClick}>Удалить</Button>
        </Flex>
      </Stack>
    </Modal>
  )
})

export default DeleteProfileConfirmModal
