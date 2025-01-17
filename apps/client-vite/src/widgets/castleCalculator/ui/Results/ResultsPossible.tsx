import { FC, memo } from 'react'
import { Divider, Flex, Title } from '@mantine/core'
import type { CalculatePossibleCastleResponse, CalculateUltimatePowerResponse } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { ParameterInfo } from '@entities/parameter'
import { ResourceCount, ResourcesConverts } from '@entities/resource'
import { UltimatePowerStatistics } from '@entities/ultimatePower'
import css from './styles.module.sass'


interface Props {
  data: CalculatePossibleCastleResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
}

const ResultsPossible: FC<Props> = memo(
  ({
    data: {
      oldParameters,
      parameters,
      sourceResources,
      leftResources,
      spentResources,
      convertedSource,
      convertedTarget,
      spentBoxesResources,
    },
    ultimatePowerData,
  }) => (
    <>
      <Divider size="md" />
      <Flex direction="column" gap={12}>
        <Flex direction="column" gap={8}>
          <Title order={4}>
            <FormattedMessage defaultMessage="Результаты" />
          </Title>
          <Flex align="center" gap={8}>
            <ParameterInfo
              parameterType="castleParams_level"
              value={parameters.castleParams_level || 0}
              oldValue={oldParameters.castleParams_level}
              viewMode="bigIcon"
            />
          </Flex>
        </Flex>
        <Flex direction="column" gap={8}>
          <Title order={5}>
            <FormattedMessage defaultMessage="Потраченные ресурсы" />
          </Title>

          <ResourceCount
            resourceType="gold"
            sourceCount={sourceResources.gold}
            count={spentResources.gold}
            leftCount={leftResources.gold}
          />
          <ResourceCount
            resourceType="castleResources_stone"
            sourceCount={sourceResources.castleResources_stone}
            count={spentResources.castleResources_stone}
            leftCount={leftResources.castleResources_stone}
          />
          <ResourceCount
            resourceType="castleResources_wood"
            sourceCount={sourceResources.castleResources_wood}
            count={spentResources.castleResources_wood}
            leftCount={leftResources.castleResources_wood}
          />
          <ResourceCount
            resourceType="castleResources_steel"
            sourceCount={sourceResources.castleResources_steel}
            count={spentResources.castleResources_steel}
            leftCount={leftResources.castleResources_steel}
          />
          <ResourceCount
            resourceType="castleResources_boxes"
            sourceCount={sourceResources.castleResources_boxes}
            count={spentResources.castleResources_boxes}
            leftCount={leftResources.castleResources_boxes}
          />
        </Flex>
        <Flex className={css.convertBlock} direction="column" gap={8}>
          <Title order={5}>
            <FormattedMessage defaultMessage="Конвертирование ресурсов" />
          </Title>
          <ResourcesConverts
            sourceResourceType="castleResources_stone"
            targetResourceType="castleResources_wood"
            sourceValue={convertedSource.castleResources_stone}
            targetValue={convertedTarget.castleResources_wood}
          />
          <ResourcesConverts
            sourceResourceType="castleResources_wood"
            targetResourceType="castleResources_steel"
            sourceValue={convertedSource.castleResources_wood}
            targetValue={convertedTarget.castleResources_steel}
          />
        </Flex>
        <Flex className={css.spentBoxesBlock} direction="column" gap={8}>
          <Title order={5}>
            <FormattedMessage defaultMessage="Использование коробок" />
          </Title>
          <ResourcesConverts
            sourceResourceType="castleResources_boxes"
            targetResourceType="castleResources_stone"
            sourceValue={spentBoxesResources.castleResources_stone}
            targetValue={(spentBoxesResources.castleResources_stone || 0) * 20}
          />
          <ResourcesConverts
            sourceResourceType="castleResources_boxes"
            targetResourceType="castleResources_wood"
            sourceValue={spentBoxesResources.castleResources_wood}
            targetValue={(spentBoxesResources.castleResources_wood || 0) * 4}
          />
          <ResourcesConverts
            sourceResourceType="castleResources_boxes"
            targetResourceType="castleResources_steel"
            sourceValue={spentBoxesResources.castleResources_steel}
            targetValue={spentBoxesResources.castleResources_steel || 0}
          />
        </Flex>

        <Divider />

        <UltimatePowerStatistics data={ultimatePowerData} />
      </Flex>
    </>
  ),
)

export default ResultsPossible
