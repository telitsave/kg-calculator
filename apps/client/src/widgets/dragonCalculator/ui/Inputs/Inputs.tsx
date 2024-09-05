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
        <ResourceInput resourceType="dragonResources_green" />
        <ResourceInput resourceType="dragonResources_blue" />
        <ResourceInput resourceType="dragonResources_purple" />
        <ResourceInput resourceType="dragonResources_gold" />
        <ResourceInput resourceType="dragonResources_boxes" />
        <SettingsSwitch settingsType="canUseDragonBoxes" />
      </Flexbox>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>Мои эмблемы дракона</Title>
        <ParameterInput parameterType="dragonParams_green" />
        <ParameterInput parameterType="dragonParams_blue" />
        <ParameterInput parameterType="dragonParams_purple" />
        <ParameterInput parameterType="dragonParams_gold" />
      </Flexbox>
      <Button onClick={onSubmitButtonClick}>Посчитать</Button>
    </>
  )
})

export default Inputs
