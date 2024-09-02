import { FC, memo } from 'react'
import { Button, Title } from '@mantine/core'
import { SettingsSwitch } from 'entities/calculationSettings'
import { ParameterInput } from 'entities/parameter'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  onSubmitButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ onSubmitButtonClick }) => {
  return (
    <>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>Мои ресурсы</Title>
        <ResourceInput resourceType="greenRune" />
        <ResourceInput resourceType="blueRune" />
        <ResourceInput resourceType="purpleRune" />
        <ResourceInput resourceType="goldRune" />
        <ResourceInput resourceType="runesBox" />
        <SettingsSwitch settingsType="canUseDragonBoxes" />
      </Flexbox>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>Мои эмблемы дракона</Title>
        <ParameterInput parameterType="greenEmblem" />
        <ParameterInput parameterType="blueEmblem" />
        <ParameterInput parameterType="purpleEmblem" />
        <ParameterInput parameterType="goldEmblem" />
      </Flexbox>
      <Button onClick={onSubmitButtonClick}>Посчитать</Button>
    </>
  )
})

export default Inputs
