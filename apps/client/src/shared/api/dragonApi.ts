import type { CalculatePossibleDragonPayload, CalculatePossibleDragonResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateDragonRunes = (payload: CalculatePossibleDragonPayload) =>
  AxiosService.post<CalculatePossibleDragonResponse>('/calculator/dragon/possibleDragon', {
    data: payload,
  })
