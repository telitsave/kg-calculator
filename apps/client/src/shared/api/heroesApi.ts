import type { CalculateHeroesPayload, CalculateHeroesResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateHeroes = (payload: CalculateHeroesPayload) => {
  return AxiosService.post<CalculateHeroesResponse>('/calculator/heroes', {
    data: payload,
  })
}
