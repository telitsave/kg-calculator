import { FC, memo, useMemo, useState } from 'react'
import { Flex, Stack, Switch } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import type { ColumnFiltersState, SortingState } from '@tanstack/react-table'
import { useGetHeroesTable } from 'entities/hero'
import { HeroFilterButton } from 'features/heroes/heroFilter'
import { HeroSorterButton } from 'features/heroes/heroSorter'
import TableRowModel from '../../model/TableRowModel'
import HeroesTable from '../HTable'


const HeroesTableRoot: FC = memo(() => {
  const { data = [] } = useGetHeroesTable()
  const [sortings, setSortings] = useState<SortingState>([])
  const [filters, setFilters] = useState<ColumnFiltersState>([])
  const [withUpgrades, { toggle: toggleUpgrades }] = useDisclosure(false)
  const [withAfterUpgrades, { toggle: toggleAfterUpgrades }] = useDisclosure(false)

  const rows = useMemo(() => data.map((it) => new TableRowModel(it)), [data])

  const tableDataRows = useMemo(
    () => rows.map((row) => row.getTableData(withUpgrades, withAfterUpgrades)),
    [rows, withUpgrades, withAfterUpgrades],
  )

  return (
    <Stack mah="100%" maw="100%">
      <Flex gap="md" align="center" wrap="wrap">
        <HeroSorterButton onApply={setSortings} />
        <HeroFilterButton onApply={setFilters} />
        <Switch label="Учитывать прокачку" checked={withUpgrades} onChange={toggleUpgrades} />
        {withUpgrades && (
          <Switch label="Учитывать будущую прокачку" checked={withAfterUpgrades} onChange={toggleAfterUpgrades} />
        )}
      </Flex>
      <HeroesTable
        rows={tableDataRows}
        sortings={sortings}
        filters={filters}
        withUpgrades={withUpgrades}
        withAfterUpgrades={withAfterUpgrades}
      />
    </Stack>
  )
})

export default HeroesTableRoot
