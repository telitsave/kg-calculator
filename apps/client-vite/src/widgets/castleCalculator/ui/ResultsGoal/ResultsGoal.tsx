import { FC, memo, useMemo } from 'react'
import { Divider, Flex, NumberFormatter, Table, TableData, Text, Title } from '@mantine/core'
import type { CalculateGoalCastleResponse, CalculateUltimatePowerResponse } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { ParameterIcon } from '@entities/parameter'
import { ResourceIcon } from '@entities/resource'
import { UltimatePowerStatistics } from '@entities/ultimatePower'
import css from './styles.module.sass'


interface Props {
  data: CalculateGoalCastleResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
}

const ResultsGoal: FC<Props> = memo(
  ({ data: { requiredResources, neededResources, goalLevel, parameters }, ultimatePowerData }) => {
    const goalCastleNeededResourcesTableData = useMemo<TableData>(
      () => ({
        head: [
          <FormattedMessage defaultMessage="Ресурс" />,
          <FormattedMessage defaultMessage="Требуется всего" />,
          <FormattedMessage defaultMessage="Нехватает" />,
        ],
        body: [
          [
            <Flex justify="center">
              <ResourceIcon resourceType="gold" />
            </Flex>,
            <NumberFormatter value={requiredResources.gold} thousandSeparator=" " />,
            <NumberFormatter value={neededResources.gold} thousandSeparator=" " />,
          ],
          [
            <Flex justify="center">
              <ResourceIcon resourceType="castleResources_stone" />
            </Flex>,
            <NumberFormatter value={requiredResources.castleResources_stone} thousandSeparator=" " />,
            <NumberFormatter value={neededResources.castleResources_stone} thousandSeparator=" " />,
          ],
          [
            <Flex justify="center">
              <ResourceIcon resourceType="castleResources_wood" />
            </Flex>,
            <NumberFormatter value={requiredResources.castleResources_wood} thousandSeparator=" " />,
            <NumberFormatter value={neededResources.castleResources_wood} thousandSeparator=" " />,
          ],
          [
            <Flex justify="center">
              <ResourceIcon resourceType="castleResources_steel" />
            </Flex>,
            <NumberFormatter value={requiredResources.castleResources_steel} thousandSeparator=" " />,
            <NumberFormatter value={neededResources.castleResources_steel} thousandSeparator=" " />,
          ],
        ],
      }),
      [neededResources, requiredResources],
    )

    return (
      <>
        <Divider size="md" />
        <Flex direction="column" gap={8}>
          <Flex direction="column" gap={8}>
            <Title order={4}>
              <FormattedMessage defaultMessage="Замок, который я хочу" />
            </Title>
            <Flex align="center" gap={8}>
              <ParameterIcon parameterType="castleParams_level" />
              <Text fw={700} size="lg">
                {parameters.castleParams_level} &#8594; {goalLevel}
              </Text>
            </Flex>
          </Flex>
          <Flex direction="column" gap={8}>
            <Title order={5}>
              <FormattedMessage defaultMessage="Необходимые ресурсы" />
            </Title>
            <Table className={css.table} data={goalCastleNeededResourcesTableData} withColumnBorders withTableBorder />
          </Flex>

          <Divider />

          <UltimatePowerStatistics data={ultimatePowerData} />
        </Flex>
      </>
    )
  },
)

export default ResultsGoal
