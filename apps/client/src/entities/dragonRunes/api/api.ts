import { CalculatePossibleDragonPayload, CalculatePossibleDragonResponse } from 'shared/api'
import AxiosService from 'shared/services/axiosService'

export const calculateDragonRunes = (payload: CalculatePossibleDragonPayload) =>
  AxiosService.post<CalculatePossibleDragonResponse>('/calculator/dragon/possibleDragon', {
    data: payload,
  })
