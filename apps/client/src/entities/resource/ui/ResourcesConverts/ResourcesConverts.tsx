import React, { FC, memo } from 'react'
import { Text } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import { ResourceType } from '../../model/types'
import ResourceIcon from '../ResourceIcon'

interface Props {
  className?: string
  sourceResourceType: ResourceType
  targetResourceType: ResourceType
  sourceValue: number | undefined
  targetValue: number | undefined
}

const ResourcesConverts: FC<Props> = memo(
  ({ className, sourceResourceType, targetResourceType, sourceValue, targetValue }) => (
    <Flexbox className={className} justifyContent="space-between" gap={8} alignItems="center">
      <ResourceIcon resourceType={sourceResourceType} />
      <Text>{sourceValue?.toLocaleString('ru')}</Text>
      &#8594;
      <Text>{targetValue?.toLocaleString('ru')}</Text>
      <ResourceIcon resourceType={targetResourceType} />
    </Flexbox>
  ),
)

export default ResourcesConverts
