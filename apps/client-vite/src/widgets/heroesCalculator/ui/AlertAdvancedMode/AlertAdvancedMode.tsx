import { FC, memo } from 'react'
import { NavLink } from 'react-router-dom'
import { Alert, Flex, Text } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { useSetting } from '@entities/calculationSettings'


const AlertAdvancedMode: FC = memo(() => {
  const [isUsedAdvancedMode] = useSetting('useAdvancedHeroMode')

  if (!isUsedAdvancedMode) return null

  return (
    <Alert title={<FormattedMessage defaultMessage="Продвинутый режим героев" />}>
      <Flex direction="column" gap={8}>
        <Text>
          <FormattedMessage defaultMessage="Внимание! Включен продвинутый режим подсчета очков героев" />
        </Text>
        <Text>
          <FormattedMessage
            defaultMessage="В данном режиме расчет очков героев производится на основе отдельно введенных параметров героев, а так же
          распределения карт самовыбора."
          />
        </Text>
        <Text>
          <FormattedMessage defaultMessage="Для настройки героев и распредления карт самовыбора, пожалуйста, перейдите на страницу" />{' '}
          <NavLink to="/myData/heroesData">
            <FormattedMessage defaultMessage="Герои" />
          </NavLink>
          .
        </Text>
      </Flex>
    </Alert>
  )
})

export default AlertAdvancedMode
