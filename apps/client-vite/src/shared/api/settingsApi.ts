import type { SaveSettingsPayload, Settings } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getSettings = () => {
  return AxiosService.get<Settings>('/settings')
}

export const setSettings = (payload: SaveSettingsPayload) => {
  return AxiosService.put('/settings', {
    data: payload,
  })
}
