import type { CustomServerSettingsData } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getServerSettings = () => {
  return AxiosService.get<CustomServerSettingsData>('/serverSettings')
}
