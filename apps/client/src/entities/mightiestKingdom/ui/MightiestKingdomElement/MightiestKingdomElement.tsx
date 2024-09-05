import { FC, ReactNode, memo } from 'react'
import { Flex, Text } from '@mantine/core'
import TypeHelper from 'shared/helpers/typeHelper'

interface Props {
  className?: string
  iconNode: ReactNode
  value: number | undefined
}

const MightiestKingdomElement: FC<Props> = memo(({ className, iconNode, value }) => (
  <Flex className={className} gap={4} align="center" justify="space-between">
    {iconNode}
    <Text>{TypeHelper.isNumber(value) ? value.toLocaleString('ru') : '-'}</Text>{' '}
  </Flex>
))

export default MightiestKingdomElement
