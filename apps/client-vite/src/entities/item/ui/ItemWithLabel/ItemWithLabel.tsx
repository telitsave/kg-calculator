import { FC, memo, useMemo } from 'react'
import { Flex, Text } from '@mantine/core'
import type { ItemTypes } from 'kg-calculator-typings'
import { useIntl } from 'react-intl'
import { getItemLabels } from '../../model/locales'
import ItemIcon from '../ItemIcon'


interface Props {
  className?: string
  itemType: ItemTypes
}

const ItemWithLabel: FC<Props> = memo(({ itemType }) => {
  const intl = useIntl()
  const labels: Record<ItemTypes, string> = useMemo(() => getItemLabels(intl), [intl])
  return (
    <Flex align="center" gap="sm" flex="0 0 auto">
      <ItemIcon itemType={itemType} />
      <Text>{labels[itemType]}</Text>
    </Flex>
  )
})

export default ItemWithLabel
