import React, { FC, ReactNode, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import ParameterInfo from 'entities/parameter/ui/ParameterInfo'
import { ResourceCount, ResourcesConverts } from 'entities/resource'
import { CastleResources, Parameters, Resources } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  oldParameters: Parameters | undefined
  parameters: Parameters | undefined
  sourceResources: Resources | undefined
  leftResources: Resources | undefined
  spentResources: Resources | undefined
  convertedSource: CastleResources | undefined
  convertedTarget: CastleResources | undefined
  spentBoxes: CastleResources | undefined
  extremePowerPossibleNode: ReactNode
}

const ResultsPossible: FC<Props> = memo(
  ({
    oldParameters,
    parameters,
    sourceResources,
    leftResources,
    spentResources,
    convertedSource,
    convertedTarget,
    spentBoxes,
    extremePowerPossibleNode,
  }) => (
    <>
      <Divider size="md" />
      <Flexbox flexDirection="column" gap={12}>
        <Flexbox flexDirection="column" gap={8}>
          <Title order={4}>Результаты</Title>
          <Flexbox alignItems="center" gap={8}>
            <ParameterInfo
              parameterType="castleLevel"
              value={parameters?.castle.level || 0}
              oldValue={oldParameters?.castle.level}
              viewMode="bigIcon"
            />
          </Flexbox>
        </Flexbox>
        <Flexbox flexDirection="column" gap={8}>
          <Title order={5}>Потраченные ресурсы</Title>

          <ResourceCount
            resourceType="gold"
            sourceCount={sourceResources?.gold}
            count={spentResources?.gold}
            leftCount={leftResources?.gold}
          />
          <ResourceCount
            resourceType="stone"
            sourceCount={sourceResources?.castle.stone}
            count={spentResources?.castle.stone}
            leftCount={leftResources?.castle.stone}
          />
          <ResourceCount
            resourceType="wood"
            sourceCount={sourceResources?.castle.wood}
            count={spentResources?.castle.wood}
            leftCount={leftResources?.castle.wood}
          />
          <ResourceCount
            resourceType="steel"
            sourceCount={sourceResources?.castle.steel}
            count={spentResources?.castle.steel}
            leftCount={leftResources?.castle.steel}
          />
          <ResourceCount
            resourceType="customConstructionItem"
            sourceCount={sourceResources?.castle.boxes}
            count={spentResources?.castle.boxes}
            leftCount={leftResources?.castle.boxes}
          />
        </Flexbox>
        <Flexbox className={css.convertBlock} flexDirection="column" gap={8}>
          <Title order={5}>Конвертирование ресурсов</Title>
          <ResourcesConverts
            sourceResourceType="stone"
            targetResourceType="wood"
            sourceValue={convertedSource?.stone}
            targetValue={convertedTarget?.wood}
          />
          <ResourcesConverts
            sourceResourceType="wood"
            targetResourceType="steel"
            sourceValue={convertedSource?.wood}
            targetValue={convertedTarget?.steel}
          />
        </Flexbox>
        <Flexbox className={css.spentBoxesBlock} flexDirection="column" gap={8}>
          <Title order={5}>Использование коробок</Title>
          <ResourcesConverts
            sourceResourceType="customConstructionItem"
            targetResourceType="stone"
            sourceValue={spentBoxes?.stone}
            targetValue={(spentBoxes?.stone || 0) * 20}
          />
          <ResourcesConverts
            sourceResourceType="customConstructionItem"
            targetResourceType="wood"
            sourceValue={spentBoxes?.wood}
            targetValue={(spentBoxes?.wood || 0) * 20}
          />
          <ResourcesConverts
            sourceResourceType="customConstructionItem"
            targetResourceType="steel"
            sourceValue={spentBoxes?.steel}
            targetValue={(spentBoxes?.steel || 0) * 20}
          />
        </Flexbox>
        <Divider />
        {extremePowerPossibleNode}
      </Flexbox>
    </>
  ),
)

export default ResultsPossible
