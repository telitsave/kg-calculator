import { CalculateBarracksPayload, CalculateBarracksResponse } from 'shared/api'
import AxiosService from 'shared/services/axiosService'

export const calculateBarracks = (payload: CalculateBarracksPayload) => {
  return AxiosService.post<CalculateBarracksResponse>('/calculator/barracks', {
    data: payload,
  })
}
