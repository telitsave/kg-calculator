import { FC, memo } from 'react'
import { Divider, Flex, Title } from '@mantine/core'
import type {
  CalculateMightiestKingdomResponse,
  CalculatePossibleDragonResponse,
  CalculateUltimatePowerResponse,
} from 'kg-calculator-typings'
import { useSetting } from 'entities/calculationSettings'
import { MightiestKingdomStatistics } from 'entities/mightiestKingdom'
import { ParameterInfo } from 'entities/parameter'
import { ResourceCount, ResourcesConverts } from 'entities/resource'
import { UltimatePowerStatistics } from 'entities/ultimatePower'
import css from './styles.module.sass'


interface Props {
  data: CalculatePossibleDragonResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
  mightiestKingdomData?: CalculateMightiestKingdomResponse
}

const Results: FC<Props> = memo(
  ({
    data: { leftResources, spentResources, spentBoxesResources, sourceResources, oldParameters, newParameters },
    ultimatePowerData,
    mightiestKingdomData,
  }) => {
    const [canUseBoxes] = useSetting('canUseDragonBoxes')
    return (
      <Flex direction="column" gap={16}>
        <Title order={4}>Результаты</Title>

        <Flex align="center" gap={24} wrap="wrap" justify="center">
          <ParameterInfo
            parameterType="dragonParams_green"
            value={newParameters.dragonParams_green || 0}
            oldValue={oldParameters.dragonParams_green}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="dragonParams_blue"
            value={newParameters.dragonParams_blue || 0}
            oldValue={oldParameters.dragonParams_blue}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="dragonParams_purple"
            value={newParameters.dragonParams_purple || 0}
            oldValue={oldParameters.dragonParams_purple}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="dragonParams_gold"
            value={newParameters.dragonParams_gold || 0}
            oldValue={oldParameters.dragonParams_gold}
            viewMode="bigIcon"
          />
          <ParameterInfo
            parameterType="dragonParams_level"
            value={(newParameters.dragonParams_gold || 0) + 1}
            oldValue={(newParameters.dragonParams_gold || 0) + 1}
            viewMode="bigIcon"
          />
        </Flex>

        <Flex direction="column" gap={4}>
          <Title order={5}>Потраченные ресурсы</Title>
          <Flex direction="column" gap={8}>
            <ResourceCount
              resourceType="dragonResources_green"
              sourceCount={sourceResources.dragonResources_green}
              count={spentResources.dragonResources_green}
              leftCount={leftResources.dragonResources_green}
            />
            <ResourceCount
              resourceType="dragonResources_blue"
              sourceCount={sourceResources.dragonResources_blue}
              count={spentResources.dragonResources_blue}
              leftCount={leftResources.dragonResources_blue}
            />
            <ResourceCount
              resourceType="dragonResources_purple"
              sourceCount={sourceResources.dragonResources_purple}
              count={spentResources.dragonResources_purple}
              leftCount={leftResources.dragonResources_purple}
            />
            <ResourceCount
              resourceType="dragonResources_gold"
              sourceCount={sourceResources.dragonResources_gold}
              count={spentResources.dragonResources_gold}
              leftCount={leftResources.dragonResources_gold}
            />
            <ResourceCount
              resourceType="dragonResources_boxes"
              sourceCount={sourceResources.dragonResources_boxes}
              count={spentResources.dragonResources_boxes}
              leftCount={leftResources.dragonResources_boxes}
            />
          </Flex>
        </Flex>

        <Divider size="xs" />

        {canUseBoxes && (
          <Flex className={css.converts} direction="column" gap={4}>
            <Title order={5}>Конвертация коробок в руны</Title>
            <ResourcesConverts
              sourceResourceType="dragonResources_boxes"
              targetResourceType="dragonResources_green"
              sourceValue={spentBoxesResources.dragonResources_green}
              targetValue={(spentBoxesResources?.dragonResources_green || 0) * 200}
            />
            <ResourcesConverts
              sourceResourceType="dragonResources_boxes"
              targetResourceType="dragonResources_blue"
              sourceValue={spentBoxesResources.dragonResources_blue}
              targetValue={(spentBoxesResources.dragonResources_blue || 0) * 20}
            />
            <ResourcesConverts
              sourceResourceType="dragonResources_boxes"
              targetResourceType="dragonResources_purple"
              sourceValue={spentBoxesResources.dragonResources_purple}
              targetValue={(spentBoxesResources.dragonResources_purple || 0) * 2}
            />
            <ResourcesConverts
              sourceResourceType="dragonResources_boxes"
              targetResourceType="dragonResources_gold"
              sourceValue={spentBoxesResources.dragonResources_gold}
              targetValue={spentBoxesResources.dragonResources_gold}
            />
          </Flex>
        )}

        <Divider />

        <MightiestKingdomStatistics data={mightiestKingdomData} />

        <Divider />

        <UltimatePowerStatistics data={ultimatePowerData} />
      </Flex>
    )
  },
)

export default Results
