import type { CalculateWitchPayload, CalculateWitchResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateWitch = (payload: CalculateWitchPayload) =>
  AxiosService.post<CalculateWitchResponse>('/calculator/witch', {
    data: payload,
  })
