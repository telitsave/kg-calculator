import type { CalculatePossibleDragonPayload, CalculatePossibleDragonResponse } from 'kg-calculator-typings/api/Dragon'
import AxiosService from 'shared/services/axiosService'

export const calculateDragonRunes = (payload: CalculatePossibleDragonPayload) =>
  AxiosService.post<CalculatePossibleDragonResponse>('/calculator/dragon/possibleDragon', {
    data: payload,
  })
