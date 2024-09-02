import { FC, ReactNode, memo } from 'react'
import { Divider, Text, Title } from '@mantine/core'
import TypeHelper from 'shared/helpers/typeHelper'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  title: string
  value: number | undefined
  elements: ReactNode[]
}

const ExtremePowerModule: FC<Props> = memo(({ className, title, value, elements }) => {
  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Flexbox gap={4} alignItems="center" justifyContent="space-between">
        <Title order={5}>{title}</Title>
        <Text>{TypeHelper.isNumber(value) ? value.toLocaleString('ru') : '-'}</Text>
      </Flexbox>
      <Divider />
      <Flexbox flexDirection="column" gap={4}>
        {elements}
      </Flexbox>
      <Divider size="md" />
    </Flexbox>
  )
})

export default ExtremePowerModule
