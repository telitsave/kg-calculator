import { FC, memo } from 'react'
import { Flex, Stack } from '@mantine/core'
import { useGetHeroesTable } from 'entities/hero'
import { HeroSorterButton } from 'features/heroes/heroSorter'
import HeroesTable from '../HTable'


const HeroesTableRoot: FC = memo(() => {
  const { data = [] } = useGetHeroesTable()
  return (
    <Stack mah="100%" maw="100%">
      <Flex>
        <HeroSorterButton />
      </Flex>
      <HeroesTable rows={data} />
    </Stack>
  )
})

export default HeroesTableRoot
