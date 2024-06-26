import React, { FC, memo } from 'react'
import { Button, Title } from '@mantine/core'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => (
  <Flexbox className={className} flexDirection="column" gap={8}>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <ResourceInput resourceType="heroGreenCards" />
      <ResourceInput resourceType="heroBlueCards" />
      <ResourceInput resourceType="heroPurpleCards" />
      <ResourceInput resourceType="heroGoldCards" />
    </Flexbox>

    <Button onClick={onCalculateButtonClick}>Посчитать</Button>
  </Flexbox>
))

export default Inputs
