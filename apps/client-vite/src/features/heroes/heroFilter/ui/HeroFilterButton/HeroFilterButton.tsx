import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { ColumnFiltersState } from '@tanstack/react-table'
import { FormattedMessage } from 'react-intl'
import HeroFilterModal from '../HeroFilterModal'


interface Props {
  className?: string
  simple?: boolean

  onApply: (values: ColumnFiltersState) => void
}

const HeroFilterButton: FC<Props> = memo(({ className, simple, onApply }) => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Button className={className} onClick={open}>
        <FormattedMessage defaultMessage="Фильтры" />
      </Button>
      <HeroFilterModal opened={opened} simple={simple} onClose={close} onApply={onApply} />
    </>
  )
})

export default HeroFilterButton
