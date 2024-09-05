import type { GetInventoryResponse, SaveInventoryPayload } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getInventory = () => {
  return AxiosService.get<GetInventoryResponse>('/inventory')
}

export const addItems = (payload: SaveInventoryPayload) => {
  return AxiosService.put('/inventory', {
    data: payload,
  })
}
