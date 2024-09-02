import { Dispatch, FC, memo } from 'react'
import { Button, Title } from '@mantine/core'
import { SettingsSwitch } from 'entities/calculationSettings'
import { GoalCastleLevelInput } from 'entities/castle'
import { ParameterIcon, ParameterInput } from 'entities/parameter'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  goalCastleLevel: number | undefined

  setGoalCastleLevel: Dispatch<number>

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, goalCastleLevel, setGoalCastleLevel, onCalculateButtonClick }) => (
  <Flexbox className={className} flexDirection="column" gap={12}>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={3}>Мой замок сейчас</Title>
      <ParameterInput parameterType="castleLevel" />
    </Flexbox>
    <Flexbox flexDirection="column" gap={8}>
      <Title order={4}>Мои ресурсы</Title>
      <ResourceInput resourceType="gold" />
      <ResourceInput resourceType="stone" />
      <ResourceInput resourceType="wood" />
      <ResourceInput resourceType="steel" />
      <ResourceInput resourceType="customConstructionItem" />
    </Flexbox>
    <Flexbox flexDirection="column" gap={8}>
      <SettingsSwitch settingsType="canUseCastleBoxes" />
      <SettingsSwitch settingsType="canConvertCastleResources" />
    </Flexbox>
    <GoalCastleLevelInput
      icon={<ParameterIcon parameterType="castleLevel" />}
      value={goalCastleLevel}
      onChange={setGoalCastleLevel}
    />
    <Button onClick={onCalculateButtonClick}>Посчитать</Button>
  </Flexbox>
))

export default Inputs
