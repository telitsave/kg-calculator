import React, { FC, ReactNode, memo } from 'react'
import { Divider, Title } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  extremePowerNode: ReactNode
  mightiestKingdomNode: ReactNode
}

const Results: FC<Props> = memo(({ className, extremePowerNode, mightiestKingdomNode }) => (
  <Flexbox className={className} flexDirection="column" gap={16}>
    <Title order={4}>Результаты</Title>
    <Divider />

    {mightiestKingdomNode}

    <Divider />

    {extremePowerNode}
  </Flexbox>
))

export default Results
