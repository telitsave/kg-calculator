import type { CalculateBlacksmithResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateBlacksmith = () => {
  return AxiosService.post<CalculateBlacksmithResponse>('/calculator/blacksmith')
}
