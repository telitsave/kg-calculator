import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { Settings } from 'kg-calculator-typings'
import api from 'shared/api'
import SettingsQueue from '../SettingsQueue'


const useSettings = () => {
  const { data: settings = {} } = useQuery({
    queryKey: ['settings'],
    queryFn: api.settings.getSettings,
  })

  const saveSetting = useCallback((setting: keyof Settings, value: string | boolean) => {
    SettingsQueue.setSetting(setting, value)
  }, [])

  return {
    settings,
    saveSetting,
  }
}

export default useSettings
