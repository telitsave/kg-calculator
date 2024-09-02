import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import type { GalleryParameters } from 'kg-calculator-typings/api/Gallery'
import { GalleryIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  oldParams: GalleryParameters
  newParams: GalleryParameters
}

const GalleryInfo: FC<Props> = memo(({ className, oldParams, newParams }) => {
  return (
    <Flexbox className={className} flexDirection="column" gap={8} alignItems="flex-start">
      <GalleryIcon level={newParams.level} step={newParams.step} />
      {oldParams.level && oldParams.level !== newParams.level ? (
        <Flexbox gap={4}>
          <Text>{oldParams.level}</Text>
          <Text>&#8594;</Text>
          <Text c="green" fw={700}>
            {newParams.level}
          </Text>
        </Flexbox>
      ) : (
        <Text>{newParams.level}</Text>
      )}
      {oldParams.step && oldParams.step !== newParams.step ? (
        <Flexbox gap={4}>
          <Text>{oldParams.step}</Text>
          <Text>&#8594;</Text>
          <Text c="green" fw={700}>
            {newParams.step}
          </Text>
        </Flexbox>
      ) : (
        <Text>{newParams.step}</Text>
      )}
    </Flexbox>
  )
})

export default GalleryInfo
