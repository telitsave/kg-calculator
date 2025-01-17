import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { SortingState } from '@tanstack/react-table'
import { FormattedMessage } from 'react-intl'
import HeroSorterModal from '../HeroSorterModal'


interface Props {
  className?: string
  simple?: boolean

  onApply: (values: SortingState) => void
}

const HeroSorterButton: FC<Props> = memo(({ simple, onApply }) => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Button onClick={open}>
        <FormattedMessage defaultMessage="Сортировка" />
      </Button>
      <HeroSorterModal opened={opened} simple={simple} onClose={close} onApply={onApply} />
    </>
  )
})

export default HeroSorterButton
