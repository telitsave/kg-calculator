import { FC, memo } from 'react'
import { Divider, Flex, Title } from '@mantine/core'
import type {
  CalculateBlacksmithResponse,
  CalculateMightiestKingdomResponse,
  CalculateUltimatePowerResponse,
} from 'kg-calculator-typings'
import { MightiestKingdomStatistics } from 'entities/mightiestKingdom'
import { ParameterInfo } from 'entities/parameter'
import { ResourceCount } from 'entities/resource'
import { UltimatePowerStatistics } from 'entities/ultimatePower'


interface Props {
  className?: string
  data: CalculateBlacksmithResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
  mkData?: CalculateMightiestKingdomResponse
}

const Results: FC<Props> = memo(
  ({
    className,
    data: { sourceResources, spentResources, leftResources, sourceParameters, parameters },
    ultimatePowerData,
    mkData,
  }) => (
    <Flex className={className} direction="column" gap={16}>
      <Flex direction="column" gap={8}>
        <Title order={4}>Результаты</Title>

        <Flex direction="column" gap={8}>
          <ParameterInfo
            parameterType="blacksmithParams_level"
            value={parameters.blacksmithParams_level || 0}
            oldValue={sourceParameters.blacksmithParams_level}
            viewMode="bigIcon"
          />
        </Flex>

        <Divider size="xs" />

        <Title order={5}>Потраченные ресурсы</Title>

        <Flex direction="column" gap={8}>
          <ResourceCount
            resourceType="blacksmithResources_hammers"
            sourceCount={sourceResources.blacksmithResources_hammers}
            count={spentResources.blacksmithResources_hammers}
            leftCount={leftResources.blacksmithResources_hammers}
          />
        </Flex>
      </Flex>

      <Divider />

      <MightiestKingdomStatistics data={mkData} />

      <Divider />

      <UltimatePowerStatistics data={ultimatePowerData} />
    </Flex>
  ),
)

export default Results
