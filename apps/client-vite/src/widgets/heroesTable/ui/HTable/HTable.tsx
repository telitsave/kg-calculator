import { type CSSProperties, FC, memo, useCallback, useMemo, useRef } from 'react'
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
import type { TableRow } from '../../model/types'
import columns from './columns'
import css from './styles.module.sass'

interface Props {
  className?: string
  rows: TableRow[]
  sortings?: SortingState
  filters?: ColumnFiltersState
  withUpgrades?: boolean
  withAfterUpgrades?: boolean
  simple?: boolean
}

const getCommonPinningStyles = (column: Column<TableRow>): CSSProperties => {
  const isPinned = column.getIsPinned()
  const isLastLeftPinnedColumn = isPinned === 'left' && column.getIsLastColumn('left')
  const isFirstRightPinnedColumn = isPinned === 'right' && column.getIsFirstColumn('right')

  return {
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset, 4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left') - 1}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    position: isPinned ? 'sticky' : 'relative',
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  }
}

const HTable: FC<Props> = memo(({ rows, sortings, filters, withUpgrades, withAfterUpgrades, simple }) => {
  const getRowId = useCallback((row: TableRow) => row.id, [])
  const tableState = useMemo<Partial<TableState>>(
    () => ({
      sorting: sortings,
      columnFilters: filters,
    }),
    [sortings, filters],
  )

  //The virtualizer needs to know the scrollable container element
  const tableContainerRef = useRef<HTMLDivElement>(null)

  const table = useReactTable({
    data: rows,
    columns,
    getRowId,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    meta: {
      withUpgrades,
      withAfterUpgrades,
    },
    initialState: {
      columnVisibility: {
        element: false,
        season: false,
        stars: false,
        bars: false,
        cards: false,
        upgradeParams: !simple,
        params: !simple,
        upgradeBars: false,
        upgradeStars: false,
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

  const tableRows = table.getRowModel().rows

  return (
    <Table.ScrollContainer className={css.table} minWidth={500} ref={tableContainerRef}>
      <Table border={1} stickyHeader stickyHeaderOffset={-1}>
        <colgroup>
          <col />
          <col style={{ minWidth: 70 }} />
          <col />
          <col />
          <col />
          <col />
          <col />
          <col style={{ minWidth: 175 }} />
          <col style={{ minWidth: 200 }} />
        </colgroup>
        <Table.Thead
          style={{
            zIndex: 2,
          }}
        >
          {table.getHeaderGroups().map((headerGroup) => (
            <Table.Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <Table.Th
                  key={header.id}
                  style={{
                    ...getCommonPinningStyles(header.column),
                  }}
                >
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </Table.Th>
              ))}
            </Table.Tr>
          ))}
        </Table.Thead>
        <Table.Tbody>
          {tableRows.map((row) => (
            <Table.Tr key={row.id} className={cx(css.row, css[row.original.common.element])}>
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
