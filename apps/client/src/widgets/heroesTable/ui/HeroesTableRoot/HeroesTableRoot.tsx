import { FC, memo, useState } from 'react'
import { Flex, Stack } from '@mantine/core'
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table'
import { useGetHeroesTable } from 'entities/hero'
import { HeroSorterButton } from 'features/heroes/heroSorter'
import HeroFilterButton from '../../../../features/heroes/heroFilter/ui/HeroFilterButton'
import HeroesTable from '../HTable'


const HeroesTableRoot: FC = memo(() => {
  const { data = [] } = useGetHeroesTable()
  const [sortings, setSortings] = useState<SortingState>([])
  const [filters, setFilters] = useState<ColumnFiltersState>([])
  return (
    <Stack mah="100%" maw="100%">
      <Flex gap="md">
        <HeroSorterButton onApply={setSortings} />
        <HeroFilterButton onApply={setFilters} />
      </Flex>
      <HeroesTable rows={data} sortings={sortings} filters={filters} />
    </Stack>
  )
})

export default HeroesTableRoot
