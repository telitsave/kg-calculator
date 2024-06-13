import type { CalculateHeroesPayload, CalculateHeroesResponse, HeroesResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateHeroes = (payload: CalculateHeroesPayload) => {
  return AxiosService.post<CalculateHeroesResponse>('/calculator/heroes', {
    data: payload,
  })
}

export const getAllHeroes = () => {
  return AxiosService.get<HeroesResponse>('/heroes/all')
}
