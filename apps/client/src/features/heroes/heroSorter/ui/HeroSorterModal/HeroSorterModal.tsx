import { FC, memo } from 'react'
import { Checkbox, Modal } from '@mantine/core'

interface Props {
  className?: string
  opened: boolean

  onClose: () => void
}

const HeroSorterModal: FC<Props> = memo(({ opened, onClose }) => (
  <Modal opened={opened} onClose={onClose} title="Сортировать героев">
    <Checkbox.Group>
      <Checkbox value="name" label="По имени героя" />
      <Checkbox value="element" label="По стихии героя" />
      <Checkbox value="speed_skill" label="По скорости" />
      <Checkbox value="power_skill" label="По увеличению мощи" />
    </Checkbox.Group>
  </Modal>
))

export default HeroSorterModal
