import { Dispatch, FC, memo } from 'react'
import { Button, Flex, Title } from '@mantine/core'
import { SettingsSwitch } from 'entities/calculationSettings'
import { GoalCastleLevelInput } from 'entities/castle'
import { ParameterIcon, ParameterInput } from 'entities/parameter'
import { ResourceInput } from 'entities/resource'


interface Props {
  className?: string
  goalCastleLevel: number | string | undefined

  setGoalCastleLevel: Dispatch<number | string>

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, goalCastleLevel, setGoalCastleLevel, onCalculateButtonClick }) => (
  <Flex className={className} direction="column" gap={12}>
    <Flex direction="column" gap={8}>
      <Title order={3}>Мой замок сейчас</Title>
      <ParameterInput parameterType="castleParams_level" />
    </Flex>
    <Flex direction="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <ResourceInput resourceType="gold" />
      <ResourceInput resourceType="castleResources_stone" />
      <ResourceInput resourceType="castleResources_wood" />
      <ResourceInput resourceType="castleResources_steel" />
      <ResourceInput resourceType="castleResources_boxes" />
    </Flex>
    <Flex direction="column" gap={8}>
      <SettingsSwitch settingsType="canUseCastleBoxes" />
      <SettingsSwitch settingsType="canConvertCastleResources" />
    </Flex>
    <GoalCastleLevelInput
      icon={<ParameterIcon parameterType="castleParams_level" />}
      value={goalCastleLevel}
      onChange={setGoalCastleLevel}
    />
    <Button onClick={onCalculateButtonClick}>Посчитать</Button>
  </Flex>
))

export default Inputs
