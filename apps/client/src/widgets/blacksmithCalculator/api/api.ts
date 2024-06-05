import { CalculateBlacksmithPayload, CalculateBlacksmithResponse } from 'shared/api'
import AxiosService from 'shared/services/axiosService'

export const calculateBlacksmith = (payload: CalculateBlacksmithPayload) => {
  return AxiosService.post<CalculateBlacksmithResponse>('/calculator/blacksmith', {
    data: payload,
  })
}
