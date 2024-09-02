import { FC, ReactNode, memo, useMemo } from 'react'
import { Divider, Table, TableData, Text, Title } from '@mantine/core'
import type { CalculateGoalCastleResponse } from 'kg-calculator-typings/api/Castle'
import { ParameterIcon } from 'entities/parameter'
import { ResourceIcon } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  goalCastleLevelData: CalculateGoalCastleResponse
  extremePowerGoalNode: ReactNode
}

const ResultsGoal: FC<Props> = memo(({ goalCastleLevelData, extremePowerGoalNode }) => {
  const goalCastleNeededResourcesTableData = useMemo<TableData>(
    () => ({
      head: ['Ресурс', 'Требуется всего', 'Нехватает'],
      body: [
        [
          <Flexbox justifyContent="center">
            <ResourceIcon resourceType="gold" />
          </Flexbox>,
          goalCastleLevelData?.requiredResources.gold?.toLocaleString('ru'),
          goalCastleLevelData?.neededResources.gold > 0
            ? goalCastleLevelData?.neededResources.gold?.toLocaleString('ru')
            : 0,
        ],
        [
          <Flexbox justifyContent="center">
            <ResourceIcon resourceType="stone" />
          </Flexbox>,
          goalCastleLevelData?.requiredResources.castle?.stone?.toLocaleString('ru'),
          goalCastleLevelData?.neededResources.castle?.stone > 0
            ? goalCastleLevelData?.neededResources.castle?.stone?.toLocaleString('ru')
            : 0,
        ],
        [
          <Flexbox justifyContent="center">
            <ResourceIcon resourceType="wood" />
          </Flexbox>,
          goalCastleLevelData?.requiredResources.castle?.wood?.toLocaleString('ru'),
          goalCastleLevelData?.neededResources.castle?.wood > 0
            ? goalCastleLevelData?.neededResources.castle?.wood?.toLocaleString('ru')
            : 0,
        ],
        [
          <Flexbox justifyContent="center">
            <ResourceIcon resourceType="steel" />
          </Flexbox>,
          goalCastleLevelData?.requiredResources.castle?.steel?.toLocaleString('ru'),
          goalCastleLevelData?.neededResources.castle?.steel > 0
            ? goalCastleLevelData?.neededResources.castle?.steel?.toLocaleString('ru')
            : 0,
        ],
      ],
    }),
    [goalCastleLevelData?.neededResources, goalCastleLevelData?.requiredResources],
  )

  return (
    <>
      <Divider size="md" />
      <Flexbox flexDirection="column" gap={8}>
        <Flexbox flexDirection="column" gap={8}>
          <Title order={4}>Замок, который я хочу</Title>
          <Flexbox alignItems="center" gap={8}>
            <ParameterIcon parameterType="castleLevel" />
            <Text fw={700} size="lg">
              {goalCastleLevelData?.parameters.castle.level} &#8594; {goalCastleLevelData?.goalLevel}
            </Text>
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection="column" gap={8}>
          <Title order={5}>Необходимые ресурсы</Title>
          <Table className={css.table} data={goalCastleNeededResourcesTableData} withColumnBorders withTableBorder />
        </Flexbox>
        <Divider />
        {extremePowerGoalNode}
      </Flexbox>
    </>
  )
})

export default ResultsGoal
