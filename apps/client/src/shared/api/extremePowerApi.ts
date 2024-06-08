import type {
  CalculateExtremePowerPayload,
  CalculateExtremePowerResponse,
  CalculateTotalExtremePowerPayload,
} from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateExtremePower = (payload: CalculateExtremePowerPayload) => {
  return AxiosService.post<CalculateExtremePowerResponse>('/calculator/extremePower', {
    data: payload,
  })
}

export const calculateTotalExtremePower = (payload: CalculateTotalExtremePowerPayload) => {
  return AxiosService.post<CalculateExtremePowerResponse>('/calculator/extremePower/total', {
    data: payload,
  })
}
