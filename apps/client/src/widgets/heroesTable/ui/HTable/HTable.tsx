import { FC, memo, useMemo } from 'react'
import cx from 'classnames'
import { Flex, Stack, Table, Text } from '@mantine/core'
import type { HeroTableData } from 'kg-calculator-typings'
import { sortBy } from 'lodash'
import { FaStar } from 'react-icons/fa'
import { HeroIcon, HeroSkillIcon, HeroSkillValue } from 'entities/hero'
import css from './styles.module.sass'


interface Props {
  className?: string
  rows: HeroTableData[]
}

const HTable: FC<Props> = memo(({ rows }) => {
  const tableRows = useMemo(() => {
    const sortedRows = sortBy(rows, (it) => it.name)
    return sortedRows.map((row) => (
      <Table.Tr className={cx(css.row, css[row.element])}>
        <Table.Td>
          <Flex gap="sm" align="center">
            <HeroIcon heroId={row.heroId} element={row.element} small />
            <Text>{row.name}</Text>
          </Flex>
        </Table.Td>
        <Table.Td>{row.rank}</Table.Td>
        <Table.Td>
          {row.skill1 && (
            <Stack align="center" gap={4}>
              <HeroSkillIcon skillId={row.skill1.id} />
              <HeroSkillValue skillId={row.skill1.id} value={row.skill1.value} />
            </Stack>
          )}
        </Table.Td>
        <Table.Td>
          {row.skill2 && (
            <Stack align="center" gap={4}>
              <HeroSkillIcon skillId={row.skill2.id} />
              <HeroSkillValue skillId={row.skill2.id} value={row.skill2.value} />
            </Stack>
          )}
        </Table.Td>
        <Table.Td>
          {row.skill3 && (
            <Stack align="center" gap={4}>
              <HeroSkillIcon skillId={row.skill3.id} />
              <HeroSkillValue skillId={row.skill3.id} value={row.skill3.value} />
            </Stack>
          )}
        </Table.Td>
        <Table.Td>
          {row.skill4 && (
            <Stack align="center" gap={4}>
              <HeroSkillIcon skillId={row.skill4.id} />
              <HeroSkillValue skillId={row.skill4.id} value={row.skill4.value} />
            </Stack>
          )}
        </Table.Td>
      </Table.Tr>
    ))
  }, [rows])

  return (
    <Table.ScrollContainer minWidth={500} mah="100%">
      <Table border={1}>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Герой</Table.Th>
            <Table.Th>Ранг</Table.Th>
            <Table.Th>
              <Stack align="center" gap={2}>
                Навык
                <FaStar color="var(--mantine-color-yellow-filled)" />
              </Stack>
            </Table.Th>
            <Table.Th>
              <Stack align="center" gap={2}>
                Навык
                <Flex>
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                </Flex>
              </Stack>
            </Table.Th>
            <Table.Th>
              <Stack align="center" gap={2}>
                Навык
                <Flex>
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                </Flex>
              </Stack>
            </Table.Th>
            <Table.Th>
              <Stack align="center" gap={2}>
                Навык
                <Flex>
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                  <FaStar color="var(--mantine-color-yellow-filled)" />
                </Flex>
              </Stack>
            </Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{tableRows}</Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
})

export default HTable
