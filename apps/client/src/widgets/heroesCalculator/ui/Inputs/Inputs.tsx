import React, { FC, memo } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { SettingsSwitch, useSetting } from 'entities/calculationSettings'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import AlertAdvancedMode from '../AlertAdvancedMode'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => {
  const [isUsedAdvancedMode] = useSetting('useAdvancedHeroMode')
  const { leftCards } = useHeroesDistributionModel()
  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>Мои ресурсы</Title>
        <ResourceInput resourceType="heroGreenCards" disabled={isUsedAdvancedMode} />
        <ResourceInput resourceType="heroBlueCards" disabled={isUsedAdvancedMode} />
        <ResourceInput resourceType="heroPurpleCards" disabled={isUsedAdvancedMode} />
        <ResourceInput resourceType="heroGoldCards" disabled={isUsedAdvancedMode} />
      </Flexbox>

      <Divider size="sm" />

      <SettingsSwitch settingsType="useAdvancedHeroMode" />

      <AlertAdvancedMode />

      <Button onClick={onCalculateButtonClick} disabled={leftCards < 0}>
        Посчитать
      </Button>
    </Flexbox>
  )
})

export default Inputs
