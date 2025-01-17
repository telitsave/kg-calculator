import type { CalculateUltimatePowerPayload, CalculateUltimatePowerResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateUltimatePower = (payload: CalculateUltimatePowerPayload) => {
  return AxiosService.post<CalculateUltimatePowerResponse>('/calculator/ultimatePower', {
    data: payload,
  })
}

export const calculateTotalUltimatePower = () => {
  return AxiosService.post<CalculateUltimatePowerResponse>('/calculator/ultimatePower/total')
}
