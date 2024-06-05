import React, { FC, memo } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { WitchGemsInputs, WitchPowerInput } from 'entities/parameter'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  onSubmitButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ onSubmitButtonClick }) => (
  <>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <ResourceInput resourceType="lightReagent" />
      <ResourceInput resourceType="strengthPotion" />
      <ResourceInput resourceType="luckPotion" />
    </Flexbox>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои параметры</Title>
      <WitchPowerInput />
      <Divider mt={8} mb={8} />
      <WitchGemsInputs />
    </Flexbox>
    <Button onClick={onSubmitButtonClick}>Посчитать</Button>
  </>
))

export default Inputs
