import { FC, ReactNode, memo } from 'react'
import { Divider, Flex, Text, Title } from '@mantine/core'
import { FormattedNumber } from 'react-intl'
import TypeHelper from '@shared/helpers/typeHelper'


interface Props {
  className?: string
  title: ReactNode
  value: number | undefined
  elements: ReactNode[]
}

const UltimatePowerModule: FC<Props> = memo(({ className, title, value, elements }) => {
  return (
    <Flex className={className} direction="column" gap={8}>
      <Flex gap={4} align="center" justify="space-between">
        <Title order={5}>{title}</Title>
        <Text>{TypeHelper.isNumber(value) ? <FormattedNumber value={value} /> : '-'}</Text>
      </Flex>
      <Divider />
      <Flex direction="column" gap={4}>
        {elements}
      </Flex>
      <Divider size="md" />
    </Flex>
  )
})

export default UltimatePowerModule
