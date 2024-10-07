import { type CSSProperties, FC, memo, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { Table } from '@mantine/core'
import {
  type Column,
  type ColumnFiltersState,
  type SortingState,
  type TableState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import type { HeroTableData } from 'kg-calculator-typings'
import columns from './columns'
import css from './styles.module.sass'

interface Props {
  className?: string
  rows: HeroTableData[]
  sortings: SortingState
  filters: ColumnFiltersState
}

const getCommonPinningStyles = (column: Column<HeroTableData>): CSSProperties => {
  const isPinned = column.getIsPinned()
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left')
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right')

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}

const HTable: FC<Props> = memo(({ rows, sortings, filters }) => {
  const getRowId = useCallback((row: HeroTableData) => row.heroId, [])
  const tableState = useMemo<Partial<TableState>>(
    () => ({
      sorting: sortings,
      columnFilters: filters,
    }),
    [sortings, filters],
  )
  const table = useReactTable({
    data: rows,
    columns,
    getRowId,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    initialState: {
      columnVisibility: {
        element: false,
        skill_speed: false,
        skill_power: false,
        skill_heal: false,
        skill_regeneration: false,
        skill_actionPoints: false,
        skill_weight: false,
        skill_offlineGold: false,
        skill_collectGold: false,
      },
      columnPinning: {
        left: ['name'],
      },
    },
    state: tableState,
  })

  return (
    <Table.ScrollContainer className={css.table} minWidth={500}>
      <Table border={1} stickyHeader stickyHeaderOffset={-1}>
        <Table.Thead
          style={{
            zIndex: 2,
          }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th key={header.id} style={{ ...getCommonPinningStyles(header.column) }}>
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {table.getRowModel().rows.map((row) => (
            <Table.Tr key={row.id} className={cx(css.row, css[row.original.element])}>
              {row.getVisibleCells().map((cell) => (
                <Table.Td key={cell.id} style={{ ...getCommonPinningStyles(cell.column) }}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
})

export default HTable
