import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculatePossibleCastle = () => {
  return useMutation({
    mutationKey: ['calculatePossibleCastle'],
    mutationFn: api.castle.calculatePossibleCastle,
  })
}

export default useCalculatePossibleCastle
