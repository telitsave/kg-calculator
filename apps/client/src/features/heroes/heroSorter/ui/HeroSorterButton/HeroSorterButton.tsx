import { FC, memo } from 'react'
import { Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import HeroSorterModal from '../HeroSorterModal'


interface Props {
  className?: string
}

const HeroSorterButton: FC<Props> = memo(({}) => {
  const [opened, { open, close }] = useDisclosure(false)
  return (
    <>
      <Button onClick={open}>Сортировка</Button>
      <HeroSorterModal opened={opened} onClose={close} />
    </>
  )
})

export default HeroSorterButton
