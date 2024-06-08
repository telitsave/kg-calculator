import type { CalculateBarracksPayload, CalculateBarracksResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateBarracks = (payload: CalculateBarracksPayload) => {
  return AxiosService.post<CalculateBarracksResponse>('/calculator/barracks', {
    data: payload,
  })
}
