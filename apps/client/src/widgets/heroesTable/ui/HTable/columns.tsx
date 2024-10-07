import { Flex, Stack, Text } from '@mantine/core'
import { type Row, createColumnHelper } from '@tanstack/react-table'
import type { HeroTableData } from 'kg-calculator-typings'
import { FaStar } from 'react-icons/fa'
import { Bars, HeroHelper, HeroIcon, HeroSkillIcon, HeroSkillValue, Stars } from 'entities/hero'
import skillsMap from 'entities/hero/model/skillsMap'


const columnHelper = createColumnHelper<HeroTableData>()

const columns = [
  columnHelper.accessor('name', {
    cell: (props) => (
      <Flex gap="sm" align="center">
        <HeroIcon heroId={props.row.original.heroId} element={props.row.original.element} small />
        <Text>{props.row.original.name}</Text>
      </Flex>
    ),
    header: 'Герой',
  }),
  columnHelper.accessor('rank', {
    header: 'Ранг',
    cell: (cell) => cell.getValue(),
  }),
  columnHelper.accessor('element', {
    filterFn: 'arrIncludesSome',
  }),
  columnHelper.accessor('skill1', {
    header: () => (
      <Stack align="center" gap={2}>
        Навык
        <FaStar color="var(--mantine-color-yellow-filled)" />
      </Stack>
    ),
    cell: (props) =>
      props.row.original.skill1 && (
        <Stack align="center" gap={4}>
          <HeroSkillIcon skillId={props.row.original.skill1.id} />
          <HeroSkillValue skillId={props.row.original.skill1.id} value={props.row.original.skill1.value} />
        </Stack>
      ),
  }),
  columnHelper.accessor('skill2', {
    header: () => (
      <Stack align="center" gap={2}>
        Навык
        <Flex>
          <FaStar color="var(--mantine-color-yellow-filled)" />
          <FaStar color="var(--mantine-color-yellow-filled)" />
        </Flex>
      </Stack>
    ),
    cell: (props) =>
      props.row.original.skill2 && (
        <Stack align="center" gap={4}>
          <HeroSkillIcon skillId={props.row.original.skill2.id} />
          <HeroSkillValue skillId={props.row.original.skill2.id} value={props.row.original.skill2.value} />
        </Stack>
      ),
  }),
  columnHelper.accessor('skill3', {
    header: () => (
      <Stack align="center" gap={2}>
        Навык
        <Flex>
          <FaStar color="var(--mantine-color-yellow-filled)" />
          <FaStar color="var(--mantine-color-yellow-filled)" />
          <FaStar color="var(--mantine-color-yellow-filled)" />
          <FaStar color="var(--mantine-color-yellow-filled)" />
        </Flex>
      </Stack>
    ),
    cell: (props) =>
      props.row.original.skill3 && (
        <Stack align="center" gap={4}>
          <HeroSkillIcon skillId={props.row.original.skill3.id} />
          <HeroSkillValue skillId={props.row.original.skill3.id} value={props.row.original.skill3.value} />
        </Stack>
      ),
  }),
  columnHelper.accessor('skill4', {
    header: () => (
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
    ),
    cell: (props) =>
      props.row.original.skill4 && (
        <Stack align="center" gap={4}>
          <HeroSkillIcon skillId={props.row.original.skill4.id} />
          <HeroSkillValue skillId={props.row.original.skill4.id} value={props.row.original.skill4.value} />
        </Stack>
      ),
  }),
  columnHelper.accessor('stars', {
    header: 'Моя прокачка героя',
    cell: (props) => (
      <Flex justify="center">
        <Stack w={100} gap={4}>
          <Stars starsCount={HeroHelper.getMaxStars(props.row.original.rank)} oldValue={props.row.original.stars} />
          <Bars
            barsCount={HeroHelper.getMaxBars(props.row.original.rank, props.row.original.stars)}
            oldValue={props.row.original.bars}
          />
        </Stack>
      </Flex>
    ),
  }),
  columnHelper.accessor('cards', {
    header: 'Мои карты',
    cell: (props) => (
      <Flex direction="column" align="center">
        <Text size="sm">Карт в наличии: {props.row.original.cards}</Text>
        <Text size="sm">Карт самовыбора: {props.row.original.distributionCards}</Text>
        <Text size="sm">Всего карт: {props.row.original.cards + props.row.original.distributionCards}</Text>
        <Text size="sm">Карт до звезды: {props.row.original.cards + props.row.original.distributionCards}</Text>
        <Text size="sm">Карт до полоски: {props.row.original.cards + props.row.original.distributionCards}</Text>
        <Text size="sm">Останется карт: {props.row.original.cards + props.row.original.distributionCards}</Text>
      </Flex>
    ),
  }),
  {
    id: 'skill_speed',
    accessorKey: 'skill_speed',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const speedA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.speed)
      const speedB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.speed)

      return speedA - speedB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_power',
    accessorKey: 'skill_power',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const powerA =
        HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.power) +
        HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.powerFire) +
        HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.powerBow) +
        HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.powerPoison)
      const powerB =
        HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.power) +
        HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.powerFire) +
        HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.powerBow) +
        HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.powerPoison)

      return powerA - powerB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_heal',
    accessorKey: 'skill_heal',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const healA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.heal)
      const healB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.heal)

      return healA - healB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_regeneration',
    accessorKey: 'skill_regeneration',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const regenA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.regeneration)
      const regenB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.regeneration)

      return regenA - regenB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_actionPoints',
    accessorKey: 'skill_actionPoints',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const valueA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.actionPoints)
      const valueB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.actionPoints)

      return valueA - valueB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_weight',
    accessorKey: 'skill_weight',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const valueA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.weight)
      const valueB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.weight)

      return valueA - valueB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_offlineGold',
    accessorKey: 'skill_offlineGold',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const valueA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.offlineGold)
      const valueB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.offlineGold)

      return valueA - valueB
    },
    sortDescFirst: true,
  },
  {
    id: 'skill_collectGold',
    accessorKey: 'skill_collectGold',
    sortingFn: (rowA: Row<HeroTableData>, rowB: Row<HeroTableData>) => {
      const valueA = HeroHelper.getSkillsTotalValue(rowA.original, skillsMap.collectGold)
      const valueB = HeroHelper.getSkillsTotalValue(rowB.original, skillsMap.collectGold)

      return valueA - valueB
    },
    sortDescFirst: true,
  },
]

export default columns
