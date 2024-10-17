import { Flex, Stack, Text } from '@mantine/core'
import { type CellContext, createColumnHelper } from '@tanstack/react-table'
import { FaStar } from 'react-icons/fa'
import { Bars, HeroHelper, HeroIcon, HeroSkillIcon, HeroSkillValue, PLACE_LABELS, Stars } from 'entities/hero'
import { PlacesIcon, RankIcon } from 'shared/assets/icons'
import type { TableRow } from '../../model/types'


const columnHelper = createColumnHelper<TableRow>()

const getWithUpgrades = (props: CellContext<TableRow, any>): boolean =>
  (props.table.options.meta as Record<string, any>)?.withUpgrades
const getWithAfterUpgrades = (props: CellContext<TableRow, any>): boolean =>
  (props.table.options.meta as Record<string, any>)?.withAfterUpgrades

const columns = [
  columnHelper.accessor((row) => row.common.name, {
    id: 'name',
    cell: (props) => {
      const withUpgrades = getWithUpgrades(props)
      const withAfterUpgrades = getWithAfterUpgrades(props)
      const data = props.row.original
      const disabled = withUpgrades
        ? withAfterUpgrades
          ? data.params.cards + data.params.distributionCards === 0
          : data.params.cards === 0
        : false
      return (
        <Flex gap="sm" align="center">
          <HeroIcon heroId={data.id} element={data.common.element} small disabled={disabled} />
          <Flex direction="column" justify="center">
            <Text>{data.common.name}</Text>
            {data.common.season !== undefined && (
              <Text size="xs" fw={700}>
                Сезон {data.common.season}
              </Text>
            )}
          </Flex>
        </Flex>
      )
    },
    header: 'Герой',
  }),
  columnHelper.accessor((row) => row.common.rank, {
    id: 'rank',
    header: 'Ранг',
    size: 70,
    filterFn: (row, columnId, filterValue: string[]) => {
      const value = row.getValue(columnId) as string
      return filterValue.includes(value)
    },
    cell: (props) => (
      <Flex justify="center">
        <RankIcon rank={props.getValue()} />
      </Flex>
    ),
  }),
  columnHelper.accessor((row) => row.skills.skill1, {
    id: 'skill1',
    header: () => (
      <Stack align="center" gap={2}>
        Навык
        <FaStar color="var(--mantine-color-yellow-filled)" />
      </Stack>
    ),
    cell: (props) => {
      const withUpgrades = getWithUpgrades(props)
      const withAfterUpgrades = getWithAfterUpgrades(props)
      const data = props.row.original
      const disabled = withUpgrades
        ? withAfterUpgrades
          ? data.upgradeParams.after.upgradeStars < 1
          : data.upgradeParams.before.upgradeStars < 1
        : false

      return (
        props.row.original.skills.skill1 && (
          <Stack align="center" gap={4}>
            <HeroSkillIcon skillId={props.row.original.skills.skill1.id} disabled={disabled} />
            <HeroSkillValue
              skillId={props.row.original.skills.skill1.id}
              value={props.row.original.skills.skill1.value}
            />
          </Stack>
        )
      )
    },
  }),
  columnHelper.accessor((row) => row.skills.skill2, {
    id: 'skill2',
    header: () => (
      <Stack align="center" gap={2}>
        Навык
        <Flex>
          <FaStar color="var(--mantine-color-yellow-filled)" />
          <FaStar color="var(--mantine-color-yellow-filled)" />
        </Flex>
      </Stack>
    ),
    cell: (props) => {
      const withUpgrades = getWithUpgrades(props)
      const withAfterUpgrades = getWithAfterUpgrades(props)
      const data = props.row.original
      const disabled = withUpgrades
        ? withAfterUpgrades
          ? data.upgradeParams.after.upgradeStars < 2
          : data.upgradeParams.before.upgradeStars < 2
        : false
      return (
        props.row.original.skills.skill2 && (
          <Stack align="center" gap={4}>
            <HeroSkillIcon skillId={props.row.original.skills.skill2.id} disabled={disabled} />
            <HeroSkillValue
              skillId={props.row.original.skills.skill2.id}
              value={props.row.original.skills.skill2.value}
            />
          </Stack>
        )
      )
    },
  }),
  columnHelper.accessor((row) => row.skills.skill3, {
    id: 'skill3',
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
    cell: (props) => {
      const withUpgrades = getWithUpgrades(props)
      const withAfterUpgrades = getWithAfterUpgrades(props)
      const data = props.row.original
      const disabled = withUpgrades
        ? withAfterUpgrades
          ? data.upgradeParams.after.upgradeStars < (data.common.rank === 'r' ? 3 : 4)
          : data.upgradeParams.before.upgradeStars < (data.common.rank === 'r' ? 3 : 4)
        : false
      return (
        props.row.original.skills.skill3 && (
          <Stack align="center" gap={4}>
            <HeroSkillIcon skillId={props.row.original.skills.skill3.id} disabled={disabled} />
            <HeroSkillValue
              skillId={props.row.original.skills.skill3.id}
              value={props.row.original.skills.skill3.value}
            />
          </Stack>
        )
      )
    },
  }),
  columnHelper.accessor((row) => row.skills.skill4, {
    id: 'skill4',
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
    cell: (props) => {
      const withUpgrades = getWithUpgrades(props)
      const withAfterUpgrades = getWithAfterUpgrades(props)
      const data = props.row.original
      const disabled = withUpgrades
        ? withAfterUpgrades
          ? data.upgradeParams.after.upgradeStars < 5
          : data.upgradeParams.before.upgradeStars < 5
        : false
      return (
        props.row.original.skills.skill4 && (
          <Stack align="center" gap={4}>
            <HeroSkillIcon skillId={props.row.original.skills.skill4.id} disabled={disabled} />
            <HeroSkillValue
              skillId={props.row.original.skills.skill4.id}
              value={props.row.original.skills.skill4.value}
            />
          </Stack>
        )
      )
    },
  }),
  columnHelper.accessor((row) => row.upgradeParams, {
    id: 'upgradeParams',
    header: 'Моя прокачка героя',
    cell: (props) => {
      const withUpgrades = getWithUpgrades(props)
      const withAfterUpgrades = getWithAfterUpgrades(props)
      const rowData = props.row.original
      const data = withUpgrades && withAfterUpgrades ? rowData.upgradeParams.after : rowData.upgradeParams.before
      return (
        <Flex justify="center">
          <Stack w={100} gap={4}>
            <Stars
              starsCount={HeroHelper.getMaxStars(rowData.common.rank)}
              oldValue={rowData.upgradeParams.before.upgradeStars}
              newValue={data.upgradeStars}
            />
            <Bars
              barsCount={HeroHelper.getMaxBars(rowData.common.rank, data.upgradeStars)}
              oldValue={
                data.upgradeBars < rowData.upgradeParams.before.upgradeBars
                  ? 0
                  : rowData.upgradeParams.before.upgradeBars
              }
              newValue={data.upgradeBars}
            />

            <Stack gap={0}>
              {data.cardsForBar > 0 && <Text size="sm">До полосы: {data.cardsForBar}</Text>}
              {data.cardsForStar > 0 && <Text size="sm">До звезды: {data.cardsForStar}</Text>}
              {withAfterUpgrades &&
                rowData.upgradeParams.before.upgradeStars < HeroHelper.getMaxStars(rowData.common.rank) && (
                  <Text size="sm">Осталось: {data.leftCards}</Text>
                )}
            </Stack>
          </Stack>
        </Flex>
      )
    },
  }),
  columnHelper.accessor((row) => row.params, {
    id: 'params',
    header: 'Мои карты',
    minSize: 175,
    cell: (props) => (
      <Flex direction="column" align="center">
        <Text size="sm">Карт в наличии: {props.row.original.upgradeParams.before.leftCards}</Text>
        <Text size="sm">Карт самовыбора: {props.row.original.params.distributionCards}</Text>
        <Text size="sm">
          Всего карт: {props.row.original.upgradeParams.before.leftCards + props.row.original.params.distributionCards}
        </Text>
      </Flex>
    ),
  }),
  columnHelper.accessor((row) => row.common.placesIds, {
    id: 'places',
    header: 'Где можно получить',
    minSize: 200,
    cell: (props) => (
      <Flex direction="column" align="flex-start">
        {props.getValue().map((placeId) => (
          <Flex>
            <PlacesIcon placeId={placeId} />
            {(placeId !== 4 || props.row.original.common.season === undefined) && (
              <Text truncate>{PLACE_LABELS[placeId]}</Text>
            )}
            {placeId === 4 && props.row.original.common.season !== undefined && (
              <Text truncate>
                {PLACE_LABELS[placeId]} (сезон {props.row.original.common.season})
              </Text>
            )}
          </Flex>
        ))}
      </Flex>
    ),
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number[]
      return value.some((it) => filterValue.includes(it))
    },
  }),

  columnHelper.accessor((row) => row.common.element, {
    id: 'element',
    filterFn: 'arrIncludesSome',
  }),
  columnHelper.accessor((row) => row.common.season, {
    id: 'season',
    sortingFn: 'basic',
    sortUndefined: 'last',
  }),
  columnHelper.accessor((row) => row.params.stars, {
    id: 'stars',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return filterValue.includes(value)
    },
  }),
  columnHelper.accessor((row) => row.params.bars, {
    id: 'bars',
    sortDescFirst: true,
    sortingFn: 'basic',
  }),
  columnHelper.accessor((row) => row.params.cards, {
    id: 'cards',
    sortDescFirst: true,
    sortingFn: 'basic',
  }),
  columnHelper.accessor((row) => row.upgradeParams.cardsForBar, {
    id: 'upgradeBars',
    sortDescFirst: true,
    sortingFn: 'basic',
  }),
  columnHelper.accessor((row) => row.upgradeParams.cardsForStar, {
    id: 'upgradeStars',
    sortDescFirst: true,
    sortingFn: 'basic',
  }),

  columnHelper.accessor((row) => row.skillsData.speed, {
    id: 'skill_speed',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.power, {
    id: 'skill_power',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.heal, {
    id: 'skill_heal',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.regeneration, {
    id: 'skill_regeneration',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.actionPoints, {
    id: 'skill_actionPoints',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.weight, {
    id: 'skill_weight',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.offlineGold, {
    id: 'skill_offlineGold',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
  columnHelper.accessor((row) => row.skillsData.collectGold, {
    id: 'skill_collectGold',
    sortDescFirst: true,
    sortingFn: 'basic',
    filterFn: (row, columnId, filterValue) => {
      const value = row.getValue(columnId) as number
      return value > filterValue
    },
  }),
]

export default columns
