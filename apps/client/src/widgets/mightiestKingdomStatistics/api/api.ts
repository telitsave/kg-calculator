import {
  CalculateMightiestKingdomPayload,
  CalculateMightiestKingdomResponse,
  CalculateTotalMightiestKingdomPayload,
} from 'kg-calculator-typings'
import AxiosService from 'shared/services/axiosService'

export const calculateMightiestKingdom = (payload: CalculateMightiestKingdomPayload) => {
  return AxiosService.post<CalculateMightiestKingdomResponse>('/calculator/mightiestKingdom', {
    data: payload,
  })
}

export const calculateTotalMightiestKingdom = (payload: CalculateTotalMightiestKingdomPayload) => {
  return AxiosService.post<CalculateMightiestKingdomResponse>('/calculator/mightiestKingdom/total', {
    data: payload,
  })
}
