import { FC, memo, useMemo, useState } from 'react'
import { Flex, Stack } from '@mantine/core'
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table'
import { useGetHeroesTableSimple } from '@entities/hero'
import { HeroFilterButton } from '@features/heroes/heroFilter'
import { HeroSorterButton } from '@features/heroes/heroSorter'
import { useLocaleContext } from '@features/setLocale'
import TableRowModel from '../../model/TableRowModel'
import HeroesTable from '../HTable'


const HeroesTableSimple: FC = memo(() => {
  const { locale } = useLocaleContext()
  const { data = [] } = useGetHeroesTableSimple()
  const [sortings, setSortings] = useState<SortingState>([])
  const [filters, setFilters] = useState<ColumnFiltersState>([])

  const rows = useMemo(() => data.map((it) => new TableRowModel(it, locale)), [data, locale])

  const tableDataRows = useMemo(() => rows.map((row) => row.getTableData()), [rows])

  return (
    <Stack mah="100%" maw="100%">
      <Flex gap="md" align="center" wrap="wrap">
        <HeroSorterButton onApply={setSortings} simple />
        <HeroFilterButton onApply={setFilters} simple />
      </Flex>
      <HeroesTable rows={tableDataRows} sortings={sortings} filters={filters} simple />
    </Stack>
  )
})

export default HeroesTableSimple
