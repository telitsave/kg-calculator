import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import api from 'shared/api'
import ServerSettingsQueue from '../ServerSettingsQueue'


const useServerSettings = () => {
  const { data: serverSettings = {} } = useQuery({
    queryKey: ['serverSettings'],
    queryFn: api.serverSettings.getServerSettings,
  })

  const saveServerSetting = useCallback((setting: keyof CustomServerSettingsData, value: number) => {
    ServerSettingsQueue.setServerSetting(setting, value)
  }, [])

  return {
    serverSettings,
    saveServerSetting,
  }
}

export default useServerSettings
