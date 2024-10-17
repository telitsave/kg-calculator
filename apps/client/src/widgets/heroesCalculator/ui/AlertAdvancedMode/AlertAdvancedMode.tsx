import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Alert, Flex, Text } from '@mantine/core'
import { useSetting } from 'entities/calculationSettings'


const AlertAdvancedMode: FC = memo(() => {
  const [isUsedAdvancedMode] = useSetting('useAdvancedHeroMode')

  if (!isUsedAdvancedMode) return null

  return (
    <Alert title="Продвинутый режим героев">
      <Flex direction="column" gap={8}>
        <Text>Внимание! Включен продвинутый режим подсчета очков героев</Text>
        <Text>
          В данном режиме расчет очков героев производится на основе отдельно введенных параметров героев, а так же
          распределения карт самовыбора.
        </Text>
        <Text>
          Для настройки героев и распредления карт самовыбора, пожалуйста, перейдите на страницу{' '}
          <NavLink to="/myData/heroes">Герои</NavLink>.
        </Text>
      </Flex>
    </Alert>
  )
})

export default AlertAdvancedMode
