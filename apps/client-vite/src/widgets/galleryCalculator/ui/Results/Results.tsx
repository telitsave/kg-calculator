import { FC, memo } from 'react'
import { Divider, Flex, Title } from '@mantine/core'
import type {
  CalculateGalleryResponse,
  CalculateMightiestKingdomResponse,
  CalculateUltimatePowerResponse,
} from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { MightiestKingdomStatistics } from '@entities/mightiestKingdom'
import { GalleryInfo } from '@entities/parameter'
import { ResourceCount } from '@entities/resource'
import { UltimatePowerStatistics } from '@entities/ultimatePower'


interface Props {
  className?: string
  data: CalculateGalleryResponse
  ultimatePowerData?: CalculateUltimatePowerResponse
  mightiestKingdomData?: CalculateMightiestKingdomResponse
}

const Results: FC<Props> = memo(
  ({
    className,
    data: { sourceResources, spentResources, leftResources, sourceParameters, parameters },
    ultimatePowerData,
    mightiestKingdomData,
  }) => (
    <Flex className={className} direction="column" gap={16}>
      <Flex direction="column" gap={8}>
        <Title order={4}>
          <FormattedMessage defaultMessage="Результаты" />
        </Title>

        <Flex direction="column" gap={8}>
          <GalleryInfo oldParams={sourceParameters} newParams={parameters} />
        </Flex>

        <Divider size="xs" />

        <Title order={5}>
          <FormattedMessage defaultMessage="Потраченные ресурсы" />
        </Title>

        <Flex direction="column" gap={8}>
          <ResourceCount
            resourceType="galleryResources_shards"
            sourceCount={sourceResources.galleryResources_shards}
            count={spentResources.galleryResources_shards}
            leftCount={leftResources.galleryResources_shards}
          />
        </Flex>
      </Flex>

      <Divider />

      <MightiestKingdomStatistics data={mightiestKingdomData} />

      <Divider />

      <UltimatePowerStatistics data={ultimatePowerData} />
    </Flex>
  ),
)

export default Results
