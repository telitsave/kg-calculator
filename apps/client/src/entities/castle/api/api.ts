import {
  CalculateGoalCastlePayload,
  CalculateGoalCastleResponse,
  CalculatePossibleCastlePayload,
  CalculatePossibleCastleResponse,
} from 'shared/api'
import AxiosService from 'shared/services/axiosService'

export const calculatePossibleCastle = (payload: CalculatePossibleCastlePayload) => {
  return AxiosService.post<CalculatePossibleCastleResponse>('/calculator/castle/possibleCastle', {
    data: payload,
  })
}

export const calculateGoalCastle = (payload: CalculateGoalCastlePayload) => {
  return AxiosService.post<CalculateGoalCastleResponse>('/calculator/castle/goalCastle', {
    data: payload,
  })
}
