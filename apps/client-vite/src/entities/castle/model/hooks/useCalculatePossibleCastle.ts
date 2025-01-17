import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculatePossibleCastle = () => {
  return useMutation({
    mutationKey: ['calculatePossibleCastle'],
    mutationFn: api.castle.calculatePossibleCastle,
  })
}

export default useCalculatePossibleCastle
