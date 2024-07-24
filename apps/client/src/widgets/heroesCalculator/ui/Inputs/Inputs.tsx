import React, { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Alert, Button, Divider, Flex, Text, Title } from '@mantine/core'
import { SettingsSwitch, useSetting } from 'entities/calculationSettings'
import { ResourceInput } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'


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

      {isUsedAdvancedMode && (
        <Alert title="Продвинутый режим героев">
          <Flex direction="column" gap={8}>
            <Text>Внимание! Включен продвинутый режим подсчета очков героев</Text>
            <Text>
              В данном режиме расчет очков героев производится на основе отдельно введенных параметров героев, а так же
              распределения карт самовыбора.
            </Text>
            <Text>
              Для настройки героев и распредления карт самовыбора, пожалуйста, перейдите на страницу{' '}
              <NavLink to="/heroes">Герои</NavLink>.
            </Text>
          </Flex>
        </Alert>
      )}

      <Button onClick={onCalculateButtonClick} disabled={leftCards < 0}>
        Посчитать
      </Button>
    </Flexbox>
  )
})

export default Inputs
