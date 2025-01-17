import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import type { ResourceType } from 'kg-calculator-typings'
import { FormattedNumber } from 'react-intl'
import TypeHelper from '@shared/helpers/typeHelper'
import Flexbox from '@shared/ui/Flexbox'
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
      <Text>{(TypeHelper.isNumber(sourceValue) && <FormattedNumber value={sourceValue} />) || '-'}</Text>
      &#8594;
      <Text>{(TypeHelper.isNumber(targetValue) && <FormattedNumber value={targetValue} />) || '-'}</Text>
      <ResourceIcon resourceType={targetResourceType} />
    </Flexbox>
  ),
)

export default ResourcesConverts
