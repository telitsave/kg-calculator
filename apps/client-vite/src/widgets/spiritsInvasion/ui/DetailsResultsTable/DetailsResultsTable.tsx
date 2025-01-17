import { FC, memo, useMemo } from 'react'
import { Table, Text } from '@mantine/core'
import type { SpiritsInvasionRowData } from 'kg-calculator-typings'
import { FormattedMessage, useIntl } from 'react-intl'
import StringHelper from '@shared/helpers/stringHelper'


interface Props {
  className?: string
  data: SpiritsInvasionRowData[]
}

const DetailsResultsTable: FC<Props> = memo(({ className, data }) => {
  const intl = useIntl()
  const rows = useMemo(
    () =>
      data.map((row) => {
        const isEliteRow = [7, 14, 17].includes(row.wave)
        const isBossRow = [10, 20].includes(row.wave)
        return (
          <Table.Tr bg={isEliteRow ? '#b98abf' : isBossRow ? '#cc747c' : ''}>
            <Table.Td>{row.wave}</Table.Td>
            <Table.Td align="right">
              <Text>{StringHelper.getFormatNumber(row.power, intl)}</Text>
            </Table.Td>
            <Table.Td align="right">
              <Text>{StringHelper.getFormatNumber(row.scoreByOne, intl)}</Text>
            </Table.Td>
            <Table.Td align="right">
              <Text>{StringHelper.getFormatNumber(row.scoreTotal, intl)}</Text>
            </Table.Td>
          </Table.Tr>
        )
      }),
    [data, intl],
  )
  return (
    <Table className={className} border={1}>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>
            <FormattedMessage defaultMessage="Волна" />
          </Table.Th>
          <Table.Th align="right">
            <FormattedMessage defaultMessage="Мощь" />
          </Table.Th>
          <Table.Th align="right">
            <FormattedMessage defaultMessage="Очки одному участнику" />
          </Table.Th>
          <Table.Th align="right">
            <FormattedMessage defaultMessage="Очки на всех участников" />
          </Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  )
})

export default DetailsResultsTable
