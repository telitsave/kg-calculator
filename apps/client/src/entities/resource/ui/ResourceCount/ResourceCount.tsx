import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import { isNil } from 'lodash'
import Flexbox from 'shared/ui/Flexbox'
import { ResourceType } from '../../model/types'
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
    {!isNil(count) && isNil(sourceCount) && isNil(leftCount) && <Text>{count.toLocaleString('ru')}</Text>}
    {!isNil(count) && !isNil(sourceCount) && !isNil(leftCount) && (
      <>
        <Text>{sourceCount.toLocaleString('ru')}</Text>
        <Text>-</Text>
        <Text c="red">{count.toLocaleString('ru')}</Text>
        <Text>=</Text>
        <Text c="green">{leftCount.toLocaleString('ru')}</Text>
      </>
    )}
  </Flexbox>
))

export default ResourceCount
