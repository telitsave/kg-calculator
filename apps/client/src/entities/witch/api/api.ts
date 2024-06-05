import type { CalculateWitchPayload, CalculateWitchResponse } from 'kg-calculator-typings/api/Witch'
import AxiosService from 'shared/services/axiosService'

export const calculateWitch = (payload: CalculateWitchPayload) =>
  AxiosService.post<CalculateWitchResponse>('/calculator/witch', {
    data: payload,
  })
