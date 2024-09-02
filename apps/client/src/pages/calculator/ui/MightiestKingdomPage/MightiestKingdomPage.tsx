import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import { Alert, Space, Text } from '@mantine/core'
import { SettingPriorityElement, SettingsSwitch } from 'entities/calculationSettings'
import Flexbox from 'shared/ui/Flexbox'
import { AlertAdvancedMode } from 'widgets/heroesCalculator'
import { MightiestKingdomStatisticsTotal } from 'widgets/mightiestKingdomStatistics'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const MightiestKingdomPage: FC<Props> = memo(({ className }) => (
  <Flexbox className={cx(css.root, className)} flexDirection="column" gap={24}>
    <Alert title="Рассчет очков">
      <Text>
        Рассчет очков на данной странице производится в автоматическом режиме, на основе ваших ресурсов (страница{' '}
        <NavLink to="/inventory">Инвентарь</NavLink>) и на основе ваших параметров (страница{' '}
        <NavLink to="/parameters">Параметры персонажа</NavLink>).
      </Text>
      <Space h="md" />
      <Text>
        При внесении изменений в ваши ресурсы или параметры, данные на странице будут автоматически пересчитаны при
        повторном переходе сюда.
      </Text>
    </Alert>

    <Flexbox flexDirection="column" gap={8}>
      <SettingsSwitch settingsType="canUseDragonBoxes" />
      <SettingsSwitch settingsType="canUseRandomBarracksBooks" />
      <SettingsSwitch settingsType="canConvertBarracksBooksToTalents" />
      <SettingsSwitch settingsType="canUseTalentsToNonPriorityElements" />
      <SettingsSwitch settingsType="useAdvancedHeroMode" />
      <SettingPriorityElement />
      <AlertAdvancedMode />
    </Flexbox>
    <MightiestKingdomStatisticsTotal />
  </Flexbox>
))

export default MightiestKingdomPage
