import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { FaPlus } from 'react-icons/fa6'
import { FormattedMessage } from 'react-intl'
import AddProfileModal from '../AddProfileModal'


const AddProfileButton: FC = memo(() => {
  const [opened, { open, close }] = useDisclosure()

  return (
    <>
      <Button variant="transparent" leftSection={<FaPlus />} size="xs" onClick={open}>
        <FormattedMessage defaultMessage="Новый профиль" />
      </Button>
      <AddProfileModal opened={opened} onClose={close} />
    </>
  )
})

export default AddProfileButton
