import { useEffect, useMemo } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import useGetServerSettings from './useGetServerSettings'


const useServerSettings = () => {
  const [customServerSettings, setCustomServerSettings] = useLocalStorage<CustomServerSettingsData>({
    key: 'customServerSettings',
    defaultValue: {},
    serialize: (value) => JSON.stringify(value),
    deserialize: (value) => JSON.parse(value || '{}'),
  })

  const [enabledCustomServerSettings, setEnabledCustomServerSettings] = useLocalStorage<boolean>({
    key: 'enabledCustomServerSettings',
    defaultValue: false,
    serialize: (value) => JSON.stringify(value),
    deserialize: (value) => JSON.parse(value || 'false'),
  })

  const serverSettings = useGetServerSettings()

  useEffect(() => {
    if (serverSettings.data) {
      setCustomServerSettings((val) => ({
        ...serverSettings.data,
        ...val,
      }))
    }
  }, [serverSettings.data])

  return {
    // TODO: вынести в отдельную константу
    serverSettings: useMemo(
      () => (enabledCustomServerSettings ? customServerSettings : serverSettings.data),
      [enabledCustomServerSettings, customServerSettings, serverSettings.data],
    ),
    enabledCustomServerSettings,
    setCustomServerSettings,
    setEnabledCustomServerSettings,
  }
}

export default useServerSettings
