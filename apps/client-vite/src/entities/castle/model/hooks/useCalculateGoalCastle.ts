import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateGoalCastle = () => {
  return useMutation({
    mutationKey: ['calculateGoalCastle'],
    mutationFn: api.castle.calculateGoalCastle,
  })
}

export default useCalculateGoalCastle
