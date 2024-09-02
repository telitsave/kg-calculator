import { FC, memo, useCallback } from 'react'
import { Alert, Stack, Switch, SwitchGroup, Tabs, Text } from '@mantine/core'
import { useServerSettings } from 'entities/serverSettings'
import { CommonSettings } from 'widgets/serverSettings/commonSettings'
import { ExtremePowerSettings } from 'widgets/serverSettings/extremePowerSettings'
import { MightiestKingdomSettings } from 'widgets/serverSettings/mightiestKingdomSettings'

interface Props {
  className?: string
}

const ServerSettings: FC<Props> = memo(({ className }) => {
  const { enabledCustomServerSettings, setEnabledCustomServerSettings } = useServerSettings()

  const handleSwitchChange = useCallback((values: string[]) => {
    setEnabledCustomServerSettings(values.includes('enabledCustomServerSettings'))
  }, [])

  return (
    <Stack className={className} maw={600}>
      <Alert title="Настройки для другого сервера">
        <Stack gap={4}>
          <Text>
            На разных серверах настройки могут отличаться друг от друга. В том числе это относится к тем настройкам,
            которые могут напрямую повлиять на расчеты в калькуляторе. Разный уровень открытых камней ведьмы, талантов в
            казарме, и т.д.
          </Text>
          <Text>
            На данной странице есть возможность скорректировать стандартные настройки калькулятора, подстроить их под
            параметры своего сервера.
          </Text>
          <Text>
            Стандартные настройки ориентированы на сетку серверов 1491-1577. Если ваш сервер входит в эту сетку, то нет
            необходимости корректировать настройки, и переключатель ниже можно оставить выключенным.
          </Text>
          <Text>
            Если ваш сервер не входит в сетку 1491-1577, возможно некоторые настройки будут отличаться от стандартных. В
            таком случае рекомендуется включить переключатель ниже, и скорректировать настройки.
          </Text>
        </Stack>
      </Alert>
      <SwitchGroup
        value={enabledCustomServerSettings ? ['enabledCustomServerSettings'] : []}
        onChange={handleSwitchChange}
      >
        <Switch label="Использовать нестандартные настройки" value="enabledCustomServerSettings" />
      </SwitchGroup>
      <Tabs defaultValue="common">
        <Tabs.List>
          <Tabs.Tab value="common">Общие настройки</Tabs.Tab>
          <Tabs.Tab value="extremePower">Экстремальная мощь</Tabs.Tab>
          <Tabs.Tab value="mightiestKingdom">Сильнейшее королевство</Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel value="common">
          <CommonSettings />
        </Tabs.Panel>
        <Tabs.Panel value="extremePower">
          <ExtremePowerSettings />
        </Tabs.Panel>
        <Tabs.Panel value="mightiestKingdom">
          <MightiestKingdomSettings />
        </Tabs.Panel>
      </Tabs>
    </Stack>
  )
})

export default ServerSettings
