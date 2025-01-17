import { FC, memo } from 'react'
import { Button, Divider, Title } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { SettingsSwitch, useSetting } from '@entities/calculationSettings'
import { ResourceInput } from '@entities/resource'
import Flexbox from '@shared/ui/Flexbox'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import AlertAdvancedMode from '../AlertAdvancedMode'


interface Props {
  className?: string

  onCalculateButtonClick: () => void
}

const Inputs: FC<Props> = memo(({ className, onCalculateButtonClick }) => {
  const [isUsedAdvancedMode = false] = useSetting('useAdvancedHeroMode')
  const { leftCards } = useHeroesDistributionModel()
  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Flexbox flexDirection="column" gap={8}>
        <Title order={4}>
          <FormattedMessage defaultMessage="Мои ресурсы" />
        </Title>
        <ResourceInput resourceType="heroesResources_n" disabled={isUsedAdvancedMode as boolean} />
        <ResourceInput resourceType="heroesResources_r" disabled={isUsedAdvancedMode as boolean} />
        <ResourceInput resourceType="heroesResources_sr" disabled={isUsedAdvancedMode as boolean} />
        <ResourceInput resourceType="heroesResources_ssr" disabled={isUsedAdvancedMode as boolean} />
      </Flexbox>

      <Divider size="sm" />

      <SettingsSwitch settingsType="useAdvancedHeroMode" />

      <AlertAdvancedMode />

      <Button onClick={onCalculateButtonClick} disabled={leftCards < 0}>
        <FormattedMessage defaultMessage="Посчитать" />
      </Button>
    </Flexbox>
  )
})

export default Inputs
