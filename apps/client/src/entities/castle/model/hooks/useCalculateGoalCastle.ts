import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateGoalCastle = () => {
  return useMutation({
    mutationKey: ['calculateGoalCastle'],
    mutationFn: api.castle.calculateGoalCastle,
  })
}

export default useCalculateGoalCastle
