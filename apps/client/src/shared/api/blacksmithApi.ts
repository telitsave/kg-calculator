import type { CalculateBlacksmithPayload, CalculateBlacksmithResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateBlacksmith = (payload: CalculateBlacksmithPayload) => {
  return AxiosService.post<CalculateBlacksmithResponse>('/calculator/blacksmith', {
    data: payload,
  })
}
