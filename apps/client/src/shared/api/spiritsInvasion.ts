import type { GetSpiritsInvasionPayload, GetSpiritsInvasionResponse } from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const getSpiritsInvasionData = (payload: GetSpiritsInvasionPayload) => {
  return AxiosService.post<GetSpiritsInvasionResponse>('/spiritsInvasion', {
    data: payload,
  })
}
