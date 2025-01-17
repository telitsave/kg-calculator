import type { CustomServerSettingsData, SaveServerSettingsPayload } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getServerSettings = () => {
  return AxiosService.get<CustomServerSettingsData>('/serverSettings')
}

export const setServerSettings = (payload: SaveServerSettingsPayload) => {
  return AxiosService.put('/serverSettings', {
    data: payload,
  })
}
