import type { CalculateMightiestKingdomPayload, CalculateMightiestKingdomResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateMightiestKingdom = (payload: CalculateMightiestKingdomPayload) => {
  return AxiosService.post<CalculateMightiestKingdomResponse>('/calculator/mightiestKingdom', {
    data: payload,
  })
}

export const calculateTotalMightiestKingdom = () => {
  return AxiosService.post<CalculateMightiestKingdomResponse>('/calculator/mightiestKingdom/total')
}
