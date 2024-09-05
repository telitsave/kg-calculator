import { useCallback } from 'react'
import type { Settings } from 'kg-calculator-typings'
import useSettings from './useSettings'


const useSetting = (type: keyof Settings): [string | boolean | undefined, (val: string | boolean) => void] => {
  const { settings, saveSetting } = useSettings()

  const handleSetSetting = useCallback((value: string | boolean) => {
    saveSetting(type, value)
  }, [])

  return [settings !== undefined ? settings[type] : undefined, handleSetSetting]
}

export default useSetting
