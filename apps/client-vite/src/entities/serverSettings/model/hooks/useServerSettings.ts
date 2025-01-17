import ServerSettingsQueue from '../ServerSettingsQueue'
import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import { useCallback } from 'react'

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
