import type {
  CalculateGoalCastlePayload,
  CalculateGoalCastleResponse,
  CalculatePossibleCastleResponse,
} from 'kg-calculator-typings'
import AxiosService from '../services/axiosService'

export const calculatePossibleCastle = () => {
  return AxiosService.post<CalculatePossibleCastleResponse>('/calculator/castle/possibleCastle')
}

export const calculateGoalCastle = (payload: CalculateGoalCastlePayload) => {
  return AxiosService.post<CalculateGoalCastleResponse>('/calculator/castle/goalCastle', {
    data: payload,
  })
}
