import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import cx from 'classnames'
import { Alert, Flex, Space, Text } from '@mantine/core'
import { SettingPriorityElement, SettingsSwitch, useSetting } from 'entities/calculationSettings'
import { MightiestKingdomStatistics, useCalculateTotalMightiestKingdom } from 'entities/mightiestKingdom'
import { NoAuthNavigate } from 'entities/user'
import PageTitle from 'shared/ui/PageTitle'
import { AlertAdvancedMode } from 'widgets/heroesCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const MightiestKingdomPage: FC<Props> = memo(({ className }) => {
  const { data } = useCalculateTotalMightiestKingdom()
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
        <SettingsSwitch settingsType="canUseDragonBoxes" />
        <SettingsSwitch settingsType="useCastleLimit" />
        {isEnabledCastleLimit && <SettingsSwitch settingsType="usePossibleCastleLimit" />}
        <SettingsSwitch settingsType="canUseRandomBarracksBooks" />
        <SettingsSwitch settingsType="canConvertBarracksBooksToTalents" />
        <SettingsSwitch settingsType="canUseTalentsToNonPriorityElements" />
        <SettingsSwitch settingsType="useAdvancedHeroMode" />
        <SettingPriorityElement />
        <AlertAdvancedMode />
      </Flex>
      <MightiestKingdomStatistics data={data} showEmpty />
    </Flex>
  )
})

export default MightiestKingdomPage
