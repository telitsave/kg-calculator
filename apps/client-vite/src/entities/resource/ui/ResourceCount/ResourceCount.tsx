import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import type { ResourceType } from 'kg-calculator-typings'
import { isNil } from 'lodash'
import { FormattedNumber } from 'react-intl'
import Flexbox from '@shared/ui/Flexbox'
import ResourceIcon from '../ResourceIcon'
import css from './styles.module.sass'


interface Props {
  resourceType: ResourceType
  count?: number
  sourceCount?: number
  leftCount?: number
}

const ResourceCount: FC<Props> = memo(({ resourceType, count, sourceCount, leftCount }) => (
  <Flexbox alignItems="center" gap={4} flexWrap="wrap">
    <ResourceIcon className={css.icon} resourceType={resourceType} />
    {isNil(count) && <Text>-</Text>}
    {!isNil(count) && isNil(sourceCount) && isNil(leftCount) && (
      <Text>
        <FormattedNumber value={count} />
      </Text>
    )}
    {!isNil(count) && !isNil(sourceCount) && !isNil(leftCount) && (
      <>
        <Text>
          <FormattedNumber value={sourceCount} />
        </Text>
        <Text>-</Text>
        <Text c="red">
          <FormattedNumber value={count} />
        </Text>
        <Text>=</Text>
        <Text c="green">
          <FormattedNumber value={leftCount} />
        </Text>
      </>
    )}
  </Flexbox>
))

export default ResourceCount
