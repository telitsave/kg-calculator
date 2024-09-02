import { FC, ReactNode, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import type { GalleryParameters } from 'kg-calculator-typings/api/Gallery'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { GalleryInfo } from 'entities/parameter'
import { ResourceCount } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
  sourceParameters: GalleryParameters
  parameters: GalleryParameters
  extremePowerNode: ReactNode
  mightiestKingdomNode: ReactNode
}

const Results: FC<Props> = memo(
  ({
    className,
    sourceResources,
    spentResources,
    leftResources,
    sourceParameters,
    parameters,
    extremePowerNode,
    mightiestKingdomNode,
  }) => (
    <Flexbox className={className} flexDirection="column" gap={16}>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>Результаты</Title>

        <Flexbox flexDirection="column" gap={8}>
          <GalleryInfo oldParams={sourceParameters} newParams={parameters} />
        </Flexbox>

        <Divider size="xs" />

        <Title order={5}>Потраченные ресурсы</Title>

        <Flexbox flexDirection="column" gap={8}>
          <ResourceCount
            resourceType="galleryShards"
            sourceCount={sourceResources.galleryShards}
            count={spentResources.galleryShards}
            leftCount={leftResources.galleryShards}
          />
        </Flexbox>
      </Flexbox>

      <Divider />

      {mightiestKingdomNode}

      <Divider />

      {extremePowerNode}
    </Flexbox>
  ),
)

export default Results
