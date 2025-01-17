import type {
  GetAllParametersResponse,
  SaveGemsPayload,
  SaveParametersPayload,
  SaveTalentsPayload,
} from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getParameters = () => {
  return AxiosService.get<GetAllParametersResponse>('/parameters')
}

export const setParameters = (payload: SaveParametersPayload) => {
  return AxiosService.put('/parameters', {
    data: payload,
  })
}

export const setGems = (payload: SaveGemsPayload) => {
  return AxiosService.put('/parameters/gems', {
    data: payload,
  })
}

export const setTalents = (payload: SaveTalentsPayload) => {
  return AxiosService.put('/parameters/talents', {
    data: payload,
  })
}
