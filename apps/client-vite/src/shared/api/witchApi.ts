import type { CalculateWitchResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateWitch = () => AxiosService.post<CalculateWitchResponse>('/calculator/witch')
