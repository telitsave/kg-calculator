import React, { FC, ReactNode, memo } from 'react'
import { Text } from '@mantine/core'
import TypeHelper from 'shared/helpers/typeHelper'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  iconNode: ReactNode
  value: number | undefined
}

const MightiestKingdomElement: FC<Props> = memo(({ className, iconNode, value }) => (
  <Flexbox className={className} gap={4} alignItems="center" justifyContent="space-between">
    {iconNode}
    <Text>{TypeHelper.isNumber(value) ? value.toLocaleString('ru') : '-'}</Text>{' '}
  </Flexbox>
))

export default MightiestKingdomElement
