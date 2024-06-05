import { CalculateWitchPayload, CalculateWitchResponse } from 'shared/api'
import AxiosService from 'shared/services/axiosService'

export const calculateWitch = (payload: CalculateWitchPayload) =>
  AxiosService.post<CalculateWitchResponse>('/calculator/witch', {
    data: payload,
  })
