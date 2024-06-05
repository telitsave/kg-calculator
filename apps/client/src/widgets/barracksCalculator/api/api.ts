import AxiosService from 'shared/services/axiosService'
import { CalculateBarracksPayload, CalculateBarracksResponse } from 'kg-calculator-typings'

export const calculateBarracks = (payload: CalculateBarracksPayload) => {
  return AxiosService.post<CalculateBarracksResponse>('/calculator/barracks', {
    data: payload,
  })
}
