import { FC, memo, useCallback, useEffect, useState } from 'react'
import { Alert, Stack, Switch, SwitchGroup, Tabs, Text } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import { settingsNames, useServerSettings } from '@entities/serverSettings'
import { NoAuthNavigate } from '@entities/user'
import PageTitle from '@shared/ui/PageTitle'
import { CommonSettings } from '@widgets/serverSettings/commonSettings'
import { MightiestKingdomSettings } from '@widgets/serverSettings/mightiestKingdomSettings'
import { UltimatePowerSettings } from '@widgets/serverSettings/ultimatePowerSettings'


interface Props {
  className?: string
}

const ServerSettings: FC<Props> = memo(({ className }) => {
  const { serverSettings, saveServerSetting } = useServerSettings()
  const [enabled, setEnabled] = useState(serverSettings.enabledCustomServerSettings)

  const handleSwitchChange = useCallback(
    (values: string[]) => {
      saveServerSetting('enabledCustomServerSettings', values.includes('enabledCustomServerSettings') ? 1 : 0)
      setEnabled(values.includes('enabledCustomServerSettings') ? 1 : 0)
    },
    [saveServerSetting],
  )

  useEffect(() => {
    if (serverSettings.enabledCustomServerSettings) {
      setEnabled(1)
    }
  }, [serverSettings.enabledCustomServerSettings])

  return (
    <Stack className={className} maw={600}>
      <NoAuthNavigate to="/settings" />
      <PageTitle />
      <Alert title={<FormattedMessage defaultMessage="Настройки для другого сервера" />}>
        <Stack gap={4}>
          <Text>
            <FormattedMessage
              defaultMessage="На разных серверах настройки могут отличаться друг от друга. В том числе это относится к тем настройкам,
            которые могут напрямую повлиять на расчеты в калькуляторе. Разный уровень открытых камней ведьмы, талантов в
            казарме, и т.д."
            />
          </Text>
          <Text>
            <FormattedMessage
              defaultMessage="На данной странице есть возможность скорректировать стандартные настройки калькулятора, подстроить их под
            параметры своего сервера."
            />
          </Text>
          <Text>
            <FormattedMessage
              defaultMessage="Стандартные настройки ориентированы на сетку серверов 1491-1577. Если ваш сервер входит в эту сетку, то нет
            необходимости корректировать настройки, и переключатель ниже можно оставить выключенным."
            />
          </Text>
          <Text>
            <FormattedMessage
              defaultMessage="Если ваш сервер не входит в сетку 1491-1577, возможно некоторые настройки будут отличаться от стандартных. В
            таком случае рекомендуется включить переключатель ниже, и скорректировать настройки."
            />
          </Text>
        </Stack>
      </Alert>
      <SwitchGroup value={enabled ? ['enabledCustomServerSettings'] : []} onChange={handleSwitchChange}>
        <Switch label={settingsNames.enabledCustomServerSettings} value="enabledCustomServerSettings" />
      </SwitchGroup>
      <Tabs defaultValue="common">
        <Tabs.List>
          <Tabs.Tab value="common">
            <FormattedMessage defaultMessage="Общие настройки" />
          </Tabs.Tab>
          <Tabs.Tab value="ultimatePower">
            <FormattedMessage defaultMessage="Экстремальная мощь" />
          </Tabs.Tab>
          <Tabs.Tab value="mightiestKingdom">
            <FormattedMessage defaultMessage="Сильнейшее королевство" />
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="common">
          <CommonSettings />
        </Tabs.Panel>
        <Tabs.Panel value="ultimatePower">
          <UltimatePowerSettings />
        </Tabs.Panel>
        <Tabs.Panel value="mightiestKingdom">
          <MightiestKingdomSettings />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  )
})

export default ServerSettings
