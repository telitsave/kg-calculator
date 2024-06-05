import {
  CalculateExtremePowerPayload,
  CalculateExtremePowerResponse,
  CalculateTotalExtremePowerPayload,
} from 'shared/api'
import AxiosService from 'shared/services/axiosService'

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
