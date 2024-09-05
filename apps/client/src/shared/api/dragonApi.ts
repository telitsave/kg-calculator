import type { CalculatePossibleDragonResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateDragonRunes = () =>
  AxiosService.post<CalculatePossibleDragonResponse>('/calculator/dragon/possibleDragon')
