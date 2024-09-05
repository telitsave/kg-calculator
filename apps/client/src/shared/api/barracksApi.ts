import type { CalculateBarracksResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateBarracks = () => {
  return AxiosService.post<CalculateBarracksResponse>('/calculator/barracks')
}
