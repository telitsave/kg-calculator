import type {
  CalculateHeroesResponse,
  GetHeroesParamsResponse,
  HeroesResponse,
  SaveHeroesPayload,
} from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculateHeroes = () => {
  return AxiosService.post<CalculateHeroesResponse>('/calculator/heroes')
}

export const getHeroesParams = () => {
  return AxiosService.get<GetHeroesParamsResponse>('/heroes')
}

export const setHeroesParams = (payload: SaveHeroesPayload) => {
  return AxiosService.put('/heroes', {
    data: payload,
  })
}

export const getAllHeroes = () => {
  return AxiosService.get<HeroesResponse>('/heroes/all')
}
