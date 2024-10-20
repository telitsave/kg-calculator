import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import { Alert, Flex, Space, Text } from '@mantine/core'
import { SettingPriorityElement, SettingsSwitch, useSetting } from 'entities/calculationSettings'
import { UltimatePowerStatistics, useCalculateUltimatePowerTotal } from 'entities/ultimatePower'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { AlertAdvancedMode } from 'widgets/heroesCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const UltimatePowerPage: FC<Props> = memo(({ className }) => {
  const { data } = useCalculateUltimatePowerTotal()
  const isEnabledCastleLimit = useSetting('useCastleLimit')[0]
  return (
    <Flex className={cx(css.root, className)} direction="column" gap={24}>
      <NoAuthNavigate to="/calculators" />
      <PageTitle />
      <Alert title="Рассчет очков">
        <Text>
          Рассчет очков на данной странице производится в автоматическом режиме, на основе ваших ресурсов (страница{' '}
          <NavLink to="/myData/inventory">Инвентарь</NavLink>) и на основе ваших параметров (страница{' '}
          <NavLink to="/myData/parameters">Параметры персонажа</NavLink>).
        </Text>
        <Space h="md" />
        <Text>
          При внесении изменений в ваши ресурсы или параметры, данные на странице будут автоматически пересчитаны при
          повторном переходе сюда.
        </Text>
      </Alert>

      <Flex direction="column" gap={8}>
        <SettingsSwitch settingsType="canConvertCastleResources" />
        <SettingsSwitch settingsType="canUseCastleBoxes" />
        <SettingsSwitch settingsType="spentToArtifactCastle" />
        <SettingsSwitch settingsType="canUseDragonBoxes" />
        <SettingsSwitch settingsType="useCastleLimit" />
        {isEnabledCastleLimit && <SettingsSwitch settingsType="usePossibleCastleLimit" />}
        <SettingsSwitch settingsType="spentToArtifactDragon" />
        <SettingsSwitch settingsType="canUseRandomBarracksBooks" />
        <SettingsSwitch settingsType="canConvertBarracksBooksToTalents" />
        <SettingsSwitch settingsType="canUseTalentsToNonPriorityElements" />
        <SettingsSwitch settingsType="spentToArtifactBarracks" />
        <SettingsSwitch settingsType="useAdvancedHeroMode" />
        <SettingsSwitch settingsType="spentToArtifactHammers" />
        <SettingsSwitch settingsType="spentToArtifactLightReagents" />
        <SettingPriorityElement />
        <AlertAdvancedMode />
      </Flex>
      <UltimatePowerStatistics data={data} showEmpty />
    </Flex>
  )
})

export default UltimatePowerPage
