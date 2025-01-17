import { Text } from '@mantine/core'
import { GalleryIcon } from '@shared/assets/icons'
import Flexbox from '@shared/ui/Flexbox'
import type { Parameters } from 'kg-calculator-typings'
import { FC, memo } from 'react'

interface Props {
  className?: string
  oldParams: Parameters
  newParams: Parameters
}

const GalleryInfo: FC<Props> = memo(({ className, oldParams, newParams }) => {
  return (
    <Flexbox className={className} flexDirection="column" gap={8} alignItems="flex-start">
      <GalleryIcon level={newParams.galleryParams_level || 1} step={newParams.galleryParams_step || 0} />
      {oldParams.galleryParams_level && oldParams.galleryParams_level !== newParams.galleryParams_level ? (
        <Flexbox gap={4}>
          <Text>{oldParams.galleryParams_level}</Text>
          <Text>&#8594;</Text>
          <Text c="green" fw={700}>
            {newParams.galleryParams_level}
          </Text>
        </Flexbox>
      ) : (
        <Text>{newParams.galleryParams_level}</Text>
      )}
      {oldParams.galleryParams_step && oldParams.galleryParams_step !== newParams.galleryParams_step ? (
        <Flexbox gap={4}>
          <Text>{oldParams.galleryParams_step}</Text>
          <Text>&#8594;</Text>
          <Text c="green" fw={700}>
            {newParams.galleryParams_step}
          </Text>
        </Flexbox>
      ) : (
        <Text>{newParams.galleryParams_step}</Text>
      )}
    </Flexbox>
  )
})

export default GalleryInfo
