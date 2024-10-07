import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { ColumnFiltersState } from '@tanstack/react-table'
import HeroFilterModal from '../HeroFilterModal'


interface Props {
  className?: string

  onApply: (values: ColumnFiltersState) => void
}

const HeroFilterButton: FC<Props> = memo(({ className, onApply }) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button className={className} onClick={open}>
        Фильтры
      </Button>
      <HeroFilterModal opened={opened} onClose={close} onApply={onApply} />
    </>
  )
})

export default HeroFilterButton
