import { FC, memo } from 'react'
import { Modal } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { FormattedMessage } from 'react-intl'
import AddProfileForm from '../AddProfileForm'


interface Props {
  opened: boolean

  onClose: () => void
}

const AddProfileModal: FC<Props> = memo(({ opened, onClose }) => {
  const isMobile = useMediaQuery('(max-width: 50em)')

  return (
    <Modal
      title={<FormattedMessage defaultMessage="Добавить новый профиль" />}
      opened={opened}
      onClose={onClose}
      centered
      fullScreen={isMobile}
    >
      <AddProfileForm onAddProfileSuccess={onClose} />
    </Modal>
  )
})

export default AddProfileModal
